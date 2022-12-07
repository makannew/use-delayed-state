import { useEffect, useState, useRef } from 'react'

export default function useDelayedState(initialState) {
  const [state, setState] = useState(initialState)
  const timeoutRef = useRef()

  const cancelSetState = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  const setStateAfter = (newState, delay) => {
    // The implication here is that setStateAfter("hi", 3000) followed shortly
    // by setStateAfter("bye") should cancel the original "hi".
    cancelSetState()

    if (delay === 0 || delay === undefined) {
      setState(newState)
    } else {
      timeoutRef.current = setTimeout(() => {
        setState(newState)
        timeoutRef.current = null
      }, delay)
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return [state, setStateAfter, cancelSetState]
}
