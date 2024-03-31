import { useEffect } from 'react';
import './Carousel.css';

const interval: number = 5000;

const Carousel = () => {
    useEffect(() => {
      const slideshowContainer = document.querySelector('.slideshow-container');
      const slides = slideshowContainer?.querySelectorAll('.carousel');

      if (!slides) return;

      let slideIndex = 0;
      let timeoutId: number;
  
      const showSlides = () => {
        for (let i = 0; i < slides.length; i++)
          slides[i].setAttribute('style', 'display: none');
  
        slideIndex++;
  
        if (slideIndex > slides.length) 
          slideIndex = 1;
  
        const dots = document.getElementsByClassName('dot');
  
        for (let i = 0; i < dots.length; i++)
          dots[i].className = dots[i].className.replace(' active', '');
  
        slides[slideIndex - 1].setAttribute('style', 'display: block');
        dots[slideIndex - 1].className += ' active';
  
        timeoutId = setTimeout(showSlides, interval);
      };
  
      if (!slides) return;
  
      showSlides();
  
      return () => clearTimeout(timeoutId);
    }, []);

  return (
    <>
      <div className='slideshow-container'>
        <div className='carousel fade'>
          <img src='https://www.w3schools.com/howto/img_mountains_wide.jpg' />
          <div className='text'>Caption Text</div>
        </div>
        <br />
        <div className='dots'>
          <span className='dot'></span>
        </div>
      </div>
    </>
  );
};

export default Carousel;