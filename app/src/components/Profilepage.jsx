import React from "react";
import Navbar from "./Navabr";

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
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop",
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

      <div className="min-h-screen bg-base-100 px-6 py-6">
        <div className="max-w-7xl mx-auto bg-white dark:bg-base-200 shadow-md rounded-lg p-6">
          {/* Top Row: Profile Info + Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Profile Picture + Basic Info */}
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-28 rounded-full ring ring-violet-600 ring-offset-4 ring-offset-base-100">
                  <img src={employee.profilePic} alt={employee.name} />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold">{employee.name}</h1>
                <p className="text-sm text-gray-500">{employee.designation}</p>
                <p className="text-sm text-gray-500">{employee.department}</p>
                <p className="text-xs text-gray-400">ID: {employee.id}</p>
                <p className="text-xs text-gray-400">
                  Joined: {employee.joiningDate}
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <p className="text-sm">
                <strong>Email:</strong> {employee.email}
              </p>
              <p className="text-sm">
                <strong>Phone:</strong> {employee.phone}
              </p>
              <p className="text-sm">
                <strong>Location:</strong> {employee.location}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 justify-end md:justify-start">
              <button className="btn btn-primary btn-sm">Edit Profile</button>
              <button className="btn btn-secondary btn-sm">
                Change Password
              </button>
              <button className="btn btn-outline btn-sm">Download</button>
            </div>
          </div>

          {/* Middle Row: Stats & Salary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="stat bg-base-200 p-4 rounded-lg">
              <div className="stat-title text-gray-500">Total Working Days</div>
              <div className="stat-value">
                {employee.attendance.totalWorkingDays}
              </div>
            </div>
            <div className="stat bg-base-200 p-4 rounded-lg">
              <div className="stat-title text-gray-500">Days Present</div>
              <div className="stat-value">
                {employee.attendance.daysPresent}
              </div>
            </div>
            <div className="stat bg-base-200 p-4 rounded-lg">
              <div className="stat-title text-gray-500">Leaves Taken</div>
              <div className="stat-value text-red-500">
                {employee.attendance.leavesTaken}
              </div>
            </div>
            <div className="stat bg-base-200 p-4 rounded-lg">
              <div className="stat-title text-gray-500">Remaining Leaves</div>
              <div className="stat-value text-green-500">
                {employee.attendance.remainingLeaves}
              </div>
            </div>
          </div>

          {/* Salary Info & Graph Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-base-200 p-4 rounded-lg">
              <h2 className="font-semibold mb-2">Salary Information</h2>
              <p>
                <strong>Current CTC:</strong> {employee.salary.currentCTC}
              </p>
              <p>
                <strong>Last Increment:</strong> {employee.salary.lastIncrement}
              </p>
              <a
                href={employee.salary.payslipLink}
                className="text-violet-600 underline"
              >
                View Payslip
              </a>
            </div>

            <div className="bg-base-200 p-4 rounded-lg">
              <h2 className="font-semibold mb-2">Attendance Overview</h2>
              <div className="h-40 flex items-center justify-center text-gray-400">
                📊 Graph Placeholder
              </div>
            </div>
          </div>

          {/* Personal Info Full Section */}
          <div className="bg-base-200 p-4 rounded-lg mt-6">
            <h2 className="font-semibold mb-2">Personal Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
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
