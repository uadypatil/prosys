// src/components/PortalNavbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Building2, Menu, X, ChevronDown } from 'lucide-react';

export default function PortalNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsLoginOpen(false);
    };
    const toggleLogin = () => setIsLoginOpen(!isLoginOpen);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/95 border-b border-amber-100/50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4 md:py-3">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3" onClick={closeMobileMenu}>
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-md">
                            <Zap className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                            HelpDeskPro
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Home</Link>
                        <Link to="#features" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Features</Link>
                        <Link to="/pricing" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Pricing</Link>
                        <Link to="/about" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">About</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Contact</Link>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="relative">
                            <button
                                onClick={toggleLogin}
                                className="flex items-center space-x-1 text-gray-700 hover:text-amber-600 font-medium transition-colors"
                            >
                                <span>Login</span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${isLoginOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isLoginOpen && (
                                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-amber-100 py-2">
                                    <Link
                                        to="/org/login"
                                        className="flex items-center px-4 py-3 hover:bg-amber-50 transition-colors"
                                        onClick={() => setIsLoginOpen(false)}
                                    >
                                        <Building2 className="w-5 h-5 text-amber-500 mr-3" />
                                        <div>
                                            <p className="font-medium text-gray-900">Organization Login</p>
                                            <p className="text-sm text-gray-500">Admin dashboard access</p>
                                        </div>
                                    </Link>
                                    <div className="border-t border-amber-100 mt-1 pt-1">
                                        <Link
                                            to="/org/register"
                                            className="block w-full text-center px-4 py-3 text-amber-600 hover:bg-amber-50 font-medium transition-colors"
                                            onClick={() => setIsLoginOpen(false)}
                                        >
                                            Create Account
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        <Link
                            to="/org/register"
                            className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleMobileMenu} className="md:hidden p-2 text-gray-700 hover:text-amber-600">
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden pb-4 border-t border-amber-100">
                        <div className="space-y-4 pt-4">
                            <Link to="/" className="block py-2 text-gray-700 hover:text-amber-600 font-medium" onClick={closeMobileMenu}>Home</Link>
                            <Link to="#features" className="block py-2 text-gray-700 hover:text-amber-600 font-medium" onClick={closeMobileMenu}>Features</Link>
                            <Link to="/pricing" className="block py-2 text-gray-700 hover:text-amber-600 font-medium" onClick={closeMobileMenu}>Pricing</Link>
                            <Link to="/about" className="block py-2 text-gray-700 hover:text-amber-600 font-medium" onClick={closeMobileMenu}>About</Link>
                            <Link to="/contact" className="block py-2 text-gray-700 hover:text-amber-600 font-medium" onClick={closeMobileMenu}>Contact</Link>
                            <div className="pt-2">
                                <Link to="/org/register" className="block w-full text-center py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-medium" onClick={closeMobileMenu}>
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}