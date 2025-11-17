// src/components/EmployeeList.jsx
import React from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';

export default function EmployeeList({ employees, onEdit, onDelete, onAdd }) {
    return (
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-black text-gray-900">Employee Directory</h2>
                <button
                    onClick={onAdd}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                >
                    <Plus className="w-5 h-5" />
                    <span>Add Employee</span>
                </button>
            </div>
            <div className="grid gap-4">
                {employees.map((emp) => (
                    <div key={emp.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold">{emp.name.charAt(0)}</span>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">{emp.name}</p>
                                <p className="text-sm text-gray-600">{emp.email} • {emp.department}</p>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => onEdit(emp)}
                                className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                            >
                                <Edit className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => onDelete(emp.id)}
                                className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}