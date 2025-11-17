// src/components/EmployeeNavbar.jsx (Updated)
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, User, Zap } from 'lucide-react';
import NotificationBell from './NotificationBell';

export default function EmployeeNavbar({ user }) {
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState([]); // Global state simulation

    const handleLogout = () => {
        // Simulate logout logic
        navigate('/login');
    };

    const handleMarkAsRead = (notifs) => {
        // Simulate marking as read, update state
        setNotifications(prev => prev.map(n => 
            notifs.some(unread => unread.id === n.id) ? { ...n, read: true } : n
        ));
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-amber-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/employee" className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl flex items-center justify-center shadow-xl">
                        <Zap className="w-7 h-7 text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-black bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                            HelpDeskPro Employee Hub
                        </h1>
                        <p className="text-xs text-amber-600 font-semibold">{user.role.toUpperCase()} Portal</p>
                    </div>
                </Link>

                <div className="flex items-center space-x-4">
                    <NotificationBell onMarkAsRead={handleMarkAsRead} />
                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                        <User className="w-5 h-5" />
                        <span>{user.name}</span>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                        <LogOut className="w-5 h-5" />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}