import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/pages/ResetPassword/ResetPassword";
import Signin from "./components/pages/Signin/Signin";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Orders from "./components/pages/Orders/Orders";
import MainLayout from "./components/pages/MainLayout/MainLayout";
import Customers from "./components/pages/Customers/Customers";
import OurStaff from "./components/pages/OurStaff/OurStaff";
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


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="/admin" element={<MainLayout />} >
          <Route index element={<Dashboard />}></Route>
          <Route path="all-products" element={<Products />}></Route>
          <Route path="product-categories" element={<ProductCategories />}></Route>
          <Route path="all-blogs" element={<Blogs />}></Route>
          <Route path="blog-categories" element={<BlogCategories />}></Route>
          <Route path="colors" element={<Colors />}></Route>
          <Route path="brands" element={<Brands />}></Route>
          <Route path="coupons" element={<Coupons />}></Route>
          <Route path="customers" element={<Customers />}></Route>
          <Route path="orders" element={<Orders />}></Route>
          <Route path="orderDetails" element={<OrderDetails />}></Route>
          <Route path="staff" element={<OurStaff />}></Route>
          <Route path="enquiries" element={<Enquiries />}></Route>
          <Route path="enquiryDetails" element={<EnquiryDetails />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
