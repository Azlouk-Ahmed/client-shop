import Cart from '../../components/cart/Cart'
import Features from '../../components/features/Features'
import FillJar from '../../components/fill/FillJar'
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
        <Products />
        <Features />
        <About />
        <Cart />
        <TopSelling />
    </div>
  )
}

export default Home