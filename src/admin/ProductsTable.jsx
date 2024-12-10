import { Link } from "react-router-dom";
import "../index.css";
import useProducts from "../hook/useProducts";

export const ProductsTable = () => {
  const { products, removeProduct } = useProducts();

  return (
    <div>
      <h2 style={{ marginTop: "100px" }}>Quản Lý Sản Phẩm</h2>
      <div>
        <Link to={`/admin/products/add`}>
          <button>Add new product</button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}$</td>
                <td>{item.description}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      style={{ background: "red" }}
                      onClick={() => removeProduct(item.id)}
                    >
                      Remove
                    </button>
                    <Link to={`/admin/products/update/${item.id}`}>
                      <button style={{ background: "yellow", color: "black" }}>
                        Update
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
