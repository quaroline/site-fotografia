import './Carousel.css';
import { CarouselPhotos, GetImageRelativePath } from '../../utils/string';

const MobileCarousel = () => {
  const images = CarouselPhotos;

  return (
    <div id='mobile-carousel'>
      {
        images.map((image, i) => 
          <div 
            key={`div-img-${image.filename}`} 
            className='image'
            style={{ 
              backgroundImage: `url(${GetImageRelativePath()}carousel/${image.filename}.jpg)`,
              zIndex: images.length - i,
              animationDelay: `-${i * 5}s`
            }}
            title={image.caption} 
            >
          </div>
        )
      }
    </div>
  );
};

export default MobileCarousel;