import { Route, Routes } from "react-router-dom";
import About from "./components/Pages/About/About";
import BlogDetails from "./components/Pages/Blogs/BlogDetails";
import Blogs from "./components/Pages/Blogs/Blogs";
import Cart from "./components/Pages/Cart/Cart";
import Checkout from "./components/Pages/Checkout/Checkout";
import CompareProducts from "./components/Pages/CompareProducts/CompareProducts";
import Contact from "./components/Pages/Contact/Contact";
import ForgotPassword from "./components/Pages/ForgotPassword/ForgotPassword";
import Home from "./components/Pages/Home/Home";
import ProductDetails from "./components/Pages/ProductDetails/ProductDetails";
import ResetPassword from "./components/Pages/ResetPassword/ResetPassword";
import Signin from "./components/Pages/Signin/Signin";
import Signup from "./components/Pages/Signup/Signup";
import Wishlist from "./components/Pages/Wishlist/Wishlist";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import Services from "./components/Shared/Services/Services";
import Payment from "./components/Pages/Payment/Payment";
import PrivateRoute from "./routes/PrivateRoutes";
import MyOrders from "./components/Pages/MyOrders/MyOrders";
import Policy from "./components/Pages/Policy/Policy";
import Shop from "./components/Pages/Shop/Shop";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product-details/:id" element={<ProductDetails />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blog/:id" element={<BlogDetails />} />
        <Route path="policy" element={<Policy />} />
        <Route path="signin" element={<Signin />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="signup" element={<Signup />} />
        <Route path="reset-password/:token" element={<ResetPassword />} />
        <Route path="my-orders" element={<PrivateRoute><MyOrders /></PrivateRoute>} />
        <Route path="cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
        <Route path="payment" element={<PrivateRoute><Payment /></PrivateRoute>} />
        <Route path="compare-product" element={<PrivateRoute><CompareProducts /></PrivateRoute>} />
        <Route path="wishlist" element={<PrivateRoute><Wishlist /></PrivateRoute>} />
      </Routes>
      <Services />
      <Footer />
    </div>
  );
}

export default App;
