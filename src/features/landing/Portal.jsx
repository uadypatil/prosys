// src/features/landing/Portal.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, BarChart3, Headphones, Users, Clock, CheckCircle, Headset } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PortalNavbar from '../../components/PortalNavbar';
import PortalFooter from '../../components/PortalFooter';

export default function Portal() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <PortalNavbar />

            {/* Hero Section */}
            <section className="pt-24 pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-3xl mx-auto" data-aos="fade-up">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Simple, Fast & Reliable Helpdesk for Growing Teams
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Manage tickets, automate workflows, and delight your users — all from one clean, powerful dashboard.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/org/register"
                                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                            >
                                Start Free Trial
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link
                                to="/demo"
                                className="px-8 py-4 border-2 border-amber-500 text-amber-600 rounded-lg font-semibold hover:bg-amber-50 transition-all"
                            >
                                Schedule a Demo
                            </Link>
                        </div>
                        <p className="mt-6 text-sm text-gray-500">
                            No credit card required • Free forever for teams under 10
                        </p>
                    </div>
                </div>
            </section>

            {/* Trust Badges / Stats */}
            <section className="py-16 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "10,000+", label: "Happy Customers" },
                            { value: "99.9%", label: "Uptime Guaranteed" },
                            { value: "24/7", label: "Human Support" },
                            { value: "< 2 min", label: "Avg. Response Time" }
                        ].map((stat, i) => (
                            <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="text-3xl md:text-4xl font-bold text-amber-600">{stat.value}</div>
                                <div className="text-gray-600 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Everything You Need. Nothing You Don’t.
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Clean design. Smart automation. Built for real teams doing real work.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: CheckCircle, title: "Smart Ticket Routing", desc: "Automatically assign tickets to the right agent or team based on category, priority, or keywords." },
                            { icon: Zap, title: "Workflow Automation", desc: "Save hours with canned responses, SLA alerts, triggers, and auto-escalations." },
                            { icon: BarChart3, title: "Real-Time Reports", desc: "Track resolution times, agent performance, and customer satisfaction in one glance." },
                            { icon: Users, title: "Self-Service Portal", desc: "Let users submit tickets, track status, and browse knowledge base articles 24/7." },
                            { icon: Headset, title: "Multi-Channel Support", desc: "Email, web form, live chat, and phone — all tickets flow into one unified inbox." },
                            { icon: Shield, title: "SLA & Priority Management", desc: "Set response & resolution deadlines. Get notified before anything slips." }
                        ].map((feature, i) => (
                            <div
                                key={i}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-5">
                                    <feature.icon className="w-6 h-6 text-amber-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Loved by Teams Like Yours
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "Switched from Zendesk and never looked back. Cleaner interface, faster support, half the price.",
                                name: "Rohan Sharma",
                                role: "Head of IT, FinTech Startup"
                            },
                            {
                                quote: "Our resolution time dropped 40% in the first month. The automation rules are a lifesaver.",
                                name: "Priya Menon",
                                role: "Support Lead, SaaS Company"
                            },
                            {
                                quote: "Onboarding was a breeze. The team was up and running in under a day.",
                                name: "Arjun Patel",
                                role: "Operations Manager, E-commerce"
                            }
                        ].map((t, i) => (
                            <div
                                key={i}
                                className="bg-gray-50 p-8 rounded-xl border border-gray-200"
                                data-aos="fade-up"
                                data-aos-delay={i * 150}
                            >
                                <p className="text-gray-700 italic mb-6 leading-relaxed">"{t.quote}"</p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div className="ml-4">
                                        <p className="font-semibold text-gray-900">{t.name}</p>
                                        <p className="text-sm text-gray-600">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8" data-aos="zoom-in">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Ready to Simplify Your Support?
                    </h2>
                    <p className="text-xl mb-10 opacity-90">
                        Join 10,000+ teams already saving time and delighting users.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/org/register"
                            className="px-10 py-4 bg-white text-amber-600 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center"
                        >
                            Start Free Today
                            <ArrowRight className="ml-3 w-5 h-5" />
                        </Link>
                        <Link
                            to="/pricing"
                            className="px-10 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
                        >
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>

            <PortalFooter />
        </div>
    );
}