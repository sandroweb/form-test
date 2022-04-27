import { useCallback, useRef } from "react";

const useDebouncedCallback = (callback: Function, time: number = 500) => {
  const timeout = useRef<NodeJS.Timeout>();
  
  const clear = useCallback(() => {
    if (!!timeout.current) {
      clearTimeout(timeout.current);
    }
  }, [timeout]);

  const onEnded = useCallback(() => {
    clear();
    callback();
  }, [clear, callback])

  const start = useCallback(() => {
    clear();
    timeout.current = setTimeout(onEnded, time);
  }, [clear, timeout, onEnded, time]);

  return start();
};

export default useDebouncedCallback;