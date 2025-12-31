import React from 'react'
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

function About() {
    return (
        <section className="pt-16 pb-16 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 bg-[#4A5D23] text-white" data-testid="about-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <span className="font-accent text-xl text-[#B4D334] mb-2 block">Our Story</span>
                        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
                            Crafted with Passion,
                            <br />Enjoyed with Love
                        </h2>
                        <p className="text-white/70 text-lg leading-relaxed mb-6">
                            At Crizbe, we believe that chocolate is more than just a treat—it's an experience.
                            Our journey began with a simple mission: to create the most delicious,
                            premium chocolate sticks using only the finest ingredients.
                        </p>
                        <p className="text-white/70 text-lg leading-relaxed mb-8">
                            Every piece is handcrafted with care, combining rich chocolate with
                            crunchy pistachios, almonds, and hazelnuts. We source our ingredients
                            from trusted farmers who share our commitment to quality.
                        </p>
                        <div className="flex items-center gap-8">
                            <div>
                                <div className="text-4xl font-bold text-[#B4D334]">5+</div>
                                <div className="text-white/60 text-sm">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-[#B4D334]">50K+</div>
                                <div className="text-white/60 text-sm">Happy Customers</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-[#B4D334]">100%</div>
                                <div className="text-white/60 text-sm">Natural Ingredients</div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5"
                    >
                        <div className="relative">
                            <img
                                src="https://customer-assets.emergentagent.com/job_cf2f213e-cdbf-4abe-a3ac-9a8f4d8424ad/artifacts/e1lrpt25_Flyer.jpg"
                                alt="Crizbe Choco Sticks"
                                className="w-full rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-[#9DC23B] text-white p-6 rounded-2xl shadow-xl">
                                <div className="flex items-center gap-1 mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-white" />
                                    ))}
                                </div>
                                <div className="text-sm font-medium">4.9 Customer Rating</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About