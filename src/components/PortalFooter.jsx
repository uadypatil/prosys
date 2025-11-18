// src/components/PortalFooter.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

export default function PortalFooter() {
    return (
        <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 text-center sm:text-left">

                    {/* Logo + Description + Social */}
                    <div className="sm:col-span-2 lg:col-span-5 flex flex-col items-center sm:items-start">
                        <Link to="/" className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">HelpDeskPro</span>
                        </Link>

                        <p className="text-sm leading-relaxed text-gray-400 mb-6 max-w-sm text-center sm:text-left">
                            Simple, fast, and reliable helpdesk software built for growing teams.
                            Proudly made in India.
                        </p>

                        {/* Social Icons */}
                        <div className="flex justify-center sm:justify-start space-x-4">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                aria-label="Twitter"
                                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Product</h3>
                        <ul className="space-y-3 text-sm text-center sm:text-left">
                            <li><Link to="/features" className="hover:text-amber-400 transition">Features</Link></li>
                            <li><Link to="/pricing" className="hover:text-amber-400 transition">Pricing</Link></li>
                            <li><Link to="/integrations" className="hover:text-amber-400 transition">Integrations</Link></li>
                            <li><Link to="/security" className="hover:text-amber-400 transition">Security</Link></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Company</h3>
                        <ul className="space-y-3 text-sm text-center sm:text-left">
                            <li><Link to="/about" className="hover:text-amber-400 transition">About Us</Link></li>
                            <li><Link to="/careers" className="hover:text-amber-400 transition">Careers</Link></li>
                            <li><Link to="/blog" className="hover:text-amber-400 transition">Blog</Link></li>
                            <li><Link to="/contact" className="hover:text-amber-400 transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="sm:col-span-2 lg:col-span-3">
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Support</h3>
                        <ul className="space-y-3 text-sm text-center sm:text-left">
                            <li><Link to="/docs" className="hover:text-amber-400 transition">Documentation</Link></li>
                            <li><Link to="/help" className="hover:text-amber-400 transition">Help Center</Link></li>
                            <li><Link to="/status" className="hover:text-amber-400 transition">System Status</Link></li>
                            <li>
                                <a href="mailto:support@helpdeskpro.in" className="hover:text-amber-400 transition flex items-center justify-center sm:justify-start gap-2">
                                    <Mail className="w-4 h-4" />
                                    support@helpdeskpro.in
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar - Always Centered */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
                    <p className="mb-2">© 2025 HelpDeskPro Technologies Pvt. Ltd. All rights reserved.</p>
                    <p>
                        Made with <span className="text-red-500">❤️</span> in
                        <span className="text-amber-400 font-medium"> Bengaluru, India</span>
                    </p>
                </div>


            </div>
            {/* Beautiful Animated Gradient Ruler */}
            <div className="relative h-1 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-[length:300%_100%] animate-gradient-amber"></div>
        </div>
        </footer>
    );
}