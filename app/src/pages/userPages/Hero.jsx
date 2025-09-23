import React from "react";
import { Link } from "react-router-dom";

import img1 from "../../assets/imgs/img1.jpg";
import img2 from "../../assets/imgs/img2.jpg";
import img3 from "../../assets/imgs/img3.jpg";
import img4 from "../../assets/imgs/img4.jpg";
import img5 from "../../assets/imgs/img5.jpg";
import img6 from "../../assets/imgs/img6.jpg";

const Hero = () => {
  const features = [
    {
      icon: "🍛",
      title: "Authentic Flavors",
      desc: "Traditional recipes passed down through generations",
    },
    {
      icon: "🌶️",
      title: "Fresh Spices",
      desc: "Handpicked spices from local markets",
    },
    {
      icon: "👨‍🍳",
      title: "Expert Chefs",
      desc: "Master chefs with decades of experience",
    },
    {
      icon: "❤️",
      title: "Made with Love",
      desc: "Every dish prepared with care and passion",
    },
  ];

  return (
    <div className="hero min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-primary/10 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-indian-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="hero-content text-center max-w-7xl mx-auto px-4">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-elegant font-bold text-primary mb-4">
              Welcome to
              <span className="block text-4xl md:text-6xl text-accent mt-2">
                Spice Palace
              </span>
            </h1>
            <p className="text-lg md:text-xl text-base-content/80 font-telugu mb-2">
              రుచికరమైన ఆహారపు స్వర్గం
            </p>
            <p className="text-xl md:text-2xl text-base-content/90 font-elegant italic">
              Where Taste Meets Tradition
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-base-content/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            At Spice Palace, we don't just serve food — we serve emotions,
            memories, and joy on every plate. Experience the rich tapestry of
            Indian cuisine crafted with authentic spices and traditional cooking
            methods.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#menu"
              className="btn btn-primary btn-lg font-elegant text-lg px-8"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                ></path>
              </svg>
              Explore Menu
            </a>
            <a
              href="#userPageSupport"
              className="btn btn-outline btn-lg font-elegant text-lg px-8"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Our Story
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card bg-base-100/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="card-body text-center p-6">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="card-title text-lg font-elegant text-primary justify-center mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-base-content/70">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[img1, img2, img3, img4, img5, img6].map((img, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <img
                  src={img}
                  alt={`Delicious Indian Food ${index + 1}`}
                  className="w-full h-32 md:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-elegant opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-center">Authentic Indian Cuisine</p>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="mt-12 flex justify-center space-x-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
