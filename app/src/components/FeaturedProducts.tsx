import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

function FeaturedProducts() {
    const [loading, setLoading] = useState(true);

    return (
        <section className="pt-16 pb-16 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 bg-[#edf2e6]" data-testid="featured-products-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="font-accent text-xl text-[#9DC23B] mb-2 block">Our Collection</span>
                    <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#4A5D23] mb-4">
                        Featured Products
                    </h2>
                    <p className="text-[#5C6B40] max-w-xl mx-auto">
                        Discover our most loved chocolate creations, crafted with premium ingredients for the perfect indulgence.
                    </p>
                </motion.div>

                {/* {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="spinner" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts.map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                        ))}
                    </div>

                )} */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link href="/products" data-testid="view-all-products-btn">
                        <Button className="bg-transparent border-2 border-[#4A5D23] hover:border-[#edf2e6] text-[#4A5D23] hover:bg-[#a7c31e] hover:text-white rounded-full px-8 py-4 font-medium transition-all">
                            View All Products <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default FeaturedProducts