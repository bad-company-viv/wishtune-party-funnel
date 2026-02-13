import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import ProductDetailPage from "./pages/ProductDetailPage";
import SqueezePage from "./pages/SqueezePageNew"; // Using the NEW high-converting version
import OTOPage from "./pages/OTOPageNew"; // Using the NEW high-converting version
import ThankYouPage from "./pages/ThankYouPage";
import HomePage from "./pages/HomePageNew"; // Using the NEW high-converting version
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/NavbarNew"; // Using the NEW premium version
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import RefundPolicy from "./pages/legal/RefundPolicy";
import TermsConditions from "./pages/legal/TermsConditions";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/CartDrawer";


// Layout component showing Navbar
const BrandLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <CartDrawer />
      <Routes>
        <Route element={<BrandLayout />}>
          {/* Main Brand/Sales Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Route>

        {/* High-Converting Funnel Pages (Minimal distractions) */}
        <Route path="/free-gift" element={<SqueezePage />} />
        <Route path="/offer" element={<OTOPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
