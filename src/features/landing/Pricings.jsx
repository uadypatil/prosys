// src/pages/Pricing.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Zap, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PortalNavbar from '../../components/PortalNavbar';
import PortalFooter from '../../components/PortalFooter';

export default function Pricing() {
    const scrollContainerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 so Growth is in center initially

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 80,
        });
    }, []);

    // Auto-scroll every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            scrollNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const scrollToIndex = (index) => {
        if (scrollContainerRef.current) {
            const cards = scrollContainerRef.current.children;
            if (cards[index]) {
                cards[index].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center',
                });
                setCurrentIndex(index);
            }
        }
    };

    const scrollPrev = () => {
        const newIndex = currentIndex === 0 ? 2 : currentIndex - 1;
        scrollToIndex(newIndex);
    };

    const scrollNext = () => {
        const newIndex = currentIndex === 2 ? 0 : currentIndex + 1;
        scrollToIndex(newIndex);
    };

    const plans = [
        {
            name: "Starter",
            price: "Free",
            desc: "Perfect for small teams getting started",
            features: [
                "Up to 10 agents",
                "Unlimited tickets",
                "Email & web form support",
                "Basic reports",
                "Knowledge base",
                "Community support"
            ],
            cta: "Your Current Plan",
            href: "#",
            active: true,
        },
        {
            name: "Growth",
            price: "₹799",
            per: "/agent/month",
            desc: "Best for growing teams needing automation",
            features: [
                "Everything in Starter",
                "Unlimited agents",
                "Live chat & workflows",
                "SLA management",
                "Custom fields & forms",
                "API access",
                "Priority email support"
            ],
            cta: "Start 14-day Trial",
            href: "/org/register",
            popular: true,
        },
        {
            name: "Enterprise",
            price: "Custom",
            desc: "For large organizations with advanced needs",
            features: [
                "Everything in Growth",
                "SSO (SAML & OAuth)",
                "Dedicated account manager",
                "99.99% uptime SLA",
                "Custom integrations",
                "White-label option",
                "On-premise deployment"
            ],
            cta: "Contact Sales",
            href: "/contact",
            popular: false,
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <PortalNavbar />

            {/* Hero */}
            <section className="pt-24 pb-16 text-center bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-5 py-2 rounded-full text-sm font-semibold mb-6" data-aos="fade-up">
                            <Zap className="w-5 h-5" />
                            Simple, transparent pricing
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="100">
                            Choose the Right Plan for Your Team
                        </h1>
                        <p className="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="200">
                            No hidden fees. Cancel anytime. Proudly priced in Indian Rupees.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Desktop: Grid */}
                    <div className="hidden md:grid md:grid-cols-3 gap-8">
                        {plans.map((plan, i) => (
                            <PricingCard key={i} plan={plan} index={i} />
                        ))}
                    </div>

                    {/* Mobile: Carousel */}
                    <div className="md:hidden relative">
                        <div
                            ref={scrollContainerRef}
                            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth gap-6 px-4"
                            style={{ scrollSnapType: 'x mandatory' }}
                        >
                            {/* Duplicate first & last for infinite feel */}
                            <div className="w-6 flex-shrink-0" />
                            {plans.map((plan, i) => (
                                <div
                                    key={i}
                                    className="w-80 flex-shrink-0 snap-center"
                                >
                                    <PricingCard plan={plan} index={i} />
                                </div>
                            ))}
                            <div className="w-6 flex-shrink-0" />
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={scrollPrev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all z-10"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-700" />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all z-10"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-700" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-8">
                            {plans.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => scrollToIndex(i)}
                                    className={`w-2 h-2 rounded-full transition-all ${i === currentIndex
                                        ? 'bg-amber-600 w-8'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="py-12 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-lg text-gray-700 font-medium">
                        Proudly serving teams across India
                        <span className="text-2xl ml-3">•</span>
                        <span className="text-amber-600 font-bold"> GST Included</span>
                        <span className="text-2xl mx-3">•</span>
                        Cancel or downgrade anytime
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="zoom-in">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join thousands of Indian teams already using HelpDeskPro
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
                            Talk to Sales
                        </Link>
                    </div>
                </div>
            </section>

            <PortalFooter />
        </div>
    );
}

// Reusable Pricing Card Component
// function PricingCard({ plan, index }) {
//     return (
//         <div
//             className={`relative rounded-2xl p-8 transition-all h-full ${plan.popular
//                 ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-2xl'
//                 : 'bg-white border border-gray-200 shadow-lg'
//                 }`}
//             data-aos="fade-up"
//             data-aos-delay={index * 150}
//         >
//             {plan.popular && (
//                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold">
//                     MOST POPULAR
//                 </div>
//             )}

//             <div className="text-center mb-8">
//                 <h3 className={`text-2xl font-bold mb-3 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
//                     {plan.name}
//                 </h3>
//                 <div className="mb-4">
//                     <span className={`text-5xl font-black ${plan.popular ? 'text-white' : 'text-amber-600'}`}>
//                         {plan.price}
//                     </span>
//                     {plan.per && <span className={`text-lg block mt-1 ${plan.popular ? 'text-amber-100' : 'text-gray-600'}`}>{plan.per}</span>}
//                 </div>
//                 <p className={`text-base ${plan.popular ? 'text-amber-100' : 'text-gray-600'}`}>
//                     {plan.desc}
//                 </p>
//             </div>

//             <ul className="space-y-4 mb-10">
//                 {plan.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-start">
//                         <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-amber-600'}`} />
//                         <span className={`text-base ${plan.popular ? 'text-white' : 'text-gray-700'}`}>
//                             {feature}
//                         </span>
//                     </li>
//                 ))}
//             </ul>

//             <Link
//                 to={plan.href}
//                 className={`w-full py-4 rounded-xl font-semibold text-center block transition-all ${plan.popular
//                     ? 'bg-white text-amber-600 hover:bg-amber-50'
//                     : plan.active
//                         ? 'bg-gray-200 text-gray-600 cursor-not-allowed'
//                         : 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-lg'
//                     }`}
//             >
//                 {plan.cta}
//             </Link>
//         </div>
//     );
// }

function PricingCard({ plan, index, isMobile = false }) {
    return (
        <div
            className={`
                relative rounded-2xl p-8 transition-all h-full
                ${plan.popular
                    ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-2xl'
                    : 'bg-white border border-gray-200 shadow-lg'
                }
                ${isMobile ? 'mt-12' : 'mt-8'}   /* Increased top margin */
            `}
            data-aos="fade-up"
            data-aos-delay={index * 150}
        >
            {/* "MOST POPULAR" Badge – now perfectly visible */}
            {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap z-10 shadow-lg">
                    MOST POPULAR
                </div>
            )}

            {/* Rest of the card content */}
            <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-3 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                </h3>
                <div className="mb-4">
                    <span className={`text-5xl font-black ${plan.popular ? 'text-white' : 'text-amber-600'}`}>
                        {plan.price}
                    </span>
                    {plan.per && (
                        <span className={`text-lg block mt-1 ${plan.popular ? 'text-amber-100' : 'text-gray-600'}`}>
                            {plan.per}
                        </span>
                    )}
                </div>
                <p className={`text-base ${plan.popular ? 'text-amber-100' : 'text-gray-600'}`}>
                    {plan.desc}
                </p>
            </div>

            <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                        <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-amber-600'}`} />
                        <span className={`text-base ${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            <Link
                to={plan.href}
                className={`w-full py-4 rounded-xl font-semibold text-center block transition-all ${
                    plan.popular
                        ? 'bg-white text-amber-600 hover:bg-amber-50'
                        : plan.active
                        ? 'bg-gray-200 text-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-lg'
                }`}
            >
                {plan.cta}
            </Link>
        </div>
    );
}