// src/components/org/OrgDepartments.jsx
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { Plus, Edit, Trash2, Printer, Search, Users, UserCog } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrgDepartments = () => {
    const [departments, setDepartments] = useState([
        { id: 1, branchId: 1, name: 'IT Support', orgId: 1, active: true },
        { id: 2, branchId: 1, name: 'HR', orgId: 1, active: true },
    ]);
    const [filter, setFilter] = useState({ search: '', active: '' });

    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out-quart', once: true });
    }, []);

    const filteredDepts = departments.filter(d => 
        d.name.toLowerCase().includes(filter.search.toLowerCase()) &&
        (filter.active === '' || d.active.toString() === filter.active)
    );

    const handleDelete = (id) => {
        setDepartments(departments.filter(d => d.id !== id));
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-black text-gray-900" data-aos="fade-down">Departments Management</h1>
                <button className="btn-amber px-4 py-2 rounded-xl flex items-center space-x-2" data-aos="fade-up">
                    <Plus className="w-4 h-4" /> Add Department
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl p-4 mb-6 shadow-lg" data-aos="fade-up">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search departments..."
                            className="w-full pl-10 pr-4 py-2 border border-amber-200 rounded-xl"
                            value={filter.search}
                            onChange={(e) => setFilter({ ...filter, search: e.target.value })}
                        />
                    </div>
                    <select className="px-4 py-2 border border-amber-200 rounded-xl" value={filter.active} onChange={(e) => setFilter({ ...filter, active: e.target.value })}>
                        <option value="">All Status</option>
                        <option value="true">Active</option>
                        <option value="false">Inactive</option>
                    </select>
                </div>
            </div>

            {/* List View */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                <table className="w-full">
                    <thead className="bg-amber-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Name</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Branch ID</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Status</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-amber-100">
                        {filteredDepts.map((dept) => (
                            <tr key={dept.id} className="hover:bg-amber-50">
                                <td className="px-6 py-4 font-semibold">{dept.name}</td>
                                <td className="px-6 py-4">{dept.branchId}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${dept.active ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                                        {dept.active ? 'Active' : 'Inactive'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 space-x-2">
                                    <Link to={`/org/departments/${dept.id}/roles`} className="p-2 text-blue-600 hover:bg-blue-50 rounded"><UserCog className="w-4 h-4" /></Link>
                                    <Link to={`/org/departments/${dept.id}/employees`} className="p-2 text-green-600 hover:bg-green-50 rounded"><Users className="w-4 h-4" /></Link>
                                    <button className="p-2 text-amber-600 hover:bg-amber-50 rounded"><Edit className="w-4 h-4" /></button>
                                    <button className="p-2 text-red-600 hover:bg-red-50 rounded" onClick={() => handleDelete(dept.id)}><Trash2 className="w-4 h-4" /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Print Button */}
            {filteredDepts.length > 0 && (
                <div className="mt-6 text-center">
                    <button className="btn-amber px-6 py-3 rounded-xl flex items-center space-x-2 mx-auto" onClick={() => window.print()}>
                        <Printer className="w-4 h-4" /> Print List
                    </button>
                </div>
            )}
        </div>
    );
};

export default OrgDepartments;