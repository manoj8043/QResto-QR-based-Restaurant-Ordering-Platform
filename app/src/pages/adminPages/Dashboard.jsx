import React, { useState, useEffect } from "react";
import Navbar from "./Navabr";

function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState("today");

  useEffect(() => {
    // const UserId = sessionStorage.getItem("userId");
    // const LoggedIn = sessionStorage.getItem("isLoggedIn");
    // if (!LoggedIn) {
    //   navigate("/login");
    // } else {
    //   setUser(UserId);
    // }

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Sample data
  const stats = [
    {
      title: "Today's Revenue",
      value: "₹45,230",
      change: "+12.5%",
      changeType: "positive",
      icon: "💰",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      title: "Total Orders",
      value: "127",
      change: "+8.2%",
      changeType: "positive",
      icon: "📦",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "Active Tables",
      value: "18/25",
      change: "72%",
      changeType: "neutral",
      icon: "🪑",
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      title: "Customer Rating",
      value: "4.8/5",
      change: "+0.2",
      changeType: "positive",
      icon: "⭐",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
  ];

  const recentOrders = [
    {
      id: "#001",
      table: "T-12",
      items: "Chicken Biryani, Lassi",
      amount: "₹450",
      status: "preparing",
      time: "5 min ago",
    },
    {
      id: "#002",
      table: "T-08",
      items: "Paneer Butter Masala, Naan",
      amount: "₹320",
      status: "ready",
      time: "3 min ago",
    },
    {
      id: "#003",
      table: "T-15",
      items: "Mutton Biryani, Raita",
      amount: "₹580",
      status: "served",
      time: "1 min ago",
    },
    {
      id: "#004",
      table: "T-03",
      items: "Veg Thali",
      amount: "₹280",
      status: "preparing",
      time: "7 min ago",
    },
    {
      id: "#005",
      table: "T-20",
      items: "Fish Curry, Rice",
      amount: "₹380",
      status: "ready",
      time: "2 min ago",
    },
  ];

  const topSellingItems = [
    { name: "Chicken Biryani", sales: 45, revenue: "₹18,000" },
    { name: "Paneer Butter Masala", sales: 32, revenue: "₹12,800" },
    { name: "Mutton Biryani", sales: 28, revenue: "₹16,240" },
    { name: "Dal Makhani", sales: 25, revenue: "₹7,500" },
    { name: "Chicken Tikka", sales: 22, revenue: "₹8,800" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "preparing":
        return "badge-warning";
      case "ready":
        return "badge-success";
      case "served":
        return "badge-info";
      default:
        return "badge-neutral";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "preparing":
        return "Preparing";
      case "ready":
        return "Ready";
      case "served":
        return "Served";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />

      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-elegant font-bold text-primary mb-2">
              Staff Dashboard
            </h1>
            <p className="text-base-content/70 font-telugu">
              సిబ్బంది డాష్‌బోర్డ్
            </p>
            <p className="text-sm text-base-content/60">
              Welcome back! Here's what's happening at Spice Palace today.
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="text-right">
              <p className="text-sm text-base-content/60">Current Time</p>
              <p className="text-lg font-semibold text-primary">
                {currentTime.toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <span className="text-2xl">⏰</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`card ${stat.bgColor} shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="card-body p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-base-content/70 mb-1">
                      {stat.title}
                    </p>
                    <p className={`text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                    </p>
                    <p
                      className={`text-xs ${
                        stat.changeType === "positive"
                          ? "text-green-600"
                          : stat.changeType === "negative"
                          ? "text-red-600"
                          : "text-base-content/60"
                      }`}
                    >
                      {stat.change} from yesterday
                    </p>
                  </div>
                  <div
                    className={`w-12 h-12 ${stat.bgColor} rounded-full flex items-center justify-center`}
                  >
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="card-title text-xl font-elegant text-primary">
                    Recent Orders
                  </h2>
                  <div className="tabs tabs-boxed">
                    <button
                      className={`tab tab-sm ${
                        selectedPeriod === "today" ? "tab-active" : ""
                      }`}
                      onClick={() => setSelectedPeriod("today")}
                    >
                      Today
                    </button>
                    <button
                      className={`tab tab-sm ${
                        selectedPeriod === "week" ? "tab-active" : ""
                      }`}
                      onClick={() => setSelectedPeriod("week")}
                    >
                      This Week
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  {recentOrders.map((order, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-base-200 rounded-lg hover:bg-base-300 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">
                            #{order.id.slice(1)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-base-content">
                            Table {order.table}
                          </p>
                          <p className="text-sm text-base-content/70">
                            {order.items}
                          </p>
                          <p className="text-xs text-base-content/60">
                            {order.time}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">{order.amount}</p>
                        <div
                          className={`badge ${getStatusColor(
                            order.status
                          )} badge-sm`}
                        >
                          {getStatusText(order.status)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-sm">
                    View All Orders
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Top Selling Items */}
          <div className="lg:col-span-1">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h2 className="card-title text-xl font-elegant text-primary mb-4">
                  Top Selling Items
                </h2>
                <div className="space-y-3">
                  {topSellingItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-base-200 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-accent">
                            {index + 1}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-base-content">
                            {item.name}
                          </p>
                          <p className="text-xs text-base-content/60">
                            {item.sales} orders
                          </p>
                        </div>
                      </div>
                      <p className="font-semibold text-primary">
                        {item.revenue}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="card-body text-center p-6">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="card-title text-lg font-elegant text-primary justify-center mb-2">
                New Order
              </h3>
              <p className="text-sm text-base-content/70">Take a new order</p>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-secondary/10 to-primary/10 border-2 border-secondary/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="card-body text-center p-6">
              <div className="text-4xl mb-3">🍽️</div>
              <h3 className="card-title text-lg font-elegant text-primary justify-center mb-2">
                Menu Management
              </h3>
              <p className="text-sm text-base-content/70">Update menu items</p>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-accent/10 to-secondary/10 border-2 border-accent/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="card-body text-center p-6">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="card-title text-lg font-elegant text-primary justify-center mb-2">
                Staff Management
              </h3>
              <p className="text-sm text-base-content/70">
                Manage staff members
              </p>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-info/10 to-primary/10 border-2 border-info/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="card-body text-center p-6">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="card-title text-lg font-elegant text-primary justify-center mb-2">
                Analytics
              </h3>
              <p className="text-sm text-base-content/70">
                View detailed reports
              </p>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-xl font-elegant text-primary mb-6">
              Recent Customer Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card bg-base-200 shadow-md">
                <div className="card-body p-4">
                  <div className="flex items-center mb-3">
                    <div className="avatar">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold">R</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-base-content">
                        Rajesh Kumar
                      </p>
                      <div className="flex text-yellow-500">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                  <p className="text-sm text-base-content/80">
                    "Excellent food quality and service. The biryani was
                    amazing!"
                  </p>
                </div>
              </div>

              <div className="card bg-base-200 shadow-md">
                <div className="card-body p-4">
                  <div className="flex items-center mb-3">
                    <div className="avatar">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <span className="text-secondary font-bold">P</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-base-content">
                        Priya Sharma
                      </p>
                      <div className="flex text-yellow-500">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                  <p className="text-sm text-base-content/80">
                    "Great ambiance and authentic Indian flavors. Highly
                    recommended!"
                  </p>
                </div>
              </div>

              <div className="card bg-base-200 shadow-md">
                <div className="card-body p-4">
                  <div className="flex items-center mb-3">
                    <div className="avatar">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-accent font-bold">A</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-base-content">
                        Amit Patel
                      </p>
                      <div className="flex text-yellow-500">⭐⭐⭐⭐</div>
                    </div>
                  </div>
                  <p className="text-sm text-base-content/80">
                    "Good food and reasonable prices. Will visit again soon."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
