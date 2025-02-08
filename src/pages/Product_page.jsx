import React from 'react'
import '../stylesheet/product.css'
import Product_box from '../components/Product_box'
import { NavLink } from 'react-router-dom'
import { products } from '../../public/Data/productd'

const Product_page = () => {
  return (
    <div>
        <div className='w-full h-[50vh] relative flex'>
            <img className='w-full h-full object-cover' src='/public/Images/product_Image/wallpaper.png' />
            <div className='product_head_overlay text-white flex flex-col items-center gap-3 justify-center'>
                <h2 className='product_title text-5xl'>Natural Stones</h2>
                <ul className='flex gap-2'>
                  <li>
                    <NavLink to='/' className={() => 
                      `hover:underline `
                    }>
                      Home
                    </NavLink>
                  </li>
                  <li>&rsaquo;</li>
                  <li>
                    <NavLink to='/Products' className={() => 
                      `hover:underline `
                    }>
                      Products
                    </NavLink>
                  </li>
                </ul>
            </div>
        </div>
        <div className='mt-15'>
            <Product_box products={products} />
        </div>
    </div>
  )
}

export default Product_page