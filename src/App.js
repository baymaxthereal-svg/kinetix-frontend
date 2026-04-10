import './App.css';
import Navbar from './common/navbar';
import Footer from './common/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/home';
import BrowseCetegories from './components/browseCetegories';
import BulkOrder from './components/bulkOrder';
import ProductDetail from './components/productDetail';
import ProductList from './components/productList';
import Cart from './components/cart';
import About from './components/about'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Categories" element={<BrowseCetegories />} />
          <Route path="/BulkOrder" element={<BulkOrder />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/about" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
