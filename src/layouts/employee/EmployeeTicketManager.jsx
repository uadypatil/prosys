// src/pages/EmployeeTicketManager.jsx (Updated with Notification Trigger)
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EmployeeNavbar from '../../components/EmployeeNavbar';
import EmployeeSidebar from '../../components/EmployeeSidebar';
import TicketCard from '../../components/TicketCard';
import TicketFilters from '../../components/TicketFilters';

const dummyPendingTickets = [
    { id: 201, title: "Printer Jam", description: "Office printer not responding.", date: "2025-11-13", status: "pending", assignedTo: "John Doe" },
    { id: 202, title: "VPN Access", description: "Remote login failing.", date: "2025-11-12", status: "pending", assignedTo: "Jane Smith" },
    { id: 203, title: "Software Bug", description: "App crashing on load.", date: "2025-11-10", status: "active", assignedTo: "John Doe" },
    { id: 204, title: "Hardware Upgrade", description: "Request for new monitor.", date: "2025-11-09", status: "solved", assignedTo: "Bob Wilson" },
];

export default function EmployeeTicketManager({ role }) {
    const [user] = useState({ name: "John Doe", role, email: "john@blinke.com" });
    const [allTickets, setAllTickets] = useState(dummyPendingTickets);
    const [filteredTickets, setFilteredTickets] = useState(dummyPendingTickets);

    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-out-quart', once: true });
    }, []);

    const handleSolveTicket = (ticket) => {
        const updatedTickets = allTickets.map(t => 
            t.id === ticket.id ? { ...t, status: 'solved' } : t
        );
        setAllTickets(updatedTickets);
        setFilteredTickets(prev => prev.map(t => 
            t.id === ticket.id ? { ...t, status: 'solved' } : t
        ));

        // Trigger notification for status change
        // In real app, this would dispatch to a notification service (e.g., WebSocket, Redux)
        console.log('Notification triggered: Ticket Solved');
        // Simulate adding to global notifications (passed via context in full app)
    };

    const handleFilterChange = (filtered) => {
        setFilteredTickets(filtered);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50/20">
            <EmployeeNavbar user={user} />
            <EmployeeSidebar role={role} />

            <main className="ml-72 pt-24 px-10 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-10" data-aos="fade-down">
                        <h1 className="text-4xl font-black text-gray-900 mb-2">Ticket Manager</h1>
                        <p className="text-xl text-gray-600">{role === 'manager' ? 'Manage team tickets' : 'Your pending tickets'}</p>
                    </div>

                    <TicketFilters 
                        tickets={allTickets} 
                        onFilterChange={handleFilterChange} 
                        role={role}
                        data-aos="fade-up" 
                    />

                    <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 p-8" data-aos="fade-up" data-aos-delay="200">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredTickets.map((ticket) => (
                                <TicketCard key={ticket.id} ticket={ticket} role={role} onAction={handleSolveTicket} />
                            ))}
                        </div>
                        {filteredTickets.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg">No tickets match the current filters. <button onClick={() => handleFilterChange(allTickets)} className="text-amber-600 underline">Clear filters</button></p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}