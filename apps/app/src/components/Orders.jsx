import React, { useState } from 'react';
import Navbar from "./Navabr";

function Orders() {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      id: "#001",
      table: "T-12",
      customer: "Rajesh Kumar",
      items: [
        { name: "Chicken Biryani", quantity: 2, price: 250 },
        { name: "Mango Lassi", quantity: 1, price: 80 },
        { name: "Raita", quantity: 1, price: 40 }
      ],
      total: 620,
      status: "preparing",
      time: "5 min ago",
      phone: "+91 98765 43210"
    },
    {
      id: "#002",
      table: "T-08",
      customer: "Priya Sharma",
      items: [
        { name: "Paneer Butter Masala", quantity: 1, price: 200 },
        { name: "Garlic Naan", quantity: 2, price: 60 },
        { name: "Dal Makhani", quantity: 1, price: 180 }
      ],
      total: 500,
      status: "ready",
      time: "3 min ago",
      phone: "+91 98765 43211"
    },
    {
      id: "#003",
      table: "T-15",
      customer: "Amit Patel",
      items: [
        { name: "Mutton Biryani", quantity: 1, price: 320 },
        { name: "Raita", quantity: 1, price: 40 },
        { name: "Chicken 65", quantity: 1, price: 200 }
      ],
      total: 560,
      status: "served",
      time: "1 min ago",
      phone: "+91 98765 43212"
    },
    {
      id: "#004",
      table: "T-03",
      customer: "Sneha Reddy",
      items: [
        { name: "Veg Thali", quantity: 1, price: 280 },
        { name: "Butter Naan", quantity: 1, price: 50 }
      ],
      total: 330,
      status: "preparing",
      time: "7 min ago",
      phone: "+91 98765 43213"
    },
    {
      id: "#005",
      table: "T-20",
      customer: "Vikram Singh",
      items: [
        { name: "Fish Curry", quantity: 1, price: 250 },
        { name: "Steamed Rice", quantity: 1, price: 80 },
        { name: "Papad", quantity: 2, price: 20 }
      ],
      total: 370,
      status: "ready",
      time: "2 min ago",
      phone: "+91 98765 43214"
    }
  ];

  const statusOptions = [
    { value: 'all', label: 'All Orders', count: orders.length },
    { value: 'preparing', label: 'Preparing', count: orders.filter(o => o.status === 'preparing').length },
    { value: 'ready', label: 'Ready', count: orders.filter(o => o.status === 'ready').length },
    { value: 'served', label: 'Served', count: orders.filter(o => o.status === 'served').length }
  ];

  const filteredOrders = selectedStatus === 'all' 
    ? orders 
    : orders.filter(order => order.status === selectedStatus);

  const getStatusColor = (status) => {
    switch (status) {
      case 'preparing': return 'badge-warning';
      case 'ready': return 'badge-success';
      case 'served': return 'badge-info';
      default: return 'badge-neutral';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'preparing': return 'Preparing';
      case 'ready': return 'Ready to Serve';
      case 'served': return 'Served';
      default: return status;
    }
  };

  const updateOrderStatus = (orderId, newStatus) => {
    // In real app, this would make an API call
    console.log(`Updating order ${orderId} to ${newStatus}`);
  };

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-elegant font-bold text-primary mb-2">
              Order Management
            </h1>
            <p className="text-base-content/70 font-telugu">
              ఆర్డర్ నిర్వహణ
            </p>
            <p className="text-sm text-base-content/60">
              Manage and track all restaurant orders in real-time
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Total Orders</div>
                <div className="stat-value text-primary">{orders.length}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Filter Tabs */}
        <div className="tabs tabs-boxed w-full">
          {statusOptions.map((option) => (
            <button
              key={option.value}
              className={`tab flex-1 ${selectedStatus === option.value ? 'tab-active' : ''}`}
              onClick={() => setSelectedStatus(option.value)}
            >
              {option.label}
              <span className="badge badge-sm ml-2">{option.count}</span>
            </button>
          ))}
        </div>

        {/* Orders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredOrders.map((order) => (
            <div key={order.id} className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="card-body">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="card-title text-lg text-primary">{order.id}</h3>
                    <p className="text-sm text-base-content/70">Table {order.table}</p>
                  </div>
                  <div className={`badge ${getStatusColor(order.status)}`}>
                    {getStatusText(order.status)}
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-base-content">{order.customer}</p>
                    <p className="text-sm text-base-content/70">{order.phone}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-base-content/70 mb-2">Order Items:</p>
                    <div className="space-y-1">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>{item.quantity}x {item.name}</span>
                          <span className="text-primary">₹{item.price * item.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="divider my-2"></div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">Total: ₹{order.total}</span>
                    <span className="text-xs text-base-content/60">{order.time}</span>
                  </div>
                </div>

                <div className="card-actions justify-end mt-4">
                  {order.status === 'preparing' && (
                    <button 
                      className="btn btn-success btn-sm"
                      onClick={() => updateOrderStatus(order.id, 'ready')}
                    >
                      Mark Ready
                    </button>
                  )}
                  {order.status === 'ready' && (
                    <button 
                      className="btn btn-info btn-sm"
                      onClick={() => updateOrderStatus(order.id, 'served')}
                    >
                      Mark Served
                    </button>
                  )}
                  <button 
                    className="btn btn-ghost btn-sm"
                    onClick={() => setSelectedOrder(order)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-2xl font-elegant text-primary mb-2">No Orders Found</h3>
            <p className="text-base-content/70">No orders match the selected filter criteria</p>
          </div>
        )}
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="modal modal-open">
          <div className="modal-box max-w-2xl">
            <h3 className="font-bold text-lg text-primary mb-4">Order Details - {selectedOrder.id}</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-base-content/70">Customer</p>
                  <p className="font-semibold">{selectedOrder.customer}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-base-content/70">Table</p>
                  <p className="font-semibold">{selectedOrder.table}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-base-content/70">Phone</p>
                  <p className="font-semibold">{selectedOrder.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-base-content/70">Status</p>
                  <div className={`badge ${getStatusColor(selectedOrder.status)}`}>
                    {getStatusText(selectedOrder.status)}
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-base-content/70 mb-2">Order Items</p>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-base-200 rounded-lg">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-base-content/70">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-primary">₹{item.price * item.quantity}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="divider"></div>
              
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-primary">Total: ₹{selectedOrder.total}</span>
                <span className="text-sm text-base-content/60">{selectedOrder.time}</span>
              </div>
            </div>

            <div className="modal-action">
              <button 
                className="btn btn-primary"
                onClick={() => setSelectedOrder(null)}
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

export default Orders;
