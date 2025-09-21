import React, { useState } from 'react';
import Navbar from "./Navabr";

function MenuManagement() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Chicken Biryani",
      category: "Biryanis",
      price: 250,
      description: "Fragrant basmati rice with tender chicken pieces",
      spicy: true,
      veg: false,
      available: true,
      image: "🍛"
    },
    {
      id: 2,
      name: "Paneer Butter Masala",
      category: "Curries",
      price: 200,
      description: "Cottage cheese in rich tomato gravy",
      spicy: false,
      veg: true,
      available: true,
      image: "🧀"
    },
    {
      id: 3,
      name: "Chicken Lollipop",
      category: "Starters",
      price: 220,
      description: "Crispy chicken wings with spicy marinade",
      spicy: true,
      veg: false,
      available: true,
      image: "🍗"
    },
    {
      id: 4,
      name: "Mango Lassi",
      category: "Beverages",
      price: 80,
      description: "Creamy yogurt drink with fresh mango",
      spicy: false,
      veg: true,
      available: false,
      image: "🥭"
    },
    {
      id: 5,
      name: "Garlic Naan",
      category: "Breads",
      price: 60,
      description: "Soft leavened bread topped with garlic",
      spicy: false,
      veg: true,
      available: true,
      image: "🍞"
    }
  ]);

  const [newItem, setNewItem] = useState({
    name: '',
    category: 'Starters',
    price: '',
    description: '',
    spicy: false,
    veg: true,
    available: true,
    image: '🍽️'
  });

  const categories = [
    { value: 'all', label: 'All Items' },
    { value: 'Starters', label: 'Starters & Appetizers' },
    { value: 'Biryanis', label: 'Royal Biryanis' },
    { value: 'Curries', label: 'Curries & Gravies' },
    { value: 'Breads', label: 'Breads & Rotis' },
    { value: 'Beverages', label: 'Fresh Beverages' },
    { value: 'Chinese', label: 'Chinese Delights' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const toggleAvailability = (id) => {
    setMenuItems(items => 
      items.map(item => 
        item.id === id ? { ...item, available: !item.available } : item
      )
    );
  };

  const deleteItem = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setMenuItems(items => items.filter(item => item.id !== id));
    }
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    const item = {
      ...newItem,
      id: Date.now(),
      price: parseFloat(newItem.price)
    };
    setMenuItems([...menuItems, item]);
    setNewItem({
      name: '',
      category: 'Starters',
      price: '',
      description: '',
      spicy: false,
      veg: true,
      available: true,
      image: '🍽️'
    });
    setShowAddModal(false);
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
    setNewItem(item);
    setShowAddModal(true);
  };

  const handleUpdateItem = (e) => {
    e.preventDefault();
    setMenuItems(items => 
      items.map(item => 
        item.id === editingItem.id ? { ...newItem, id: editingItem.id, price: parseFloat(newItem.price) } : item
      )
    );
    setEditingItem(null);
    setNewItem({
      name: '',
      category: 'Starters',
      price: '',
      description: '',
      spicy: false,
      veg: true,
      available: true,
      image: '🍽️'
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
              Menu Management
            </h1>
            <p className="text-base-content/70 font-telugu">
              మెనూ నిర్వహణ
            </p>
            <p className="text-sm text-base-content/60">
              Manage your restaurant menu items, prices, and availability
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
              Add New Item
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-base-content/70">Total Items</p>
                  <p className="text-2xl font-bold text-primary">{menuItems.length}</p>
                </div>
                <div className="text-3xl">🍽️</div>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-base-content/70">Available</p>
                  <p className="text-2xl font-bold text-success">{menuItems.filter(item => item.available).length}</p>
                </div>
                <div className="text-3xl">✅</div>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-base-content/70">Out of Stock</p>
                  <p className="text-2xl font-bold text-warning">{menuItems.filter(item => !item.available).length}</p>
                </div>
                <div className="text-3xl">⚠️</div>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-base-content/70">Categories</p>
                  <p className="text-2xl font-bold text-info">{categories.length - 1}</p>
                </div>
                <div className="text-3xl">📂</div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="tabs tabs-boxed w-full">
          {categories.map((category) => (
            <button
              key={category.value}
              className={`tab flex-1 ${selectedCategory === category.value ? 'tab-active' : ''}`}
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="card-body">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{item.image}</div>
                    <div>
                      <h3 className="card-title text-lg text-primary">{item.name}</h3>
                      <p className="text-sm text-base-content/70">{item.category}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {item.spicy && <span className="badge badge-error badge-sm">🌶️ Spicy</span>}
                    {item.veg && <span className="badge badge-success badge-sm">🥬 Veg</span>}
                  </div>
                </div>

                <p className="text-sm text-base-content/80 mb-4">{item.description}</p>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary">₹{item.price}</span>
                  <div className={`badge ${item.available ? 'badge-success' : 'badge-warning'}`}>
                    {item.available ? 'Available' : 'Out of Stock'}
                  </div>
                </div>

                <div className="card-actions justify-end">
                  <button 
                    className="btn btn-ghost btn-sm"
                    onClick={() => handleEditItem(item)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                    Edit
                  </button>
                  <button 
                    className={`btn btn-sm ${item.available ? 'btn-warning' : 'btn-success'}`}
                    onClick={() => toggleAvailability(item.id)}
                  >
                    {item.available ? 'Mark Unavailable' : 'Mark Available'}
                  </button>
                  <button 
                    className="btn btn-error btn-sm"
                    onClick={() => deleteItem(item.id)}
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
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-2xl font-elegant text-primary mb-2">No Items Found</h3>
            <p className="text-base-content/70">No menu items match the selected category</p>
          </div>
        )}
      </div>

      {/* Add/Edit Item Modal */}
      {showAddModal && (
        <div className="modal modal-open">
          <div className="modal-box max-w-2xl">
            <h3 className="font-bold text-lg text-primary mb-4">
              {editingItem ? 'Edit Menu Item' : 'Add New Menu Item'}
            </h3>
            
            <form onSubmit={editingItem ? handleUpdateItem : handleAddItem} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Item Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={newItem.name}
                    onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <select
                    className="select select-bordered"
                    value={newItem.category}
                    onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                    required
                  >
                    {categories.slice(1).map(category => (
                      <option key={category.value} value={category.value}>{category.label}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price (₹)</span>
                  </label>
                  <input
                    type="number"
                    className="input input-bordered"
                    value={newItem.price}
                    onChange={(e) => setNewItem({...newItem, price: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Emoji</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={newItem.image}
                    onChange={(e) => setNewItem({...newItem, image: e.target.value})}
                    placeholder="🍽️"
                  />
                </div>
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24"
                  value={newItem.description}
                  onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                  required
                ></textarea>
              </div>
              
              <div className="flex space-x-4">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    checked={newItem.spicy}
                    onChange={(e) => setNewItem({...newItem, spicy: e.target.checked})}
                  />
                  <span className="label-text ml-2">Spicy</span>
                </label>
                
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success"
                    checked={newItem.veg}
                    onChange={(e) => setNewItem({...newItem, veg: e.target.checked})}
                  />
                  <span className="label-text ml-2">Vegetarian</span>
                </label>
                
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-info"
                    checked={newItem.available}
                    onChange={(e) => setNewItem({...newItem, available: e.target.checked})}
                  />
                  <span className="label-text ml-2">Available</span>
                </label>
              </div>

              <div className="modal-action">
                <button 
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingItem(null);
                    setNewItem({
                      name: '',
                      category: 'Starters',
                      price: '',
                      description: '',
                      spicy: false,
                      veg: true,
                      available: true,
                      image: '🍽️'
                    });
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingItem ? 'Update Item' : 'Add Item'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuManagement;
