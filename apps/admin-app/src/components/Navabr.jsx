import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 px-4 py-2.5 fixed left-0 right-0 top-0 z-50 dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center">
        {/* Left - Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FiMoreVertical size={22} />
          </button>
          <a href="/" className="flex items-center">
            <img
              src="https://flowbite.s3.amazonaws.com/logo.svg"
              className="mr-3 h-8"
              alt="Logo"
            />
            <span className="text-xl font-semibold dark:text-white">
              My App
            </span>
          </a>
        </div>

        {/* Center - Search Bar */}
        <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-2 py-1 w-1/3">
          <AiOutlineSearch className="text-gray-500 dark:text-gray-300 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none text-gray-700 dark:text-white w-full"
          />
        </div>

        {/* Right - Profile */}
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.123telugu.com/content/wp-content/uploads/2025/01/RGV-Ram-Gopal-Varma.jpg"
            alt="User"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </nav>

      {/* Floating Sidebar */}
      {sidebarOpen && (
        <aside className="fixed top-0 left-0 z-40 w-64 h-screen bg-white shadow-lg border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 pt-16 transition-transform">
          <ul className="p-4 space-y-2">
            <li>
              <a
                href="/overview"
                className="block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="/settings"
                className="block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="/messages"
                className="block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Messages
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Logout
              </a>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default Navbar;
