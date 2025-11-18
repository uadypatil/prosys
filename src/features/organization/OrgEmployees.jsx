// src/components/org/OrgEmployees.jsx
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { Plus, Edit, Trash2, Printer, Search } from 'lucide-react';

const OrgEmployees = () => {
    const [employees, setEmployees] = useState([
        { id: 1, name: 'John Doe', email: 'john@org.com', role: 'Admin', branch: 'HQ', dept: 'IT', status: 'Active', joined: '2025-01-01' },
        { id: 2, name: 'Jane Smith', email: 'jane@org.com', role: 'Agent', branch: 'Delhi', dept: 'HR', status: 'Active', joined: '2025-01-02' },
    ]);
    const [filter, setFilter] = useState({ search: '', status: '', role: '' });

    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out-quart', once: true });
    }, []);

    const filteredEmployees = employees.filter(e => 
        e.name.toLowerCase().includes(filter.search.toLowerCase()) &&
        (filter.status === '' || e.status === filter.status) &&
        (filter.role === '' || e.role === filter.role)
    );

    const handleDelete = (id) => {
        setEmployees(employees.filter(e => e.id !== id));
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-black text-gray-900" data-aos="fade-down">Employees Management</h1>
                <button className="btn-amber px-4 py-2 rounded-xl flex items-center space-x-2" data-aos="fade-up">
                    <Plus className="w-4 h-4" /> Add Employee
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl p-4 mb-6 shadow-lg" data-aos="fade-up">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input type="text" placeholder="Search employees..." className="w-full pl-10 pr-4 py-2 border border-amber-200 rounded-xl" value={filter.search} onChange={(e) => setFilter({ ...filter, search: e.target.value })} />
                    </div>
                    <select className="px-4 py-2 border border-amber-200 rounded-xl" value={filter.status} onChange={(e) => setFilter({ ...filter, status: e.target.value })}>
                        <option value="">All Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                    <select className="px-4 py-2 border border-amber-200 rounded-xl" value={filter.role} onChange={(e) => setFilter({ ...filter, role: e.target.value })}>
                        <option value="">All Roles</option>
                        <option value="Admin">Admin</option>
                        <option value="Agent">Agent</option>
                    </select>
                </div>
            </div>

            {/* List View */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                <table className="w-full">
                    <thead className="bg-amber-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Name</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Email</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Role</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Branch</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Dept</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Status</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Joined</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-amber-100">
                        {filteredEmployees.map((emp) => (
                            <tr key={emp.id} className="hover:bg-amber-50">
                                <td className="px-6 py-4 font-semibold">{emp.name}</td>
                                <td className="px-6 py-4">{emp.email}</td>
                                <td className="px-6 py-4">{emp.role}</td>
                                <td className="px-6 py-4">{emp.branch}</td>
                                <td className="px-6 py-4">{emp.dept}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${emp.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                                        {emp.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{emp.joined}</td>
                                <td className="px-6 py-4 space-x-2">
                                    <button className="p-2 text-amber-600 hover:bg-amber-50 rounded"><Edit className="w-4 h-4" /></button>
                                    <button className="p-2 text-red-600 hover:bg-red-50 rounded" onClick={() => handleDelete(emp.id)}><Trash2 className="w-4 h-4" /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Print Button */}
            {filteredEmployees.length > 0 && (
                <div className="mt-6 text-center">
                    <button className="btn-amber px-6 py-3 rounded-xl flex items-center space-x-2 mx-auto" onClick={() => window.print()}>
                        <Printer className="w-4 h-4" /> Print List
                    </button>
                </div>
            )}
        </div>
    );
};

export default OrgEmployees;