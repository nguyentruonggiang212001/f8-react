import  { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { create } from "../../axios";
import { updateById } from "../../axios/index";
import "../index.css";
const AddProduct = () => {
  const { id } = useParams();
	console.log("id: ", id);
  const nav = useNavigate();
  const [product,setProduct] = useState({
    title:"",
    price:0
  })
  const handleChange = (e) => {
      const { name, value } = e.target;
		  setProduct((prev) => ({ ...prev, [name]: value }));
  };
	const handleSubmit = (e) => {
		e.preventDefault();
		(async () => {
			// try {
			// 	const res = await fetch("http://localhost:3000/products", {
			// 		method: "POST",
			// 		headers: {
			// 			"Content-Type": "application/json",
			// 		},
			// 		body: JSON.stringify(product),
			// 	});

			// 	const data = await res.json();
			// 	console.log(data);

			// 	// Thong bao them thanh cong.
			// 	confirm("Them thanh cong, ban muon quay lai danh sach san pham khong?") && nav("/admin/products");
			// 	// Cap nhat lai danh sach san pham neu nguoi dung quay lai danh sach san pham
			// 	// Neu nguoi dung o lai ProductForm, sau khi submit thi phai reset form.
			// } catch (error) {
			// 	console.log(error);
			// }

      if (id) {
				// logic update
				const data = await updateById("/products", id, product);
			} else {
				// logic add
				const data = await create("/products", product);
			}
		})();
	};



  return (
    <div className="form-update">
      <h1 className="header-update">AddProduct</h1>
      <form>
        <label htmlFor="title" >Title</label>
        <input 
          type="text"
          name="title"
					id="price"
          placeholder="Title"
          value={product.title}
					onChange={handleChange}
        />
        <label htmlFor="price">Price</label>
        <input 
          type="number"
          name="price"
					id="price"
					placeholder="Price"
          value={product.price}
					onChange={handleChange}
        />
        <label>Description</label>
        <textarea  name= "description" value={product.description} onChange={handleChange}
          rows="4" 
        ></textarea>
        <button className='btn-update' onClick={handleSubmit}>Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct