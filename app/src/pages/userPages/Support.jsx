import React from "react";

const Support = () => {
  const supportOptions = [
    {
      icon: "📞",
      title: "Phone Support",
      description: "Call us for reservations and inquiries",
      contact: "+91 98765 43210",
      hours: "11:00 AM - 11:00 PM"
    },
    {
      icon: "✉️",
      title: "Email Support",
      description: "Send us your feedback and questions",
      contact: "info@spicepalace.com",
      hours: "24/7 Response"
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Chat with our support team instantly",
      contact: "Available on website",
      hours: "11:00 AM - 11:00 PM"
    },
    {
      icon: "📍",
      title: "Visit Us",
      description: "Come experience our hospitality",
      contact: "123 Spice Street, Mumbai",
      hours: "Mon-Sun: 11:00 AM - 11:00 PM"
    }
  ];

  const faqs = [
    {
      question: "Do you offer home delivery?",
      answer: "Yes, we provide home delivery within a 10km radius. Delivery charges apply based on distance."
    },
    {
      question: "Can I make a reservation?",
      answer: "Absolutely! You can call us or use our online reservation system to book a table."
    },
    {
      question: "Do you have vegetarian options?",
      answer: "Yes, we have an extensive vegetarian menu with over 50+ dishes to choose from."
    },
    {
      question: "What are your payment methods?",
      answer: "We accept cash, cards, UPI, and all major digital payment methods."
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-base-100 via-base-200 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-elegant font-bold text-primary mb-4">
            Contact & Support
          </h2>
          <p className="text-lg md:text-xl text-base-content/80 font-telugu mb-2">
            మా సహాయం
          </p>
          <p className="text-xl text-base-content/90 font-elegant italic">
            We're Here to Help You
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4"></div>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="card-body text-center p-6">
                <div className="text-5xl mb-4">{option.icon}</div>
                <h3 className="card-title text-xl font-elegant text-primary justify-center mb-3">
                  {option.title}
                </h3>
                <p className="text-base-content/70 text-sm mb-4">
                  {option.description}
                </p>
                <div className="space-y-2">
                  <p className="text-primary font-semibold">{option.contact}</p>
                  <p className="text-xs text-base-content/60">{option.hours}</p>
                </div>
                <button className="btn btn-primary btn-sm mt-4">
                  Contact Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-elegant font-bold text-primary mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-lg text-base-content/80">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card bg-base-100 shadow-md">
                <div className="card-body p-6">
                  <h4 className="card-title text-lg font-elegant text-primary mb-3">
                    {faq.question}
                  </h4>
                  <p className="text-base-content/80 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="card bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 max-w-4xl mx-auto">
          <div className="card-body p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-elegant font-bold text-primary mb-4">
                Send us a Message
              </h3>
              <p className="text-lg text-base-content/80">
                Have a special request or feedback? We'd love to hear from you!
              </p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-elegant">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-elegant">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-elegant">Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="input input-bordered"
                  required
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-elegant">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-32"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button className="btn btn-primary btn-lg font-elegant">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="text-center mt-12">
          <p className="text-lg font-elegant text-primary italic">
            "Your satisfaction is our priority. We're committed to providing you with the best dining experience!"
          </p>
          <p className="text-sm text-base-content/70 font-telugu mt-2">
            మీ సంతృప్తి మా ప్రాధాన్యత. మీకు ఉత్తమమైన ఆహార అనుభవాన్ని అందించడానికి మేము కట్టుబడి ఉన్నాము!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
