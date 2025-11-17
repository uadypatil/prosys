// src/components/SuperadminSidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Building2, BarChart3, Settings } from 'lucide-react';

const menuItems = [
  { to: "/superadmin", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/superadmin/organizations", icon: Building2, label: "Manage Organizations" },
  { to: "/superadmin/reports", icon: BarChart3, label: "Reports & Analytics" },
  { to: "/superadmin/settings", icon: Settings, label: "Settings" },
];

export default function SuperadminSidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl pt-24">
      <div className="px-6">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center space-x-4 px-6 py-4 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 shadow-xl shadow-amber-500/30 font-bold'
                    : 'hover:bg-white/10'
                }`
              }
            >
              <item.icon className="w-6 h-6" />
              <span className="text-lg">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="absolute bottom-8 left-6 right-6">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
          <p className="text-xs text-amber-200">System Status</p>
          <p className="text-sm font-bold text-green-400">All Systems Operational</p>
        </div>
      </div>
    </aside>
  );
}