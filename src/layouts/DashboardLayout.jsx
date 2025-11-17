// src/pages/SuperAdminDashboard.jsx
import OrganizationCard from "../components/OrganizationCard";

export default function SuperAdminDashboard() {
  const organizations = [
    {
      id: 1,
      name: "TechNova Pvt Ltd",
      email: "admin@technova.com",
      registeredDate: "2025-11-01",
      status: "Active",
    },
    {
      id: 2,
      name: "CodeVerse Solutions",
      email: "info@codeverse.com",
      registeredDate: "2025-10-22",
      status: "Suspended",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        🏢 Registered Organizations
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {organizations.map((org) => (
          <OrganizationCard key={org.id} org={org} />
        ))}
      </div>
    </div>
  );
}
