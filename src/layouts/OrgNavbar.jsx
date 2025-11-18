// src/components/org/OrgNavbar.jsx
import React, { useState } from 'react';
import { Bell, Search, Settings, LogOut, Menu, Zap } from 'lucide-react';
import NotificationBell from '../components/NotificationBell';

const OrgNavbar = ({ onMenuClick }) => {
    const [notifications, setNotifications] = useState([]); // Global state simulation
    
    const handleMarkAsRead = (notifs) => {
        // Simulate marking as read, update state
        setNotifications(prev => prev.map(n => 
            notifs.some(unread => unread.id === n.id) ? { ...n, read: true } : n
        ));
    };
    return (
        <header className="h-16 bg-white border-b border-gray-200 sticky top-0 z-30">
            <div className="h-full px-4 flex items-center justify-between">
                {/* Left */}
                <div className="flex items-center gap-4">
                    {/* Always visible on <lg */}
                    <button
                        onClick={onMenuClick}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-700"
                        aria-label="Toggle menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    {/* Optional: Logo on mobile */}
                    <div className="lg:hidden">
                        <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
                            <Zap className="w-5 h-5 text-slate-900" />
                        </div>
                    </div>

                    {/* Search - hidden on very small screens */}
                    <div className="hidden md:flex items-center bg-gray-100 rounded-xl px-4 py-2 w-64 lg:w-96 border border-gray-200">
                        <Search className="w-5 h-5 text-gray-500 mr-3" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent outline-none text-sm w-full"
                        />
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">
                    {/* <button className="relative p-2 rounded-lg hover:bg-gray-100 text-gray-600">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
          </button> */}
                    <NotificationBell onMarkAsRead={handleMarkAsRead} />

                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                        J
                    </div>
                </div>
            </div>
        </header>
    );
};

export default OrgNavbar;