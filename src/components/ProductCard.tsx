// import { useState } from 'react';
// import { ShoppingCart, Eye } from 'lucide-react';
// import { useCart } from '../context/CartContext';
// import { useAuth } from '../context/AuthContext';
// import { toast } from 'sonner';
// import { Button } from './ui/button';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// const ProductCard = ({ product, index = 0 }) => {
//     const { addToCart } = useCart();
//     const { user } = useAuth();
//     const [loading, setLoading] = useState(false);

//     const handleAddToCart = async (e) => {
//         e.preventDefault();
//         e.stopPropagation();

//         if (!user) {
//             toast.error('Please login to add items to cart');
//             return;
//         }

//         setLoading(true);
//         try {
//             await addToCart(product.id);
//             toast.success(`${product.name} added to cart!`);
//         } catch (error) {
//             toast.error('Failed to add to cart');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//         >
//             <Link
//                 href={`/products/${product.id}`}
//                 className="block product-card glass-card group"
//                 data-testid={`product-card-${product.id}`}
//             >
//                 {/* Image Container */}
//                 <div className="relative aspect-square overflow-hidden bg-[#F9FAF7]">
//                     <img
//                         src={product.image}
//                         alt={product.name}
//                         className="product-image w-full h-full object-cover"
//                     />

//                     {/* Featured Badge */}
//                     {product.featured && (
//                         <div className="absolute top-4 left-4 bg-[#9DC23B] text-white text-xs font-semibold px-3 py-1 rounded-full">
//                             Featured
//                         </div>
//                     )}

//                     {/* Quick Actions */}
//                     <div className="absolute bottom-4 left-4 right-4 flex gap-2 quick-add-btn">
//                         <Button
//                             onClick={handleAddToCart}
//                             disabled={loading}
//                             className="flex-1 bg-[#4A5D23] hover:bg-[#9DC23B] text-white rounded-full h-10 text-sm font-medium"
//                             data-testid={`add-to-cart-${product.id}`}
//                         >
//                             {loading ? (
//                                 <span className="spinner w-4 h-4 border-2" />
//                             ) : (
//                                 <>
//                                     <ShoppingCart className="w-4 h-4 mr-2" />
//                                     Add to Cart
//                                 </>
//                             )}
//                         </Button>
//                         <Button
//                             variant="secondary"
//                             className="w-10 h-10 p-0 bg-white/90 hover:bg-white rounded-full border-0"
//                             data-testid={`view-product-${product.id}`}
//                         >
//                             <Eye className="w-4 h-4 text-[#4A5D23]" />
//                         </Button>
//                     </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-5">
//                     <div className="flex items-start justify-between gap-2 mb-2">
//                         <h3 className="font-heading text-lg font-semibold text-[#4A5D23] group-hover:text-[#9DC23B] transition-colors line-clamp-1">
//                             {product.name}
//                         </h3>
//                         <span className="text-sm text-[#8C9E70] whitespace-nowrap">
//                             {product.weight}
//                         </span>
//                     </div>

//                     <p className="text-sm text-[#5C6B40] mb-3 line-clamp-2">
//                         {product.description}
//                     </p>

//                     <div className="flex items-center justify-between">
//                         <span className="text-xl font-bold text-[#9DC23B]">
//                             ${product.price.toFixed(2)}
//                         </span>
//                         <span className="text-xs bg-[#E8EFE0] text-[#4A5D23] px-2 py-1 rounded-full">
//                             {product.category}
//                         </span>
//                     </div>
//                 </div>
//             </Link>
//         </motion.div>
//     );
// };

// export default ProductCard;
