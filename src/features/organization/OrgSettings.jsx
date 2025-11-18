// src/components/org/OrgSettings.jsx
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { Save, Edit } from 'lucide-react';

const OrgSettings = () => {
    const [settings, setSettings] = useState({
        emailNotifications: true,
        autoAssignTickets: true,
        slaThreshold: 24,
    });

    const handleToggle = (key) => {
        setSettings({ ...settings, [key]: !settings[key] });
    };

    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out-quart', once: true });
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-black text-gray-900 mb-6" data-aos="fade-down">Organization Settings</h1>
            <div className="bg-white rounded-2xl p-6 shadow-lg max-w-2xl" data-aos="fade-up">
                <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 border-b border-amber-100">
                        <span className="font-semibold">Email Notifications</span>
                        <button className="relative inline-flex h-6 w-11 items-center rounded-full" onClick={() => handleToggle('emailNotifications')}>
                            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'}`} />
                        </button>
                    </div>
                    <div className="flex justify-between items-center p-4 border-b border-amber-100">
                        <span className="font-semibold">Auto Assign Tickets</span>
                        <button className="relative inline-flex h-6 w-11 items-center rounded-full" onClick={() => handleToggle('autoAssignTickets')}>
                            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${settings.autoAssignTickets ? 'translate-x-6' : 'translate-x-1'}`} />
                        </button>
                    </div>
                    <div className="flex justify-between items-center p-4">
                        <span className="font-semibold">SLA Threshold (hours)</span>
                        <input type="number" value={settings.slaThreshold} onChange={(e) => setSettings({ ...settings, slaThreshold: e.target.value })} className="px-4 py-2 border border-amber-200 rounded-xl w-20" />
                    </div>
                </div>
                <button className="btn-amber w-full mt-6 py-3 rounded-xl flex items-center justify-center space-x-2" onClick={() => {/* Save logic */}}>
                    <Save className="w-4 h-4" /> Save Settings
                </button>
            </div>
        </div>
    );
};

export default OrgSettings;