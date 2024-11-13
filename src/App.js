
import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer.js'
import LoginPopup from "./components/LoginPopup/LoginPopup.js"
import {useState} from 'react'

function App() {

  const[showLogin,setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route exact path="/deliver-food-react" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
