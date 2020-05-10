# React hook for setting State with delay

This is an enhanced `useState` hook which accepts delay duration for `setState` as an extra parameter.
It is usefull feature for [debouncing](https://css-tricks.com/debouncing-throttling-explained-examples/#article-header-id-0) which simply delays all consecuative attempts for setting a state to make sure only the last one which persists for certain amount of time is valid as new state.
It is also a handy tool for applying timing logics inside react components e.g. Showing a notification for few seconds.

# How to use


```console
npm i use-delayed-state
```


```jsx
import {useDelayedState} from "use-delayed-state";

const [state, setState, setStateAfter] = useDelayedState(initialState);

setStateAfter(newState, 1000)
```
In above example `setState` set state as a regular `useState` hook. The only difference is in `setStateAfter` function which will set `newState` after 1000ms.





