import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "./action/productAction";
import "./App.module.css";
import instance from "./services/index";
import { Link } from "react-router-dom";

function App() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/products");
      dispatch(setProduct(data));
    })();
  }, [dispatch]);

  const handleRemove = async (id) => {
    if (confirm("Are You Delete")) {
      try {
        await instance.delete(`/products/${id}`);
        dispatch({ type: "REMOVE_PRODUCT", payload: id });
      } catch (error) {
        console.error("Error removing product:", error.message);
      }
    }
  };
  return (
    <>
      {/* <button className="btn btn-primary" onClick={handleIncrement}>
        Increment
      </button> */}

      {/* <button className="btn btn-primary" onClick={handleDecrement}>
        Decrement
      </button> */}
      <h2 style={{ marginTop: "100px" }}>Quản Lý Sản Phẩm</h2>
      <div>
        <Link to={`/products/add`}>
          <button>Add new product</button>
        </Link>
      </div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                  <Link
                    className="btn btn-warning"
                    to={`/products/update/${item.id}`}
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
