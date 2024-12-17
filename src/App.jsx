import "./App.module.css";

import { Routes, Route } from "react-router-dom";
import ProductTable from "./pages/admin/ProductTable";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductTable />}></Route>
      </Routes>
    </>
  );
}

export default App;
