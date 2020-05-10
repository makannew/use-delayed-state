# use-delayed-state

> React hook for setting State with delay

[![NPM](https://img.shields.io/npm/v/use-delayed-state.svg)](https://www.npmjs.com/package/use-delayed-state) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is an enhanced `useState` hook which accepts delay for `setState` as an extra argument.

## Use cases

It can be used for [debouncing](https://css-tricks.com/debouncing-throttling-explained-examples/#article-header-id-0) which simply delays all consecuative attempts for setting a state and if the last call persist for enough time the actual `setState` runs.

It is also a handy tool for applying timing logics inside react components e.g. Showing a notification for few seconds.




## Install

```console
npm install --save use-delayed-state
```

## Usage

```jsx
import React from 'react'
import useDelayedState from 'use-delayed-state'

export default function myComponent() {
  const [state, setState] = useDelayedState(
    'Hello, I will be change in 5 seconds'
  )

  setState('I am new State', 5000)

  return <div>{state}</div>
}
```
In above example `State` will be updated after 5 second.

[Debouncing example](https://makannew.github.io/use-delayed-state/) is more advance implementation of this hook which the source code available [here](https://github.com/makannew/use-delayed-state/blob/master/example/src/App.js).

## Usage details



```jsx
const [state, setState, cancelSetState] = useDelayedState(initialState);

// using like regular useState hook
// it will not cancel any previous delayed setStates
setState(newState);

// using with delay
// duration unit is millisecond
setState(newState, duration);

// canceling any ongoing delayed state
cancelSetState();

// setState along with setState with delay
// below codes setState to newState and it will setState to futureState after 2s
// be aware order is important because setState without delay cancels all ongoing delayed setStates
setState(()=>newState);
setState(()=>futureState, 2000);
```




## License

MIT © [makannew](https://github.com/makannew)
