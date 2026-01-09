"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
// import ProductCard from '../../../components/ProductCard';
import { Button } from '@/components/ui/button';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const Products = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const [productsRes, categoriesRes] = await Promise.all([
    //                 axios.get(`${API}/products`),
    //                 axios.get(`${API}/categories`)
    //             ]);
    //             setProducts(productsRes.data);
    //             setCategories(['All', ...categoriesRes.data]);
    //         } catch (error) {
    //             console.error('Error fetching products:', error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchData();
    // }, []);

    // const filteredProducts = selectedCategory === 'All'
    //     ? products
    //     : products.filter(p => p.category === selectedCategory);

    return (
        <div className="pt-32 pb-16 bg-[#e6e6e6]" data-testid="products-page">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <span className="font-accent text-xl text-[#9DC23B] mb-2 block">Our Collection</span>
                    <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#4A5D23] mb-4">
                        All Products
                    </h1>
                    <p className="text-[#5C6B40] max-w-xl mx-auto">
                        Explore our range of premium chocolate sticks, crafted with love and the finest ingredients.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    data-testid="category-filter"
                >
                    {categories.map((category) => (
                        <Button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`rounded-full px-6 py-2 transition-all ${selectedCategory === category
                                ? 'bg-[#9DC23B] text-white'
                                : 'bg-white text-[#4A5D23] border border-[#4A5D23]/20 hover:border-[#9DC23B]'
                                }`}
                            data-testid={`category-${category}`}
                        >
                            {category}
                        </Button>
                    ))}
                </motion.div>

                {/* Products Grid */}
                {/* {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="spinner" />
                    </div>
                ) : filteredProducts.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-[#5C6B40]">No products found in this category.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12" data-testid="products-grid">
                        {filteredProducts.map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                        ))}
                    </div>
                )} */}
            </div>
        </div>
    );
};

export default Products;
