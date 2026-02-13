import React, { useState } from 'react';
import { ShieldCheck, Lock } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { products } from '../data/products';

import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

const CheckoutPage = () => {
    const navigate = useNavigate();
    const { cart, cartTotal, clearCart } = useCart();
    const [isProcessing, setIsProcessing] = useState(false);

    // Redirect if cart is empty
    if (!cart || cart.length === 0) {
        return (
            <div className="min-h-screen bg-[#0f030e] text-white flex flex-col items-center justify-center p-4 text-center">
                <ShoppingBag size={48} className="text-white/20 mb-4" />
                <h2 className="text-2xl font-serif mb-4">Your bag is empty</h2>
                <button
                    onClick={() => navigate('/shop')}
                    className="text-brand-gold hover:text-white transition-colors border-b border-brand-gold pb-1"
                >
                    Return to Shop
                </button>
            </div>
        );
    }

    const handlePayment = (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate payment processing
        setTimeout(() => {
            clearCart(); // Clear cart on success
            setIsProcessing(false);
            navigate('/thank-you');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#0f030e] text-white flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-serif text-white mb-2">Complete Your Order</h2>
                    <div className="flex items-center justify-center gap-2 text-white/40 text-sm">
                        <Lock size={14} />
                        <span>Secure SSL Encrypted Payment</span>
                    </div>
                </div>

                {/* Order Summary Box */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                    <h3 className="text-xs uppercase tracking-widest text-white/40 mb-4">Order Summary</h3>
                    <div className="space-y-3 mb-6 max-h-40 overflow-y-auto custom-scrollbar">
                        {cart.map((item, i) => (
                            <div key={i} className="flex justify-between items-center text-sm">
                                <span className="text-white/80">{item.title} <span className="text-white/40">x{item.quantity}</span></span>
                                <span className="font-medium">₹{((item.priceValue || item.price) * item.quantity).toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-white/10 pt-4 flex justify-between items-center text-xl font-serif font-bold">
                        <span>Total</span>
                        <span className="text-brand-gold">₹{cartTotal.toLocaleString()}</span>
                    </div>
                </div>

                {/* Simulated Form */}
                <form className="space-y-4" onSubmit={handlePayment}>
                    <div>
                        <label className="block text-sm text-white/60 mb-1">Email Address</label>
                        <input
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isProcessing}
                            className="w-full bg-brand-gold hover:bg-white text-brand-dark font-bold text-lg py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isProcessing ? 'Processing...' : `Pay ₹${cartTotal.toLocaleString()}`}
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-xs text-white/30 mb-2">Powered by Stripe • Guaranteed Secure</p>
                    <div className="flex items-center justify-center gap-2 text-white/40 text-xs">
                        <ShieldCheck size={12} />
                        <span>100% Satisfaction Guarantee</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
