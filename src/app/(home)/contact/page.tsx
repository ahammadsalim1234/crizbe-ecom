"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textares';
import { Label } from '@/components/ui/label';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            toast.error('Please fill in all fields');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post(`${API}/contact`, formData);
            toast.success(response.data.message);
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            toast.error('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-16 bg-[#e6e6e6]" data-testid="contact-page">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="font-accent text-xl text-[#9DC23B] mb-2 block">Get in Touch</span>
                    <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#4A5D23] mb-4">
                        Contact Us
                    </h1>
                    <p className="text-[#5C6B40] max-w-xl mx-auto">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-4 space-y-6"
                    >
                        <div className="glass-card p-6">
                            <div className="w-12 h-12 rounded-full bg-[#9DC23B]/10 flex items-center justify-center mb-4">
                                <Mail className="w-6 h-6 text-[#9DC23B]" />
                            </div>
                            <h3 className="font-heading font-semibold text-[#4A5D23] mb-2">Email Us</h3>
                            <p className="text-[#5C6B40]">hello@crizbe.com</p>
                            <p className="text-[#5C6B40]">support@crizbe.com</p>
                        </div>

                        <div className="glass-card p-6">
                            <div className="w-12 h-12 rounded-full bg-[#9DC23B]/10 flex items-center justify-center mb-4">
                                <Phone className="w-6 h-6 text-[#9DC23B]" />
                            </div>
                            <h3 className="font-heading font-semibold text-[#4A5D23] mb-2">Call Us</h3>
                            <p className="text-[#5C6B40]">+1 (555) 123-4567</p>
                            <p className="text-[#8C9E70] text-sm">Mon-Fri 9am-6pm EST</p>
                        </div>

                        <div className="glass-card p-6">
                            <div className="w-12 h-12 rounded-full bg-[#9DC23B]/10 flex items-center justify-center mb-4">
                                <MapPin className="w-6 h-6 text-[#9DC23B]" />
                            </div>
                            <h3 className="font-heading font-semibold text-[#4A5D23] mb-2">Visit Us</h3>
                            <p className="text-[#5C6B40]">
                                123 Premium Lane<br />
                                Chocolate City, CC 12345<br />
                                United States
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-8"
                    >
                        <form onSubmit={handleSubmit} className="glass-card p-8" data-testid="contact-form">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <Label htmlFor="name" className="text-[#4A5D23]">Your Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="mt-2 h-12 bg-white/80 border-[#4A5D23]/20 focus:border-[#9DC23B] rounded-xl text-[#4A5D23]"
                                        data-testid="contact-name-input"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="email" className="text-[#4A5D23]">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="mt-2 h-12 bg-white/80 border-[#4A5D23]/20 focus:border-[#9DC23B] rounded-xl text-[#4A5D23]"
                                        data-testid="contact-email-input"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <Label htmlFor="subject" className="text-[#4A5D23]">Subject</Label>
                                <Input
                                    id="subject"
                                    type="text"
                                    placeholder="How can we help?"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="mt-2 h-12 bg-white/80 border-[#4A5D23]/20 focus:border-[#9DC23B] rounded-xl text-[#4A5D23]"
                                    data-testid="contact-subject-input"
                                />
                            </div>

                            <div className="mb-6">
                                <Label htmlFor="message" className="text-[#4A5D23]">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us more about your inquiry..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className='flex w-full border px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-2 bg-white/80 border-[#4A5D23]/20 focus:border-[#9DC23B] rounded-xl min-h-[150px] text-[#4A5D23]'
                                    data-testid="contact-message-input"
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={loading}
                                className="bg-[#9DC23B] hover:bg-[#B4D334] rounded-full font-medium w-full sm:w-auto"
                                data-testid="contact-submit-btn"
                            >
                                {loading ? (
                                    <span className="spinner w-5 h-5 border-2" />
                                ) : (
                                    <>
                                        Send Message <Send className="ml-2 w-4 h-4" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
