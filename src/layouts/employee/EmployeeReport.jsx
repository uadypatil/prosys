// src/pages/EmployeeReport.jsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EmployeeNavbar from '../../components/EmployeeNavbar';
import EmployeeSidebar from '../../components/EmployeeSidebar';
import ReportGenerator from '../../components/ReportGenerator';

const dummyReportData = [
    { label: "Total Tickets", value: "45", trend: "+12%" },
    { label: "Avg Resolution Time", value: "2.3 days", trend: "-8%" },
    { label: "Satisfaction Score", value: "4.7/5", trend: "+5%" },
    { label: "Open Tickets", value: "8", trend: "-3%" },
];

export default function EmployeeReport({ role }) {
    const [user] = useState({ name: "John Doe", role, email: "john@blinke.com" });

    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-out-quart', once: true });
    }, []);

    const handleGenerate = () => {
        // Simulate PDF generation
        alert('Report downloaded!');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50/20">
            <EmployeeNavbar user={user} />
            <EmployeeSidebar role={role} />

            <main className="ml-72 pt-24 px-10 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-10" data-aos="fade-down">
                        <h1 className="text-4xl font-black text-gray-900 mb-2">Ticket Report</h1>
                        <p className="text-xl text-gray-600">Insights based on {role} data</p>
                    </div>

                    <ReportGenerator data={dummyReportData} onGenerate={handleGenerate} data-aos="fade-up" />
                </div>
            </main>
        </div>
    );
}