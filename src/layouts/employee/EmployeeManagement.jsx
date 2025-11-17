// src/pages/EmployeeManagement.jsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EmployeeNavbar from '../../components/EmployeeNavbar';
import EmployeeSidebar from '../../components/EmployeeSidebar';
import EmployeeList from '../../components/EmployeeList';

const dummyEmployees = [
    { id: 1, name: "Alice Johnson", email: "alice@blinke.com", department: "Engineering" },
    { id: 2, name: "Bob Wilson", email: "bob@blinke.com", department: "HR" },
];

export default function EmployeeManagement({ role }) {
    const [user] = useState({ name: "John Doe", role, email: "john@blinke.com" });
    const [employees, setEmployees] = useState(dummyEmployees);

    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-out-quart', once: true });
    }, []);

    const handleAdd = () => {
        // Simulate add modal
        const newEmp = { id: employees.length + 1, name: "New Employee", email: "new@blinke.com", department: "Engineering" };
        setEmployees([...employees, newEmp]);
    };

    const handleEdit = (emp) => {
        // Simulate edit
        alert(`Editing ${emp.name}`);
    };

    const handleDelete = (id) => {
        setEmployees(employees.filter(emp => emp.id !== id));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50/20">
            <EmployeeNavbar user={user} />
            <EmployeeSidebar role={role} />

            <main className="ml-72 pt-24 px-10 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-10" data-aos="fade-down">
                        <h1 className="text-4xl font-black text-gray-900 mb-2">Employee Management</h1>
                        <p className="text-xl text-gray-600">CRUD operations for HR team</p>
                    </div>

                    <EmployeeList
                        employees={employees}
                        onAdd={handleAdd}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        data-aos="fade-up"
                    />
                </div>
            </main>
        </div>
    );
}