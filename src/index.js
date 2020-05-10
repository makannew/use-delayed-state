import { useEffect, useState, useRef } from 'react'

export default function useDelayedState(initialState) {
  const [state, setState] = useState(initialState)
  const timeoutRef = useRef()

  const setStateAfter = (newState, delay) => {
    if (delay === 0 || delay === undefined) {
      setState(newState)
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        setState(newState)
        timeoutRef.current = null
      }, delay)
    }
  }

  const cancelSetState = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return [state, setStateAfter, cancelSetState]
}
