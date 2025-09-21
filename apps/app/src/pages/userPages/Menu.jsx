import React, { useState } from "react";

const menuData = {
  "🍽️ Starters & Appetizers": [
    { name: "Chicken Lollipop", price: "₹220", desc: "Crispy chicken wings with spicy marinade", spicy: true },
    { name: "Paneer Tikka", price: "₹180", desc: "Grilled cottage cheese with aromatic spices", veg: true },
    { name: "Veg Manchurian", price: "₹160", desc: "Fried vegetable balls in tangy sauce", veg: true },
    { name: "Samosa", price: "₹40", desc: "Crispy pastry filled with spiced potatoes", veg: true },
    { name: "Chicken 65", price: "₹200", desc: "Spicy deep-fried chicken pieces", spicy: true },
  ],
  "🍜 Chinese Delights": [
    { name: "Chicken Noodles", price: "₹150", desc: "Stir-fried noodles with chicken and vegetables" },
    { name: "Veg Fried Rice", price: "₹120", desc: "Fragrant basmati rice with mixed vegetables", veg: true },
    { name: "Gobi Manchurian", price: "₹130", desc: "Cauliflower florets in spicy sauce", veg: true },
    { name: "Chicken Hakka Noodles", price: "₹170", desc: "Authentic Hakka style chicken noodles" },
  ],
  "🥤 Fresh Beverages": [
    { name: "Mango Lassi", price: "₹80", desc: "Creamy yogurt drink with fresh mango", veg: true },
    { name: "Watermelon Juice", price: "₹60", desc: "Fresh watermelon juice with mint", veg: true },
    { name: "Masala Chai", price: "₹40", desc: "Traditional spiced tea", veg: true },
    { name: "Rose Lassi", price: "₹70", desc: "Sweet yogurt drink with rose essence", veg: true },
  ],
  "🍛 Royal Biryanis": {
    "Chicken Biryanis": [
      { name: "Chicken Dum Biryani", price: "₹250", desc: "Slow-cooked basmati rice with chicken", spicy: true },
      { name: "Chicken 65 Biryani", price: "₹280", desc: "Biryani with spicy chicken 65", spicy: true },
      { name: "Chicken Tikka Biryani", price: "₹270", desc: "Biryani with tikka marinated chicken" },
    ],
    "Mutton & Fish": [
      { name: "Mutton Biryani", price: "₹320", desc: "Rich mutton biryani with aromatic spices", spicy: true },
      { name: "Fish Biryani", price: "₹290", desc: "Fresh fish biryani with coastal flavors" },
    ],
    "Vegetarian": [
      { name: "Paneer Biryani", price: "₹220", desc: "Fragrant rice with cottage cheese", veg: true },
      { name: "Veg Biryani", price: "₹180", desc: "Mixed vegetable biryani", veg: true },
      { name: "Mushroom Biryani", price: "₹200", desc: "Aromatic mushroom biryani", veg: true },
    ],
  },
  "🍞 Breads & Rotis": [
    { name: "Butter Naan", price: "₹50", desc: "Soft leavened bread with butter", veg: true },
    { name: "Garlic Naan", price: "₹60", desc: "Naan topped with garlic and herbs", veg: true },
    { name: "Tandoori Roti", price: "₹40", desc: "Whole wheat bread cooked in tandoor", veg: true },
    { name: "Aloo Paratha", price: "₹80", desc: "Stuffed bread with spiced potatoes", veg: true },
    { name: "Lachha Paratha", price: "₹70", desc: "Layered flaky bread", veg: true },
  ],
  "🍲 Curries & Gravies": [
    { name: "Paneer Butter Masala", price: "₹200", desc: "Cottage cheese in rich tomato gravy", veg: true },
    { name: "Chicken Tikka Masala", price: "₹250", desc: "Tandoori chicken in creamy tomato sauce" },
    { name: "Dal Makhani", price: "₹180", desc: "Creamy black lentils slow-cooked overnight", veg: true },
    { name: "Kadai Chicken", price: "₹240", desc: "Chicken cooked in kadai with bell peppers", spicy: true },
    { name: "Palak Paneer", price: "₹190", desc: "Cottage cheese in spinach gravy", veg: true },
    { name: "Chicken Korma", price: "₹230", desc: "Mild chicken curry with cashew cream" },
  ],
};

