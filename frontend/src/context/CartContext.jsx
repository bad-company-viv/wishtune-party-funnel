import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {

    // Initialize cart from local storage with validation
    const [cart, setCart] = useState(() => {
        try {
            const storedCart = localStorage.getItem('wishtune_cart');
            const parsed = storedCart ? JSON.parse(storedCart) : [];
            return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
            console.error("Failed to parse cart from local storage", error);
            // If error, clear storage to prevent persistent crash
            localStorage.removeItem('wishtune_cart');
            return [];
        }
    });

    const [isCartOpen, setIsCartOpen] = useState(false);

    // Save to local storage whenever cart changes
    useEffect(() => {
        localStorage.setItem('wishtune_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        if (!product || !product.id) return; // Safety check

        setCart((prevCart) => {
            const safePrevCart = Array.isArray(prevCart) ? prevCart : [];
            const existingItem = safePrevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return safePrevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
                );
            }
            return [...safePrevCart, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => {
            const safePrevCart = Array.isArray(prevCart) ? prevCart : [];
            return safePrevCart.filter((item) => item.id !== productId);
        });
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('wishtune_cart');
    };

    // Safe calculation of total
    const cartCount = Array.isArray(cart) ? cart.reduce((total, item) => total + (parseInt(item.quantity) || 1), 0) : 0;

    const cartTotal = Array.isArray(cart) ? cart.reduce((total, item) => {
        const price = typeof item.price === 'number' ? item.price : parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0;
        const qty = parseInt(item.quantity) || 1;
        return total + (price * qty);
    }, 0) : 0;

    const toggleCart = () => setIsCartOpen(prev => !prev);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            isCartOpen,
            setIsCartOpen,
            toggleCart,
            cartCount,
            cartTotal
        }}>
            {children}
        </CartContext.Provider>
    );
};
