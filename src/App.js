import { useState, useEffect } from "react";
import AOS from "aos";  // Make sure AOS is installed and imported
import "aos/dist/aos.css";  // AOS styles

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from './components/ScrollToTop';

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import ShopDetails from "./pages/ShopDetails";
import Recipes from "./pages/Recipes";
import Contacts from "./pages/Contact";

// Account Pages
import SignIn from "./pages/AccountDetails/Signin";
import ForgotPassword from "./pages/AccountDetails/ForgotPassword";
import OrdersDetails from "./pages/AccountDetails/OrdersInfo";
import Settings from "./pages/AccountDetails/Settings";
import AddressDetails from "./pages/AccountDetails/AddressDetails";
import PaymentMethods from "./pages/AccountDetails/PaymentMethods";
import Notifications from "./pages/AccountDetails/Notifications";
import WishlistItems from "./pages/AccountDetails/WishlistItems";

// Your FoodLoader component (imported or defined here)
import FoodLoader from "./components/FoodLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const timeout = setTimeout(() => setLoading(false), 4000);  // Loader duration
    return () => clearTimeout(timeout);
  }, []);

  // If loading, show the loader
  if (loading) return <FoodLoader />;

  return (
    <Router>
      {/* Header will show on every page */}
      <Header />

      {/* All Routes */}
      <Routes>
        {/* Main Pages */}
        <Route path="/khana_thefoodiesworld/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/shopdetails" element={<ShopDetails />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contacts" element={<Contacts />} />

        {/* Account Pages (Nested under /account) */}
        <Route path="/account/signin" element={<SignIn />} />
        <Route path="/account/forgot-password" element={<ForgotPassword />} />
        <Route path="/account/orders-details" element={<OrdersDetails />} />
        <Route path="/account/settings" element={<Settings />} />
        <Route path="/account/address-details" element={<AddressDetails />} />
        <Route path="/account/payment-methods" element={<PaymentMethods />} />
        <Route path="/account/notifications" element={<Notifications />} />
        <Route path="/account/wishlist-items" element={<WishlistItems />} />
      </Routes>

      {/* Footer will show on every page */}
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
