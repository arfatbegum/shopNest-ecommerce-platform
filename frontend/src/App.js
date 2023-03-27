import { Route, Routes } from "react-router-dom";
import About from "./components/Pages/About/About";
import AllCategories from "./components/Pages/AllCategories/AllCategories";
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


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="all-categories" element={<AllCategories />} />
        <Route path="product-details/:id" element={<ProductDetails />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blog/:id" element={<BlogDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="compare-product" element={<CompareProducts />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="signin" element={<Signin />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="signup" element={<Signup />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Routes>
      <Services />
      <Footer />
    </div>
  );
}

export default App;
