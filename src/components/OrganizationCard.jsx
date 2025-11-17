// src/components/OrganizationCard.jsx
import { Building2, Mail, Calendar } from "lucide-react";

export default function OrganizationCard({ org }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 border hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Building2 className="text-indigo-600" /> {org.name}
        </h2>
        <span
          className={`text-sm font-medium px-3 py-1 rounded-full ${
            org.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {org.status}
        </span>
      </div>
      <p className="text-sm text-gray-600 flex items-center gap-2">
        <Mail className="w-4 h-4 text-gray-500" /> {org.email}
      </p>
      <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
        <Calendar className="w-4 h-4 text-gray-500" /> Registered on:{" "}
        {org.registeredDate}
      </p>
    </div>
  );
}
