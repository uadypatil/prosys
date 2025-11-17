// src/components/SettingsForm.jsx
import React, { useState } from 'react';
import { Save, User, Mail, Phone } from 'lucide-react';

export default function SettingsForm({ user, onSave }) {
    const [formData, setFormData] = useState(user);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 p-8 max-w-md">
            <h2 className="text-2xl font-black text-gray-900 mb-6">Profile Settings</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Name
                    </label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                    </label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        Phone
                    </label>
                    <input
                        type="tel"
                        value={formData.phone || ''}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                </div>
            </div>
            <button
                type="submit"
                className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
            >
                <Save className="w-5 h-5 inline mr-2" />
                Save Changes
            </button>
        </form>
    );
}