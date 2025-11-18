// src/layout/OrgSidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Building2, Users, UserCog, Ticket, 
  FileText, Settings, User, LogOut, Zap 
} from 'lucide-react';

const OrgSidebar = ({ isOpen, onClose }) => {
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
      {/* Mobile Overlay - Highest z-index */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar - Always above navbar */}
      <aside className={`
        fixed lg:static top-0 left-0 bottom-0 z-50 w-72
        bg-slate-900 text-white border-r border-slate-800
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <h1 className="text-xl font-black tracking-tight">
                  HelpDesk<span className="text-amber-400">Pro</span>
                </h1>
                <p className="text-xs text-slate-400">Organization Portal</p>
              </div>
            </div>
          </div>

          {/* Menu */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => window.innerWidth < 1024 && onClose()}
                className={`
                  flex items-center justify-between px-4 py-3 rounded-lg
                  transition-all duration-200 font-medium text-sm
                  ${isActive(item.path)
                    ? 'bg-amber-500 text-slate-900'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2.5 py-1 text-xs font-bold bg-white text-slate-900 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Bottom */}
          <div className="p-4 border-t border-slate-800 space-y-1">
            <Link to="/org/profile" onClick={() => window.innerWidth < 1024 && onClose()}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all text-sm font-medium">
              <User className="w-5 h-5" />
              <span>My Profile</span>
            </Link>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-red-900/30 hover:text-red-400 transition-all text-sm font-medium text-left">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default OrgSidebar;