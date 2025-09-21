import React, { useState } from 'react';
import Navbar from "./Navabr";

function Sales() {
  const [selectedPeriod, setSelectedPeriod] = useState('today');
  const [selectedChart, setSelectedChart] = useState('revenue');

  const salesData = {
    today: {
      revenue: 45230,
      orders: 127,
      averageOrderValue: 356,
      growth: 12.5
    },
    week: {
      revenue: 285400,
      orders: 756,
      averageOrderValue: 377,
      growth: 8.2
    },
    month: {
      revenue: 1125000,
      orders: 2890,
      averageOrderValue: 389,
      growth: 15.3
    },
    year: {
      revenue: 12500000,
      orders: 31200,
      averageOrderValue: 401,
      growth: 22.1
    }
  };

  const topSellingItems = [
    { name: "Chicken Biryani", sales: 145, revenue: 36250, growth: 15.2 },
    { name: "Paneer Butter Masala", sales: 98, revenue: 19600, growth: 8.7 },
    { name: "Mutton Biryani", sales: 87, revenue: 27840, growth: 12.3 },
    { name: "Dal Makhani", sales: 76, revenue: 13680, growth: 5.4 },
    { name: "Chicken Tikka", sales: 65, revenue: 13000, growth: 9.8 }
  ];

  const hourlyData = [
    { hour: "10 AM", orders: 12, revenue: 4200 },
    { hour: "11 AM", orders: 18, revenue: 6300 },
    { hour: "12 PM", orders: 35, revenue: 12250 },
    { hour: "1 PM", orders: 42, revenue: 14700 },
    { hour: "2 PM", orders: 28, revenue: 9800 },
    { hour: "3 PM", orders: 15, revenue: 5250 },
    { hour: "4 PM", orders: 8, revenue: 2800 },
    { hour: "5 PM", orders: 22, revenue: 7700 },
    { hour: "6 PM", orders: 38, revenue: 13300 },
    { hour: "7 PM", orders: 45, revenue: 15750 },
    { hour: "8 PM", orders: 52, revenue: 18200 },
    { hour: "9 PM", orders: 38, revenue: 13300 },
    { hour: "10 PM", orders: 25, revenue: 8750 }
  ];

  const paymentMethods = [
    { method: "UPI", percentage: 45, amount: 20354, count: 57 },
    { method: "Credit Card", percentage: 30, amount: 13569, count: 38 },
    { method: "Cash", percentage: 20, amount: 9046, count: 25 },
    { method: "Debit Card", percentage: 5, amount: 2261, count: 7 }
  ];

  const customerSegments = [
    { segment: "New Customers", count: 45, percentage: 35.4, revenue: 15750 },
    { segment: "Returning Customers", count: 67, percentage: 52.8, revenue: 23800 },
    { segment: "VIP Customers", count: 15, percentage: 11.8, revenue: 5680 }
  ];

  const currentData = salesData[selectedPeriod];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getPeriodLabel = (period) => {
    switch (period) {
      case 'today': return 'Today';
      case 'week': return 'This Week';
      case 'month': return 'This Month';
      case 'year': return 'This Year';
      default: return period;
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
              Sales & Analytics
            </h1>
            <p className="text-base-content/70 font-telugu">
              అమ్మకాలు మరియు విశ్లేషణ
            </p>
            <p className="text-sm text-base-content/60">
              Comprehensive sales analytics and business insights
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="tabs tabs-boxed">
              {Object.keys(salesData).map((period) => (
                <button
                  key={period}
                  className={`tab tab-sm ${selectedPeriod === period ? 'tab-active' : ''}`}
                  onClick={() => setSelectedPeriod(period)}
                >
                  {getPeriodLabel(period)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 shadow-lg">
            <div className="card-body p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-700 dark:text-green-300 mb-1">Total Revenue</p>
                  <p className="text-3xl font-bold text-green-800 dark:text-green-200">{formatCurrency(currentData.revenue)}</p>
                  <p className="text-xs text-green-600 dark:text-green-400">+{currentData.growth}% from last period</p>
                </div>
                <div className="text-4xl text-green-600">💰</div>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 shadow-lg">
            <div className="card-body p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-1">Total Orders</p>
                  <p className="text-3xl font-bold text-blue-800 dark:text-blue-200">{currentData.orders}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">Orders completed</p>
                </div>
                <div className="text-4xl text-blue-600">📦</div>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 shadow-lg">
            <div className="card-body p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-700 dark:text-purple-300 mb-1">Avg Order Value</p>
                  <p className="text-3xl font-bold text-purple-800 dark:text-purple-200">₹{currentData.averageOrderValue}</p>
                  <p className="text-xs text-purple-600 dark:text-purple-400">Per order</p>
                </div>
                <div className="text-4xl text-purple-600">📊</div>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 shadow-lg">
            <div className="card-body p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-700 dark:text-orange-300 mb-1">Growth Rate</p>
                  <p className="text-3xl font-bold text-orange-800 dark:text-orange-200">+{currentData.growth}%</p>
                  <p className="text-xs text-orange-600 dark:text-orange-400">vs last period</p>
                </div>
                <div className="text-4xl text-orange-600">📈</div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Hourly Sales Chart */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-xl font-elegant text-primary mb-4">
                Hourly Sales Performance
              </h2>
              <div className="space-y-3">
                {hourlyData.map((data, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium w-12">{data.hour}</span>
                      <div className="flex-1 bg-base-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(data.orders / 52) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-primary">{data.orders} orders</p>
                      <p className="text-xs text-base-content/70">{formatCurrency(data.revenue)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Selling Items */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-xl font-elegant text-primary mb-4">
                Top Selling Items
              </h2>
              <div className="space-y-4">
                {topSellingItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-accent">{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium text-base-content">{item.name}</p>
                        <p className="text-xs text-base-content/70">{item.sales} sales</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary">{formatCurrency(item.revenue)}</p>
                      <p className="text-xs text-success">+{item.growth}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods and Customer Segments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Payment Methods */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-xl font-elegant text-primary mb-4">
                Payment Methods
              </h2>
              <div className="space-y-4">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{method.method}</span>
                      <span className="text-sm text-base-content/70">{method.percentage}%</span>
                    </div>
                    <div className="w-full bg-base-200 rounded-full h-3">
                      <div 
                        className="bg-primary h-3 rounded-full transition-all duration-500"
                        style={{ width: `${method.percentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm text-base-content/70">
                      <span>{formatCurrency(method.amount)}</span>
                      <span>{method.count} transactions</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Customer Segments */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-xl font-elegant text-primary mb-4">
                Customer Segments
              </h2>
              <div className="space-y-4">
                {customerSegments.map((segment, index) => (
                  <div key={index} className="p-4 bg-base-200 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{segment.segment}</span>
                      <span className="text-sm text-primary">{segment.percentage}%</span>
                    </div>
                    <div className="flex justify-between text-sm text-base-content/70">
                      <span>{segment.count} customers</span>
                      <span>{formatCurrency(segment.revenue)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="card-body text-center p-6">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="card-title text-lg font-elegant text-primary justify-center mb-2">
                Generate Report
              </h3>
              <p className="text-sm text-base-content/70">Export detailed analytics report</p>
            </div>
          </div>
          
          <div className="card bg-gradient-to-br from-secondary/10 to-primary/10 border-2 border-secondary/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="card-body text-center p-6">
              <div className="text-4xl mb-3">📈</div>
              <h3 className="card-title text-lg font-elegant text-primary justify-center mb-2">
                View Trends
              </h3>
              <p className="text-sm text-base-content/70">Analyze sales trends and patterns</p>
            </div>
          </div>
          
          <div className="card bg-gradient-to-br from-accent/10 to-secondary/10 border-2 border-accent/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="card-body text-center p-6">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="card-title text-lg font-elegant text-primary justify-center mb-2">
                Set Targets
              </h3>
              <p className="text-sm text-base-content/70">Set and track sales targets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;
