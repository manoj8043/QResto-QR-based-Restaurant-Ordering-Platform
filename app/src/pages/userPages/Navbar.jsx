import React from 'react';
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import logo from "../../assets/imgs/Logo.png";

function Navbar() {
  const { toggleTheme, isDark } = useTheme();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-lg border-b-2 border-primary/20 sticky top-0 z-50">
      <div className="navbar-start">
        {/* Mobile menu button */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="font-elegant text-base-content hover:text-primary">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-xl">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <img src={logo} alt="logo" />
            </div>
            <div className="flex flex-col">
              <span className="font-elegant text-2xl font-bold text-primary">Spice Palace</span>
                <span className="text-xs text-base-content/70 font-telugu">రుచికరమైన ఆహారం</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                to={item.path} 
                className="font-elegant text-base-content hover:text-primary hover:bg-primary/10 rounded-lg px-4 py-2 transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end space-x-2">
        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle"
          title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
          {isDark ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>

        {/* Login Button */}
        <Link to="/login" className="btn btn-primary btn-sm font-elegant">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
          </svg>
          Login
        </Link>

        {/* Cart Button */}
        <button className="btn btn-ghost btn-circle relative">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
          </svg>
          <span className="badge badge-sm badge-primary absolute -top-1 -right-1">0</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
