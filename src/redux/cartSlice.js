import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// Load initial state from localStorage
const loadCartFromStorage = () => {
    try {
        const stored = localStorage.getItem('cart');
        return stored ? JSON.parse(stored) : { items: [] };
    } catch (e) {
        return { items: [] };
    }
};

const initialState = loadCartFromStorage();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let product, quantity;
            // Check if payload is an object with product and quantity
            if (action.payload.product && action.payload.quantity) {
                product = action.payload.product;
                quantity = action.payload.quantity;
            } else {
                // Fallback: payload is just the product (quantity = 1)
                product = action.payload;
                quantity = 1;
            }

            const existingItem = state.items.find(item => item.id === product.id);

            if (existingItem) {
                existingItem.quantity += quantity;
                toast.success(`Updated ${product.title} quantity (+${quantity})`, {
                    position: 'bottom-right',
                    autoClose: 2000,
                });
            } else {
                state.items.push({ ...product, quantity });
                toast.success(`${product.title} added to cart (${quantity} ${quantity > 1 ? 'items' : 'item'})`, {
                    position: 'bottom-right',
                    autoClose: 2000,
                });
            }
            localStorage.setItem('cart', JSON.stringify(state));
        },

        removeFromCart: (state, action) => {
            const productId = action.payload;
            const removedItem = state.items.find(item => item.id === productId);
            if (removedItem) {
                state.items = state.items.filter(item => item.id !== productId);
                toast.info(`${removedItem.title} removed from cart`, {
                    position: 'bottom-right',
                    autoClose: 2000,
                });
                localStorage.setItem('cart', JSON.stringify(state));
            }
        },

        updateQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            const item = state.items.find(item => item.id === productId);
            if (item) {
                if (quantity <= 0) {
                    // Remove item if quantity becomes zero or negative
                    state.items = state.items.filter(item => item.id !== productId);
                    toast.info(`${item.title} removed from cart`, {
                        position: 'bottom-right',
                        autoClose: 2000,
                    });
                } else {
                    item.quantity = quantity;
                    // Optional: subtle notification for quantity change (muted)
                    // toast.info(`Quantity updated for ${item.title}`, { autoClose: 1000 });
                }
                localStorage.setItem('cart', JSON.stringify(state));
            }
        },

        clearCart: (state) => {
            state.items = [];
            localStorage.removeItem('cart');
            toast.info('Cart cleared', {
                position: 'bottom-right',
                autoClose: 2000,
            });
        },
    },
});

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) =>
    state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
export const selectCartCount = (state) =>
    state.cart.items.reduce((count, item) => count + item.quantity, 0);

// Actions
export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;