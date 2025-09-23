import React from "react";
import Navbar from "./Navabr";
import { Mail, Phone, MapPin, Edit, Lock, Download } from "lucide-react"; // icons

function Profilepage() {
  const employee = {
    id: "EMP-10245",
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    department: "Software Development",
    designation: "Senior Frontend Engineer",
    dob: "1990-08-15",
    joiningDate: "2020-05-10",
    phone: "+1 234 567 890",
    location: "New York, USA",
    address: "123 Main Street, New York, NY",
    profilePic:
      "https://thumbs.dreamstime.com/b/cafe-restaurant-vector-logo-diner-cook-chef-icon-70322723.jpg",
    salary: {
      currentCTC: "$120,000/year",
      lastIncrement: "2024-06-01",
      payslipLink: "#",
    },
    attendance: {
      totalWorkingDays: 220,
      daysPresent: 210,
      leavesTaken: 10,
      remainingLeaves: 5,
    },
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-base-100 px-6 py-8">
        <div className="max-w-6xl mx-auto bg-white dark:bg-base-200 shadow-lg rounded-2xl p-8 space-y-8">
          {/* 🔹 Profile Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Profile Image */}
            <div className="avatar">
              <div className="w-32 h-32 rounded-full ring ring-violet-600 ring-offset-4 ring-offset-base-100">
                <img src={employee.profilePic} alt={employee.name} />
              </div>
            </div>

            {/* Basic Info */}
            <div className="flex-1 space-y-2">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {employee.name}
              </h1>
              <p className="text-lg text-violet-600">{employee.designation}</p>
              <p className="text-sm text-gray-500">{employee.department}</p>
              <p className="text-xs text-gray-400">ID: {employee.id}</p>
              <p className="text-xs text-gray-400">
                Joined: {employee.joiningDate}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="btn btn-primary btn-sm gap-2">
                <Edit size={16} /> Edit
              </button>
              <button className="btn btn-secondary btn-sm gap-2">
                <Lock size={16} /> Password
              </button>
              <button className="btn btn-outline btn-sm gap-2">
                <Download size={16} /> Payslip
              </button>
            </div>
          </div>

          {/* 🔹 Contact Info */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Mail size={16} className="text-violet-600" />
              {employee.email}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone size={16} className="text-violet-600" />
              {employee.phone}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} className="text-violet-600" />
              {employee.location}
            </div>
          </div>

          {/* 🔹 Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="stat-card">
              <p className="text-gray-500">Total Working Days</p>
              <h3 className="text-2xl font-bold">
                {employee.attendance.totalWorkingDays}
              </h3>
            </div>
            <div className="stat-card">
              <p className="text-gray-500">Days Present</p>
              <h3 className="text-2xl font-bold text-green-600">
                {employee.attendance.daysPresent}
              </h3>
            </div>
            <div className="stat-card">
              <p className="text-gray-500">Leaves Taken</p>
              <h3 className="text-2xl font-bold text-red-500">
                {employee.attendance.leavesTaken}
              </h3>
            </div>
            <div className="stat-card">
              <p className="text-gray-500">Remaining Leaves</p>
              <h3 className="text-2xl font-bold text-blue-600">
                {employee.attendance.remainingLeaves}
              </h3>
            </div>
          </div>

          {/* 🔹 Salary & Attendance Overview */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card bg-base-200 p-6 rounded-xl">
              <h2 className="font-semibold mb-2">Salary Information</h2>
              <p>
                <strong>Current CTC:</strong> {employee.salary.currentCTC}
              </p>
              <p>
                <strong>Last Increment:</strong> {employee.salary.lastIncrement}
              </p>
              <a
                href={employee.salary.payslipLink}
                className="text-violet-600 underline text-sm"
              >
                View Payslip
              </a>
            </div>

            <div className="card bg-base-200 p-6 rounded-xl">
              <h2 className="font-semibold mb-2">Attendance Overview</h2>
              <div className="h-40 flex items-center justify-center text-gray-400">
                📊 Chart Coming Soon
              </div>
            </div>
          </div>

          {/* 🔹 Personal Details */}
          <div className="card bg-base-200 p-6 rounded-xl">
            <h2 className="font-semibold mb-3">Personal Details</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <p>
                <strong>Date of Birth:</strong> {employee.dob}
              </p>
              <p>
                <strong>Address:</strong> {employee.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profilepage;
