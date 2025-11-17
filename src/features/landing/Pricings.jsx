// src/pages/Pricing.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Zap } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlobalStyles from '../../components/GlobalStyle';

export default function Pricing() {
    useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

    const plans = [
        {
            name: "Starter",
            price: "₹0",
            desc: "Forever free for small teams",
            features: ["Up to 10 agents", "Unlimited tickets", "Email + Web widget", "Basic reports", "Community support"],
            cta: "Current Plan",
            popular: false
        },
        {
            name: "Growth",
            price: "₹799",
            per: "/agent/month",
            desc: "For growing teams",
            features: ["Everything in Starter", "Unlimited agents", "AI automation", "SLA & workflows", "Live chat", "API access", "Priority support"],
            cta: "Start 14-day Trial",
            popular: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            desc: "For large orgs",
            features: ["Everything in Growth", "SSO & SAML", "Dedicated manager", "99.99% uptime SLA", "White-label", "On-premise option"],
            cta: "Talk to Sales",
            popular: false
        }
    ];

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50 pt-10 pb-40 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="inline-flex items-center bg-amber-100 text-amber-800 px-6 py-3 rounded-full text-lg font-bold mb-8" data-aos="fade-up">
                        <Zap className="w-6 h-6 mr-2" /> Simple, honest pricing
                    </span>
                    <h1 className="text-6xl md:text-7xl font-black mb-8" data-aos="fade-up" data-aos-delay="200">
                        Choose your power level
                    </h1>
                    <p className="text-2xl text-gray-600 mb-16" data-aos="fade-up" data-aos-delay="400">
                        No hidden fees. No bullshit. Just results.
                    </p>

                    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                        {plans.map((p, i) => (
                            <div
                                key={i}
                                className={`relative rounded-3xl p-10 ${p.popular ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-3xl scale-110' : 'bg-white border-3 border-amber-200'} transition-all hover:shadow-2xl`}
                                data-aos="zoom-in-up"
                                data-aos-delay={i * 200}
                            >
                                {p.popular && (
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-6 py-2 rounded-full font-bold text-lg">
                                        MOST POPULAR
                                    </div>
                                )}
                                <h3 className={`text-3xl font-black mb-4 ${p.popular ? 'text-white' : 'text-gray-900'}`}>{p.name}</h3>
                                <div className="mb-8">
                                    <span className={`text-6xl font-black ${p.popular ? 'text-white' : 'text-amber-600'}`}>{p.price}</span>
                                    {p.per && <span className="text-xl">{p.per}</span>}
                                </div>
                                <p className={`text-lg mb-10 ${p.popular ? 'text-amber-100' : 'text-gray-600'}`}>{p.desc}</p>
                                <ul className="space-y-5 mb-12">
                                    {p.features.map((f, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <Check className={`w-7 h-7 mr-4 ${p.popular ? 'text-white' : 'text-amber-600'}`} />
                                            <span className="text-lg">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to={p.name === "Starter" ? "/register" : "/register"}
                                    className={`btn-amber w-full py-5 rounded-2xl font-black text-xl block text-center ${p.popular ? 'bg-white text-amber-600' : 'bg-gradient-to-r from-amber-500 to-amber-600 text-white'
                                        }`}
                                >
                                    {p.cta}
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center" data-aos="fade-up">
                        <p className="text-3xl font-bold text-gray-800">
                            🇮🇳 Proudly priced in INR • GST included • Cancel anytime
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}