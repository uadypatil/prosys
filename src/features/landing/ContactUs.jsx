// src/pages/ContactUs.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Clock, Headset, Building2 } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PortalNavbar from '../../components/PortalNavbar';
import PortalFooter from '../../components/PortalFooter';

export default function ContactUs() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 80,
        });
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <PortalNavbar />

            {/* Hero */}
            <section className="pt-24 pb-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-5 py-2 rounded-full text-sm font-semibold mb-6" data-aos="fade-up">
                            <Clock className="w-5 h-5" />
                            Average response: <strong className="ml-1">47 minutes</strong>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" data-aos="fade-up" data-aos-delay="100">
                            We’re Here to Help You
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                            Whether you have a question, need support, or want to explore HelpDeskPro — our team in Bengaluru is ready.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form + Info */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 xl:gap-16">

                        {/* Contact Form */}
                        <div className="order-2 lg:order-1" data-aos="fade-right">
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 lg:p-10">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Send us a message</h2>

                                <form className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition"
                                            placeholder="john@company.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Company (Optional)</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition"
                                            placeholder="Acme Corp"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                                        <textarea
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition resize-none"
                                            placeholder="Tell us about your question, issue, or use case..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </button>
                                </form>

                                <p className="text-center text-sm text-gray-500 mt-6">
                                    We reply within <span className="font-semibold text-amber-600">47 minutes</span> (9AM – 9PM IST)
                                </p>
                            </div>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="order-1 lg:order-2 space-y-8" data-aos="fade-left">
                            {/* Email */}
                            <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 hover:shadow-lg transition">
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-7 h-7 text-amber-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
                                        <a href="mailto:hello@helpdeskpro.in" className="block text-amber-700 hover:text-amber-800 font-medium">
                                            hello@helpdeskpro.in
                                        </a>
                                        <a href="mailto:support@helpdeskpro.in" className="block text-amber-700 hover:text-amber-800 font-medium mt-1">
                                            support@helpdeskpro.in
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 hover:shadow-lg transition">
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-7 h-7 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
                                        <p className="text-2xl font-bold text-orange-700">+91 98765 43210</p>
                                        <p className="text-gray-600">Mon–Sat, 9:00 AM – 9:00 PM IST</p>
                                    </div>
                                </div>
                            </div>

                            {/* Office */}
                            <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 hover:shadow-lg transition">
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-7 h-7 text-amber-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Our Office</h3>
                                        <p className="text-gray-700 font-medium">Bengaluru, Karnataka</p>
                                        <p className="text-gray-600">Koramangala • India’s Startup Capital</p>
                                    </div>
                                </div>
                            </div>

                            {/* Response Time Badge */}
                            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl p-8 shadow-lg text-center">
                                <Clock className="w-12 h-12 mx-auto mb-3 opacity-90" />
                                <p className="text-3xl font-black">47 min</p>
                                <p className="text-emerald-100 font-medium">Average response time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="py-12 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-lg text-gray-700">
                        Proudly built in <span className="font-bold text-amber-600">Bengaluru, India</span> •
                        Trusted by <span className="font-bold">10,000+ teams</span> across the country
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-aos="zoom-in">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl mb-10 opacity-90">
                        Start free today — no credit card required
                    </p>
                    <Link
                        to="/org/register"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-white text-amber-600 rounded-lg font-bold text-lg hover:shadow-xl transition-all"
                    >
                        Start Free Trial
                        <Send className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <PortalFooter />
        </div>
    );
}