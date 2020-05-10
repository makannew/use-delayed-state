import React, { useState, useEffect } from 'react'

import useDelayedState from 'use-delayed-state'

const App = () => {
  const [state, setState, cancelSetState] = useDelayedState('')
  const [delay, setDelay] = useState(900)
  const [updating, setUpdating, cancelSetUpdating] = useDelayedState(
    () => false
  )
  function handleChange(e) {
    setState(e.target.value, delay)
  }

  useEffect(() => {
    setUpdating(() => true)
    setUpdating(() => false, 1000)
  }, [state])

  return (
    <div>
      <p className='description'>
        In this example while user is typing, state is updated only after
        passing delay time.
      </p>
      <div className='container'>
        <div className='form-container'>
          <form>
            <h4>Real-time value</h4>

            <textarea
              type='text'
              placeholder='Type something'
              onChange={handleChange}
            />
            <label htmlFor='delay'>{`Debouncing delay ${delay}ms`}</label>
            <input
              type='range'
              id='delay'
              name='delay'
              value={delay}
              min={0}
              max={2000}
              step={20}
              onChange={(e) => {
                setDelay(e.target.value)
              }}
            />
          </form>
        </div>
        <div className='form-container'>
          <form>
            <h4>Debounced State</h4>
            <p className={updating ? 'updating' : ''}>{state}</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
