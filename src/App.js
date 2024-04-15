import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home  from './pages/Home';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import ShopContextProvider from './context/shop-context';
import Cart from './pages/Cart';


function App() {
  return (
    <div className="App">
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
