// src/components/NotificationBell.jsx
import React, { useState } from 'react';
import { Bell, X } from 'lucide-react';
import NotificationList from './NotificationList';

const dummyNotifications = [
    { id: 1, type: 'new_ticket', title: 'New Ticket Assigned', message: 'VPN Access issue assigned to you.', time: '2 min ago', read: false },
    { id: 2, type: 'status_change', title: 'Ticket Updated', message: 'Printer Jam moved to Active.', time: '10 min ago', read: false },
    { id: 3, type: 'new_ticket', title: 'New Ticket Raised', message: 'Hardware Upgrade requested by team.', time: '1 hour ago', read: true },
    { id: 4, type: 'status_change', title: 'Ticket Resolved', message: 'Email Sync marked as Solved.', time: 'Yesterday', read: false },
];

export default function NotificationBell({ onMarkAsRead }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [notifications] = useState(dummyNotifications);
    const unreadCount = notifications.filter(n => !n.read).length;

    const handleMarkAllRead = () => {
        onMarkAsRead(notifications.filter(n => !n.read));
        // Simulate marking all read
    };

    const getIcon = (type) => {
        switch (type) {
            case 'new_ticket': return <Bell className="w-4 h-4 text-blue-500" />;
            case 'status_change': return <Bell className="w-4 h-4 text-amber-500" />;
            default: return <Bell className="w-4 h-4 text-gray-500" />;
        }
    };

    return (
        <div className="relative">
            <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="relative p-2 text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition-all focus:outline-none"
            >
                <Bell className="w-6 h-6" />
                {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                )}
            </button>

            {showDropdown && (
                <div className="absolute right-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 py-2 z-50 max-h-96 overflow-y-auto">
                    <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                        <h4 className="font-bold text-gray-900">Notifications</h4>
                        {unreadCount > 0 && (
                            <button
                                onClick={handleMarkAllRead}
                                className="text-sm text-amber-600 hover:underline font-semibold"
                            >
                                Mark all read
                            </button>
                        )}
                    </div>
                    <NotificationList notifications={notifications} onMarkAsRead={onMarkAsRead} getIcon={getIcon} />
                    <div className="px-4 py-2 border-t border-gray-200">
                        <button className="w-full text-sm text-gray-600 hover:text-amber-600 transition-colors">
                            View all notifications
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}