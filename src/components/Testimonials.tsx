import React from 'react'
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

function Testimonials() {
    return (
        <section className="pt-16 pb-16 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 bg-[#f1f5ed]" data-testid="testimonials-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="font-accent text-xl text-[#9DC23B] mb-2 block">What People Say</span>
                    <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#4A5D23]">
                        Loved by Thousands
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                    {[
                        {
                            name: 'Sarah M.',
                            review: 'The pistachio choco sticks are absolutely divine! The perfect balance of crunch and chocolate. My new favorite treat!',
                            rating: 5
                        },
                        {
                            name: 'James P.',
                            review: 'I bought the gift box for my wife and she loved it. Premium quality and beautiful packaging. Will definitely order again.',
                            rating: 5
                        },
                        {
                            name: 'Emily R.',
                            review: 'Finally found a chocolate brand that uses real ingredients! You can taste the difference. Highly recommend the almond variety.',
                            rating: 5
                        }
                    ].map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="
                            glass-card p-8 rounded-[40px]
                            bg-[rgb(245_249_242)]
                            shadow-lg shadow-black/20
                            border border-black/5
                          "
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-[#9DC23B] text-[#9DC23B]" />
                                ))}
                            </div>
                            <p className="text-[#5C6B40] mb-6 italic">"{testimonial.review}"</p>
                            <div className="font-semibold text-[#4A5D23]">{testimonial.name}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials