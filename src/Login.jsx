import React, { useState } from "react";
import useLocalStorage from "./hook/useLocalStorage";

const Login = () => {
  const [value, setLocalStorage] = useLocalStorage("username", "");

  return (
    <div>
      <input
        type="text"
        defaultValue={value}
        placeholder="username"
        onChange={(e) => setLocalStorage(e.target.value)}
      />
      <h2>Username:{value}</h2>
    </div>
  );
};

export default Login;
