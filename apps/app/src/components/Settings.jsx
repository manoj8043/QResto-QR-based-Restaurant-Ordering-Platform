import React, { useState } from 'react';
import Navbar from "./Navabr";

function Settings() {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    // General Settings
    restaurantName: 'Spice Palace',
    restaurantTagline: 'Where Taste Meets Tradition',
    phone: '+91 98765 43210',
    email: 'info@spicepalace.com',
    address: '123 Spice Street, Mumbai, Maharashtra 400001',
    currency: 'INR',
    timezone: 'Asia/Kolkata',
    language: 'en',
    
    // Business Hours
    monday: { open: '11:00', close: '23:00', closed: false },
    tuesday: { open: '11:00', close: '23:00', closed: false },
    wednesday: { open: '11:00', close: '23:00', closed: false },
    thursday: { open: '11:00', close: '23:00', closed: false },
    friday: { open: '11:00', close: '23:00', closed: false },
    saturday: { open: '11:00', close: '23:00', closed: false },
    sunday: { open: '11:00', close: '23:00', closed: false },
    
    // Tax Settings
    gstRate: 18,
    serviceCharge: 10,
    packagingCharge: 5,
    
    // Notification Settings
    emailNotifications: true,
    smsNotifications: true,
    orderAlerts: true,
    lowStockAlerts: true,
    
    // Theme Settings
    primaryColor: '#FF9933',
    secondaryColor: '#138808',
    accentColor: '#FFD700',
    darkMode: false
  });

  const tabs = [
    { id: 'general', label: 'General', icon: '⚙️' },
    { id: 'business', label: 'Business Hours', icon: '🕒' },
    { id: 'tax', label: 'Tax & Charges', icon: '💰' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'appearance', label: 'Appearance', icon: '🎨' },
    { id: 'security', label: 'Security', icon: '🔒' }
  ];

  const handleInputChange = (section, field, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleDirectChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const saveSettings = () => {
    // In real app, this would save to backend
    console.log('Saving settings:', settings);
    alert('Settings saved successfully!');
  };

  const resetSettings = () => {
    if (window.confirm('Are you sure you want to reset all settings to default?')) {
      // Reset to default values
      window.location.reload();
    }
  };

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-elegant">Restaurant Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            value={settings.restaurantName}
            onChange={(e) => handleDirectChange('restaurantName', e.target.value)}
          />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text font-elegant">Tagline</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            value={settings.restaurantTagline}
            onChange={(e) => handleDirectChange('restaurantTagline', e.target.value)}
          />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text font-elegant">Phone Number</span>
          </label>
          <input
            type="tel"
            className="input input-bordered"
            value={settings.phone}
            onChange={(e) => handleDirectChange('phone', e.target.value)}
          />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text font-elegant">Email Address</span>
          </label>
          <input
            type="email"
            className="input input-bordered"
            value={settings.email}
            onChange={(e) => handleDirectChange('email', e.target.value)}
          />
        </div>
      </div>
      
      <div className="form-control">
        <label className="label">
          <span className="label-text font-elegant">Address</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          value={settings.address}
          onChange={(e) => handleDirectChange('address', e.target.value)}
        ></textarea>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-elegant">Currency</span>
          </label>
          <select
            className="select select-bordered"
            value={settings.currency}
            onChange={(e) => handleDirectChange('currency', e.target.value)}
          >
            <option value="INR">INR (₹)</option>
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
          </select>
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text font-elegant">Timezone</span>
          </label>
          <select
            className="select select-bordered"
            value={settings.timezone}
            onChange={(e) => handleDirectChange('timezone', e.target.value)}
          >
            <option value="Asia/Kolkata">Asia/Kolkata</option>
            <option value="Asia/Dubai">Asia/Dubai</option>
            <option value="America/New_York">America/New_York</option>
          </select>
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text font-elegant">Language</span>
          </label>
          <select
            className="select select-bordered"
            value={settings.language}
            onChange={(e) => handleDirectChange('language', e.target.value)}
          >
            <option value="en">English</option>
            <option value="te">Telugu</option>
            <option value="hi">Hindi</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderBusinessHours = () => (
    <div className="space-y-4">
      {Object.keys(settings).filter(key => ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].includes(key)).map(day => (
        <div key={day} className="card bg-base-200 shadow-sm">
          <div className="card-body p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold capitalize">{day}</h3>
              <div className="flex items-center space-x-4">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    className="toggle toggle-primary"
                    checked={!settings[day].closed}
                    onChange={(e) => handleInputChange(day, 'closed', !e.target.checked)}
                  />
                  <span className="label-text ml-2">Open</span>
                </label>
                {!settings[day].closed && (
                  <div className="flex items-center space-x-2">
                    <input
                      type="time"
                      className="input input-bordered input-sm w-24"
                      value={settings[day].open}
                      onChange={(e) => handleInputChange(day, 'open', e.target.value)}
                    />
                    <span>to</span>
                    <input
                      type="time"
                      className="input input-bordered input-sm w-24"
                      value={settings[day].close}
                      onChange={(e) => handleInputChange(day, 'close', e.target.value)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTaxSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-elegant">GST Rate (%)</span>
          </label>
          <input
            type="number"
            className="input input-bordered"
            value={settings.gstRate}
            onChange={(e) => handleDirectChange('gstRate', parseFloat(e.target.value))}
            min="0"
            max="100"
            step="0.1"
          />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text font-elegant">Service Charge (%)</span>
          </label>
          <input
            type="number"
            className="input input-bordered"
            value={settings.serviceCharge}
            onChange={(e) => handleDirectChange('serviceCharge', parseFloat(e.target.value))}
            min="0"
            max="100"
            step="0.1"
          />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text font-elegant">Packaging Charge (₹)</span>
          </label>
          <input
            type="number"
            className="input input-bordered"
            value={settings.packagingCharge}
            onChange={(e) => handleDirectChange('packagingCharge', parseFloat(e.target.value))}
            min="0"
            step="1"
          />
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-base-200 rounded-lg">
          <div>
            <h3 className="font-semibold">Email Notifications</h3>
            <p className="text-sm text-base-content/70">Receive notifications via email</p>
          </div>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={settings.emailNotifications}
            onChange={(e) => handleDirectChange('emailNotifications', e.target.checked)}
          />
        </div>
        
        <div className="flex items-center justify-between p-4 bg-base-200 rounded-lg">
          <div>
            <h3 className="font-semibold">SMS Notifications</h3>
            <p className="text-sm text-base-content/70">Receive notifications via SMS</p>
          </div>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={settings.smsNotifications}
            onChange={(e) => handleDirectChange('smsNotifications', e.target.checked)}
          />
        </div>
        
        <div className="flex items-center justify-between p-4 bg-base-200 rounded-lg">
          <div>
            <h3 className="font-semibold">Order Alerts</h3>
            <p className="text-sm text-base-content/70">Get notified about new orders</p>
          </div>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={settings.orderAlerts}
            onChange={(e) => handleDirectChange('orderAlerts', e.target.checked)}
          />
        </div>
        
        <div className="flex items-center justify-between p-4 bg-base-200 rounded-lg">
          <div>
            <h3 className="font-semibold">Low Stock Alerts</h3>
            <p className="text-sm text-base-content/70">Get notified when items are low in stock</p>
          </div>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={settings.lowStockAlerts}
            onChange={(e) => handleDirectChange('lowStockAlerts', e.target.checked)}
          />
        </div>
      </div>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-elegant">Primary Color</span>
          </label>
          <input
            type="color"
            className="input input-bordered w-full h-12"
            value={settings.primaryColor}
            onChange={(e) => handleDirectChange('primaryColor', e.target.value)}
          />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text font-elegant">Secondary Color</span>
          </label>
          <input
            type="color"
            className="input input-bordered w-full h-12"
            value={settings.secondaryColor}
            onChange={(e) => handleDirectChange('secondaryColor', e.target.value)}
          />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text font-elegant">Accent Color</span>
          </label>
          <input
            type="color"
            className="input input-bordered w-full h-12"
            value={settings.accentColor}
            onChange={(e) => handleDirectChange('accentColor', e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex items-center justify-between p-4 bg-base-200 rounded-lg">
        <div>
          <h3 className="font-semibold">Dark Mode</h3>
          <p className="text-sm text-base-content/70">Enable dark theme for the application</p>
        </div>
        <input
          type="checkbox"
          className="toggle toggle-primary"
          checked={settings.darkMode}
          onChange={(e) => handleDirectChange('darkMode', e.target.checked)}
        />
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="alert alert-info">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <h3 className="font-bold">Security Settings</h3>
          <div className="text-sm">Manage your account security and privacy settings</div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="card bg-base-200 shadow-sm">
          <div className="card-body p-4">
            <h3 className="font-semibold mb-2">Change Password</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Current Password</span>
                </label>
                <input type="password" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">New Password</span>
                </label>
                <input type="password" className="input input-bordered" />
              </div>
            </div>
            <button className="btn btn-primary btn-sm mt-4">Update Password</button>
          </div>
        </div>
        
        <div className="card bg-base-200 shadow-sm">
          <div className="card-body p-4">
            <h3 className="font-semibold mb-2">Two-Factor Authentication</h3>
            <p className="text-sm text-base-content/70 mb-4">Add an extra layer of security to your account</p>
            <button className="btn btn-outline btn-sm">Enable 2FA</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general': return renderGeneralSettings();
      case 'business': return renderBusinessHours();
      case 'tax': return renderTaxSettings();
      case 'notifications': return renderNotificationSettings();
      case 'appearance': return renderAppearanceSettings();
      case 'security': return renderSecuritySettings();
      default: return renderGeneralSettings();
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
              Settings
            </h1>
            <p className="text-base-content/70 font-telugu">
              సెట్టింగ్‌లు
            </p>
            <p className="text-sm text-base-content/60">
              Manage your restaurant settings and preferences
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button className="btn btn-ghost" onClick={resetSettings}>
              Reset
            </button>
            <button className="btn btn-primary" onClick={saveSettings}>
              Save Changes
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Settings Tabs */}
          <div className="lg:col-span-1">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body p-4">
                <ul className="menu menu-vertical w-full">
                  {tabs.map((tab) => (
                    <li key={tab.id}>
                      <button
                        className={`w-full text-left ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <span className="text-lg mr-3">{tab.icon}</span>
                        {tab.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
