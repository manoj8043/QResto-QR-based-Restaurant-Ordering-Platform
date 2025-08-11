import React, { useState, useEffect } from "react";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navCollapseOpen, setNavCollapseOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Apply theme to HTML tag
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const violet = "bg-violet-600";
  const violetHover = "hover:bg-violet-700";
  const lightGray = "bg-base-100";

  return (
    <>
      {/* Top Navbar */}
      <nav className={`navbar ${lightGray} shadow-sm px-4`}>
        {/* Left: Hamburger + Brand */}
        <div className="navbar-start flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className={`p-2 rounded-lg ${violet} ${violetHover} text-white`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <a
            className="btn btn-ghost normal-case text-xl text-violet-700 "
            href="/dashboard"
          >
            QResto
          </a>
        </div>

        {/* Collapse button for mobile */}
        <div className="navbar-center lg:hidden ml-auto">
          <button
            onClick={() => setNavCollapseOpen(!navCollapseOpen)}
            className={`p-2 rounded-lg ${violet} ${violetHover} text-white`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Right Section */}
        <div
          className={`navbar-end gap-4 ${
            navCollapseOpen ? "flex" : "hidden"
          } lg:flex`}
        >
          {/* Search */}
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-sm w-36 md:w-48"
          />

          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle"
            title="Toggle theme"
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.64 13.65a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.14 8.05 8.05 0 0 1 .73-3.37 1 1 0 0 0-1.19-1.4 10.14 10.14 0 1 0 13.22 13.22 1 1 0 0 0-.2-1.1z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                <path
                  fillRule="evenodd"
                  d="M12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1zm10-7a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zM5 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zm13.07 6.07a1 1 0 0 1-1.41 1.41l-1.42-1.42a1 1 0 0 1 1.42-1.41l1.41 1.42zM7.76 6.34a1 1 0 0 1-1.41-1.41L7.76 3.5a1 1 0 0 1 1.41 1.41L7.76 6.34zm8.48 0l1.41-1.42a1 1 0 0 1 1.41 1.42l-1.41 1.41a1 1 0 1 1-1.41-1.41zM6.34 16.24l-1.42 1.41a1 1 0 0 1-1.41-1.41l1.41-1.42a1 1 0 1 1 1.42 1.42z"
                />
              </svg>
            )}
          </button>
          {/* Notifications */}
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>

          {/* Cart */}
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </button>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between" href="/profile">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a href="/login">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Overlay (click to close) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-base-100 shadow-lg border-r border-gray-200 pt-16 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="p-4 space-y-2">
          <li>
            <a
              href="/demo"
              className={`${violet} text-white block p-2 rounded-lg ${violetHover}`}
              onClick={() => setSidebarOpen(false)}
            >
              Overview
            </a>
          </li>
          <li>
            <a
              href="/customers"
              className="block p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              Customers
            </a>
          </li>
          <li>
            <a
              href="/orders"
              className="block p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              Orders
            </a>
          </li>
          <li>
            <a
              href="/menus"
              className="block p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              Menus
            </a>
          </li>
          <li>
            <a
              href="/sales"
              className="block p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              Sales
            </a>
          </li>
          <li>
            <a
              href="/staff"
              className="block p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              Staff
            </a>
          </li>
          <li>
            <a
              href="/staff"
              className="block p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              Staff
            </a>
          </li>
          <li>
            <a
              href="/staff"
              className="block p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              Staff
            </a>
          </li>
          <li>
            <a
              href="/staff"
              className="block p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setSidebarOpen(false)}
            >
              Staff
            </a>
          </li>
          <li>
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="logo"
              />
            </figure>
            <div className="card-body">
              <p>
                All Rights Reserved<sup>©</sup>
              </p>
            </div>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Navbar;

// import React, { useState } from "react";
// import { FiMoreVertical } from "react-icons/fi";
// import { AiOutlineSearch } from "react-icons/ai";

// const Navbar = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="bg-white border-b border-gray-200 px-4 py-2.5 fixed left-0 right-0 top-0 z-50 dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center">
//         {/* Left - Logo */}
//         <div className="flex items-center gap-3">
//           <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
//           >
//             <svg
//               class="w-6 h-6 text-gray-800 dark:text-white"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-width="2"
//                 d="M5 7h14M5 12h14M5 17h14"
//               />
//             </svg>
//           </button>
//           <a href="/Dashboard" className="flex items-center">
//             <img
//               src="https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Sunrisers_Hyderabad_Logo.svg/1200px-Sunrisers_Hyderabad_Logo.svg.png"
//               className="mr-3 h-8"
//               alt="Logo"
//             />
//             <span className="text-xl font-semibold dark:text-white">
//               RESTRO
//             </span>
//           </a>
//         </div>

//         {/* Center - Search Bar */}
//         <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-2 py-1 w-1/3">
//           <AiOutlineSearch className="text-gray-500 dark:text-gray-300 mr-2" />
//           <input
//             type="text"
//             placeholder="Search..."
//             className="bg-transparent focus:outline-none text-gray-700 dark:text-white w-full"
//           />
//         </div>

//         {/* Right - Profile */}
//         <div className="flex items-center gap-3">
//           <img
//             src="https://cdn.123telugu.com/content/wp-content/uploads/2025/01/RGV-Ram-Gopal-Varma.jpg"
//             alt="User"
//             className="w-8 h-8 rounded-full object-cover"
//           />
//         </div>
//       </nav>

//       {/* Floating Sidebar */}
//       {sidebarOpen && (
//         <aside className="fixed top-0 left-0 z-40 w-64 h-screen bg-white shadow-lg border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 pt-16 transition-transform">
//           <ul className="p-4 space-y-2">
//             <li>
//               <a
//                 href="/demo"
//                 className="block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 Overview
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/settings"
//                 className="block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 Settings
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/messages"
//                 className="block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 Messages
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/"
//                 className="block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 Logout
//               </a>
//             </li>
//           </ul>
//         </aside>
//       )}
//     </>
//   );
// };

// export default Navbar;
