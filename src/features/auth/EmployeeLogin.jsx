import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginEmployee } from "../../utils/UseIntegrationHouse";
import { getDepartmentsByOrganizationId } from "../../utils/UseOrganizationIntegrationHouse";

export default function EmployeeLogin() {
    const [organization, setOrganization] = useState("");
    const [department, setDepartment] = useState("");
    const [departments, setDepartments] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    // 🚀 Fetch departments when organization ID changes
    useEffect(() => {
        const fetchDepartments = async () => {
            if (organization.length < 6 || organization.length > 8) {
                setDepartments([]);
                return;
            }

            if (!organization) {
                setDepartments([]);
                return;
            }

            try {
                const res = await getDepartmentsByOrganizationId(organization);
                console.log("DEPT RESPONSE:", res);

                if (res?.data?.success) {
                    setDepartments(res.data.departments || []);
                } else {
                    setDepartments([]);
                }
            } catch (err) {
                console.log("DEPARTMENT ERROR:", err);
                setDepartments([]);
            }
        };

        fetchDepartments();
    }, [organization]);

    // 🟢 Submit Handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password || !organization || !department) {
            setError("Please fill in all fields");
            return;
        }

        try {
            const res = await loginEmployee(organization, department, email, password);
            console.log("LOGIN EMPLOYEE:", res);

            if (res?.data?.success) {
                navigate("/employee/dashboard");
            } else {
                setError(res?.data?.message || "Invalid login credentials");
            }
        } catch (err) {
            console.log("LOGIN ERROR:", err);
            setError(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-amber-100 p-6">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 md:p-10 relative overflow-hidden border border-amber-100">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-transparent opacity-50"></div>

                <div className="flex items-top justify-between w-full">
                    <div className="flex justify-center mb-5">
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-md shadow-amber-500/25">
                            <span className="text-white text-2xl font-bold">T</span>
                        </div>
                    </div>
                    <div className="text-end">
                        <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
                        <p className="text-gray-600 text-sm mt-1">
                            Sign in to continue to your dashboard
                        </p>
                    </div>
                </div>

                {error && (
                    <div className="mb-5 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Organization ID
                        </label>
                        <input
                            type="text"
                            value={organization}
                            onChange={(e) => setOrganization(e.target.value)}
                            placeholder="ORG001"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Department
                        </label>
                        <select
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        >
                            <option value="">Select Department</option>

                            {departments.length > 0 ? (
                                departments.map((dept, index) => (
                                    <option key={index} value={dept.name || dept.departmentName}>
                                        {dept.name || dept.departmentName}
                                    </option>
                                ))
                            ) : (
                                <option disabled>No departments found</option>
                            )}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3.5 rounded-xl font-semibold"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}
