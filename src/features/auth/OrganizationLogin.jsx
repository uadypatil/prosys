import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
import { loginOrgAdmin } from "../../utils/UseIntegrationHouse";

export default function OrganizationLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    // const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }

        try {
            const response = await loginOrgAdmin(email, password);
            console.log("LOGIN RESPONSE:", response);

            if (response?.data?.success) {
                navigate("/org/dashboard");
            } else {
                setError(response?.data?.message || "Invalid email or password");
            }

        } catch (err) {
            console.log("LOGIN ERROR:", err);
            setError(err.response?.data?.message || "Something went wrong");
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-amber-100 p-6">
            {/* Login Card */}
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 md:p-10 relative overflow-hidden border border-amber-100">
                {/* Background Decorative Element */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-transparent opacity-50"></div>

                {/* Logo / Icon */}
                <div className="relative text-center mb-8">
                    <div className="flex justify-center mb-5">
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-md shadow-amber-500/25">
                            <span className="text-white text-2xl font-bold">T</span>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
                    <p className="text-gray-600 text-sm mt-1">
                        Sign in to continue to your dashboard
                    </p>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="relative mb-5 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm text-center">
                        {error}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none transition duration-200"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:outline-none transition duration-200"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                            />
                            <span className="text-gray-600">Remember me</span>
                        </label>
                        <Link
                            to="/forgot-password"
                            className="text-amber-600 hover:text-amber-700 font-medium transition"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                    >
                        Sign In
                    </button>

                    <div className="text-center text-sm text-gray-600 pt-3">
                        Don’t have an account?{" "}
                        <Link
                            to="/register"
                            className="text-amber-600 hover:text-amber-700 font-semibold transition"
                        >
                            Register
                        </Link>
                    </div>
                </form>


            </div>
        </div>
    );
}
