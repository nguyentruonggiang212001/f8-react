import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../schemas/productSchemas";
import instance from "../services";
import { updateProduct, addProduct } from "./../action/productAction";

const ProductForm = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  useEffect(() => {
    if (id) {
      (async () => {
        const { data } = await instance.get(`/products/${id}`);
        reset(data);
      })();
    }
  }, [id, reset]);

  const onSubmit = async (product) => {
    console.log(product);
    let confirmMessage = id
      ? "Bạn có chắc chắn muốn cập nhật sản phẩm này?"
      : "Bạn có chắc chắn muốn thêm sản phẩm mới?";
    try {
      if (confirm(confirmMessage)) {
        if (id) {
          const update = await instance.patch(`/products/${id}`, product);
          if (update.status === 200) {
            dispatch({ type: "UPDATE_PRODUCTS", payload: update.data });
            nav("/");
          }
        } else {
          const response = await instance.post("/products", product);
          if (response.status === 201) {
            dispatch({ type: "ADD_PRODUCTS", payload: response.data });
            nav("/");
          }
        }
      }
    } catch (error) {
      console.error("Error in handleAddProduct:", error);
      alert("Có lỗi xảy ra! Vui lòng thử lại sau.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>{id ? "Update" : "Add"}Form </h1>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <p className="text-danger">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            {...register("price", { required: true, valueAsNumber: true })}
          />
          {errors.price && (
            <p className="text-danger">{errors.price.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            {...register("description")}
          />
        </div>

        <div className="mb-3">
          <button className="btn btn-primary w-100">
            {id ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ProductForm;
