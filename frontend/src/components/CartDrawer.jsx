import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const {
    cart,
    removeFromCart,
    isCartOpen,
    setIsCartOpen,
    cartTotal,
    clearCart,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white border-l border-gray-200 shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h2 className="text-xl font-serif font-bold text-gray-900 flex items-center gap-2">
                <ShoppingBag size={20} className="text-brand-gold" />
                Your Bag
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600 hover:text-gray-800"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {!cart || cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-90">
                  <ShoppingBag size={48} className="mb-4 text-gray-300" />
                  <p className="text-lg font-medium text-gray-900">
                    Your bag is empty.
                  </p>
                  <p className="text-sm text-gray-600">
                    Start your transformation today.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-6 text-brand-gold underline underline-offset-4"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100"
                  >
                    <div className="w-20 h-20 bg-black/50 rounded-lg flex-shrink-0 overflow-hidden">
                      {item.img ? (
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-brand-gold">
                          <Music size={24} />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-brand-gold text-sm mb-2">
                        {/* Display formatted price or fallback */}
                        {typeof item.price === "number"
                          ? `₹${item.price.toLocaleString()}`
                          : item.formattedPrice || item.price}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">
                          Qty: {item.quantity}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-500 hover:text-red-400 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart && cart.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
                <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-500 text-center">
                  Taxes and shipping calculated at checkout.
                </p>
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full bg-brand-gold text-brand-dark py-4 rounded-xl font-bold text-center hover:bg-white transition-colors"
                >
                  Checkout Now
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
