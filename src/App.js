import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './common/navbar';
import Footer from './common/footer';
import HomePage from './components/home';
import BrowseCetegories from './components/browseCetegories';
import BulkOrder from './components/bulkOrder';
import ProductDetail from './components/productDetail';
import ProductList from './components/productList';
import Cart from './components/cart';
import About from './components/about';
import DashboardLogin from './dashboard/login';

// Layout for public pages (with Navbar + Footer)
function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

// Layout for separate pages (without Navbar/Footer)
function SeparateLayout({ children }) {
  return <>{children}</>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Public routes - use PublicLayout */}
          <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
          <Route path="/Categories" element={<PublicLayout><BrowseCetegories /></PublicLayout>} />
          <Route path="/BulkOrder" element={<PublicLayout><BulkOrder /></PublicLayout>} />
          <Route path="/ProductDetail" element={<PublicLayout><ProductDetail /></PublicLayout>} />
          <Route path="/ProductList" element={<PublicLayout><ProductList /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
          <Route path="/Cart" element={<PublicLayout><Cart /></PublicLayout>} />

          {/* Separate routes - no navbar/footer */}
          <Route path="/dashboard" element={<SeparateLayout><DashboardLogin /></SeparateLayout>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;