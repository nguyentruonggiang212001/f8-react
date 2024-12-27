import "./App.module.css";

import { Routes, Route } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import Login from "./Login";
import ThrottleComponent from "./ThrottleComponent";

function App() {
  return (
    <>
      <SearchComponent />
      <Login />
      <h2>Throttling</h2>
      <ThrottleComponent />
    </>
  );
}

export default App;
