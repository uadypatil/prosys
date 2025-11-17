// src/pages/EmployeeSettings.jsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EmployeeNavbar from '../../components/EmployeeNavbar';
import EmployeeSidebar from '../../components/EmployeeSidebar';
import SettingsForm from '../../components/SettingsForm';

export default function EmployeeSettings({ role }) {
    const [user, setUser] = useState({ name: "John Doe", role, email: "john@blinke.com", phone: "+91-9876543210" });

    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-out-quart', once: true });
    }, []);

    const handleSave = (updatedUser) => {
        setUser(updatedUser);
        alert('Settings saved!');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50/20">
            <EmployeeNavbar user={user} />
            <EmployeeSidebar role={role} />

            <main className="ml-72 pt-24 px-10 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-10" data-aos="fade-down">
                        <h1 className="text-4xl font-black text-gray-900 mb-2">Settings</h1>
                        <p className="text-xl text-gray-600">Customize your profile and preferences</p>
                    </div>

                    <SettingsForm user={user} onSave={handleSave} data-aos="fade-up" />
                </div>
            </main>
        </div>
    );
}