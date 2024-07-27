import { useEffect } from 'react';
import './Carousel.css';
import { isMobile } from 'react-device-detect';
import { CarouselPhotos, GetImageRelativePath } from '../utils/string';

const images = CarouselPhotos;

const Carousel = () => {
  useEffect(() => {
    const carouselItems = document.querySelector('#carousel-items') as HTMLElement;

    if (!carouselItems) return;

    carouselItems.addEventListener('wheel', scrollTo);

    const interval = setInterval(() => {
      scrollTo('right');
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const scrollTo = (event: WheelEvent | string) => {
    let side = typeof event !== 'string' ? (event.target as HTMLElement).id : event;

    if (!['left', 'right'].includes(side))
      side = (event as WheelEvent).deltaY > 0 ? 'right' : 'left';

    const carouselItems = document.querySelector('#carousel-items') as HTMLElement;
    const resolutionX = window.screen.availWidth;

    carouselItems.scrollBy((side == 'right' ? 1 : -1) * resolutionX, 0);
  }

  return (
    <div id='carousel-container' key='carousel-container'>
      <div id="carousel-items">
        {
          images.map((image) => 
            <div key={`div-img-${image.filename}`} className={`item ${!isMobile && image.isPortrait ? 'portrait' : ''}`}>
              <img 
                src={`${GetImageRelativePath()}carousel/${image.filename}.jpg`} 
                alt={image.caption} 
                title={image.caption} 
                key={`img-${image.filename}`} 
              />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Carousel;