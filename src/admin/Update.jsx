import "../index.css";

const Update = () => {
  return (
    <div className="form-update">
      <h1 className="header-update">Edit Product</h1>
      <form>
        <label>Title</label>
        <input 
          type="text"  
        />
        <label>Price</label>
        <input 
          type="number" 
        />
        <label>Description</label>
        <textarea 
          rows="4" 
        ></textarea>
        <button className='btn-update'>Edit Product</button>
      </form>
    </div>
  );
};

export default Update;