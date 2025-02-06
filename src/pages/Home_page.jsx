import React from 'react'
import Carousel from '../components/Carousel'
import {images} from '../../public/Data/CarouselD'

const Home_page = () => {
  return (
    <div>
        <Carousel images={images}/>
    </div>
  )
}

export default Home_page