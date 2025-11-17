// src/pages/ContactUs.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, ArrowLeft, Clock, Headset, Building2 } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactUs() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50/30">

                {/* Back Button - Professional Top Left */}
                <div className="fixed top-8 left-8 z-50">
                    <Link
                        to="/"
                        className="group flex items-center space-x-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg border border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-xl"
                        data-aos="fade-down"
                    >
                        <ArrowLeft className="w-5 h-5 text-amber-600 group-hover:-translate-x-1 transition" />
                        <span className="font-semibold text-gray-700">Back to Home</span>
                    </Link>
                </div>

                {/* Hero */}
                <section className="pt-32 pb-20 px-6">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="inline-flex items-center bg-amber-100/80 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-300 mb-8" data-aos="fade-up">
                            <Clock className="w-5 h-5 text-amber-700 mr-2" />
                            <span className="font-semibold text-amber-800">Average response: 47 minutes</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6" data-aos="fade-up" data-aos-delay="100">
                            Get in touch with
                            <span className="block bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                                BlinkE Support
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Whether you're evaluating BlinkE, need technical help, or just want to say hi —
                            our team in Bengaluru is ready to assist you.
                        </p>
                    </div>
                </section>

                {/* Main Grid */}
                <section className="pb-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16">

                            {/* Contact Form - Professional Glass Card */}
                            <div
                                className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 p-10 lg:p-12"
                                data-aos="fade-right"
                            >
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a message</h2>

                                <form className="space-y-7">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-200 text-gray-900 placeholder-gray-400"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Work Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-200"
                                            placeholder="john@company.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                                        <input
                                            type="text"
                                            className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-200"
                                            placeholder="Acme Corp"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">How can we help?</label>
                                        <textarea
                                            rows="5"
                                            className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-200 resize-none"
                                            placeholder="Tell us about your use case, issue, or question..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-amber w-full py-5 rounded-xl font-bold text-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3"
                                    >
                                        <Send className="w-5 h-5" />
                                        <span>Send Message</span>
                                    </button>
                                </form>

                                <p className="text-sm text-gray-500 mt-6 text-center">
                                    We typically reply within <span className="font-semibold text-amber-600">47 minutes</span> during business hours (9AM–9PM IST)
                                </p>
                            </div>

                            {/* Contact Info - Professional Cards */}
                            <div className="space-y-8" data-aos="fade-left">

                                {/* Email */}
                                <div className="bg-gradient-to-br from-amber-50/80 to-white p-8 rounded-2xl border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-start space-x-5">
                                        <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-7 h-7 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Email us</h3>
                                            <div className="space-y-2">
                                                <a href="mailto:hello@blinke.in" className="block text-lg text-amber-700 hover:text-amber-800 font-medium transition">
                                                    hello@blinke.in
                                                </a>
                                                <a href="mailto:support@blinke.in" className="block text-lg text-amber-700 hover:text-amber-800 font-medium transition">
                                                    support@blinke.in
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="bg-gradient-to-br from-orange-50/80 to-white p-8 rounded-2xl border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-start space-x-5">
                                        <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <Headset className="w-7 h-7 text-orange-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Call us</h3>
                                            <p className="text-2xl font-bold text-orange-700">+91 98765 43210</p>
                                            <p className="text-gray-600 mt-1">Mon–Sat, 9:00 AM – 9:00 PM IST</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Office */}
                                <div className="bg-gradient-to-br from-amber-50/80 to-white p-8 rounded-2xl border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-start space-x-5">
                                        <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <Building2 className="w-7 h-7 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">Visit our office</h3>
                                            <p className="text-lg text-gray-700 font-medium">Bengaluru, Karnataka</p>
                                            <p className="text-gray-600">Koramangala • India’s Silicon Valley</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Trust Badge */}
                                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-8 rounded-2xl shadow-xl">
                                    <div className="flex items-center justify-center space-x-4">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                            <Clock className="w-9 h-9" />
                                        </div>
                                        <div>
                                            <p className="text-3xl font-black">47 min</p>
                                            <p className="text-emerald-100 font-medium">Average response time</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust Bar */}
                <section className="bg-gray-900 py-16">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <p className="text-gray-400 text-lg">
                            Trusted by <span className="text-amber-400 font-bold">10,000+ Indian companies</span> •
                            Proudly built in <span className="text-white font-bold">Bengaluru</span>
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}