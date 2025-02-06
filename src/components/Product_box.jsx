import React from 'react'
import { products } from '../../public/Data/productd'

const Product_box = () => {
  return (
    <div className='w-100vw'>
        <div className='flex w-[85%] m-auto gap-7 flex-wrap'>
        {products.map((image,index) => {
        return(
            <div key={index} className='w-75 h-93 hover:bg-gray-100 hover:text-amber-300 duration-700'>
                <div className='w-[100%] h-75'>
                    <img src={image.image} />
                </div>
                <div className='flex w-[100%] h-18 border-2 border-gray-100 items-center justify-center'>
                    <h2 className='text-xl font-medium'>{image.name}</h2>
                </div>
            </div>
        );
        })}
        </div>
    </div>
  )
}

export default Product_box