import React, { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storagedValue, setValue] = useState(() => {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : initialValue;
  });

  const setLocalStorage = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (error) {
      console.error(error);
    }
  };

  return [storagedValue, setLocalStorage];
};

export default useLocalStorage;
