// src/pages/About.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Users, Globe, Shield, Heart, ArrowRight, Building2 } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PortalNavbar from '../../components/PortalNavbar';
import PortalFooter from '../../components/PortalFooter';

export default function About() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
        });
    }, []);

    const team = [
        { name: "Arjun Patel", role: "Founder & CEO", desc: "Ex-Zoho • Built helpdesk tools used by 500+ companies" },
        { name: "Priya Sharma", role: "Head of Design", desc: "Ex-Freshdesk • Designed experiences for millions of users" },
        { name: "Rahul Mehta", role: "Chief Technology Officer", desc: "Scaled systems systems handling 10M+ tickets daily" }
    ];

    const values = [
        { icon: Zap, title: "Speed First", desc: "Built for performance. Fast setup, faster resolutions." },
        { icon: Shield, title: "Security by Default", desc: "Enterprise-grade encryption and compliance built-in." },
        { icon: Heart, title: "Customer Obsessed", desc: "Real humans. Real fast. Always here when you need us." },
        { icon: Building2, title: "Made in India", desc: "Proudly engineered in India, for teams worldwide." }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <PortalNavbar />

            {/* Hero */}
            <section className="pt-24 pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-5 py-2 rounded-full text-sm font-semibold mb-8" data-aos="fade-up">
                            <Globe className="w-5 h-5" />
                            Born in India • Trusted Worldwide
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight" data-aos="fade-up" data-aos-delay="100">
                            Simple, Reliable Helpdesk Software<br />
                            Built for Growing Teams
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            We started HelpDeskPro because we were tired of overpriced, bloated tools that take months to set up. 
                            So we built a modern alternative — fast, intuitive, and proudly priced in Indian Rupees.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                        {[
                            { value: "10,000+", label: "Teams Worldwide" },
                            { value: "99.9%", label: "Uptime Guaranteed" },
                            { value: "4.9/5", label: "Customer Rating" },
                            { value: "30+", label: "Countries Served" }
                        ].map((stat, i) => (
                            <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="text-4xl md:text-5xl font-bold text-amber-600">{stat.value}</div>
                                <div className="text-gray-600 mt-2 text-lg">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">
                            What We Stand For
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                            Everything we build is guided by these core principles.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, i) => (
                            <div key={i} className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-200" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-16 h-16 mx-auto mb-6 bg-amber-100 rounded-2xl flex items-center justify-center">
                                    <value.icon className="w-9 h-9 text-amber-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-200" data-aos="fade-right">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                To empower every growing business — from startups to enterprises — with fast, reliable, 
                                and affordable IT service management tools that just work.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-200" data-aos="fade-left">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                To become the most trusted helpdesk platform in India and power support teams across the globe 
                                by 2030.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">
                            Meet the Team Behind HelpDeskPro
                        </h2>
                        <p className="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="100">
                            Experienced builders who’ve lived the pain of bad support tools.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                        {team.map((member, i) => (
                            <div key={i} className="text-center" data-aos="fade-up" data-aos-delay={i * 150}>
                                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-lg">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                <p className="text-amber-600 font-medium mt-1">{member.role}</p>
                                <p className="text-gray-600 mt-4 text-sm">{member.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-aos="zoom-in">
                        Ready to Simplify Your Support?
                    </h2>
                    <p className="text-xl mb-10 opacity-90">
                        Join thousands of teams already saving time with HelpDeskPro
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/org/register"
                            className="px-10 py-4 bg-white text-amber-600 rounded-lg font-bold text-lg hover:shadow-xl transition-all inline-flex items-center justify-center"
                        >
                            Start Free Trial
                            <ArrowRight className="ml-3 w-5 h-5" />
                        </Link>
                        <Link
                            to="/contact"
                            className="px-10 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            <PortalFooter />
        </div>
    );
}