const MenuItem = ({ item, index }) => (
  <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <div className="card-body p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="card-title text-lg font-elegant text-primary">{item.name}</h3>
        <div className="flex items-center space-x-2">
          {item.spicy && <span className="badge badge-error badge-sm">🌶️ Spicy</span>}
          {item.veg && <span className="badge badge-success badge-sm">🥬 Veg</span>}
        </div>
      </div>
      <p className="text-sm text-base-content/70 mb-3">{item.desc}</p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-accent">{item.price}</span>
        <button className="btn btn-primary btn-sm">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
          </svg>
          Add
        </button>
      </div>
    </div>
  </div>
);

const Section = ({ title, items }) => (
  <div className="mb-12">
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-elegant font-bold text-primary mb-4">
        {title}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
    </div>
    
    {Array.isArray(items) ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <MenuItem key={idx} item={item} index={idx} />
        ))}
      </div>
    ) : (
      <div className="space-y-8">
        {Object.keys(items).map((sub, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-elegant font-semibold text-secondary mb-6 text-center">
              {sub}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items[sub].map((item, subIdx) => (
                <MenuItem key={subIdx} item={item} index={subIdx} />
              ))}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default function Menu() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...Object.keys(menuData)];

  // Filter menu data based on selected category and search term
  const getFilteredMenuData = () => {
    let filteredData = menuData;
    
    // Filter by category
    if (selectedCategory !== "all") {
      filteredData = { [selectedCategory]: menuData[selectedCategory] };
    }
    
    // Filter by search term
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      const filtered = {};
      
      Object.entries(filteredData).forEach(([section, items]) => {
        if (Array.isArray(items)) {
          const filteredItems = items.filter(item => 
            item.name.toLowerCase().includes(searchLower) ||
            item.desc.toLowerCase().includes(searchLower)
          );
          if (filteredItems.length > 0) {
            filtered[section] = filteredItems;
          }
        } else {
          // Handle nested structure (like Biryanis)
          const filteredSubs = {};
          Object.entries(items).forEach(([subSection, subItems]) => {
            const filteredSubItems = subItems.filter(item => 
              item.name.toLowerCase().includes(searchLower) ||
              item.desc.toLowerCase().includes(searchLower)
            );
            if (filteredSubItems.length > 0) {
              filteredSubs[subSection] = filteredSubItems;
            }
          });
          if (Object.keys(filteredSubs).length > 0) {
            filtered[section] = filteredSubs;
          }
        }
      });
      
      return filtered;
    }
    
    return filteredData;
  };

  const filteredMenuData = getFilteredMenuData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-primary/5 py-12">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-5xl md:text-6xl font-elegant font-bold text-primary mb-4">
          Our Menu
        </h1>
        <p className="text-lg md:text-xl text-base-content/80 font-telugu mb-2">
          రుచికరమైన వంటకాల సంగ్రహం
        </p>
        <p className="text-xl text-base-content/90 font-elegant italic">
          A Culinary Journey Through India
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4"></div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="form-control w-full max-w-md">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search dishes..."
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
            {categories.map((category) => (
              <button
                key={category}
                className={`tab ${selectedCategory === category ? 'tab-active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === "all" ? "All Items" : category.split(" ")[1] || category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="max-w-7xl mx-auto px-4">
        {Object.keys(filteredMenuData).length > 0 ? (
          Object.entries(filteredMenuData).map(([section, items], idx) => (
            <Section key={idx} title={section} items={items} />
          ))
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-elegant text-primary mb-2">No items found</h3>
            <p className="text-base-content/70">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 px-4">
        <div className="card bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 max-w-2xl mx-auto">
          <div className="card-body text-center">
            <h3 className="card-title text-2xl font-elegant text-primary justify-center mb-4">
              Ready to Order?
            </h3>
            <p className="text-base-content/80 mb-6">
              Experience the authentic flavors of India delivered to your doorstep
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary btn-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
                </svg>
                Order Now
              </button>
              <button className="btn btn-outline btn-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Call Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
