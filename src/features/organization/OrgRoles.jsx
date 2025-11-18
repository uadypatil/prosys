// src/components/org/OrgRoles.jsx
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { Plus, Edit, Trash2, Printer, Search } from 'lucide-react';

const OrgRoles = () => {
    const [roles, setRoles] = useState([
        { id: 1, orgId: 1, branchId: 1, deptId: 1, name: 'Admin', active: true, createdAt: '2025-01-01' },
        { id: 2, orgId: 1, branchId: 1, deptId: 1, name: 'Support Agent', active: true, createdAt: '2025-01-02' },
    ]);
    const [filter, setFilter] = useState({ search: '', active: '', branch: '', dept: '' });

    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out-quart', once: true });
    }, []);

    const filteredRoles = roles.filter(r => 
        r.name.toLowerCase().includes(filter.search.toLowerCase()) &&
        (filter.active === '' || r.active.toString() === filter.active) &&
        (filter.branch === '' || r.branchId.toString() === filter.branch) &&
        (filter.dept === '' || r.deptId.toString() === filter.dept)
    );

    const handleDelete = (id) => {
        setRoles(roles.filter(r => r.id !== id));
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-black text-gray-900" data-aos="fade-down">Roles Management</h1>
                <button className="btn-amber px-4 py-2 rounded-xl flex items-center space-x-2" data-aos="fade-up">
                    <Plus className="w-4 h-4" /> Add Role
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl p-4 mb-6 shadow-lg" data-aos="fade-up">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input type="text" placeholder="Search roles..." className="w-full pl-10 pr-4 py-2 border border-amber-200 rounded-xl" value={filter.search} onChange={(e) => setFilter({ ...filter, search: e.target.value })} />
                    </div>
                    <select className="px-4 py-2 border border-amber-200 rounded-xl" value={filter.active} onChange={(e) => setFilter({ ...filter, active: e.target.value })}>
                        <option value="">All Status</option>
                        <option value="true">Active</option>
                        <option value="false">Inactive</option>
                    </select>
                    <select className="px-4 py-2 border border-amber-200 rounded-xl" value={filter.branch} onChange={(e) => setFilter({ ...filter, branch: e.target.value })}>
                        <option value="">All Branches</option>
                        <option value="1">Branch 1</option>
                    </select>
                    <select className="px-4 py-2 border border-amber-200 rounded-xl" value={filter.dept} onChange={(e) => setFilter({ ...filter, dept: e.target.value })}>
                        <option value="">All Depts</option>
                        <option value="1">IT Support</option>
                    </select>
                </div>
            </div>

            {/* List View */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                <table className="w-full">
                    <thead className="bg-amber-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Name</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Branch</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Dept</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Status</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Created At</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-amber-100">
                        {filteredRoles.map((role) => (
                            <tr key={role.id} className="hover:bg-amber-50">
                                <td className="px-6 py-4 font-semibold">{role.name}</td>
                                <td className="px-6 py-4">{role.branchId}</td>
                                <td className="px-6 py-4">{role.deptId}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${role.active ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                                        {role.active ? 'Active' : 'Inactive'}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{role.createdAt}</td>
                                <td className="px-6 py-4 space-x-2">
                                    <button className="p-2 text-amber-600 hover:bg-amber-50 rounded"><Edit className="w-4 h-4" /></button>
                                    <button className="p-2 text-red-600 hover:bg-red-50 rounded" onClick={() => handleDelete(role.id)}><Trash2 className="w-4 h-4" /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Print Button */}
            {filteredRoles.length > 0 && (
                <div className="mt-6 text-center">
                    <button className="btn-amber px-6 py-3 rounded-xl flex items-center space-x-2 mx-auto" onClick={() => window.print()}>
                        <Printer className="w-4 h-4" /> Print List
                    </button>
                </div>
            )}
        </div>
    );
};

export default OrgRoles;