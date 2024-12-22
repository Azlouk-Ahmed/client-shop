import { useEffect } from 'react';
import AdSection from '../../components/ads/AdSection';
import Features from '../../components/features/Features';
import FillJar from '../../components/fill/FillJar';
import Gift from '../../components/gifts/Gift';
import Hero from '../../components/hero/Hero';
import ModalContainer from '../../components/Modal/ModalContainer';
import StartingPopup from '../../components/Modal/StartingPopup';
import Partners from '../../components/our partners/Partners';
import About from '../../components/ourshop/About';
import Products from '../../components/products/Products';
import TopSelling from '../../components/top-sellings/TopSelling';
import useModal from '../../hooks/useModal';
import "./home.css";

function Home() {
  const { modalOpen, open, close } = useModal();

  useEffect(() => {
    // Set a timeout to open the modal after 5 seconds
    const timer = setTimeout(() => {
      open();
    }, 5000);

    // Cleanup timer when the component unmounts or if the timeout completes
    return () => clearTimeout(timer);
  }, []);  // Empty dependency array ensures this only runs once after initial render

  return (
    <div className='df-c'>
      <ModalContainer>
        {modalOpen && (
          <StartingPopup modalOpen={modalOpen} handleClose={close} />
        )}
      </ModalContainer>
      <Hero />
      <FillJar />
      <Gift />
      <Products />
      <Features />
      <About />
      <TopSelling />
      <AdSection />
      <Partners />
    </div>
  );
}

export default Home;
