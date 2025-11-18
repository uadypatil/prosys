// src/components/org/OrgProfile.jsx
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { User, Mail, Phone, Building, Edit3, Save } from 'lucide-react';

const OrgProfile = () => {
    const [profile, setProfile] = useState({
        name: 'HelpDeskPro Inc.',
        type: 'Corporate',
        email: 'admin@helpdeskpro.com',
        contact: '+91-9876543210',
        address: 'Mumbai, India',
        logo: null,
        completeness: 75, // Percentage
    });
    const [editing, setEditing] = useState(false);

    const handleEdit = () => setEditing(true);
    const handleSave = () => {
        setEditing(false);
        // Save logic
    };

    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out-quart', once: true });
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-black text-gray-900 mb-6" data-aos="fade-down">Organization Profile</h1>
            <div className="max-w-2xl mx-auto" data-aos="fade-up">
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Profile Completeness</span>
                        <span>{profile.completeness}%</span>
                    </div>
                    <div className="w-full bg-amber-200 rounded-full h-2">
                        <div className="bg-amber-600 h-2 rounded-full" style={{ width: `${profile.completeness}%` }}></div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-100">
                    <div className="text-center mb-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            {profile.logo ? <img src={profile.logo} alt="Logo" className="w-full h-full rounded-full object-cover" /> : <Building className="w-12 h-12 text-white" />}
                        </div>
                        <h2 className="text-2xl font-black text-gray-900">{profile.name}</h2>
                        <p className="text-amber-600 font-semibold">{profile.type}</p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 p-4 bg-amber-50 rounded-xl">
                            <User className="w-5 h-5 text-amber-600" />
                            <div className="flex-1">
                                <label className="block text-sm font-semibold text-gray-700">Organization Name</label>
                                {editing ? (
                                    <input type="text" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} className="w-full px-3 py-2 border border-amber-200 rounded" />
                                ) : <p className="text-gray-900">{profile.name}</p>}
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 p-4 bg-amber-50 rounded-xl">
                            <Mail className="w-5 h-5 text-amber-600" />
                            <div className="flex-1">
                                <label className="block text-sm font-semibold text-gray-700">Email</label>
                                {editing ? (
                                    <input type="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} className="w-full px-3 py-2 border border-amber-200 rounded" />
                                ) : <p className="text-gray-900">{profile.email}</p>}
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 p-4 bg-amber-50 rounded-xl">
                            <Phone className="w-5 h-5 text-amber-600" />
                            <div className="flex-1">
                                <label className="block text-sm font-semibold text-gray-700">Contact</label>
                                {editing ? (
                                    <input type="tel" value={profile.contact} onChange={(e) => setProfile({ ...profile, contact: e.target.value })} className="w-full px-3 py-2 border border-amber-200 rounded" />
                                ) : <p className="text-gray-900">{profile.contact}</p>}
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 p-4 bg-amber-50 rounded-xl">
                            <Building className="w-5 h-5 text-amber-600" />
                            <div className="flex-1">
                                <label className="block text-sm font-semibold text-gray-700">Address</label>
                                {editing ? (
                                    <textarea value={profile.address} onChange={(e) => setProfile({ ...profile, address: e.target.value })} className="w-full px-3 py-2 border border-amber-200 rounded" />
                                ) : <p className="text-gray-900">{profile.address}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center space-x-4 mt-8">
                        {!editing ? (
                            <button onClick={handleEdit} className="px-6 py-3 border border-amber-500 text-amber-600 rounded-xl hover:bg-amber-50 flex items-center space-x-2">
                                <Edit3 className="w-4 h-4" /> Edit Profile
                            </button>
                        ) : (
                            <button onClick={handleSave} className="btn-amber px-6 py-3 rounded-xl flex items-center space-x-2">
                                <Save className="w-4 h-4" /> Save Changes
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrgProfile;