import { useEffect } from 'react';
import './Carousel.css';
import { isMobile } from 'react-device-detect';

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
  { filename: 12, caption: 'Mulher em parque de diversões', isPortrait: true },
  { filename: 13, caption: 'Cachorro marrom mesclado olhando diretamente para a câmera', isPortrait: true },
  { filename: 14, caption: 'Criança sentada em cadeira de balanço', isPortrait: true },
  { filename: 15, caption: 'Retrato de mulher em um dia claro', isPortrait: true },
  { filename: 16, caption: 'Criança sentada em cadeira de balanço olhando para trás', isPortrait: true },
  { filename: 17, caption: 'Cachorro de olhos brancos em um parque', isPortrait: true },
  { filename: 18, caption: 'Mulher em um fundo de flores rosas e ruína abandonada', isPortrait: true },
  { filename: 19, caption: 'Mulher se curvando para conversar no mesmo nível que criança', isPortrait: true },
  { filename: 20, caption: 'Mulher em um estacionamento', isPortrait: true },
  { filename: 21, caption: 'Mulher sentada em uma antiga carteira escolar', isPortrait: true },
];

const Carousel = () => {
  useEffect(() => {
    const carouselItems = document.querySelector('#carousel-items') as HTMLElement;

    if (!carouselItems) return;

    carouselItems.addEventListener('wheel', scrollTo);

    const interval = setInterval(() => {
      scrollTo('right');
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollTo = (event) => {
    let side = typeof event !== 'string' ? (event.target as HTMLElement).id : event;

    if (!['left', 'right'].includes(side))
      side = event.deltaY > 0 ? 'right' : 'left';

    const carouselItems = document.querySelector('#carousel-items') as HTMLElement;
    const resolutionX = window.screen.availWidth;

    carouselItems.scrollBy((side == 'right' ? 1 : -1) * resolutionX, 0);
  }

  return (
    <div className='carousel-container' key='carousel-container'>
      <div id="carousel-items">
        {
          images.map((image) => 
            <div key={`div-img-${image.filename}`} className={`item ${!isMobile && image.isPortrait ? 'portrait' : ''}`}>
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
      { !isMobile && 
      <div id="controls">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" id='left' onClick={scrollTo}>
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" id='right' onClick={scrollTo}>
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
        </svg>
      </div>
      }
    </div>
  );
};

export default Carousel;