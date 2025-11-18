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
import OrgDashboardLayout from "./layouts/OrgDashboardLayout";
import OrgDashboard from "./features/organization/OrgDashboard";
import OrgBranches from "./features/organization/OrgBranches";
import OrgDepartments from "./features/organization/OrgDepartments";
import OrgRoles from "./features/organization/OrgRoles";
import OrgEmployees from "./features/organization/OrgEmployees";
import OrgTickets from "./features/organization/OrgTickets";
import OrgReportsGenerate from "./features/organization/OrgReportsGenerate";
import OrgReportsView from "./features/organization/OrgReportsView";
import OrgSettings from "./features/organization/OrgSettings";
import OrgProfile from "./features/organization/OrgProfile";
import OrgReports from "./features/organization/OrgReports";


function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

export default function AppRoutes() {
  const role = 'manager'; // Dynamic based on auth/context
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Portal />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricings />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/org/login" element={<OrganizationLogin />} />
        <Route path="/employee/login" element={<EmployeeLogin />} />
        <Route path="/org/register" element={<OrganizationPreRegistration />} />

        {/* Private superadmin route */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <SuperadminDashboard />
            </PrivateRoute>
          }
        />

        {/* Private organization dashboard route */}
        {/* <Route
          path="/org/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        /> */}
        {/* Org Routes */}
        <Route path="/org" element={<OrgDashboardLayout />}>
          <Route path="dashboard" element={<OrgDashboard />} />
          <Route path="branches" element={<OrgBranches />} />
          <Route path="departments" element={<OrgDepartments />} />
          <Route path="departments/:id/roles" element={<div>Roles under Dept</div>} /> {/* Placeholder */}
          <Route path="departments/:id/employees" element={<div>Employees under Dept</div>} /> {/* Placeholder */}
          <Route path="roles" element={<OrgRoles />} />
          <Route path="employees" element={<OrgEmployees />} />
          <Route path="tickets" element={<OrgTickets />} />
          <Route path="reports" element={<OrgReports />} />
          <Route path="reports/generate/:type" element={<OrgReportsGenerate />} />
          <Route path="reports/view" element={<OrgReportsView />} />
          <Route path="settings" element={<OrgSettings />} />
          <Route path="profile" element={<OrgProfile />} />
        </Route>

        {/* Private employee nested routes (assumed /employee base path; adjust if needed) */}
        <Route
          path="/employee"
          element={
            <PrivateRoute>
              <EmployeeDashboard role={role} />
            </PrivateRoute>
          }
        >
          <Route index element={<EmployeeDashboard role={role} />} />
          <Route path="tickets" element={<EmployeeTicketManager role={role} />} />
          <Route path="reports" element={<EmployeeReport role={role} />} />
          <Route path="settings" element={<EmployeeSettings role={role} />} />
          {role === "manager" && (
            <Route path="employees" element={<EmployeeManagement role={role} />} />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}