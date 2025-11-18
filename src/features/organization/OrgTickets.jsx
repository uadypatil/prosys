// src/components/org/OrgTickets.jsx
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { Plus, Edit, Trash2, Printer, Search } from 'lucide-react';

const OrgTickets = () => {
    const [tickets, setTickets] = useState([
        { id: 1, title: 'Login Issue', status: 'Open', priority: 'High', assignee: 'John Doe', createdAt: '2025-11-18' },
        { id: 2, title: 'Hardware Fault', status: 'Resolved', priority: 'Medium', assignee: 'Jane Smith', createdAt: '2025-11-17' },
    ]);
    const [filter, setFilter] = useState({ search: '', status: '', priority: '' });

    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-out-quart', once: true });
    }, []);

    const filteredTickets = tickets.filter(t => 
        t.title.toLowerCase().includes(filter.search.toLowerCase()) &&
        (filter.status === '' || t.status === filter.status) &&
        (filter.priority === '' || t.priority === filter.priority)
    );

    const handleDelete = (id) => {
        setTickets(tickets.filter(t => t.id !== id));
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-black text-gray-900" data-aos="fade-down">Tickets Management</h1>
                <button className="btn-amber px-4 py-2 rounded-xl flex items-center space-x-2" data-aos="fade-up">
                    <Plus className="w-4 h-4" /> Create Ticket
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl p-4 mb-6 shadow-lg" data-aos="fade-up">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input type="text" placeholder="Search tickets..." className="w-full pl-10 pr-4 py-2 border border-amber-200 rounded-xl" value={filter.search} onChange={(e) => setFilter({ ...filter, search: e.target.value })} />
                    </div>
                    <select className="px-4 py-2 border border-amber-200 rounded-xl" value={filter.status} onChange={(e) => setFilter({ ...filter, status: e.target.value })}>
                        <option value="">All Status</option>
                        <option value="Open">Open</option>
                        <option value="Resolved">Resolved</option>
                    </select>
                    <select className="px-4 py-2 border border-amber-200 rounded-xl" value={filter.priority} onChange={(e) => setFilter({ ...filter, priority: e.target.value })}>
                        <option value="">All Priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                    </select>
                </div>
            </div>

            {/* List View */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                <table className="w-full">
                    <thead className="bg-amber-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Title</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Status</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Priority</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Assignee</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Created</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-amber-100">
                        {filteredTickets.map((ticket) => (
                            <tr key={ticket.id} className="hover:bg-amber-50">
                                <td className="px-6 py-4 font-semibold">{ticket.title}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${ticket.status === 'Open' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}`}>
                                        {ticket.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${ticket.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                                        {ticket.priority}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{ticket.assignee}</td>
                                <td className="px-6 py-4">{ticket.createdAt}</td>
                                <td className="px-6 py-4 space-x-2">
                                    <button className="p-2 text-amber-600 hover:bg-amber-50 rounded"><Edit className="w-4 h-4" /></button>
                                    <button className="p-2 text-red-600 hover:bg-red-50 rounded" onClick={() => handleDelete(ticket.id)}><Trash2 className="w-4 h-4" /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Print Button */}
            {filteredTickets.length > 0 && (
                <div className="mt-6 text-center">
                    <button className="btn-amber px-6 py-3 rounded-xl flex items-center space-x-2 mx-auto" onClick={() => window.print()}>
                        <Printer className="w-4 h-4" /> Print List
                    </button>
                </div>
            )}
        </div>
    );
};

export default OrgTickets;