import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handlder = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearInterval(handlder);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
