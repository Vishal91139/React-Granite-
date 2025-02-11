import React, { useEffect, useRef, useState } from 'react'
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
  const [autoPlay, setautoPlay] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const [hovered, setHovered] = useState(false);
  const carouselRef = useRef(null);

  const timeOutCarousel = useRef(null);
  const timeOutControls = useRef(null);

  useEffect(()=>{
    const observer = new IntersectionObserver(([entry]) => {
      setautoPlay(entry.isIntersecting);
    },{threshold:0.5});
    
    if(carouselRef.current){
      observer.observe(carouselRef.current);
    }
    return()=>{
      if(carouselRef.current){
        observer.unobserve(carouselRef.current);
      }
    };
  },[ carouselRef ]);

  const slide_left = async () => {
    setcurrent(current === 0 ? images.length-1 : current - 1);
  }
  const slide_right = async () => {
    setcurrent(current === images.length-1 ? 0 : current + 1);
  }

  const showControls = () => {
    setOpacity(1);
    clearTimeout(timeOutControls.current);
    if(!hovered){
      timeOutControls.current = setTimeout(()=>{
      setOpacity(0);
      },3000)
    }
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeOutCarousel.current);
      clearTimeout(timeOutControls.current);
    };
  }, []);

  useEffect(() => {
    let mounted = true;

    if (autoPlay && mounted) {
      timeOutCarousel.current = setTimeout(() => {
        slide_right();
      }, 3500);
    }

    return () => {
      mounted = false;
      clearTimeout(timeOutCarousel.current);
    };
  }, [autoPlay, current]);

  return (
    <div className='carousel' ref={carouselRef} onMouseMove={()=>{showControls()}} >
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
        <div id='carousel_button'
         style={{opacity:opacity}} onMouseEnter={()=>{setHovered(true);clearTimeout(timeOutControls);showControls()}} onMouseLeave={()=>{setHovered(false)}}>
          <div className='carousel_arrow_left' onClick={() => {clearTimeout(timeOutCarousel.current);slide_left();setTimeout(()=>setautoPlay(true),0)}}>&lsaquo;</div>
          <div className='carousel_arrow_right' onClick={() => {clearTimeout(timeOutCarousel.current);slide_right();setTimeout(()=>setautoPlay(true),0)}}>&rsaquo;</div>
        </div>
        <div className='carousel_pagination'>
          {images.map((_,index)=>{
            return (
              <div key={index}
                className={index==current ? "pagination_dot pagination_dot-active" : "pagination_dot"}
                onClick={()=>setcurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel