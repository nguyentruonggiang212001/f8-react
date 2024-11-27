import React, { useEffect, useState } from 'react'
import {data, useParams} from 'react-router-dom'


const ProductDetailPage = () => {
    const {id} = useParams();
    useEffect(()=>{
      //  fetch(`https://dummyjson.com/products/${id}`)
      //  .then((res)=>res.json())
      //  .then((data)=>{
      //   console.log("Chi tiest san pham ",data);
      //   Setdata(data)
      //  })
       

      //Cach 1
      (async ()=>{
          try{
          const res = await fetch(`https://dummyjson.com/products/${id}`)
          const data = await res.json();
          Setdata(data)
          console.log(data);
          } catch{
           console.log("Co loi",error);
          }
      })();
      

        // fetchAPI();
    },[])

    const [datas,Setdata] = useState([])
  return (
    <div className='Shop'>
        <img src={datas.thumbnail} alt={datas.title} /> 
         <div >
          <p>Tên Sản Phẩm:{datas.title}</p>
          <span>Giá:{datas.price}$</span>
          <p>Mô tả sản phẩm:{datas.description}</p>
         </div>
    </div>

  );
  
  
}

export default ProductDetailPage