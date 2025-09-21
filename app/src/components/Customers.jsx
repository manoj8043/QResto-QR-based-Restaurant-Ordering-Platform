import React, { useState } from 'react';
import Navbar from "./Navabr";

function Customers() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const customers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "rajesh.kumar@email.com",
      phone: "+91 98765 43210",
      totalOrders: 45,
      totalSpent: 22500,
      lastVisit: "2024-01-15",
      status: "active",
      loyaltyPoints: 1250,
      favoriteItems: ["Chicken Biryani", "Mango Lassi"],
      address: "123 MG Road, Mumbai, Maharashtra 400001",
      joinDate: "2023-06-15",
      avatar: "R"
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya.sharma@email.com",
      phone: "+91 98765 43211",
      totalOrders: 32,
      totalSpent: 16800,
      lastVisit: "2024-01-14",
      status: "active",
      loyaltyPoints: 840,
      favoriteItems: ["Paneer Butter Masala", "Garlic Naan"],
      address: "456 Park Street, Delhi, Delhi 110001",
      joinDate: "2023-08-20",
      avatar: "P"
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit.patel@email.com",
      phone: "+91 98765 43212",
      totalOrders: 28,
      totalSpent: 14200,
      lastVisit: "2024-01-12",
      status: "inactive",
      loyaltyPoints: 710,
      favoriteItems: ["Mutton Biryani", "Raita"],
      address: "789 Commercial Street, Bangalore, Karnataka 560001",
      joinDate: "2023-07-10",
      avatar: "A"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      email: "sneha.reddy@email.com",
      phone: "+91 98765 43213",
      totalOrders: 38,
      totalSpent: 19200,
      lastVisit: "2024-01-16",
      status: "vip",
      loyaltyPoints: 960,
      favoriteItems: ["Veg Thali", "Butter Naan"],
      address: "321 Brigade Road, Hyderabad, Telangana 500001",
      joinDate: "2023-05-05",
      avatar: "S"
    },
    {
      id: 5,
      name: "Vikram Singh",
      email: "vikram.singh@email.com",
      phone: "+91 98765 43214",
      totalOrders: 22,
      totalSpent: 11200,
      lastVisit: "2024-01-10",
      status: "active",
      loyaltyPoints: 560,
      favoriteItems: ["Fish Curry", "Steamed Rice"],
      address: "654 MG Road, Chennai, Tamil Nadu 600001",
      joinDate: "2023-09-12",
      avatar: "V"
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Customers', count: customers.length },
    { value: 'active', label: 'Active', count: customers.filter(c => c.status === 'active').length },
    { value: 'vip', label: 'VIP', count: customers.filter(c => c.status === 'vip').length },
    { value: 'inactive', label: 'Inactive', count: customers.filter(c => c.status === 'inactive').length }
  ];

  const filteredCustomers = customers.filter(customer => {
    const matchesFilter = selectedFilter === 'all' || customer.status === selectedFilter;
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.phone.includes(searchTerm);
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'badge-success';
      case 'vip': return 'badge-warning';
      case 'inactive': return 'badge-neutral';
      default: return 'badge-neutral';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Active';
      case 'vip': return 'VIP';
      case 'inactive': return 'Inactive';
      default: return status;
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-elegant font-bold text-primary mb-2">
              Customer Management
            </h1>
            <p className="text-base-content/70 font-telugu">
              కస్టమర్ నిర్వహణ
            </p>
            <p className="text-sm text-base-content/60">
              Manage your restaurant's customer database and loyalty program
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Total Customers</div>
                <div className="stat-value text-primary">{customers.length}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-base-content/70">Total Customers</p>
                  <p className="text-2xl font-bold text-primary">{customers.length}</p>
                </div>
                <div className="text-3xl">👥</div>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-base-content/70">Active Customers</p>
                  <p className="text-2xl font-bold text-success">{customers.filter(c => c.status === 'active').length}</p>
                </div>
                <div className="text-3xl">✅</div>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-base-content/70">VIP Customers</p>
                  <p className="text-2xl font-bold text-warning">{customers.filter(c => c.status === 'vip').length}</p>
                </div>
                <div className="text-3xl">👑</div>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-base-content/70">Total Revenue</p>
                  <p className="text-2xl font-bold text-info">{formatCurrency(customers.reduce((sum, c) => sum + c.totalSpent, 0))}</p>
                </div>
                <div className="text-3xl">💰</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="form-control flex-1">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search customers..."
                className="input input-bordered w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-square btn-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="tabs tabs-boxed">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                className={`tab ${selectedFilter === option.value ? 'tab-active' : ''}`}
                onClick={() => setSelectedFilter(option.value)}
              >
                {option.label}
                <span className="badge badge-sm ml-2">{option.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Customers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCustomers.map((customer) => (
            <div key={customer.id} className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="card-body">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold text-lg">{customer.avatar}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="card-title text-lg text-primary">{customer.name}</h3>
                      <p className="text-sm text-base-content/70">{customer.email}</p>
                    </div>
                  </div>
                  <div className={`badge ${getStatusColor(customer.status)}`}>
                    {getStatusText(customer.status)}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-base-content/70">Phone</p>
                      <p className="font-semibold">{customer.phone}</p>
                    </div>
                    <div>
                      <p className="text-base-content/70">Total Orders</p>
                      <p className="font-semibold text-primary">{customer.totalOrders}</p>
                    </div>
                    <div>
                      <p className="text-base-content/70">Total Spent</p>
                      <p className="font-semibold text-success">{formatCurrency(customer.totalSpent)}</p>
                    </div>
                    <div>
                      <p className="text-base-content/70">Loyalty Points</p>
                      <p className="font-semibold text-warning">{customer.loyaltyPoints}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-base-content/70 mb-1">Last Visit</p>
                    <p className="text-sm font-semibold">{formatDate(customer.lastVisit)}</p>
                  </div>

                  <div>
                    <p className="text-sm text-base-content/70 mb-2">Favorite Items</p>
                    <div className="flex flex-wrap gap-1">
                      {customer.favoriteItems.map((item, index) => (
                        <span key={index} className="badge badge-outline badge-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="card-actions justify-end mt-4">
                  <button 
                    className="btn btn-ghost btn-sm"
                    onClick={() => setSelectedCustomer(customer)}
                  >
                    View Details
                  </button>
                  <button className="btn btn-primary btn-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCustomers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">👥</div>
            <h3 className="text-2xl font-elegant text-primary mb-2">No Customers Found</h3>
            <p className="text-base-content/70">No customers match the selected filter criteria</p>
          </div>
        )}
      </div>

      {/* Customer Details Modal */}
      {selectedCustomer && (
        <div className="modal modal-open">
          <div className="modal-box max-w-2xl">
            <h3 className="font-bold text-lg text-primary mb-4">Customer Details - {selectedCustomer.name}</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="avatar">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-2xl">{selectedCustomer.avatar}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">{selectedCustomer.name}</h4>
                  <p className="text-base-content/70">{selectedCustomer.email}</p>
                  <div className={`badge ${getStatusColor(selectedCustomer.status)} mt-1`}>
                    {getStatusText(selectedCustomer.status)}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-base-content/70">Phone</p>
                  <p className="font-semibold">{selectedCustomer.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-base-content/70">Join Date</p>
                  <p className="font-semibold">{formatDate(selectedCustomer.joinDate)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-base-content/70">Total Orders</p>
                  <p className="font-semibold text-primary">{selectedCustomer.totalOrders}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-base-content/70">Total Spent</p>
                  <p className="font-semibold text-success">{formatCurrency(selectedCustomer.totalSpent)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-base-content/70">Loyalty Points</p>
                  <p className="font-semibold text-warning">{selectedCustomer.loyaltyPoints}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-base-content/70">Last Visit</p>
                  <p className="font-semibold">{formatDate(selectedCustomer.lastVisit)}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-base-content/70 mb-2">Address</p>
                <p className="text-sm bg-base-200 p-3 rounded-lg">{selectedCustomer.address}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-base-content/70 mb-2">Favorite Items</p>
                <div className="flex flex-wrap gap-2">
                  {selectedCustomer.favoriteItems.map((item, index) => (
                    <span key={index} className="badge badge-primary badge-outline">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-action">
              <button 
                className="btn btn-primary"
                onClick={() => setSelectedCustomer(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Customers;
