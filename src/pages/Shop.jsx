import React, { useEffect, useState } from "react";

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [limit, setLimit] = useState(10);
	const [skip, setSkip] = useState(0);
	const [page, setPage] = useState(1);
    const initUrl = `https://dummyjson.com/products`;
    const [url, setUrl] = useState(initUrl);
    const [searchValue, setSearchValue] = useState("");
    if (searchValue !== "") {
    }
	useEffect(() => {
		fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
			.then((res) => res.json())
			.then(({ products }) => {
				console.log(limit,skip);
				console.log(products);
				setProducts(products);
			});
	}, [limit, skip]);

	const handleSelectLimit = (e) => {
		const selectedLimit = e.target.value;
		console.log(selectedLimit);
		if (selectedLimit === "all") {
			setLimit(0)
			setLimit(0)
			console.log("get All");
		} else {
			setLimit(selectedLimit);
		}
	};
    const handlePrev = () => {
    if (page > 1) {
    setPage(page - 1);
    setSkip(skip - limit);
     }
    };

    const handleNext = () => {
    setPage(page + 1);
    setSkip(skip + limit);
    };

	const handleSearch = (e) => {
		setSearchValue(e.target.value);
		setUrl(`https://dummyjson.com/products/search?q=${searchValue}`);
	};

	return (
		<div >
			<select onChange={(e) => handleSelectLimit(e)}>
				<option value={10}>Hiển thị 10 sản phẩm</option>
				<option value={20}>Hiển thị 20 sản phẩm</option>
				<option value={30}>Hiển thị 30 sản phẩm</option>
				<option value="all">Hiển thị tất cả sản phẩm</option>
			</select>

			<input type="text" onChange={(e) => handleSearch(e)} />
           
        <div className="productlist ">
			{products.map((item) => (
				<div className="prouduct" key={item.id}>
					<img src={item.thumbnail} alt={item.title} />
					<span>{item.id}</span>
					<h3>{item.title}</h3>
					<p>Giá: {item.price}</p>
					<a href="" className="btn btn-danger">
						Xem chi tiết
					</a>
				</div>
			))}
			
		</div>
		  <button className="btn btn-primary" onClick={handlePrev}>
				Prev
			</button>
			<button className="btn btn-primary" onClick={handleNext}>
				Next
			</button>
         </div>
	);
};

export default Shop;