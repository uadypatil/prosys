import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./features/auth/Login";
import DashboardLayout from "./layouts/DashboardLayout";
import { useAuth } from "./context/AuthContext";
import OrganizationLogin from "./features/auth/OrganizationLogin";
import EmployeeLogin from "./features/auth/EmployeeLogin";
import Portal from "./features/landing/Portal";
import About from "./features/landing/About";
import ContactUs from "./features/landing/ContactUs";
import Pricings from "./features/landing/Pricings";
import OrganizationRegistration from "./features/regstration/OrganizationRegistration";
import SuperadminDashboard from "./layouts/SuperadminDashboard";
import OrganizationPreRegistration from "./features/regstration/OrganizationPreRegistration";
import EmployeeDashboard from "./layouts/employee/EmployeeDashboard";
import EmployeeTicketManager from "./layouts/employee/EmployeeTicketManager";
import EmployeeReport from "./layouts/employee/EmployeeReport";
import EmployeeSettings from "./layouts/employee/EmployeeSettings";
import EmployeeManagement from "./layouts/employee/EmployeeManagement";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

export default function AppRoutes() {
  const role = 'manager'; // Dynamic based on auth/context
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/org/login" element={<OrganizationLogin />} />
        <Route path="/employee/login" element={<EmployeeLogin />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <SuperadminDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/org/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        />

        <Route
          path="/employee/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Portal />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricings />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/org/register" element={<OrganizationPreRegistration />} />

      </Routes>
      <Routes>
        <Route path="/employee" element={<EmployeeDashboard role={role} />} />
        <Route path="/employee/tickets" element={<EmployeeTicketManager role={role} />} />
        <Route path="/employee/reports" element={<EmployeeReport role={role} />} />
        <Route path="/employee/settings" element={<EmployeeSettings role={role} />} />
        {role === 'manager' && (
          <Route path="/employee/employees" element={<EmployeeManagement role={role} />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}
