import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import "../stylesheet/carousel.css";
import { scale } from '@cloudinary/url-gen/actions/resize';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

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
  
  const timeOutCarousel = useRef(null);
  const timeOutControls = useRef(null);
  
  const carouselRef = useRef(null);
  const titleRef = useRef([]);
  const textRef = useRef([]);
  const imageRef = useRef([]);
  const carouselTimeline = useRef(null);

  // Functions
  
  const slide_left = () => {
    setcurrent(current === 0 ? images.length-1 : current - 1);
  }
  const slide_right = () => {
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
  
  // useEffects
  
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

  useEffect(() => {
    return () => {
      clearTimeout(timeOutCarousel.current);
      clearTimeout(timeOutControls.current);
    };
  }, []);

  useEffect(() => {
    let mounted = true;

    if (autoPlay && mounted && carouselTimeline.current) {
      timeOutCarousel.current = setTimeout(() => {
        slide_right();
      }, 3500);
    }

    return () => {
      mounted = false;
      clearTimeout(timeOutCarousel.current);
    };
  }, [autoPlay, current]);



  //GSAP animation with useGSAP
  
  useGSAP(() => {
    carouselTimeline.current = gsap.timeline({
      onComplete: () => {
        setautoPlay(true);
      }
    });

    // Animate carousel on load
    carouselTimeline.current
    .set(carouselRef.current, {
      opacity: 0,
      scale:0
    })

    .to(carouselRef.current, {
      opacity: 1,
      scale:1,
      duration: 1.2,
      ease: "power3.out"
    });

    setautoPlay(false); // Intially set autoplay to false
  },[])

  useGSAP(() => {
    // Animate current slide title and text after carousel load
    carouselTimeline.current.then(() => {
      gsap.timeline()
    .to(titleRef.current[current], {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out"
    })

    .to(textRef.current[current], {
      y: 0,
      opacity: 0.9,
      duration: 1.2,
      ease: "power3.out"
    },"-=1");
  });
  },[current]); 

  return (
    <div className='carousel' ref={carouselRef} onMouseMove={()=>{showControls()}} >
      <div className='carousel_wrapper'>
        {optimizedImages.map((image, index)=>{
          return (
          <div key={index} className={index==current ? 'carousel_card carousel_card-active' : 'carousel_card'}>
            <img 
              className='card_image' 
              src={image.image} 
              ref={el => imageRef.current[index] = el}
            />
            <div className='card_overlay'>
              <div className='text_box'>
                <h1 
                  className='card_title'
                  ref={el => titleRef.current[index] = el}
                  style={{ opacity: 0, transform: 'translateY(100px)' }}
                >
                  <span style={{color:'orange' ,fontSize:'1.2em'}}>{image.title.charAt(0)}</span>{image.title.slice(1)}
                </h1>
                <p 
                  className='card_text'
                  ref={el => textRef.current[index] = el}
                  style={{ opacity: 0, transform: 'translateY(100px)' }}
                >
                  {image.text}
                </p>
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