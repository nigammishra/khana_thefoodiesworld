import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import ShopDetails from "./pages/ShopDetails";
import Recipes from "./pages/Recipes";
import Contacts from "./pages/Contact";

// Account Details Pages
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
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/shopdetails" element={<ShopDetails />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contacts" element={<Contacts />} />
        
        {/* Account Details Routes */}
        <Route path="/account/signin" element={<SignIn />} />
        <Route path="/account/signup" element={<SignUp />} />
        <Route path="/account/forgotpassword" element={<ForgotPassword />} />
        <Route path="/account/ordersdetails" element={<OrdersDetails />} />
        <Route path="/account/settings" element={<Settings />} />
        <Route path="/account/addressdetails" element={<AddressDetails />} />
        <Route path="/account/paymentmethods" element={<PaymentMethods />} />
        <Route path="/account/notifications" element={<Notifications />} />
        <Route path="/account/wishlistitems" element={<WishlistItems />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
