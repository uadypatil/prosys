// src/components/StatCard.jsx
import React from 'react';
import { Clock, CheckCircle, Building2, Users, TicketCheck, FileBarChart } from 'lucide-react';

const iconMap = {
    Clock,
    CheckCircle,
    Building2,
    Users,
    TicketCheck,
    FileBarChart,
};

export default function StatCard({ label, value, color, icon, trend }) {
    const IconComponent = iconMap[icon] || Clock;

    return (
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200 p-8 group hover:shadow-2xl transition-all">
            <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <IconComponent className="w-8 h-8 text-white" />
            </div>
            <p className="text-gray-600 text-sm font-semibold mb-2">{label}</p>
            <p className="text-4xl font-black text-gray-900 mb-1">{value}</p>
            {trend && (
                <p className={`text-xs ${trend > 0 ? 'text-emerald-600' : 'text-red-600'} font-semibold`}>
                    {trend > 0 ? `+${trend}%` : `${trend}%`} from last week
                </p>
            )}
        </div>
    );
}