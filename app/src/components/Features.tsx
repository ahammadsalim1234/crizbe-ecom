import React from 'react'
import { motion } from 'framer-motion';
import { Truck, Award, Shield } from 'lucide-react';

function Features() {
    return (
        <div className="pt-16 pb-16 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 bg-white" data-testid="features-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Truck, title: 'Free Shipping', desc: 'On orders over $50' },
                        { icon: Award, title: 'Premium Quality', desc: 'Handcrafted with care' },
                        { icon: Shield, title: 'Secure Payment', desc: '100% protected checkout' },
                    ].map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-4 p-6 rounded-2xl bg-[#F9FAF7] border border-[#E8EFE0]"
                        >
                            <div className="w-14 h-14 rounded-full bg-[#9DC23B]/10 flex items-center justify-center">
                                <feature.icon className="w-7 h-7 text-[#9DC23B]" />
                            </div>
                            <div>
                                <h3 className="font-heading font-semibold text-[#4A5D23]">{feature.title}</h3>
                                <p className="text-sm text-[#5C6B40]">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Features