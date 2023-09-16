import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/pages/ResetPassword/ResetPassword";
import Signin from "./components/pages/Signin/Signin";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Orders from "./components/pages/Orders/Orders";
import MainLayout from "./components/pages/MainLayout/MainLayout";
import Customers from "./components/pages/Customers/Customers";
import Colors from "./components/pages/Catalog/Colors/Colors";
import Brands from "./components/pages/Catalog/Brands/Brands";
import Coupons from "./components/pages/Catalog/Coupons/Coupons";
import Enquiries from "./components/pages/Enquiries/Enquiries";
import Products from "./components/pages/Products/AllProducts/Products";
import ProductCategories from "./components/pages/Products/ProductsCategories/ProductCategories";
import Blogs from "./components/pages/Blogs/Blogs/Blogs";
import BlogCategories from "./components/pages/Blogs/BlogsCategories/BlogCategories";
import EnquiryDetails from "./components/pages/Enquiries/EnquiryDetails";
import OrderDetails from "./components/pages/Orders/OrderDetails";
import PrivateRoute from "./routes/PrivateRoutes";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="/admin" element={<MainLayout />} >
          <Route index element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
          <Route path="all-products" element={<PrivateRoute><Products /></PrivateRoute>}></Route>
          <Route path="product-categories" element={<PrivateRoute><ProductCategories /></PrivateRoute>}></Route>
          <Route path="all-blogs" element={<PrivateRoute><Blogs /></PrivateRoute>}></Route>
          <Route path="blog-categories" element={<PrivateRoute><BlogCategories /></PrivateRoute>}></Route>
          <Route path="colors" element={<PrivateRoute><Colors /></PrivateRoute>}></Route>
          <Route path="brands" element={<PrivateRoute><Brands /></PrivateRoute>}></Route>
          <Route path="coupons" element={<PrivateRoute><Coupons /></PrivateRoute>}></Route>
          <Route path="customers" element={<PrivateRoute><Customers /></PrivateRoute>}></Route>
          <Route path="orders" element={<PrivateRoute><Orders /></PrivateRoute>}></Route>
          <Route path="orderDetails/:id" element={<PrivateRoute><OrderDetails /></PrivateRoute>}></Route>
          <Route path="enquiries" element={<PrivateRoute><Enquiries /></PrivateRoute>}></Route>
          <Route path="enquiryDetails/:id" element={<PrivateRoute><EnquiryDetails /></PrivateRoute>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
