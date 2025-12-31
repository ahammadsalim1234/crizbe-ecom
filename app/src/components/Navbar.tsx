"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingCart, User, Menu, X, LogOut } from 'lucide-react';
// import { useAuth } from '../context/AuthContext';
// import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import Link from 'next/link';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // const { user, logout } = useAuth();
    // const { cartCount } = useCart();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // const handleLogout = () => {
    //     logout();
    //     router.push('/');
    // };

    return (
        <nav
            data-testid="navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-scrolled py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2" data-testid="logo-link">
                        <span className="font-heading text-2xl md:text-3xl font-bold text-[#4A5D23]">
                            Crizbe
                        </span>
                        <span className="font-accent text-sm text-[#9DC23B] hidden sm:block">
                            be premium
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/"
                            className="text-[#4A5D23] hover:text-[#9DC23B] transition-colors font-medium"
                            data-testid="nav-home"
                        >
                            Home
                        </Link>
                        <Link
                            href="/products"
                            className="text-[#4A5D23] hover:text-[#9DC23B] transition-colors font-medium"
                            data-testid="nav-products"
                        >
                            Products
                        </Link>
                        <Link
                            href="/contact"
                            className="text-[#4A5D23] hover:text-[#9DC23B] transition-colors font-medium"
                            data-testid="nav-contact"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center gap-4">
                        {/* Cart */}
                        <Link
                            href="/cart"
                            className="relative p-2 text-[#4A5D23] hover:text-[#9DC23B] transition-colors"
                            data-testid="nav-cart"
                        >
                            <ShoppingCart className="w-6 h-6" />
                            {/* {cartCount > 0 && (
                                <span className="cart-badge" data-testid="cart-count">
                                    {cartCount}
                                </span>
                            )} */}
                        </Link>

                        {/* User Menu */}
                        {/* {user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-[#4A5D23] hover:text-[#9DC23B]"
                                        data-testid="user-menu-trigger"
                                    >
                                        <User className="w-6 h-6" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-48">
                                    <DropdownMenuItem asChild>
                                        <Link href="/profile" className="cursor-pointer" data-testid="nav-profile">
                                            My Profile
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={handleLogout}
                                        className="cursor-pointer text-red-600"
                                        data-testid="nav-logout"
                                    >
                                        <LogOut className="w-4 h-4 mr-2" />
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Link href="/login" data-testid="nav-login">
                                <Button className="btn-primary text-sm py-2 px-4">
                                    Login
                                </Button>
                            </Link>
                        )} */}

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 text-[#4A5D23]"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            data-testid="mobile-menu-toggle"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-[#4A5D23]/10 pt-4">
                        <div className="flex flex-col gap-4">
                            <Link
                                href="/"
                                className="text-[#4A5D23] hover:text-[#9DC23B] transition-colors font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/products"
                                className="text-[#4A5D23] hover:text-[#9DC23B] transition-colors font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Products
                            </Link>
                            <Link
                                href="/contact"
                                className="text-[#4A5D23] hover:text-[#9DC23B] transition-colors font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
