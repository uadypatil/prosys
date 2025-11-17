// src/pages/OrganizationRegistration.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, Mail, Phone, MapPin, Shield, Upload, CheckCircle, Zap } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function OrganizationRegistration() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1
        organization_name: '',
        organization_type: 'Private',
        registration_number: '',
        established_year: '',
        short_description: '',
        number_of_employees: '',
        website_url: '',

        // Step 2
        contact_mail: '',
        contact_number: '',
        alt_contact_number: '',
        head_office_address: '',
        alt_address: '',
        pincode: '',

        // Step 3
        admin_password: '',
        confirm_password: '',

        // Step 4
        GST_number: '',
        organization_logo: null,
        tax_id_proof: null,
    });

    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out-cubic', once: true, offset: 80 });
    }, []);

    const handleNext = () => setStep(prev => Math.min(prev + 1, 4));
    const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));

    const steps = [
        { num: 1, title: "Organization Details", icon: Building2 },
        { num: 2, title: "Contact & Address", icon: MapPin },
        { num: 3, title: "Admin Account", icon: Shield },
        { num: 4, title: "Documents", icon: Upload },
    ];

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50/30 pt-7 pb-16 px-6">

                {/* Back Button */}
                <div className="fixed top-8 left-8 z-50">
                    <Link to="/" className="group flex items-center space-x-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg border border-amber-200 hover:border-amber-400 transition-all hover:shadow-xl">
                        <ArrowLeft className="w-5 h-5 text-amber-600 group-hover:-translate-x-1 transition" />
                        <span className="font-semibold text-gray-700">Back</span>
                    </Link>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12" data-aos="fade-up">
                        {/* <div className="inline-flex items-center bg-amber-100/80 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-300 mb-6">
                            <Zap className="w-5 h-5 text-amber-700 mr-2" />
                            <span className="font-bold text-amber-800">Free 14-day trial • No credit card</span>
                        </div> */}
                        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
                            Register Your
                            <span className="inline bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent"> Organization</span>
                        </h1>
                        <p className="text-xl text-gray-600">Complete in 4 simple steps</p>
                    </div>

                    {/* Progress Tabs */}
                    <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="200">
                        <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-4 border border-amber-200">
                            {steps.map((s, i) => (
                                <div key={i} className="flex items-center">
                                    <div className={`flex items-center justify-center w-14 h-14 rounded-full font-bold text-lg transition-all duration-500
                    ${step >= s.num ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-xl' : 'bg-gray-200 text-gray-500'}`}
                                    >
                                        {step > s.num ? <CheckCircle className="w-7 h-7" /> : s.num}
                                    </div>
                                    <div className="ml-3 hidden md:block">
                                        <p className={`font-semibold ${step >= s.num ? 'text-amber-700' : 'text-gray-500'}`}>{s.title}</p>
                                    </div>
                                    {i < steps.length - 1 && (
                                        <div className={`w-24 h-1 mx-4 transition-all duration-500 ${step > s.num ? 'bg-amber-500' : 'bg-gray-300'}`} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form Card */}
                    <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 p-10 md:p-12" data-aos="fade-up" data-aos-delay="400">

                        {/* Step 1: Organization Details */}
                        {step === 1 && (
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                                    <Building2 className="w-10 h-10 text-amber-600 mr-4" />
                                    Organization Information
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Organization Name *</label>
                                        <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition" placeholder="Acme Technologies Pvt Ltd" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Organization Type *</label>
                                        <select className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition">
                                            <option>Private</option>
                                            <option>Government</option>
                                            <option>NGO</option>
                                            <option>Educational</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Registration Number (CIN/GSTIN) *</label>
                                        <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition" placeholder="U12345KA2020PTC123456" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Established Year</label>
                                        <input type="number" min="1900" max="2025" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition" placeholder="2020" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">No. of Employees</label>
                                        <input type="number" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition" placeholder="150" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Website</label>
                                        <input type="url" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition" placeholder="https://acme.in" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Short Description</label>
                                    <textarea rows="3" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition resize-none" placeholder="We build AI-powered tools for Indian startups..."></textarea>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Contact & Address */}
                        {step === 2 && (
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                                    <MapPin className="w-10 h-10 text-amber-600 mr-4" />
                                    Contact & Address
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Official Email *</label>
                                        <input type="email" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition" placeholder="admin@acme.in" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                                        <input type="tel" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition" placeholder="+91 98765 43210" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Alternate Phone</label>
                                        <input type="tel" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition" placeholder="+91 91234 56789" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">PIN Code *</label>
                                        <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition" placeholder="560034" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Head Office Address *</label>
                                    <textarea rows="3" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition resize-none" placeholder="123, MG Road, Koramangala..."></textarea>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Alternate Address (Optional)</label>
                                    <textarea rows="3" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition resize-none" placeholder="Branch office in Delhi..."></textarea>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Admin Account */}
                        {step === 3 && (
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                                    <Shield className="w-10 h-10 text-amber-600 mr-4" />
                                    Admin Account
                                </h2>
                                <div className="max-w-md mx-auto space-y-8">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Admin Password *</label>
                                        <input type="password" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition" placeholder="••••••••••••" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password *</label>
                                        <input type="password" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition" placeholder="••••••••••••" />
                                    </div>
                                    <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
                                        <p className="text-sm text-amber-800 font-medium">Password must be 8+ characters with uppercase, number & symbol</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Documents */}
                        {step === 4 && (
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                                    <Upload className="w-10 h-10 text-amber-600 mr-4" />
                                    Documents & Verification
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">GST Number (Optional)</label>
                                        <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition" placeholder="22AAAAA0000A1Z5" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Organization Logo</label>
                                        <div className="border-2 border-dashed border-amber-300 rounded-xl p-8 text-center hover:border-amber-500 transition">
                                            <Upload className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                                            <p className="text-sm text-gray-600">Click to upload (PNG/JPG, max 2MB)</p>
                                        </div>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Tax ID / Incorporation Proof</label>
                                        <div className="border-2 border-dashed border-amber-300 rounded-xl p-8 text-center hover:border-amber-500 transition">
                                            <Upload className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                                            <p className="text-sm text-gray-600">Upload Certificate of Incorporation, GST cert, etc. (PDF, max 5MB)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 p-6 rounded-2xl border border-emerald-200">
                                    <p className="text-emerald-800 font-semibold">Your account will be activated within 24 hours after verification.</p>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-12">
                            <button
                                onClick={handlePrev}
                                disabled={step === 1}
                                className={`px-8 py-4 rounded-xl font-bold transition ${step === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                            >
                                Previous
                            </button>

                            {step < 4 ? (
                                <button
                                    onClick={handleNext}
                                    className="btn-amber px-10 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-xl"
                                >
                                    Next Step →
                                </button>
                            ) : (
                                <button className="btn-amber px-12 py-5 rounded-xl font-black text-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-2xl flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6" />
                                    <span>Complete Registration</span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}