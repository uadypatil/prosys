// src/components/org/OrgReports.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import { BarChart3, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrgReports = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out-quart', once: true });
    }, []);

    const reportTypes = [
        { name: 'Ticket Report', path: '/org/reports/generate/ticket', desc: 'Generate ticket analytics report' },
        { name: 'Employee Report', path: '/org/reports/generate/employee', desc: 'Employee performance overview' },
        { name: 'Performance Analysis', path: '/org/reports/generate/performance', desc: 'Detailed employee metrics' },
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-black text-gray-900 mb-6" data-aos="fade-down">Reports & Analysis</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
                {reportTypes.map((report, i) => (
                    <Link key={report.name} to={report.path} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition border border-amber-100">
                        <BarChart3 className="w-12 h-12 text-amber-600 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{report.name}</h3>
                        <p className="text-gray-600 mb-4">{report.desc}</p>
                        <button className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-semibold">
                            Generate <Download className="w-4 h-4" />
                        </button>
                    </Link>
                ))}
            </div>
            <div className="mt-8 text-center">
                <Link to="/org/reports/view" className="btn-amber px-8 py-4 rounded-xl text-lg">
                    View Generated Reports
                </Link>
            </div>
        </div>
    );
};

export default OrgReports;