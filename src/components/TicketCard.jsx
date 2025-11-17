// src/components/TicketCard.jsx
import React from 'react';
import { Clock, Check, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';

export default function TicketCard({ ticket, onAction, role }) {
    const getStatusIcon = (status) => {
        switch (status) {
            case 'solved': return <Check className="w-5 h-5 text-emerald-500" />;
            case 'pending': return <Clock className="w-5 h-5 text-amber-500" />;
            case 'active': return <AlertCircle className="w-5 h-5 text-blue-500" />;
            default: return <Clock className="w-5 h-5 text-gray-500" />;
        }
    };

    const handleAction = () => {
        if (onAction && ticket.status === 'pending') {
            onAction(ticket);
        }
    };

    return (
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200 p-6 hover:shadow-xl transition-all">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-sm">#{ticket.id}</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">{ticket.title}</h3>
                        <p className="text-sm text-gray-600">{ticket.description}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    {getStatusIcon(ticket.status)}
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${ticket.status === 'solved' ? 'bg-emerald-100 text-emerald-700' :
                            ticket.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                                'bg-blue-100 text-blue-700'
                        }`}>
                        {ticket.status}
                    </span>
                </div>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Opened: {format(new Date(ticket.date), 'MMM dd, yyyy')}</span>
                {role === 'manager' && ticket.status === 'pending' && (
                    <button
                        onClick={handleAction}
                        className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-bold text-sm hover:shadow-lg transition-all"
                    >
                        Solve Ticket
                    </button>
                )}
            </div>
        </div>
    );
}