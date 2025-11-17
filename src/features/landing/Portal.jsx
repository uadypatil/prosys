// src/pages/Portal.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, BarChart3, HeadphonesIcon, Building2, Users, Menu, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Portal() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-quart',
            once: true,
            offset: 80,
        });
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const toggleLoginDropdown = () => setIsLoginDropdownOpen(!isLoginDropdownOpen);

    return (
        <>
            {/* ===== CUSTOM SCROLLBAR + GLOBAL STYLES ===== */}
            <style jsx>{`
        /* Amber Theme Scrollbar */
        ::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          background: #fffbeb;
          border-left: 1px solid #fde68a;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f59e0b, #d97706);
          border-radius: 6px;
          border: 2px solid #fffbeb;
          box-shadow: 0 4px 12px rgba(251, 146, 60, 0.4);
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #f97316, #c2410c);
          box-shadow: 0 6px 20px rgba(251, 146, 60, 0.6);
        }

        /* Smooth hover for ALL buttons */
        .btn-amber {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          position: relative;
          overflow: hidden;
        }
        .btn-amber::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.7s;
        }
        .btn-amber:hover::before {
          left: 100%;
        }
        .btn-amber:hover {
          transform: translateY(-4px) scale(1.05) !important;
          box-shadow: 0 20px 40px -10px rgba(251, 146, 60, 0.5) !important;
        }

        /* Mobile Menu Overlay */
        .mobile-menu-overlay {
          @media (max-width: 768px) {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: -1;
          }
        }
      `}</style>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">

                {/* Navbar */}
                <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/95 border-b border-amber-100 shadow-lg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                        <Link to="/" className="flex items-center space-x-2 sm:space-x-3" data-aos="fade-down">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-xl">
                                <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                            </div>
                            <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                                HelpDeskPro
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center space-x-6 lg:space-x-10" data-aos="fade-down" data-aos-delay="150">
                            <Link to="/" className="text-gray-700 hover:text-amber-600 font-semibold text-base sm:text-lg transition">Home</Link>
                            <Link to="#features" className="text-gray-700 hover:text-amber-600 font-semibold text-base sm:text-lg transition">Features</Link>
                            <Link to="/pricing" className="text-gray-700 hover:text-amber-600 font-semibold text-base sm:text-lg transition">Pricing</Link>
                            <Link to="/about" className="text-gray-700 hover:text-amber-600 font-semibold text-base sm:text-lg transition">Who We Are?</Link>
                            <Link to="/contactus" className="text-gray-700 hover:text-amber-600 font-semibold text-base sm:text-lg transition">Connect Us</Link>
                        </nav>

                        {/* Desktop Actions */}
                        <div className="hidden md:flex items-center space-x-3 lg:space-x-5" data-aos="fade-down" data-aos-delay="300">
                            {/* === LOGIN DROPDOWN === */}
                            <div className="relative">
                                <button
                                    onClick={toggleLoginDropdown}
                                    className="text-gray-700 font-bold text-base sm:text-lg hover:text-amber-600 transition flex items-center space-x-1 sm:space-x-2"
                                >
                                    <span>Login</span>
                                    <svg className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${isLoginDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                <div className={`absolute right-0 mt-2 sm:mt-3 w-56 sm:w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-amber-200 transition-all duration-300 transform ${isLoginDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                    <div className="py-3 sm:py-4">
                                        <Link
                                            to="/org/login"
                                            onClick={() => setIsLoginDropdownOpen(false)}
                                            className="flex items-center px-4 sm:px-6 py-3 sm:py-4 hover:bg-amber-50 transition-all group/item border-b border-amber-100"
                                        >
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-md">
                                                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900 text-sm sm:text-base">Organization Admin</p>
                                                <p className="text-xs sm:text-sm text-gray-600">Manage teams, tickets & settings</p>
                                            </div>
                                        </Link>

                                        {/* <Link
                                            to="/employee/login"
                                            onClick={() => setIsLoginDropdownOpen(false)}
                                            className="flex items-center px-4 sm:px-6 py-3 sm:py-4 hover:bg-amber-50 transition-all group/item"
                                        >
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-md">
                                                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900 text-sm sm:text-base">Employee / Agent</p>
                                                <p className="text-xs sm:text-sm text-gray-600">View assigned tickets & resolve</p>
                                            </div>
                                        </Link> */}
                                    </div>

                                    <div className="px-4 sm:px-6 py-2 sm:py-3 bg-amber-50 border-t border-amber-200">
                                        <p className="text-xs sm:text-sm text-amber-800 font-medium">
                                            New here? <Link to="/org/register" className="underline hover:text-amber-600" onClick={() => setIsLoginDropdownOpen(false)}>Create organization →</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <Link
                                to="/org/register"
                                className="btn-amber px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-2xl font-bold text-base sm:text-lg shadow-xl"
                            >
                                Get Started Free
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="md:hidden text-gray-700 hover:text-amber-600 transition p-2"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Nav Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-amber-100 px-4 py-6 space-y-4">
                            <nav className="space-y-4">
                                <Link to="/" onClick={closeMobileMenu} className="block text-gray-700 hover:text-amber-600 font-semibold text-lg transition py-2">Home</Link>
                                <Link to="#features" onClick={closeMobileMenu} className="block text-gray-700 hover:text-amber-600 font-semibold text-lg transition py-2">Features</Link>
                                <Link to="/pricing" onClick={closeMobileMenu} className="block text-gray-700 hover:text-amber-600 font-semibold text-lg transition py-2">Pricing</Link>
                                <Link to="/about" onClick={closeMobileMenu} className="block text-gray-700 hover:text-amber-600 font-semibold text-lg transition py-2">Who We Are?</Link>
                                <Link to="/contactus" onClick={closeMobileMenu} className="block text-gray-700 hover:text-amber-600 font-semibold text-lg transition py-2">Connect Us</Link>
                            </nav>

                            <div className="pt-4 border-t border-amber-200 space-y-4">
                                <button
                                    onClick={toggleLoginDropdown}
                                    className="w-full text-left text-gray-700 font-bold text-lg hover:text-amber-600 transition flex items-center justify-between py-2"
                                >
                                    <span>Login</span>
                                    <svg className={`w-5 h-5 transition-transform ${isLoginDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Mobile Dropdown */}
                                <div className={`w-full bg-amber-50 rounded-xl p-4 space-y-3 transition-all duration-300 overflow-hidden ${isLoginDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <Link
                                        to="/org/login"
                                        onClick={() => { setIsLoginDropdownOpen(false); closeMobileMenu(); }}
                                        className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:bg-amber-100 transition"
                                    >
                                        <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Building2 className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm">Organization Admin</p>
                                            <p className="text-xs text-gray-600">Manage teams, tickets & settings</p>
                                        </div>
                                    </Link>

                                    {/* <Link
                                        to="/employee/login"
                                        onClick={() => { setIsLoginDropdownOpen(false); closeMobileMenu(); }}
                                        className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:bg-amber-100 transition"
                                    >
                                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Users className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm">Employee / Agent</p>
                                            <p className="text-xs text-gray-600">View assigned tickets & resolve</p>
                                        </div>
                                    </Link> */}

                                    <p className="text-xs text-amber-800 font-medium pt-2">
                                        New here? <Link to="/org/register" onClick={closeMobileMenu} className="underline hover:text-amber-600">Create organization →</Link>
                                    </p>
                                </div>

                                <Link
                                    to="/org/register"
                                    onClick={closeMobileMenu}
                                    className="block w-full btn-amber text-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-2xl font-bold text-base shadow-xl"
                                >
                                    Get Started Free
                                </Link>
                            </div>
                        </div>
                    )}
                </header>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && <div className="mobile-menu-overlay" onClick={closeMobileMenu} />}

                {/* Hero */}
                <section className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto text-center">
                        <div data-aos="fade-up">
                            <span className="inline-flex items-center bg-amber-100 text-amber-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-bold mb-6 sm:mb-8 shadow-md">
                                <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-pulse" />
                                Deploy in 5 minutes • Zero overhead
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6 sm:mb-8" data-aos="fade-up" data-aos-delay="200">
                            Modernize your IT Service<br className="hidden sm:block" />
                            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-700 bg-clip-text text-transparent">
                                without the headache.
                            </span>
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12" data-aos="fade-up" data-aos-delay="400">
                            One dashboard to rule incidents, requests, and workflows.
                            AI-powered, real-time, and loved by 10,000+ teams.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center" data-aos="fade-up" data-aos-delay="600">
                            <Link
                                to="/org/register"
                                className="btn-amber px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-2xl font-bold text-base sm:text-xl shadow-2xl flex items-center justify-center"
                            >
                                Start Trial
                                <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
                            </Link>
                            <button className="px-6 sm:px-10 py-4 sm:py-5 bg-white border-3 border-amber-500 text-amber-600 rounded-2xl font-bold text-base sm:text-xl hover:bg-amber-50 transition shadow-lg">
                                Watch 2-min Demo
                            </button>
                        </div>

                        <p className="mt-8 sm:mt-10 text-gray-500 text-base sm:text-lg" data-aos="fade-up" data-aos-delay="800">
                            ✨ No credit card • forever for teams under 10
                        </p>
                    </div>
                </section>

                {/* Features */}
                <section id="features" className="py-16 sm:py-20 md:py-28 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12 sm:mb-16 md:mb-20">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6" data-aos="fade-up">Built for speed. Designed for humans.</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
                            {[
                                { icon: Shield, title: "Incident Management", desc: "Auto-triage, SLA tracking, root cause in one click." },
                                { icon: Zap, title: "AI Workflows", desc: "Auto-assign, auto-resolve, auto-notify. Magic." },
                                { icon: BarChart3, title: "Live Analytics", desc: "Real-time dashboards that actually make sense." },
                                { icon: HeadphonesIcon, title: "24/7 Human Support", desc: "Real humans, real fast. No bots (except the good ones)." }
                            ].map((f, i) => (
                                <div
                                    key={i}
                                    data-aos="zoom-in-up"
                                    data-aos-delay={i * 150}
                                    className="group bg-gradient-to-br from-amber-50/80 to-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border-2 border-amber-200 hover:border-amber-400 transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-4 hover:shadow-xl sm:hover:shadow-2xl"
                                >
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-xl group-hover:scale-110 transition">
                                        <f.icon className="w-6 h-6 sm:w-9 sm:h-9 text-white" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{f.title}</h3>
                                    <p className="text-gray-600 text-base sm:text-lg">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Dashboard Preview */}
                <section id="dashboard" className="py-16 sm:py-20 md:py-28 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 sm:mb-16 md:mb-20" data-aos="fade-up">Your command center. Zero clutter.</h2>
                        <div
                            data-aos="flip-left"
                            data-aos-delay="300"
                            className="bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl sm:shadow-3xl border-2 sm:border-4 border-amber-200 p-6 sm:p-8 md:p-12 max-w-5xl mx-auto hover:scale-[1.02] transition"
                        >
                            <div className="bg-gradient-to-r from-amber-500 to-amber-700 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-white mb-6 sm:mb-8 md:mb-10">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black">Live Project Dashboard</h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
                                {[
                                    { v: "128", l: "Active Tickets", c: "amber" },
                                    { v: "42", l: "Resolved Today", c: "emerald" },
                                    { v: "99.2%", l: "SLA Met", c: "cyan" },
                                    { v: "156", l: "Tickets/Day", c: "violet" }
                                ].map((s, i) => (
                                    <div key={i} data-aos="fade-up" data-aos-delay={i * 150} className="text-center">
                                        <div className={`text-3xl sm:text-4xl md:text-5xl font-black text-${s.c}-600`}>{s.v}</div>
                                        <div className="text-gray-700 text-base sm:text-lg md:text-xl mt-2 sm:mt-3">{s.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700">
                    <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 sm:mb-8" data-aos="zoom-in">Stop fighting tickets. Start winning.</h2>
                        <Link
                            to="/org/register"
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="btn-amber inline-flex items-center px-8 sm:px-12 md:px-16 py-5 sm:py-6 md:py-7 bg-white text-amber-600 rounded-2xl sm:rounded-3xl font-black text-lg sm:text-xl md:text-2xl shadow-2xl sm:shadow-3xl"
                        >
                            Launch Your Helpdesk
                            <ArrowRight className="ml-2 sm:ml-3 md:ml-4 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-950 text-gray-400 py-12 sm:py-16 md:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                        <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center">
                                <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                            </div>
                            <span className="text-2xl sm:text-3xl font-black text-white">HelpDeskPro</span>
                        </div>
                        <p className="text-base sm:text-xl">© 2025 HelpDeskPro • Made with 🔥 in India</p>
                    </div>
                </footer>
            </div>
        </>
    );
}