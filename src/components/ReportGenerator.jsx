// src/components/ReportGenerator.jsx
import React from 'react';
import { Download, Filter } from 'lucide-react';

export default function ReportGenerator({ data, onGenerate, filters }) {
    return (
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 p-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-black text-gray-900">Generate Report</h2>
                <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all">
                        <Filter className="w-4 h-4" />
                        <span>Filters</span>
                    </button>
                    <button
                        onClick={onGenerate}
                        className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                    >
                        <Download className="w-5 h-5" />
                        <span>Download PDF</span>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item, i) => (
                    <div key={i} className="p-4 bg-gray-50 rounded-xl">
                        <p className="font-bold text-gray-900">{item.label}</p>
                        <p className="text-2xl font-black text-amber-600">{item.value}</p>
                        <p className="text-sm text-gray-600">{item.trend}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}