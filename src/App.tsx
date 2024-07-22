import './App.css'
import AboutMe from './about-me/AboutMe'
import Carousel from './carousel/Carousel'
import FrequentAskedQuestions from './faq/FrequentAskedQuestions'
import Footer from './footer/Footer'
import Header from './header/Header'
import ScrollToTopButton from './utils/scroll-to-top-button/ScrollToTopButton'
import WhatsappButton from './utils/whatsapp-button/WhatsappButton'
import { isMobile } from 'react-device-detect';

const App = () => {
  return (
    <>
      <Header></Header>
      <Carousel></Carousel>
      <AboutMe></AboutMe>
      <FrequentAskedQuestions></FrequentAskedQuestions>
      <Footer></Footer>

      { !isMobile &&
      (
        <div>
          <WhatsappButton></WhatsappButton>
          <ScrollToTopButton></ScrollToTopButton>
        </div>
      )
      } 
    </>
  )
}

export default App
