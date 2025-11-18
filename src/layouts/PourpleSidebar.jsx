// src/layout/OrgSidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Building2, Users, UserCog, Ticket, FileText, Settings, User, LogOut, Zap } from 'lucide-react';

const PourpleSidebar = ({ isOpen, onClose }) => {
    const location = useLocation();
    const isActive = (path) => location.pathname.startsWith(path);

    const menuItems = [
        { path: '/org/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/org/branches', icon: Building2, label: 'Branches' },
        { path: '/org/departments', icon: Users, label: 'Departments' },
        { path: '/org/roles', icon: UserCog, label: 'Roles' },
        { path: '/org/employees', icon: Users, label: 'Employees' },
        { path: '/org/tickets', icon: Ticket, label: 'Tickets', badge: 24 },
        { path: '/org/reports', icon: FileText, label: 'Reports' },
        { path: '/org/settings', icon: Settings, label: 'Settings' },
    ];

    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />}

            {/* Sidebar */}
            <aside
                className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-indigo-600 via-indigo-700 to-violet-800 text-white transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                    }`}
            >
                <div className="h-full flex flex-col">
                    {/* Logo */}
                    <div className="p-6 border-b border-white/10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-black">
                                    HelpDesk<span className="text-amber-300">Pro</span>
                                </h1>
                                <p className="text-xs opacity-80">Organization Portal</p>
                            </div>
                        </div>
                    </div>

                    {/* Menu */}
                    <nav className="flex-1 p-4 space-y-1.5">
                        {menuItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${isActive(item.path)
                                        ? 'bg-white/20 backdrop-blur shadow-lg border border-white/10'
                                        : 'hover:bg-white/10'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <item.icon className="w-5 h-5" />
                                    <span className="font-medium">{item.label}</span>
                                </div>

                                {item.badge && (
                                    <span className="px-2 py-1 text-xs font-bold bg-amber-400 text-indigo-900 rounded-full">
                                        {item.badge}
                                    </span>
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Profile & Logout */}
                    <div className="p-4 border-t border-white/10">
                        <Link
                            to="/org/profile"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition"
                        >
                            <User className="w-5 h-5" />
                            <span>My Profile</span>
                        </Link>

                        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/30 transition text-left">
                            <LogOut className="w-5 h-5" />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default PourpleSidebar;
