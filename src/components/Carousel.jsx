import React, { useState } from 'react'
import "../stylesheet/carousel.css";

const Carousel = ({images}) => {

  const optimizeImageUrl = (url) => {
    return url.replace("/upload/", "/upload/f_auto,q_auto:low,w_800,h_600,c_fit,fl_progressive/");
  };
  
  const optimizedImages = images.map(img => ({
    ...img,
    image: optimizeImageUrl(img.image),
  }));
  

  const [current, setcurrent] = useState(0);

  const slide_left = () => {
    setcurrent(current === 0 ? images.length-1 : current-1);
  }
  const slide_right = () => {
    setcurrent(current === images.length-1 ? 0 : current+1);
  }

  // const carousel_contain = document.querySelector("#carousels");
  // const carousel_control = document.querySelector("#carousel_button");

  // carousel_contain.addEventListener('mousemove',showControls);
  // carousel_contain.addEventListener('mouseleave',hideControls);

  // function showControls() {
  //   carousel_control.style.opacity = 1;
  //   clearTimeout(timeout);

  //   timeout = setTimeout(hideControls,3000);
  // }

  // function hideControls() {
  //   carousel_control.style.opacity = 0;
  // }

  return (
    <div className='carousel'>
      <div className='carousel_wrapper'>
        {optimizedImages.map((image, index)=>{
          return (
          <div key={index} className={index==current ? 'carousel_card carousel_card-active' : 'carousel_card'}>
            <img className='card_image' src={image.image} />
            <div className='card_overlay'>
              <div className='text_box'>
                <h1 className='card_title'><span style={{color:'orange' ,fontSize:'1.2em'}}>{image.title.charAt(0)}</span>{image.title.slice(1)}</h1>
                <p className='card_text'>{image.text}</p>
              </div>
            </div>
          </div>
          );
        })}
        <div id='carousel_button'>
          <div className='carousel_arrow_left' onClick={slide_left}>&lsaquo;</div>
          <div className='carousel_arrow_right' onClick={slide_right}>&rsaquo;</div>
        </div>
        <div className='carousel_pagination'>
          {images.map((_,index)=>{
            return (
              <div key={index}
                className={index==current ? "pagination_dot pagination_dot-active" : "pagination_dot"}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel