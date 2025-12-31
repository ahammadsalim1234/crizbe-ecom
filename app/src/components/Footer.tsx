import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';
import Newsletter from './Newsletter';

const Footer = () => {
    return (
        <footer className="bg-[#4A5D23] text-white" data-testid="footer">
            {/* Newsletter Section */}
            <div className="border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <Newsletter />
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-block">
                            <span className="font-heading text-3xl font-bold text-white">Crizbe</span>
                            <span className="block font-accent text-[#B4D334] mt-1">be premium</span>
                        </Link>
                        <p className="mt-4 text-white/70 text-sm leading-relaxed">
                            Crafting premium chocolate experiences since 2020. Every bite is a journey of flavor.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading text-lg font-semibold mb-4 text-[#B4D334]">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-white/70 hover:text-white transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="text-white/70 hover:text-white transition-colors text-sm">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white/70 hover:text-white transition-colors text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-heading text-lg font-semibold mb-4 text-[#B4D334]">
                            Contact Us
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-white/70 text-sm">
                                <Mail className="w-4 h-4 text-[#B4D334]" />
                                hello@crizbe.com
                            </li>
                            <li className="flex items-center gap-3 text-white/70 text-sm">
                                <Phone className="w-4 h-4 text-[#B4D334]" />
                                +1 (555) 123-4567
                            </li>
                            <li className="flex items-start gap-3 text-white/70 text-sm">
                                <MapPin className="w-4 h-4 text-[#B4D334] mt-0.5" />
                                123 Premium Lane, Chocolate City, CC 12345
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-heading text-lg font-semibold mb-4 text-[#B4D334]">
                            Follow Us
                        </h4>
                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#9DC23B] transition-colors"
                                data-testid="social-instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#9DC23B] transition-colors"
                                data-testid="social-facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#9DC23B] transition-colors"
                                data-testid="social-twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                    <p className="text-white/50 text-sm">
                        © {new Date().getFullYear()} Crizbe. All rights reserved. Made with love for chocolate lovers.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
