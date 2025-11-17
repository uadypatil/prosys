
// src/components/NotificationList.jsx
import React from 'react';

export default function NotificationList({ notifications, onMarkAsRead, getIcon }) {
    if (notifications.length === 0) {
        return (
            <div className="px-4 py-6 text-center text-gray-500">
                <p className="text-sm">No notifications yet.</p>
            </div>
        );
    }

    return (
        <div className="divide-y divide-gray-200">
            {notifications.map((notification) => (
                <div
                    key={notification.id}
                    className={`px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors flex items-start space-x-3 ${
                        !notification.read ? 'bg-amber-50 border-l-4 border-l-amber-500' : ''
                    }`}
                    onClick={() => onMarkAsRead([notification])}
                >
                    <div className="flex-shrink-0 mt-1">
                        {getIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                            <h5 className="text-sm font-semibold text-gray-900 truncate">{notification.title}</h5>
                            <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{notification.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1 truncate">{notification.message}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}