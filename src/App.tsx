import './App.css'
import Carousel from './carousel/Carousel'
import Footer from './footer/Footer'
import Header from './header/Header'
import ScrollToTopButton from './utils/scroll-to-top-button/ScrollToTopButton'
import WhatsappButton from './utils/whatsapp-button/WhatsappButton'

const App = () => {
  return (
    <>
      <Header></Header>
      <Carousel></Carousel>
      <WhatsappButton></WhatsappButton>
      <ScrollToTopButton></ScrollToTopButton>
      <Footer></Footer>
    </>
  )
}

export default App
