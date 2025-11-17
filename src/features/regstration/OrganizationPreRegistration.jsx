// src/pages/OrganizationRegistration.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Building2, Mail, Calendar, Globe, FileText, CheckCircle, Zap } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createOrganization } from '../../utils/UseOrganizationIntegrationHouse';
// Assuming createOrganization is imported from your API utilities
// import { createOrganization } from '../api/organizations'; // Adjust path as needed

export default function OrganizationPreRegistration() {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();
    const [formData, setFormData] = useState({
        organization_name: '',
        organization_type: 'Private',
        established_year: '',
        website_url: '',
        short_description: '',
        contact_email: '',
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out-cubic', once: true, offset: 80 });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error on change
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
        // Clear submit error on input
        if (submitError) {
            setSubmitError('');
        }
    };

    const validateField = (name, value) => {
        switch (name) {
            case 'organization_name':
                if (!value.trim()) return 'Organization name is required.';
                if (value.trim().length < 2) return 'Organization name must be at least 2 characters.';
                return '';
            case 'organization_type':
                if (!value) return 'Please select an organization type.';
                return '';
            case 'established_year':
                const year = parseInt(value);
                if (!value) return 'Established year is required.';
                if (isNaN(year) || year < 1900 || year > currentYear) return `Established year must be between 1900 and ${currentYear}.`;
                return '';
            case 'website_url':
                if (!value) return 'Website is required.';
                const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
                if (!urlPattern.test(value)) return 'Please enter a valid website URL (e.g., https://example.com).';
                return '';
            case 'short_description':
                if (!value.trim()) return 'Short description is required.';
                if (value.trim().length < 10) return 'Short description must be at least 10 characters.';
                return '';
            case 'contact_email':
                if (!value) return 'Email is required.';
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(value)) return 'Please enter a valid email address.';
                return '';
            default:
                return '';
        }
    };

    const validateForm = () => {
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setIsLoading(true);
            setSubmitError('');
            setSubmitSuccess(false);
            try {
                const requestBody = {
                    organization_name: formData.organization_name,
                    organization_type: formData.organization_type,
                    organization_mail: formData.contact_email,
                    established_year: parseInt(formData.established_year),
                    short_description: formData.short_description,
                    website_url: formData.website_url,
                };
                const result = await createOrganization(requestBody);
                console.log('Organization created successfully:', result);
                setSubmitSuccess(true);
                // Optionally redirect after success (e.g., to login or dashboard)
                // navigate('/org/login');
                // Or delay redirect: setTimeout(() => navigate('/org/login'), 2000);
            } catch (error) {
                console.error('Error creating organization:', error);
                setSubmitError(error.message || 'Failed to create organization. Please try again.');
            } finally {
                setIsLoading(false);
            }
        }
    };

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

                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12" data-aos="fade-up">
                        <div className="inline-flex items-center bg-amber-100/80 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-300 mb-6">
                            <Zap className="w-5 h-5 text-amber-700 mr-2" />
                            <span className="font-bold text-amber-800">Complete your registration in a very short process</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
                            Register Your
                            <span className="inline bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent"> Organization</span>
                        </h1>
                        <p className="text-xl text-gray-600">Just 6 essential fields – done in minutes!</p>
                    </div>

                    {/* Form Card */}
                    <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 p-10 md:p-12" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center mb-10">
                            <Building2 className="w-10 h-10 text-amber-600 mr-4" />
                            Quick Organization Setup
                        </h2>

                        {submitError && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6">
                                {submitError}
                            </div>
                        )}

                        {submitSuccess && (
                            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl mb-6">
                                Organization created successfully! You can now log in.
                            </div>
                        )}

                        <div className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Organization Name *</label>
                                    <input
                                        type="text"
                                        name="organization_name"
                                        value={formData.organization_name}
                                        onChange={handleInputChange}
                                        disabled={isLoading}
                                        className={`w-full px-5 py-4 rounded-xl border transition ${errors.organization_name ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100' : 'border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100'} ${isLoading ? 'bg-gray-50 cursor-not-allowed' : ''}`}
                                        placeholder="Acme Technologies Pvt Ltd"
                                    />
                                    {errors.organization_name && <p className="text-red-500 text-sm mt-1">{errors.organization_name}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Organization Type *</label>
                                    <select
                                        name="organization_type"
                                        value={formData.organization_type}
                                        onChange={handleInputChange}
                                        disabled={isLoading}
                                        className={`w-full px-5 py-4 rounded-xl border transition ${errors.organization_type ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100' : 'border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100'} ${isLoading ? 'bg-gray-50 cursor-not-allowed' : ''}`}
                                    >
                                        <option value="">Select Type</option>
                                        <option value="Private">Private</option>
                                        <option value="Government">Government</option>
                                        <option value="NGO">NGO</option>
                                        <option value="Educational">Educational</option>
                                    </select>
                                    {errors.organization_type && <p className="text-red-500 text-sm mt-1">{errors.organization_type}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Established Year *</label>
                                    <input
                                        type="number"
                                        name="established_year"
                                        value={formData.established_year}
                                        onChange={handleInputChange}
                                        min="1900"
                                        max={currentYear}
                                        disabled={isLoading}
                                        className={`w-full px-5 py-4 rounded-xl border transition ${errors.established_year ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100' : 'border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100'} ${isLoading ? 'bg-gray-50 cursor-not-allowed' : ''}`}
                                        placeholder="2020"
                                    />
                                    {errors.established_year && <p className="text-red-500 text-sm mt-1">{errors.established_year}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Website *</label>
                                    <input
                                        type="url"
                                        name="website_url"
                                        value={formData.website_url}
                                        onChange={handleInputChange}
                                        disabled={isLoading}
                                        className={`w-full px-5 py-4 rounded-xl border transition ${errors.website_url ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100' : 'border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100'} ${isLoading ? 'bg-gray-50 cursor-not-allowed' : ''}`}
                                        placeholder="https://acme.in"
                                    />
                                    {errors.website_url && <p className="text-red-500 text-sm mt-1">{errors.website_url}</p>}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Short Description *</label>
                                <textarea
                                    name="short_description"
                                    value={formData.short_description}
                                    onChange={handleInputChange}
                                    rows="3"
                                    disabled={isLoading}
                                    className={`w-full px-5 py-4 rounded-xl border transition resize-none ${errors.short_description ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100' : 'border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100'} ${isLoading ? 'bg-gray-50 cursor-not-allowed' : ''}`}
                                    placeholder="We build AI-powered tools for Indian startups..."
                                ></textarea>
                                {errors.short_description && <p className="text-red-500 text-sm mt-1">{errors.short_description}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Official Email *</label>
                                <input
                                    type="email"
                                    name="contact_email"
                                    value={formData.contact_email}
                                    onChange={handleInputChange}
                                    disabled={isLoading}
                                    className={`w-full px-5 py-4 rounded-xl border transition ${errors.contact_email ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100' : 'border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100'} ${isLoading ? 'bg-gray-50 cursor-not-allowed' : ''}`}
                                    placeholder="admin@acme.in"
                                />
                                {errors.contact_email && <p className="text-red-500 text-sm mt-1">{errors.contact_email}</p>}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center mt-12">
                            <button
                                type="submit"
                                disabled={isLoading || Object.keys(errors).length > 0}
                                className="px-12 py-5 rounded-xl font-black text-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-2xl flex items-center space-x-3 hover:shadow-3xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Creating...</span>
                                    </>
                                ) : (
                                    <>
                                        <CheckCircle className="w-6 h-6" />
                                        <span>Complete Registration</span>
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 p-6 rounded-2xl border border-emerald-200 mt-8 text-center">
                            <p className="text-emerald-800 font-semibold">Your organization will be set up instantly – welcome aboard!</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}