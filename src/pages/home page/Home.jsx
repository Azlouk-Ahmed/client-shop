import AdSection from '../../components/ads/AdSection'
import Features from '../../components/features/Features'
import FillJar from '../../components/fill/FillJar'
import Gift from '../../components/gifts/Gift'
import Hero from '../../components/hero/Hero'
import About from '../../components/ourshop/About'
import Products from '../../components/products/Products'
import TopSelling from '../../components/top-sellings/TopSelling'
import "./home.css"

function Home() {
  return (
    <div className='df-c '>
        <Hero />
        <FillJar />
        <Gift />
        <Products />
        <Features />
        <About />
        <TopSelling />
        <AdSection />
    </div>
  )
}

export default Home