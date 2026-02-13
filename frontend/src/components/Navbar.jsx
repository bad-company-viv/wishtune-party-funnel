import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Music, ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Start Here", path: "/services" },
    { name: "Shop", path: "/shop" },
    { name: "Blog", path: "/blog" },
    {
      name: "More",
      path: "#",
      dropdown: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Refund Policy", path: "/refund-policy" },
        { name: "Terms & Conditions", path: "/terms-conditions" },
      ],
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500
    ${
      isScrolled
        ? "bg-white/80 backdrop-blur-xl shadow-lg py-3 border-b border-purple-100"
        : "bg-white/90 backdrop-blur-md py-5"
    }
  `}
    >
      <div className="relative max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <img
              src="/images/wishtune-logo.png"
              alt="Wishtune Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                to={link.path}
                className={`text-sm font-bold transition-all duration-300 uppercase tracking-widest flex items-center gap-1 ${
                  isScrolled
                    ? "text-gray-900 hover:text-purple-600"
                    : "text-gray-900 hover:text-purple-700"
                }`}
              >
                {link.name}
              </Link>

              {/* Dropdown Menu */}
              {link.dropdown && (
                <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-white/95 backdrop-blur-xl border border-purple-100 rounded-2xl p-3 w-64 shadow-2xl">
                    {link.dropdown.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.path}
                        className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA & Cart */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => setIsCartOpen(true)}
            className={`transition-all duration-300 relative hover:scale-110 ${
              isScrolled ? "text-gray-900" : "text-gray-900"
            }`}
          >
            <ShoppingBag size={22} strokeWidth={2.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-purple-600 text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-lg animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
          <Link
            to="/free-gift"
            className="btn-primary hidden md:inline-flex items-center gap-2"
          >
            <span className="text-sm">Free Gift</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 border-b border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className="block text-lg font-serif text-gray-700 py-2 border-b border-gray-100"
                    onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 mt-2 space-y-2 border-l border-white/10 ml-2">
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          className="block text-sm text-gray-600 py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/free-gift" className="btn-primary w-full text-center">
                Get Free Gift
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
