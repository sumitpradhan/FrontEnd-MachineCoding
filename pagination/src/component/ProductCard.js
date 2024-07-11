import React from 'react'

const ProductCard = ({productData}) => {
  return (
    <div className='product'>
        <img src={productData?.images[0]}/>
        <span>{productData?.title}</span>
    </div>
  )
}

export default ProductCard