// src/pages/OrgDashboardLayout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import OrgNavbar from './OrgNavbar';
import OrgSidebar from './OrgSidebar';

const OrgDashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-violet-50/20">
            <div className="flex min-h-screen">

                {/* Sidebar */}
                <OrgSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

                {/* Fix: Add flex-1 so this expands full width */}
                <div className="flex-1 min-h-screen flex flex-col lg:ml-0">

                    <OrgNavbar onMenuClick={() => setSidebarOpen(true)} />

                    <main className="flex-1 p-4 md:p-6 lg:p-8">
                        <Outlet />
                    </main>

                </div>
            </div>
        </div>
    );
};

export default OrgDashboardLayout;
