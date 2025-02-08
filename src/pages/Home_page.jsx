import React from 'react'
import Carousel from '../components/Carousel'
import {images} from '../../public/Data/CarouselD'
import { products } from '../../public/Data/productd'
import { NavLink } from 'react-router-dom'

const Home_page = () => {
  return (
    <>
      <div>
        <Carousel images={images}/>
      </div>
      <ul className='px-17 py-20 rounded-2xl'>
        <li>
          <h1 className='text-6xl font-bold'>About us</h1>
          <div className='w-[255px] h-[4px] bg-amber-400 my-4'></div>
          <p className='text-lg'>Vikaash Exports is a leading exporter of premium-quality granite, offering a wide range of natural stone solutions to customers worldwide. With years of experience in the industry, we have established ourselves as a trusted name, known for our superior products, impeccable craftsmanship, and unwavering commitment to customer satisfaction.</p>
        </li>
        <li className='mt-12'>
          <h1 className='text-6xl mr-6 font-bold text-end'>Who we are</h1>
          <div className='w-[325px] h-[4px] bg-amber-400 my-3.5 ml-auto mr-7'></div>
          <p className='text-lg'>At Vikaash Exorts, we are passionate about natural stone. Our journey began with a vision to bring the finest granite from the heart of nature to homes, commercial spaces, and architectural projects around the world. Over the years, we have built a strong reputation for excellence, sourcing the highest quality granite from the best quarries and processing it with state-of-the-art technology.</p>
        </li>
      </ul>
      <div className='w-screen mt-10 h-[80vh] bg-gray-50'>
        <div className='bg-amber-200 flex items-center rounded-2xl justify-between h-[18%] py-14 px-20'>
          <h1 className='text-6xl font-bold'>Products</h1>
          <p className='text-lg text-end pr-8'>We offer an extensive range of granite products in various colors, patterns<br/> and finishes to suit diverse design and construction needs. </p>
        </div>
        <div className='flex w-full h-[82%] '>
          <div className='w-[38%] flex flex-col gap-4 items-center justify-center'>
            <h2 className='text-5xl font-bold'>Pick your <br/> stone</h2>
            <NavLink to='/Products'>
              <button className='border-2 px-5 py-2 text-sm font-semibold rounded-full hover:underline active:scale-95'>View all products
                <img className='inline' width={35} src='../../public/Icons/dot.png'/>
              </button>
            </NavLink>
          </div>
          <div className='w-[62%] py-10'>
            <div className=' flex items-center justify-start overflow-x-auto space-x-5 no-scrollbar p-6'>
              {products.map((product,index) => {
                return(
                  <div key={index} className='min-w-[250px] max-w-sm bg-white rounded-sm shadow-xl p-4'>
                    <img className='w-full h-[260px] shadow-md object-cover rounded-md' src={product.image}/>
                    <h3 className='text-lg text-center font-semibold mt-3'>{product.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home_page