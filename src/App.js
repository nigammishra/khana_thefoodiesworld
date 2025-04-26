import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import ShopDetails from "./pages/ShopDetails";
import Recipes from "./pages/Recipes";
import Contacts from "./pages/Contact";

// Account Pages
import SignIn from "./pages/AccountDetails/Signin";
import SignUp from "./pages/AccountDetails/Signup";
import ForgotPassword from "./pages/AccountDetails/ForgotPassword";
import OrdersDetails from "./pages/AccountDetails/OrdersInfo";
import Settings from "./pages/AccountDetails/Settings";
import AddressDetails from "./pages/AccountDetails/AddressDetails";
import PaymentMethods from "./pages/AccountDetails/PaymentMethods";
import Notifications from "./pages/AccountDetails/Notifications";
import WishlistItems from "./pages/AccountDetails/WishlistItems";

function App() {
  return (
    <Router>
      {/* Header will show on every page */}
      <Header />

      {/* All Routes */}
      <Routes>
        {/* Main Pages */}
        <Route path="/thefoodiesworld/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/shopdetails" element={<ShopDetails />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contacts" element={<Contacts />} />

        {/* Account Pages (Nested under /account) */}
        <Route path="/account/signin" element={<SignIn />} />
        <Route path="/account/signup" element={<SignUp />} />
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
    </Router>
  );
}

export default App;
