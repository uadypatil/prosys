// src/components/TicketFilters.jsx
import React, { useState } from 'react';
import { Search, Filter, Calendar, X } from 'lucide-react';
import { format, parse } from 'date-fns';

export default function TicketFilters({ tickets, onFilterChange, role }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [showFilters, setShowFilters] = useState(false);

    const statuses = ['all', 'pending', 'active', 'solved'];
    const uniqueEmployees = role === 'manager' ? [...new Set(tickets.map(t => t.assignedTo).filter(Boolean))] : [];

    const handleClear = () => {
        setSearchTerm('');
        setStatusFilter('all');
        setDateFrom('');
        setDateTo('');
        onFilterChange([]);
    };

    const handleFilter = () => {
        let filtered = tickets;

        if (searchTerm) {
            filtered = filtered.filter(t =>
                t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                t.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (statusFilter !== 'all') {
            filtered = filtered.filter(t => t.status === statusFilter);
        }

        if (dateFrom) {
            const fromDate = parse(dateFrom, 'yyyy-MM-dd', new Date());
            filtered = filtered.filter(t => new Date(t.date) >= fromDate);
        }

        if (dateTo) {
            const toDate = parse(dateTo, 'yyyy-MM-dd', new Date());
            filtered = filtered.filter(t => new Date(t.date) <= toDate);
        }

        // For managers: add employee filter if needed (extend here)
        onFilterChange(filtered);
        setShowFilters(false);
    };

    const activeFilters = (searchTerm || statusFilter !== 'all' || dateFrom || dateTo).toString();

    return (
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200 p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 flex items-center">
                    <Search className="w-5 h-5 mr-2 text-amber-600" />
                    Search & Filters
                </h3>
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all"
                >
                    <Filter className="w-4 h-4" />
                    <span>{showFilters ? 'Hide' : 'Show'}</span>
                </button>
            </div>

            {showFilters && (
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Search className="w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by title or description..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Status</label>
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            >
                                {statuses.map(s => (
                                    <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">From Date</label>
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                                <input
                                    type="date"
                                    value={dateFrom}
                                    onChange={(e) => setDateFrom(e.target.value)}
                                    className="px-2 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">To Date</label>
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                                <input
                                    type="date"
                                    value={dateTo}
                                    onChange={(e) => setDateTo(e.target.value)}
                                    className="px-2 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>

                    {role === 'manager' && uniqueEmployees.length > 0 && (
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Assigned To</label>
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                                <option value="all">All Employees</option>
                                {uniqueEmployees.map(emp => <option key={emp} value={emp}>{emp}</option>)}
                            </select>
                        </div>
                    )}

                    <div className="flex space-x-3 pt-4">
                        <button
                            type="button"
                            onClick={handleFilter}
                            className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                        >
                            Apply Filters
                        </button>
                        {activeFilters && (
                            <button
                                type="button"
                                onClick={handleClear}
                                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300 transition-all flex items-center"
                            >
                                <X className="w-5 h-5 mr-2" />
                                Clear
                            </button>
                        )}
                    </div>
                </div>
            )}

            {activeFilters && (
                <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-200">
                    <p className="text-sm text-amber-800">
                        Filters applied: {searchTerm && `Search: "${searchTerm}"`} {statusFilter !== 'all' && `Status: ${statusFilter}`} 
                        {dateFrom && `From: ${format(new Date(dateFrom), 'MMM dd')}`} {dateTo && `To: ${format(new Date(dateTo), 'MMM dd')}`}
                    </p>
                </div>
            )}
        </div>
    );
}