import { useEffect } from 'react';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
  useEffect(() => {
    const button = document.getElementById("scrollToTop") as HTMLElement;
    
    button.addEventListener('click', () => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });

    window.onscroll = () => onScroll();
    
    const onScroll = () => 
      button.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? 'block' : 'none';
  }, []);

  return (
    <div id="scrollToTop">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
      </svg>
    </div>
  )
}

export default ScrollToTopButton;