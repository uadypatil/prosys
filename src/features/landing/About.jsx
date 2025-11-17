// src/pages/About.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Users, Rocket, Heart, Globe, ShieldCheck, ArrowLeft } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlobalStyles from '../../components/GlobalStyle';

export default function About() {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out-quart', once: true });
    }, []);

    return (
        <>
            <GlobalStyles />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">

                <Link
                    to="/"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="btn-amber inline-flex items-center mx-10 my-10 px-4 py-2 bg-white text-amber-600 rounded-2xl font-black text-2xl shadow-3xl"
                >
                    Back
                    <ArrowLeft className="ml-4 w-8 h-8" />
                </Link>
                {/* Hero */}
                <section className="pt-0 pb-10 px-6">
                    <div className="max-w-7xl mx-auto text-center">
                        <span className="inline-flex items-center bg-amber-100 text-amber-800 px-6 py-3 rounded-full text-lg font-bold mb-8" data-aos="fade-up">
                            <Zap className="w-6 h-6 mr-2" /> Born in India, Built for the World
                        </span>
                        <h1 className="text-6xl md:text-7xl font-black mb-8" data-aos="fade-up" data-aos-delay="200">
                            We don’t just build helpdesks.<br />
                            <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
                                We kill ticket chaos.
                            </span>
                        </h1>
                        <p className="text-2xl text-gray-600 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="400">
                            Founded by frustrated engineers who were tired of paying $99/user for bloated tools.
                            BlinkE is the helpdesk India deserved — fast, beautiful, and actually affordable.
                        </p>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                        {[
                            { icon: Users, value: "10K+", label: "Teams Trust Us" },
                            { icon: Rocket, value: "99.9%", label: "Uptime" },
                            { icon: Heart, value: "4.9/5", label: "Customer Love" },
                            { icon: Globe, value: "30+", label: "Countries" }
                        ].map((s, i) => (
                            <div key={i} data-aos="zoom-in" data-aos-delay={i * 150}>
                                <s.icon className="w-16 h-16 mx-auto mb-4 text-amber-600" />
                                <div className="text-5xl font-black text-amber-600">{s.value}</div>
                                <div className="text-gray-600 text-xl">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-28 px-6">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-3xl border-2 border-amber-200" data-aos="fade-right">
                            <ShieldCheck className="w-16 h-16 text-amber-600 mb-6" />
                            <h3 className="text-4xl font-black mb-6">Our Mission</h3>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Make enterprise-grade IT service management accessible to every startup,
                                agency, and SME in India — without the insane pricing or 6-month setup.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-12 rounded-3xl border-2 border-amber-200" data-aos="fade-left">
                            <Rocket className="w-16 h-16 text-amber-600 mb-6" />
                            <h3 className="text-4xl font-black mb-6">Our Vision</h3>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Power 1 million Indian teams by 2030 with the fastest, most loved helpdesk on the planet.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="py-28 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-5xl font-black mb-20" data-aos="fade-up">Built by people who get it</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { name: "Arjun Patel", role: "CEO & Founder", desc: "Ex-Zoho, built helpdesks for 500+ companies" },
                                { name: "Priya Sharma", role: "Head of Design", desc: "Made Freshdesk beautiful in 2018" },
                                { name: "Rahul Mehta", role: "CTO", desc: "Scaled systems to 10M tickets/day" }
                            ].map((t, i) => (
                                <div key={i} className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition" data-aos="flip-up" data-aos-delay={i * 200}>
                                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-5xl font-black text-white">
                                        {t.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <h4 className="text-2xl font-bold">{t.name}</h4>
                                    <p className="text-amber-600 font-semibold">{t.role}</p>
                                    <p className="text-gray-600 mt-4">{t.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 bg-gradient-to-r from-amber-600 to-amber-700">
                    <div className="max-w-4xl mx-auto text-center px-6">
                        <h2 className="text-6xl font-black text-white mb-8" data-aos="zoom-in">
                            Ready to join the revolution?
                        </h2>
                        <Link
                            to="/register"
                            className="btn-amber inline-flex items-center px-16 py-7 bg-white text-amber-600 rounded-3xl font-black text-2xl shadow-3xl"
                            data-aos="fade-up" data-aos-delay="300"
                        >
                            Start Free — No CC Required
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}