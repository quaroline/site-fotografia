import { useEffect } from 'react';
import './Carousel.css';

const interval: number = 5000;

const images = [
  { filename: 1, caption: 'Mão de criança segurando uma flor amarela' },
  { filename: 2, caption: 'Criança em campo de flores amarelas' },
  { filename: 3, caption: 'Criança com braços abertos' },
  { filename: 4, caption: 'Pai e filho na beira do mar' },
  { filename: 5, caption: 'Criança no parque de diversões' },
  { filename: 6, caption: 'Pés de criança' }
];

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
    <div className='slideshow-container' key="slideshow">
      {
        images.map((image) => (
        <div key={`carousel${image.filename}`}>
          <div className='carousel fade'>
            <img src={`/img/${image.filename}.jpg`} alt={image.caption} key={`img${image.filename}`}/>
          </div>
          <br />
          <div className='dots' key={`dots${image.filename}`}>
            <span className='dot' key={`dot${image.filename}`}></span>
          </div>
        </div>))
      }
    </div>
  );
};

export default Carousel;