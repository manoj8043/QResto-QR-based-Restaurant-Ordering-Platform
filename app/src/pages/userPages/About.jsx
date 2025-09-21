import React from "react";
import logo from "../../assets/imgs/Logo.png";
const About = () => {
  const features = [
    {
      icon: "🏛️",
      title: "Heritage Recipes",
      description: "Traditional recipes passed down through generations, preserving authentic Indian flavors"
    },
    {
      icon: "👨‍🍳",
      title: "Master Chefs",
      description: "Our experienced chefs bring decades of culinary expertise to every dish"
    },
    {
      icon: "🌶️",
      title: "Fresh Spices",
      description: "Handpicked spices from local markets, ground fresh daily for maximum flavor"
    },
    {
      icon: "❤️",
      title: "Made with Love",
      description: "Every dish is prepared with care, passion, and the warmth of Indian hospitality"
    }
  ];

  const stats = [
    { number: "25+", label: "Years of Experience" },
    { number: "500+", label: "Happy Customers Daily" },
    { number: "100+", label: "Authentic Dishes" },
    { number: "50+", label: "Awards Won" }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-base-100 via-base-200 to-primary/5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-elegant font-bold text-primary mb-4">
            About Spice Palace
          </h2>
          <p className="text-lg md:text-xl text-base-content/80 font-telugu mb-2">
            మా కథ
          </p>
          <p className="text-xl text-base-content/90 font-elegant italic">
            A Legacy of Flavor and Tradition
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-elegant font-bold text-primary mb-6">
              Our Story
            </h3>
            <p className="text-lg text-base-content/80 leading-relaxed">
              Welcome to Spice Palace, where every meal is a celebration of India's rich culinary heritage. 
              Founded in 1998, we have been serving authentic Indian cuisine that combines traditional 
              recipes with modern presentation.
            </p>
            <p className="text-lg text-base-content/80 leading-relaxed">
              Our journey began in a small kitchen in Mumbai, where our founder, Chef Rajesh Kumar, 
              started experimenting with his grandmother's recipes. Today, we proudly serve over 100 
              authentic dishes that represent the diverse flavors of India.
            </p>
            <p className="text-lg text-base-content/80 leading-relaxed">
              We believe that food is not just sustenance—it's an experience that brings people together, 
              creates memories, and tells stories. Every dish we serve carries the essence of Indian 
              culture and the warmth of our hospitality.
            </p>
          </div>
          
          <div className="relative">
            <div className="card bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 shadow-2xl">
              <div className="card-body p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <img src={logo} alt="logo" />
                  </div>
                  <h4 className="text-2xl font-elegant font-bold text-primary mb-4">
                    Our Mission
                  </h4>
                  <p className="text-base-content/80 text-lg leading-relaxed">
                    To preserve and share the authentic flavors of India while creating 
                    memorable dining experiences that celebrate our rich cultural heritage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="card-body text-center p-6">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="card-title text-xl font-elegant text-primary justify-center mb-3">
                  {feature.title}
                </h3>
                <p className="text-base-content/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-elegant font-bold text-primary mb-4">
              Our Achievements
            </h3>
            <p className="text-lg text-base-content/80">
              Numbers that speak for our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-base-content/80 font-elegant">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h3 className="text-3xl font-elegant font-bold text-primary mb-8">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center p-6">
                <div className="avatar mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-2xl">👨‍🍳</span>
                  </div>
                </div>
                <h4 className="text-xl font-elegant font-bold text-primary mb-2">
                  Chef Rajesh Kumar
                </h4>
                <p className="text-base-content/70 mb-2">Head Chef & Founder</p>
                <p className="text-sm text-base-content/60">
                  Master of North Indian cuisine with 30+ years of experience
                </p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center p-6">
                <div className="avatar mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                    <span className="text-2xl">👩‍🍳</span>
                  </div>
                </div>
                <h4 className="text-xl font-elegant font-bold text-primary mb-2">
                  Chef Priya Sharma
                </h4>
                <p className="text-base-content/70 mb-2">South Indian Specialist</p>
                <p className="text-sm text-base-content/60">
                  Expert in traditional South Indian and coastal cuisine
                </p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center p-6">
                <div className="avatar mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                    <span className="text-2xl">👨‍🍳</span>
                  </div>
                </div>
                <h4 className="text-xl font-elegant font-bold text-primary mb-2">
                  Chef Amit Patel
                </h4>
                <p className="text-base-content/70 mb-2">Tandoor Specialist</p>
                <p className="text-sm text-base-content/60">
                  Master of tandoor cooking and traditional bread making
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
