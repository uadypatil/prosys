// src/components/OrganizationCard.jsx
import React from 'react';
import { Check, X, Clock, Building2 } from 'lucide-react';

export default function OrganizationCardMod({ org }) {
    const statusColors = {
        Pending: 'bg-yellow-100 text-yellow-800 border-yellow-300',
        Verified: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        Rejected: 'bg-red-100 text-red-800 border-red-300',
    };

    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6 hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">{org.name}</h3>
                        <p className="text-sm text-gray-600">{org.email}</p>
                    </div>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-bold border ${statusColors[org.status]}`}>
                    {org.status}
                </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                <div>
                    <p className="text-gray-500">Reg No.</p>
                    <p className="font-semibold">{org.regNumber}</p>
                </div>
                <div>
                    <p className="text-gray-500">Applied</p>
                    <p className="font-semibold">{org.date}</p>
                </div>
            </div>

            <div className="flex space-x-3">
                <button className="flex-1 flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition">
                    <Check className="w-5 h-5" />
                    <span>Approve</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition">
                    <X className="w-5 h-5" />
                    <span>Reject</span>
                </button>
            </div>
        </div>
    );
}