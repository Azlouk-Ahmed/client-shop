import Navbar from './components/navbar/Navbar';
import Checkout from './pages/checkout page/Checkout';
import Home from './pages/home page/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OurTeam from './pages/our team page/OurTeam';
import Footer from './components/footer/Footer';
import ProductDetails from './pages/product details/ProductDetails';
import Profile from './pages/profile page/Profile';
import Settings from './pages/profile page/Settings';
import Password from './pages/profile page/Password';
import Orders from './pages/profile page/Orders';
import Whishlists from './pages/profile page/Whishlists';
import Reviews from './pages/profile page/Reviews';
import Faq from './pages/faq/Faq';
import Team from './pages/team page/Team';
import Coupans from './pages/profile page/Coupans';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />}>
            <Route index element={<Settings />} />
            <Route path="page1" element={<Settings />} />
            <Route path="page2" element={<Password />} />
            <Route path="page3" element={<Orders />} />
            <Route path="page4" element={<Whishlists />} />
            <Route path="page5" element={<Reviews />} />
            <Route path="page6" element={<Coupans />} />
          </Route>
          <Route path="/team/:id" element={<OurTeam />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/team" element={<Team />} />
          <Route path="/details/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
