// src/components/org/OrgDashboard.jsx

import React, { useEffect } from 'react';
import AOS from 'aos';
import { Users, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const OrgDashboard = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out-quart', once: true });
    }, []);

    // Maps for Tailwind classes (dynamic classes won't work directly)
    const colorMap = {
        indigo: "from-indigo-500 to-indigo-600",
        emerald: "from-emerald-500 to-emerald-600",
        amber: "from-amber-500 to-amber-600",
        violet: "from-violet-500 to-violet-600"
    };

    const stats = [
        { title: "Total Employees", value: "1,248", change: "+12%", icon: Users, color: "indigo" },
        { title: "Tickets Solved Today", value: "89", change: "+23%", icon: CheckCircle, color: "emerald" },
        { title: "Open Tickets", value: "34", change: "-8%", icon: AlertCircle, color: "amber" },
        { title: "Avg. Resolution Time", value: "2h 14m", change: "-18%", icon: Clock, color: "violet" },
    ];

    return (
        <div className="p-6">

            {/* Header */}
            <h1 className="text-3xl font-black text-gray-900 mb-6" data-aos="fade-down">
                Dashboard Overview
            </h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {stats.map((stat, i) => {
                    const Gradient = colorMap[stat.color];
                    const Icon = stat.icon;

                    return (
                        <div
                            key={i}
                            className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition" />
                            <div className="relative p-8">

                                {/* Icon */}
                                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${Gradient} text-white shadow-lg mb-5`}>
                                    <Icon className="w-7 h-7" />
                                </div>

                                {/* Title */}
                                <p className="text-sm text-gray-500 font-medium">{stat.title}</p>

                                {/* Value */}
                                <p className="text-4xl font-black text-gray-900 mt-2">{stat.value}</p>

                                {/* Change */}
                                <p
                                    className={`text-sm font-bold mt-3 ${stat.change.startsWith('+') ? 'text-emerald-600' : 'text-amber-600'
                                        }`}
                                >
                                    {stat.change} from yesterday
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Recent Activity Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <div
                    className="bg-white rounded-2xl p-6 shadow-lg"
                    data-aos="fade-up"
                >
                    <h2 className="text-xl font-bold mb-4">Recent Employees</h2>
                    {/* Add list/table here */}
                </div>

                <div
                    className="bg-white rounded-2xl p-6 shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <h2 className="text-xl font-bold mb-4">Recent Tickets</h2>
                    {/* Add list/table here */}
                </div>
            </div>
        </div>
    );
};

export default OrgDashboard;
