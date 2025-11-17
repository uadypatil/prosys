// src/pages/EmployeeDashboard.jsx (Updated to Include Notifications)
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EmployeeNavbar from '../../components/EmployeeNavbar';
import EmployeeSidebar from '../../components/EmployeeSidebar';
import StatCard from '../../components/StatCard';
import TicketCard from '../../components/TicketCard';

const dummyTickets = {
    raised: [
        { id: 101, title: "Laptop Issue", description: "Screen flickering during meetings.", date: "2025-11-12", status: "pending" },
        { id: 102, title: "Access Request", description: "Need HR portal access.", date: "2025-11-11", status: "active" },
    ],
    solved: [
        { id: 103, title: "Email Sync", description: "Outlook not syncing.", date: "2025-11-10", status: "solved" },
    ],
    active: [
        { id: 104, title: "Software Update", description: "Request for latest version.", date: "2025-11-13", status: "active" },
    ],
};

const dummyManagerTickets = {
    todaysRaised: [...dummyTickets.raised],
    todaysSolved: [...dummyTickets.solved],
    active: [...dummyTickets.active, { id: 105, title: "Network Outage", description: "Team-wide issue.", date: "2025-11-13", status: "pending" }],
};

export default function EmployeeDashboard({ role }) {
    const [user] = useState({ name: "John Doe", role, email: "john@blinke.com", department: role === 'manager' ? 'HR' : 'Engineering' });
    const [tickets, setTickets] = useState(role === 'manager' ? dummyManagerTickets : dummyTickets);

    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-out-quart', once: true });
    }, []);

    const handleSolveTicket = (ticket) => {
        setTickets(prev => ({
            ...prev,
            active: prev.active.filter(t => t.id !== ticket.id),
            todaysSolved: [...prev.todaysSolved, { ...ticket, status: 'solved' }],
        }));
        // Trigger notification similar to TicketManager
        console.log('Notification triggered: Ticket Solved from Dashboard');
    };

    const stats = role === 'manager' ? [
        { label: "Today's Raised", value: tickets.todaysRaised.length, color: "from-yellow-400 to-amber-500", icon: "Clock", trend: 15 },
        { label: "Today's Solved", value: tickets.todaysSolved.length, color: "from-emerald-500 to-teal-600", icon: "CheckCircle", trend: 20 },
        { label: "Active Tickets", value: tickets.active.length, color: "from-blue-500 to-indigo-600", icon: "TicketCheck" },
    ] : [
        { label: "Tickets Raised", value: tickets.raised.length, color: "from-amber-500 to-orange-600", icon: "TicketCheck", trend: 10 },
        { label: "Tickets Solved", value: tickets.solved.length, color: "from-emerald-500 to-teal-600", icon: "CheckCircle", trend: 25 },
        { label: "Active Tickets", value: tickets.active.length, color: "from-blue-500 to-indigo-600", icon: "AlertCircle" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50/20">
            <EmployeeNavbar user={user} />
            <EmployeeSidebar role={role} />

            <main className="ml-72 pt-24 px-10 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-10" data-aos="fade-down">
                        <h1 className="text-4xl font-black text-gray-900 mb-2">{role === 'manager' ? 'Manager Dashboard' : 'Employee Dashboard'}</h1>
                        <p className="text-xl text-gray-600">Track your tickets and team activity</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {stats.map((stat, i) => (
                            <StatCard key={i} {...stat} data-aos="fade-up" data-aos-delay={i * 100} />
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        {role === 'manager' ? (
                            <>
                                <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="200">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Today's Raised Tickets</h3>
                                    <div className="space-y-4">
                                        {tickets.todaysRaised.map((ticket) => (
                                            <TicketCard key={ticket.id} ticket={ticket} role={role} />
                                        ))}
                                    </div>
                                </div>
                                <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="300">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Today's Solved Tickets</h3>
                                    <div className="space-y-4">
                                        {tickets.todaysSolved.map((ticket) => (
                                            <TicketCard key={ticket.id} ticket={ticket} role={role} />
                                        ))}
                                    </div>
                                </div>
                                <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="400">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Active Tickets</h3>
                                    <div className="space-y-4">
                                        {tickets.active.map((ticket) => (
                                            <TicketCard key={ticket.id} ticket={ticket} role={role} onAction={handleSolveTicket} />
                                        ))}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="200">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Raised Tickets</h3>
                                    <div className="space-y-4">
                                        {tickets.raised.map((ticket) => (
                                            <TicketCard key={ticket.id} ticket={ticket} role={role} />
                                        ))}
                                    </div>
                                </div>
                                <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="300">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Solved Tickets</h3>
                                    <div className="space-y-4">
                                        {tickets.solved.map((ticket) => (
                                            <TicketCard key={ticket.id} ticket={ticket} role={role} />
                                        ))}
                                    </div>
                                </div>
                                <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="400">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Active Tickets</h3>
                                    <div className="space-y-4">
                                        {tickets.active.map((ticket) => (
                                            <TicketCard key={ticket.id} ticket={ticket} role={role} />
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
                        <p className="text-gray-500 text-sm">
                            Built with <span className="text-red-500">❤️</span> in Bengaluru •
                            <span className="font-bold text-amber-600"> BlinkE Employee v2.1</span>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}