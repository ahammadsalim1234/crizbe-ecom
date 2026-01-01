"use client"
import { useState } from 'react';
import { toast } from 'sonner';
import { Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';


const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);


    return (
        <div className="text-center" data-testid="newsletter-section">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
                Join Our Sweet Community
            </h3>
            <p className="text-white/70 mb-6 max-w-md mx-auto">
                Subscribe for exclusive offers, new flavor announcements, and chocolate tips!
            </p>
            <form
                onSubmit={() => ("")}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                data-testid="newsletter-form"
            >
                <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-12 rounded-full bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#B4D334]"
                    data-testid="newsletter-email-input"
                />
                <Button
                    type="submit"
                    disabled={loading}
                    className="h-12 px-6 bg-[#9DC23B] hover:bg-[#B4D334] rounded-full font-medium"
                    data-testid="newsletter-submit-btn"
                >
                    {loading ? (
                        <span className="spinner w-5 h-5 border-2" />
                    ) : (
                        <>
                            Subscribe <Send className="w-4 h-4 ml-2" />
                        </>
                    )}
                </Button>
            </form>
        </div>
    );
};

export default Newsletter;
