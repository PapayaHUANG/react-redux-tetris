import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

export function useTimer(flagVal, benchmark, func) {
  const requestRef = useRef();
  const lastUpdateTimeRef = useRef(0);
  const progressTimeRef = useRef(0);
  const dispatch = useDispatch();

  const update = (time) => {
    requestRef.current = requestAnimationFrame(update);
    if (!flagVal) return;
    if (!lastUpdateTimeRef.current) {
      lastUpdateTimeRef.current = time;
    }
    const deltaTime = time - lastUpdateTimeRef.current;
    progressTimeRef.current += deltaTime;
    if (progressTimeRef.current > benchmark) {
      dispatch(func());
      progressTimeRef.current = 0;
    }
    lastUpdateTimeRef.current = time;
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(requestRef.current);
  }, [flagVal]);
}
