# use-delayed-state

> React hook for setting State with delay

[![NPM](https://img.shields.io/npm/v/use-delayed-state.svg)](https://www.npmjs.com/package/use-delayed-state) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is an enhanced `useState` hook which accepts delay for `setState` as an extra argument. In most basic form it works same as React `useState` hook.

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

[Debouncing example](https://makannew.github.io/use-delayed-state/) is more advance implementation of this hook which the source code is available [here](https://github.com/makannew/use-delayed-state/blob/master/example/src/App.js).


## Usage details



```jsx
const [state, setState, cancelSetState] = useDelayedState(initialState);

// works like regular useState hook
// it will not cancel any ongoing delayed setStates
setState(newState); // or setState(newState, 0)

// setState with delay
// duration unit is millisecond
// it will cancel any ongoing delayed setStates
setState(newState, duration);

// canceling any ongoing delayed state
cancelSetState();

// setState along with setState with delay in one render
// below codes set State to newState and it will set State to futureState after 2s
setState(newState);
setState(futureState, 2000);
```




## License

MIT © [makannew](https://github.com/makannew)
