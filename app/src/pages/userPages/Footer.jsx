import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/Logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
  ];

  const menuCategories = [
    "Starters & Appetizers",
    "Royal Biryanis", 
    "Curries & Gravies",
    "Breads & Rotis",
    "Fresh Beverages",
    "Chinese Delights"
  ];

  const contactInfo = [
    { icon: "📍", text: "123 Spice Street, Mumbai, Maharashtra 400001" },
    { icon: "📞", text: "+91 98765 43210" },
    { icon: "✉️", text: "info@spicepalace.com" },
    { icon: "🕒", text: "Mon-Sun: 11:00 AM - 11:00 PM" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "📘", url: "#" },
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "YouTube", icon: "📺", url: "#" }
  ];

  return (
    <footer className="footer footer-center p-10 bg-gradient-to-br from-base-200 via-base-300 to-primary/10 text-base-content">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <img src={logo} alt="logo" />
              </div>
              <div>
                <h3 className="font-elegant text-2xl font-bold text-primary">Spice Palace</h3>
                <p className="text-xs text-base-content/70 font-telugu">రుచికరమైన ఆహారం</p>
              </div>
            </div>
            <p className="text-sm text-base-content/80 leading-relaxed">
              Experience the authentic flavors of India at Spice Palace. 
              We bring you traditional recipes with modern presentation, 
              creating unforgettable dining experiences.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="btn btn-ghost btn-circle btn-sm hover:btn-primary"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-elegant text-lg font-bold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="link link-hover text-sm text-base-content/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Categories */}
          <div>
            <h4 className="font-elegant text-lg font-bold text-primary mb-4">Our Menu</h4>
            <ul className="space-y-2">
              {menuCategories.map((category, index) => (
                <li key={index}>
                  <a 
                    href="#menu" 
                    className="link link-hover text-sm text-base-content/80 hover:text-primary transition-colors"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-elegant text-lg font-bold text-primary mb-4">Contact Us</h4>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-primary mt-0.5">{info.icon}</span>
                  <span className="text-sm text-base-content/80">{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="card bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 max-w-2xl mx-auto mb-8">
          <div className="card-body p-6">
            <h4 className="card-title text-xl font-elegant text-primary justify-center mb-2">
              Stay Updated
            </h4>
            <p className="text-center text-base-content/80 mb-4">
              Subscribe to our newsletter for special offers and new menu items
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered flex-1"
              />
              <button className="btn btn-primary">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <img src={logo} alt="logo" className="w-20 h-20" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-base-content/80">
              © 2025 Spice Palace. All rights reserved.
            </p>
            <p className="text-xs text-base-content/60 mt-1">
              Made with ❤️ in India
            </p>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="link link-hover text-base-content/80 hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="link link-hover text-base-content/80 hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="link link-hover text-base-content/80 hover:text-primary">
              Refund Policy
            </a>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="mt-8 text-center">
          <p className="text-lg font-elegant text-primary italic">
            "Thank you for dining with us. We hope to see you again soon!"
          </p>
          <p className="text-sm text-base-content/70 font-telugu mt-2">
            మీతో భోజనం చేసి సంతోషం వచ్చింది. త్వరలో మళ్లీ కలుద్దాం!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
