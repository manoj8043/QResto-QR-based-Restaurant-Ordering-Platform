import React, { useState } from 'react';
import Navbar from "./Navabr";

function StaffManagement() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingStaff, setEditingStaff] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const [staffMembers, setStaffMembers] = useState([
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "rajesh.kumar@spicepalace.com",
      phone: "+91 98765 43210",
      role: "Manager",
      department: "Management",
      shift: "Day",
      salary: 45000,
      joinDate: "2023-01-15",
      status: "active",
      avatar: "R",
      address: "123 MG Road, Mumbai, Maharashtra 400001",
      emergencyContact: "+91 98765 43211",
      skills: ["Management", "Customer Service", "Inventory"]
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya.sharma@spicepalace.com",
      phone: "+91 98765 43212",
      role: "Chef",
      department: "Kitchen",
      shift: "Day",
      salary: 38000,
      joinDate: "2023-03-20",
      status: "active",
      avatar: "P",
      address: "456 Park Street, Delhi, Delhi 110001",
      emergencyContact: "+91 98765 43213",
      skills: ["Cooking", "Menu Planning", "Food Safety"]
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit.patel@spicepalace.com",
      phone: "+91 98765 43214",
      role: "Waiter",
      department: "Service",
      shift: "Evening",
      salary: 25000,
      joinDate: "2023-06-10",
      status: "active",
      avatar: "A",
      address: "789 Commercial Street, Bangalore, Karnataka 560001",
      emergencyContact: "+91 98765 43215",
      skills: ["Customer Service", "Order Taking", "Table Service"]
    },
    {
      id: 4,
      name: "Sneha Reddy",
      email: "sneha.reddy@spicepalace.com",
      phone: "+91 98765 43216",
      role: "Cashier",
      department: "Finance",
      shift: "Day",
      salary: 22000,
      joinDate: "2023-08-05",
      status: "active",
      avatar: "S",
      address: "321 Brigade Road, Hyderabad, Telangana 500001",
      emergencyContact: "+91 98765 43217",
      skills: ["Cash Handling", "POS System", "Accounting"]
    },
    {
      id: 5,
      name: "Vikram Singh",
      email: "vikram.singh@spicepalace.com",
      phone: "+91 98765 43218",
      role: "Cleaner",
      department: "Maintenance",
      shift: "Night",
      salary: 18000,
      joinDate: "2023-09-12",
      status: "inactive",
      avatar: "V",
      address: "654 MG Road, Chennai, Tamil Nadu 600001",
      emergencyContact: "+91 98765 43219",
      skills: ["Cleaning", "Maintenance", "Sanitization"]
    }
  ]);

  const [newStaff, setNewStaff] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Waiter',
    department: 'Service',
    shift: 'Day',
    salary: '',
    address: '',
    emergencyContact: '',
    skills: []
  });

  const filterOptions = [
    { value: 'all', label: 'All Staff', count: staffMembers.length },
    { value: 'active', label: 'Active', count: staffMembers.filter(s => s.status === 'active').length },
    { value: 'inactive', label: 'Inactive', count: staffMembers.filter(s => s.status === 'inactive').length },
    { value: 'management', label: 'Management', count: staffMembers.filter(s => s.department === 'Management').length },
    { value: 'kitchen', label: 'Kitchen', count: staffMembers.filter(s => s.department === 'Kitchen').length },
    { value: 'service', label: 'Service', count: staffMembers.filter(s => s.department === 'Service').length }
  ];

  const roles = [
    'Manager', 'Chef', 'Sous Chef', 'Waiter', 'Cashier', 'Host', 'Cleaner', 'Security'
  ];

  const departments = [
    'Management', 'Kitchen', 'Service', 'Finance', 'Maintenance', 'Security'
  ];

  const shifts = ['Day', 'Evening', 'Night'];

  const filteredStaff = staffMembers.filter(staff => {
    const matchesFilter = selectedFilter === 'all' || 
                         staff.status === selectedFilter || 
                         staff.department.toLowerCase() === selectedFilter;
    const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         staff.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         staff.role.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'badge-success';
      case 'inactive': return 'badge-neutral';
      default: return 'badge-neutral';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Active';
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

  const toggleStaffStatus = (id) => {
    setStaffMembers(members => 
      members.map(member => 
        member.id === id ? { ...member, status: member.status === 'active' ? 'inactive' : 'active' } : member
      )
    );
  };

  const deleteStaff = (id) => {
    if (window.confirm('Are you sure you want to delete this staff member?')) {
      setStaffMembers(members => members.filter(member => member.id !== id));
    }
  };

  const handleAddStaff = (e) => {
    e.preventDefault();
    const staff = {
      ...newStaff,
      id: Date.now(),
      salary: parseFloat(newStaff.salary),
      joinDate: new Date().toISOString().split('T')[0],
      status: 'active',
      avatar: newStaff.name.charAt(0).toUpperCase()
    };
    setStaffMembers([...staffMembers, staff]);
    setNewStaff({
      name: '',
      email: '',
      phone: '',
      role: 'Waiter',
      department: 'Service',
      shift: 'Day',
      salary: '',
      address: '',
      emergencyContact: '',
      skills: []
    });
    setShowAddModal(false);
  };

  const handleEditStaff = (staff) => {
    setEditingStaff(staff);
    setNewStaff({
      name: staff.name,
      email: staff.email,
      phone: staff.phone,
      role: staff.role,
      department: staff.department,
      shift: staff.shift,
      salary: staff.salary.toString(),
      address: staff.address,
      emergencyContact: staff.emergencyContact,
      skills: staff.skills
    });
    setShowAddModal(true);
  };

  const handleUpdateStaff = (e) => {
    e.preventDefault();
    setStaffMembers(members => 
      members.map(member => 
        member.id === editingStaff.id ? { 
          ...newStaff, 
          id: editingStaff.id, 
          salary: parseFloat(newStaff.salary),
          joinDate: editingStaff.joinDate,
          status: editingStaff.status,
          avatar: editingStaff.avatar
        } : member
      )
    );
    setEditingStaff(null);
    setNewStaff({
      name: '',
      email: '',
      phone: '',
      role: 'Waiter',
      department: 'Service',
      shift: 'Day',
      salary: '',
      address: '',
      emergencyContact: '',
      skills: []
    });
    setShowAddModal(false);
  };

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-elegant font-bold text-primary mb-2">
              Staff Management
            </h1>
            <p className="text-base-content/70 font-telugu">
              సిబ్బంది నిర్వహణ
            </p>
            <p className="text-sm text-base-content/60">
              Manage your restaurant staff, roles, and schedules
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button 
              className="btn btn-primary"
              onClick={() => setShowAddModal(true)}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Add Staff Member
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-base-content/70">Total Staff</p>
                  <p className="text-2xl font-bold text-primary">{staffMembers.length}</p>
                </div>
                <div className="text-3xl">👥</div>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-base-content/70">Active Staff</p>
                  <p className="text-2xl font-bold text-success">{staffMembers.filter(s => s.status === 'active').length}</p>
                </div>
                <div className="text-3xl">✅</div>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-base-content/70">Departments</p>
                  <p className="text-2xl font-bold text-info">{new Set(staffMembers.map(s => s.department)).size}</p>
                </div>
                <div className="text-3xl">🏢</div>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-base-content/70">Avg Salary</p>
                  <p className="text-2xl font-bold text-warning">{formatCurrency(staffMembers.reduce((sum, s) => sum + s.salary, 0) / staffMembers.length)}</p>
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
                placeholder="Search staff members..."
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

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStaff.map((staff) => (
            <div key={staff.id} className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="card-body">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold text-lg">{staff.avatar}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="card-title text-lg text-primary">{staff.name}</h3>
                      <p className="text-sm text-base-content/70">{staff.role}</p>
                    </div>
                  </div>
                  <div className={`badge ${getStatusColor(staff.status)}`}>
                    {getStatusText(staff.status)}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-base-content/70">Department</p>
                      <p className="font-semibold">{staff.department}</p>
                    </div>
                    <div>
                      <p className="text-base-content/70">Shift</p>
                      <p className="font-semibold text-primary">{staff.shift}</p>
                    </div>
                    <div>
                      <p className="text-base-content/70">Phone</p>
                      <p className="font-semibold">{staff.phone}</p>
                    </div>
                    <div>
                      <p className="text-base-content/70">Salary</p>
                      <p className="font-semibold text-success">{formatCurrency(staff.salary)}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-base-content/70 mb-1">Join Date</p>
                    <p className="text-sm font-semibold">{formatDate(staff.joinDate)}</p>
                  </div>

                  <div>
                    <p className="text-sm text-base-content/70 mb-2">Skills</p>
                    <div className="flex flex-wrap gap-1">
                      {staff.skills.map((skill, index) => (
                        <span key={index} className="badge badge-outline badge-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="card-actions justify-end mt-4">
                  <button 
                    className="btn btn-ghost btn-sm"
                    onClick={() => handleEditStaff(staff)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                    Edit
                  </button>
                  <button 
                    className={`btn btn-sm ${staff.status === 'active' ? 'btn-warning' : 'btn-success'}`}
                    onClick={() => toggleStaffStatus(staff.id)}
                  >
                    {staff.status === 'active' ? 'Deactivate' : 'Activate'}
                  </button>
                  <button 
                    className="btn btn-error btn-sm"
                    onClick={() => deleteStaff(staff.id)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredStaff.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">👥</div>
            <h3 className="text-2xl font-elegant text-primary mb-2">No Staff Found</h3>
            <p className="text-base-content/70">No staff members match the selected filter criteria</p>
          </div>
        )}
      </div>

      {/* Add/Edit Staff Modal */}
      {showAddModal && (
        <div className="modal modal-open">
          <div className="modal-box max-w-2xl">
            <h3 className="font-bold text-lg text-primary mb-4">
              {editingStaff ? 'Edit Staff Member' : 'Add New Staff Member'}
            </h3>
            
            <form onSubmit={editingStaff ? handleUpdateStaff : handleAddStaff} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={newStaff.name}
                    onChange={(e) => setNewStaff({...newStaff, name: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    className="input input-bordered"
                    value={newStaff.email}
                    onChange={(e) => setNewStaff({...newStaff, email: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="tel"
                    className="input input-bordered"
                    value={newStaff.phone}
                    onChange={(e) => setNewStaff({...newStaff, phone: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Role</span>
                  </label>
                  <select
                    className="select select-bordered"
                    value={newStaff.role}
                    onChange={(e) => setNewStaff({...newStaff, role: e.target.value})}
                    required
                  >
                    {roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Department</span>
                  </label>
                  <select
                    className="select select-bordered"
                    value={newStaff.department}
                    onChange={(e) => setNewStaff({...newStaff, department: e.target.value})}
                    required
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Shift</span>
                  </label>
                  <select
                    className="select select-bordered"
                    value={newStaff.shift}
                    onChange={(e) => setNewStaff({...newStaff, shift: e.target.value})}
                    required
                  >
                    {shifts.map(shift => (
                      <option key={shift} value={shift}>{shift}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Salary (₹)</span>
                  </label>
                  <input
                    type="number"
                    className="input input-bordered"
                    value={newStaff.salary}
                    onChange={(e) => setNewStaff({...newStaff, salary: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Emergency Contact</span>
                  </label>
                  <input
                    type="tel"
                    className="input input-bordered"
                    value={newStaff.emergencyContact}
                    onChange={(e) => setNewStaff({...newStaff, emergencyContact: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24"
                  value={newStaff.address}
                  onChange={(e) => setNewStaff({...newStaff, address: e.target.value})}
                  required
                ></textarea>
              </div>

              <div className="modal-action">
                <button 
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingStaff(null);
                    setNewStaff({
                      name: '',
                      email: '',
                      phone: '',
                      role: 'Waiter',
                      department: 'Service',
                      shift: 'Day',
                      salary: '',
                      address: '',
                      emergencyContact: '',
                      skills: []
                    });
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingStaff ? 'Update Staff' : 'Add Staff'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default StaffManagement;
