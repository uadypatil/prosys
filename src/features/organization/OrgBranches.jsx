// src/components/org/OrgBranches.jsx
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { Plus, Edit, Trash2, Printer, Search } from 'lucide-react';

const OrgBranches = () => {
    const [branches, setBranches] = useState([
        { id: 1, orgId: 1, name: 'HQ Branch', location: 'Mumbai, India', contact: '+91-9876543210', active: true },
        { id: 2, orgId: 1, name: 'Delhi Branch', location: 'Delhi, India', contact: '+91-9876543211', active: true },
    ]);
    const [filter, setFilter] = useState({ search: '', active: '' });

    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out-quart', once: true });
    }, []);

    const filteredBranches = branches.filter(b => 
        b.name.toLowerCase().includes(filter.search.toLowerCase()) &&
        (filter.active === '' || b.active.toString() === filter.active)
    );

    const handleDelete = (id) => {
        setBranches(branches.filter(b => b.id !== id));
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-black text-gray-900" data-aos="fade-down">Branches Management</h1>
                <button className="btn-amber px-4 py-2 rounded-xl flex items-center space-x-2" data-aos="fade-up">
                    <Plus className="w-4 h-4" /> Add Branch
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl p-4 mb-6 shadow-lg" data-aos="fade-up">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search branches..."
                            className="w-full pl-10 pr-4 py-2 border border-amber-200 rounded-xl"
                            value={filter.search}
                            onChange={(e) => setFilter({ ...filter, search: e.target.value })}
                        />
                    </div>
                    <select
                        className="px-4 py-2 border border-amber-200 rounded-xl"
                        value={filter.active}
                        onChange={(e) => setFilter({ ...filter, active: e.target.value })}
                    >
                        <option value="">All Status</option>
                        <option value="true">Active</option>
                        <option value="false">Inactive</option>
                    </select>
                </div>
            </div>

            {/* Card List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="100">
                {filteredBranches.map((branch) => (
                    <div key={branch.id} className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{branch.name}</h3>
                        <p className="text-gray-600 mb-1"><strong>Location:</strong> {branch.location}</p>
                        <p className="text-gray-600 mb-4"><strong>Contact:</strong> {branch.contact}</p>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${branch.active ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                            {branch.active ? 'Active' : 'Inactive'}
                        </span>
                        <div className="flex justify-end space-x-2 mt-4">
                            <button className="p-2 text-amber-600 hover:bg-amber-50 rounded-lg"><Edit className="w-4 h-4" /></button>
                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg" onClick={() => handleDelete(branch.id)}><Trash2 className="w-4 h-4" /></button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Print Button */}
            {filteredBranches.length > 0 && (
                <div className="mt-6 text-center">
                    <button className="btn-amber px-6 py-3 rounded-xl flex items-center space-x-2 mx-auto" onClick={() => window.print()}>
                        <Printer className="w-4 h-4" /> Print List
                    </button>
                </div>
            )}
        </div>
    );
};

export default OrgBranches;