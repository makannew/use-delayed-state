declare function useDelayedState<State>(
  initialState: State
): [
  State,
  (newState: State | ((current: State) => State), delay?: number) => void,
  () => void
]

export default useDelayedState
