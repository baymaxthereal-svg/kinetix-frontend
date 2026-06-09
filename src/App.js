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
import DashboardLayout from './dashboard/layout';
import DashboardHome from './dashboard/home';
import Addproduct from './dashboard/product';
import InventoryCategory from './dashboard/inventoryCategoery';
import AddCategory from './dashboard/category';
import InventoryProduct from './dashboard/inventoryProduct';
import CheckOut from './components/checkout';
import Queries from './dashboard/queries';
import Orders from './dashboard/orders';
import OrderDetails from './dashboard/ordersDetails';
import BulkOrders from './dashboard/bulkOrder';
import Settings from './dashboard/setting';
import ContactUs from './components/contactus';


// Layout for public pages
function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

// Layout for admin login
function AdminLogin({ children }) {
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
          <Route path="/ProductDetail/:id" element={<PublicLayout><ProductDetail /></PublicLayout>} />
          <Route path="/ProductList/:id?" element={<PublicLayout><ProductList /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
          <Route path="/contactus" element={<PublicLayout><ContactUs /></PublicLayout>} />
          <Route path="/Cart" element={<PublicLayout><Cart /></PublicLayout>} />
          <Route path='/checkout' element={<PublicLayout><CheckOut /></PublicLayout>} />
          {/* admin login - no navbar/footer */}
          <Route path="/dashboard" element={<AdminLogin><DashboardLogin /></AdminLogin>} />
          {/* admin login - no navbar/footer */}
          <Route path="/dashboard/home" element={<DashboardLayout><DashboardHome /></DashboardLayout>} />
          <Route path="/dashboard/add-product" element={<DashboardLayout><Addproduct /></DashboardLayout>} />
          <Route path="/dashboard/product" element={<DashboardLayout><InventoryProduct /></DashboardLayout>} />
          <Route path="/dashboard/category" element={<DashboardLayout><InventoryCategory /></DashboardLayout>} />
          <Route path="/dashboard/add-category" element={<DashboardLayout><AddCategory /></DashboardLayout>} />
          <Route path='/dashboard/Queries' element={<DashboardLayout><Queries /></DashboardLayout>} />
          <Route path='/dashboard/Orders' element={<DashboardLayout><Orders /></DashboardLayout>} />
          <Route path='/dashboard/OrdersDetails/:id' element={<DashboardLayout><OrderDetails /></DashboardLayout>} />
          <Route path='/dashboard/bulkOrders' element={<DashboardLayout><BulkOrders /></DashboardLayout>} />
          <Route path='/dashboard/settings' element={<DashboardLayout><Settings /></DashboardLayout>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;