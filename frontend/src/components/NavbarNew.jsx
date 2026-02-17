import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Sparkles, ChevronDown } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { cart, toggleCart } = useCart();
  const location = useLocation();

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Shop",
      path: "/shop",
      dropdown: [
        { name: "All Products", path: "/shop" },
        { name: "Party Mixtape", path: "/shop/party" },
        { name: "Shower Mixtape", path: "/shop/shower" },
        { name: "Personalized", path: "/shop/personalized" },
      ],
    },
    { name: "Blog", path: "https://riagupta.com/blog" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 md:h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/images/wishtune-logo.png"
                alt="Wishtune Logo"
                className="h-7 md:h-8 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation - Removed for Funnel Focus */}
            <div className="hidden lg:flex items-center gap-1"></div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Free Gift CTA - Desktop */}
              <Link
                to="/free-gift"
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-dark font-bold px-4 py-2 rounded-full hover:shadow-glow transition-all hover:scale-105"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">Free Gift</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-xl bg-white border border-gray-200 transition-all"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white text-gray-900 border-l border-gray-200 z-50 lg:hidden overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/wishtune-logo.png"
                    alt="Wishtune Logo"
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              {/* Navigation Links - Centered CTA for Funnel */}
              <div className="p-6">
                <Link
                  to="/free-gift"
                  className="btn-primary w-full justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  <Sparkles className="w-5 h-5" />
                  Get Your Free Gift
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
