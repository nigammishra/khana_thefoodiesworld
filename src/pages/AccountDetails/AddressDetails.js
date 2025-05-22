import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../pages/AccountDetails/Accountcss/addressDetails.css";

const AddressDetails = () => {
  const initialAddresses = {
    home: {
      name: 'Nigam Mishra',
      street: '123 Food Street',
      city: 'Bhubaneswar',
      state: 'Odisha',
      pincode: '751001',
      phone: '9876543210',
    },
    work: {
      name: 'Nigam Mishra',
      street: '456 Tech Avenue',
      city: 'Bhubaneswar',
      state: 'Odisha',
      pincode: '751002',
      phone: '9876543211',
    },
  };

  const [addresses, setAddresses] = useState(initialAddresses);
  const [editingType, setEditingType] = useState(null); // 'home' or 'work'
  const [editedAddress, setEditedAddress] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedAddress({ ...editedAddress, [name]: value });
  };

  const handleEdit = (type) => {
    setEditingType(type);
    setEditedAddress(addresses[type]);
  };

  const handleSave = () => {
    setAddresses({ ...addresses, [editingType]: editedAddress });
    setEditingType(null);
  };

  const handleCancel = () => {
    setEditedAddress({});
    setEditingType(null);
  };

  return (
    <div>
      {/* Inner Page Banner */}
      <div className="inner-page-banner-area">
        <div className="container">
          <div className="pagination-area">
            <h2>Address Details</h2>
            <ul>
              <li><Link to="/khana_thefoodiesworld/">Home -</Link> /</li>
              <li>Address details</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Address Cards */}
      <div className="container settings-container">
        <h2 className="settings-title">Saved Addresses</h2>
        <div className="row">
          {['home', 'work'].map((type) => (
            <div className="col-md-6" key={type}>
              <div className="setting-card">
                <h3 className="card-title">{type.charAt(0).toUpperCase() + type.slice(1)} Address</h3>

                {editingType !== type ? (
                  <>
                    {Object.entries(addresses[type]).map(([key, value]) => (
                      <div key={key} className="setting-row setting-display">
                        <label className="setting-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                        <span>{value}</span>
                      </div>
                    ))}
                    <button className="btn-edit" onClick={() => handleEdit(type)}>Edit</button>
                  </>
                ) : (
                  <>
                    {Object.entries(editedAddress).map(([key, value]) => (
                      <div key={key} className="setting-row">
                        <label className="setting-label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                        <input
                          type="text"
                          name={key}
                          value={value}
                          onChange={handleChange}
                          className="setting-input"
                        />
                      </div>
                    ))}
                    <div className="setting-display" style={{ justifyContent: 'flex-end' }}>
                      <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
                      <button className="btn-save" onClick={handleSave}>Save</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
