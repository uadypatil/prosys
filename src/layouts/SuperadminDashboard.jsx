// src/pages/SuperadminDashboard.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SuperadminNavbar from '../components/SuperadminNavbar';
import SuperadminSidebar from '../components/SuperadminSidebar';
import OrganizationCard from '../components/OrganizationCard';

const dummyPendingOrgs = [
    { id: 1, name: "TechWave Solutions", email: "admin@techwave.in", regNumber: "U12345KA2024PTC987654", date: "05 Nov 2025", status: "Pending" },
    { id: 2, name: "GreenEarth NGO", email: "contact@greenearth.org", regNumber: "NGO-2024-5678", date: "04 Nov 2025", status: "Pending" },
    { id: 3, name: "Delhi Public School", email: "principal@dps.edu.in", regNumber: "EDU-DEL-2025-001", date: "03 Nov 2025", status: "Pending" },
];

export default function SuperadminDashboard() {
    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-out-quart', once: true });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50/20">
            <SuperadminNavbar />
            <SuperadminSidebar />

            <main className="ml-72 pt-24 px-10 pb-20">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="mb-10" data-aos="fade-down">
                        <h1 className="text-4xl font-black text-gray-900 mb-2">Superadmin Command Center</h1>
                        <p className="text-xl text-gray-600">Manage all organizations across BlinkE platform</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {[
                            { label: "Pending Requests", value: "12", color: "from-yellow-400 to-amber-500", icon: "Clock" },
                            { label: "Total Organizations", value: "1,847", color: "from-amber-500 to-orange-600", icon: "Building2" },
                            { label: "Active Organizations", value: "1,692", color: "from-emerald-500 to-teal-600", icon: "CheckCircle" },
                            { label: "Total Employees", value: "48,291", color: "from-blue-500 to-indigo-600", icon: "Users" },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200 p-8" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                                    <stat.icon className="w-8 h-8 text-white" />
                                </div>
                                <p className="text-gray-600 text-sm font-semibold">{stat.label}</p>
                                <p className="text-4xl font-black text-gray-900 mt-2">{stat.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Pending Organizations */}
                    <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 p-10" data-aos="fade-up" data-aos-delay="400">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-3xl font-black text-gray-900">Pending Organization Requests</h2>
                            <span className="px-6 py-3 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 font-bold rounded-full border border-amber-300">
                                {dummyPendingOrgs.length} New
                            </span>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {dummyPendingOrgs.map((org) => (
                                <OrganizationCard key={org.id} org={org} />
                            ))}
                        </div>
                    </div>

                    {/* Footer Note */}
                    <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="600">
                        <p className="text-gray-500 text-sm">
                            Built with <span className="text-red-500">❤️</span> in Bengaluru •
                            <span className="font-bold text-amber-600"> BlinkE Enterprise v2.1</span>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}