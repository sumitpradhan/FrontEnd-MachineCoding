import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import ProductCard from './ProductCard'

const Body = () => {

 const [products,setProducts] =useState([])
 const [page,setPage] =useState(1); 
 const [totalPage,setTotalPage] =useState(1)
 //Fetching Data
 

useEffect(()=>{
    const fetchData = async()=>{
        const response= await fetch("https://dummyjson.com/products?limit=100")
        const data = await response.json();
       
        setProducts(data.products)
        //setTotalPage(data?.products?.length /12)
       
    }  

    fetchData();
},[])

console.log(products.length /12);
  return (
    <div className=''>
        <div className='productCards'>
            {products?.slice(page*12 -12 , page*12)?.map((product)=>(
                <ProductCard key={product.id} productData={product}/>
            ))}
        </div>
        <Pagination curPage={page} setPage={setPage} totalPage={products.length /12} />
        
    </div>
  )
}

export default Body