import  { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import { deleteById, fetchProducts } from "../axios";




const ProductsTable = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
      (async () => {
        const data = await fetchProducts("/products")
        setDataList(data)
      })()
  }, []);

   function handleRemove(id) {
    if (confirm('Bạn có chắc  muốn xóa sản phẩm chứ?')) {
     deleteById('/products',id)
     const newProducts= dataList.filter((item)=>item.id !== id)
     setDataList(newProducts)
    }
  };
  return (
    <div>
      <h2 style={{marginTop:"100px"}}>Quản Lý Sản Phẩm</h2>
      <div>
       <NavLink to={"/admin/products/addProduct"}><button>AddProduct</button></NavLink>
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
          {dataList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}$</td>
              <td>{item.description}</td>
              <td>
                <div className="action-buttons">
                <button style={{ background: "red" }} onClick={() => handleRemove(item.id)}>Remove</button>
                <NavLink to={"/admin/products/update"}>
                <button style={{ background: "yellow", color: "black" }}>Update</button>
                </NavLink>
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