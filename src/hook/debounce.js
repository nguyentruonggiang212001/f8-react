import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handlder = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handlder);
    };
  }, delay);

  return debouncedValue;

  useEffect(() => {
    const handlder = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
  }, [value, delay]);
}
