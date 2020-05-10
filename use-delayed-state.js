import { useEffect, useState, useRef } from "react";

export default function useStateAfter(initialState) {
  const [state, setState] = useState(initialState);
  const timeoutRef = useRef();

  const setStateAfter = (newState, delay) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setState(newState);
      timeoutRef.current = null;
    }, delay);
  };

  const setStateInstantly = (newState) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setState(newState);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return [state, setStateInstantly, setStateAfter];
}
