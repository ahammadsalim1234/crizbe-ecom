import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
// import { useAuth } from './AuthContext';

const CartContext = createContext(null);

// const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

// export const CartProvider = ({ children }) => {
//     const { user, token } = useAuth();
//     const [cart, setCart] = useState({ items: [], total: 0 });
//     const [loading, setLoading] = useState(false);

//     const fetchCart = useCallback(async () => {
//         if (!token) {
//             setCart({ items: [], total: 0 });
//             return;
//         }
//         try {
//             setLoading(true);
//             const response = await axios.get(`${API}/cart`);
//             setCart(response.data);
//         } catch (error) {
//             console.error('Error fetching cart:', error);
//         } finally {
//             setLoading(false);
//         }
//     }, [token]);

//     useEffect(() => {
//         fetchCart();
//     }, [fetchCart]);

//     const addToCart = async (productId, quantity = 1) => {
//         if (!token) {
//             throw new Error('Please login to add items to cart');
//         }
//         await axios.post(`${API}/cart/add`, { product_id: productId, quantity });
//         await fetchCart();
//     };

//     const updateCartItem = async (productId, quantity) => {
//         await axios.put(`${API}/cart/update`, { product_id: productId, quantity });
//         await fetchCart();
//     };

//     const removeFromCart = async (productId) => {
//         await axios.delete(`${API}/cart/remove/${productId}`);
//         await fetchCart();
//     };

//     const clearCart = async () => {
//         await axios.delete(`${API}/cart/clear`);
//         setCart({ items: [], total: 0 });
//     };

//     const cartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

//     return (
//         <CartContext.Provider value={{
//             cart,
//             loading,
//             cartCount,
//             addToCart,
//             updateCartItem,
//             removeFromCart,
//             clearCart,
//             fetchCart
//         }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => {
//     const context = useContext(CartContext);
//     if (!context) {
//         throw new Error('useCart must be used within a CartProvider');
//     }
//     return context;
// };
