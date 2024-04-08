import { useEffect } from 'react';
import './Carousel.css';

const images = [
  { filename: 1, caption: 'Mão de criança segurando uma flor amarela' },
  { filename: 2, caption: 'Criança em campo de flores amarelas' },
  { filename: 3, caption: 'Criança com braços abertos' },
  { filename: 4, caption: 'Pai e filho na beira do mar' },
  { filename: 5, caption: 'Criança no parque de diversões' },
  { filename: 6, caption: 'Pés de criança' },
  { filename: 7, caption: 'Criança olhando séria para a câmera com bico e pulseira rastafari', isPortrait: true },
  { filename: 8, caption: 'Criança olhando para o lado e rindo com as mãos no rosto', isPortrait: true },
  { filename: 9, caption: 'Pai segurando recém-nascido perto de uma janela', isPortrait: true },
  { filename: 10, caption: 'Bebê pequeno deitado em uma cama com a bola do estúdio Pixar', isPortrait: true },
  { filename: 11, caption: 'Mãe alternativa segurando recém-nascido enquanto seca o cabelo', isPortrait: true },
].sort(() => Math.random() - 0.5);

const Carousel = () => {
  useEffect(() => {
    const carouselItems = document.querySelector('#carouselItems') as HTMLElement;

    if (!carouselItems) return;

    carouselItems.addEventListener('wheel', scrollTo);
  }, []);

  const scrollTo = (event) => {
    let side = (event.target as HTMLElement).id;

    if (!['left', 'right'].includes(side))
      side = event.deltaY > 0 ? 'right' : 'left';

    const carouselItems = document.querySelector('#carouselItems') as HTMLElement;

    carouselItems.scrollBy(side == 'right' ? 300 : -300, 0);
  }

  return (
    <div className='carousel-container' key='carousel-container'>
      <div id="carousel-items">
        {
          images.map((image) => 
            <div key={`div-img-${image.filename}`} className={`item ${image.isPortrait ? 'portrait' : ''}`}>
              <img 
                src={`/img/carousel/${image.filename}.jpg`} 
                alt={image.caption} 
                title={image.caption} 
                key={`img-${image.filename}`} 
              />
            </div>
          )
        }
      </div>
      <div id="controls">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" id='left' onClick={scrollTo}>
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" id='right' onClick={scrollTo}>
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
        </svg>
      </div>
    </div>
  );
};

export default Carousel;