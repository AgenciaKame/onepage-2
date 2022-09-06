import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'
import './App.css';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import Community from './Components/Community/Community';
import Footer from './Components/Footer/Footer';
import Testimony from './Components/Testimony/Testimony';
import Offer from './Components/Offer/Offer';

function App() {
  return (
    <>
      <Home />
      <Skills />
      <Offer />
      <Community />
      <Testimony />
      <Footer />
    </>
  );
}

export default App;
