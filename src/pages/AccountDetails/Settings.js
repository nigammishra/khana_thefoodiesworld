import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import "../../pages/AccountDetails/Accountcss/settings.css";

const Settings = () => {
  const initialFormData = {
    username: "Mr_Nigam_8199",
    email: "frontendace@example.com",
    fullName: "Nigam Mishra",
    phone: "8260821103",
    dietaryPreference: "Non-Vegetarian",
    notifications: true,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [originalData, setOriginalData] = useState(initialFormData);
  const [editMode, setEditMode] = useState({
    username: false,
    email: false,
    fullName: false,
    phone: false,
    dietaryPreference: false,
  });

  const handleEdit = (field) => setEditMode({ ...editMode, [field]: true });

  const handleCancel = (field) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your changes will be discarded.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, discard it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setFormData({ ...formData, [field]: originalData[field] });
        setEditMode({ ...editMode, [field]: false });
      }
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const hasChanged = (field) => formData[field] !== originalData[field];

  const handleSave = (field) => {
    setOriginalData({ ...originalData, [field]: formData[field] });
    setEditMode({ ...editMode, [field]: false });

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${field.charAt(0).toUpperCase() + field.slice(1)} has been updated.`,
      confirmButtonColor: "#28a745",
    });
  };

  return (
    <>
      <div className="inner-page-banner-area">
        <div className="container">
          <div className="pagination-area">
            <h2>Settings</h2>
            <ul>
              <li><Link to="/khana_thefoodiesworld/">Home -</Link> /</li>
              <li>Settings</li>
            </ul>
          </div>
        </div>
      </div>

      <motion.div
  className="settings-container container"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h2 className="settings-title text-center">🍽️ Foodie Profile Settings</h2>

  <div className="row">
    {["username", "email", "fullName", "phone"].map((field) => (
      <motion.div
        className="setting-row setting-card col-12 col-md-12"
        key={field}
        whileHover={{ rotateY: 5, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 150 }}
        style={{ marginBottom: "20px" }}
      >
        <label className="setting-label">
          {field === "fullName" ? "Full Name" : field.charAt(0).toUpperCase() + field.slice(1)}:
        </label>

        {editMode[field] ? (
          <div className="setting-edit d-flex flex-column flex-sm-row gap-2">
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="setting-input flex-grow-1"
            />
            <div className="d-flex gap-2">
              <button
                onClick={() => handleSave(field)}
                className="btn-save"
                disabled={!hasChanged(field)}
              >
                Save
              </button>
              <button onClick={() => handleCancel(field)} className="btn-cancel">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="setting-display d-flex justify-content-between align-items-center flex-wrap gap-2">
            <span>{formData[field]}</span>
            <button onClick={() => handleEdit(field)} className="btn-edit">Edit</button>
          </div>
        )}
      </motion.div>
    ))}

    <motion.div className="setting-row setting-card col-12 col-md-12" whileHover={{ rotateY: 5 }} style={{ marginBottom: "20px" }}>
      <label className="setting-label">Dietary Preference:</label>
      {editMode.dietaryPreference ? (
        <div className="setting-edit d-flex flex-column flex-sm-row gap-2">
          <select
            name="dietaryPreference"
            value={formData.dietaryPreference}
            onChange={handleChange}
            className="setting-select flex-grow-1"
          >
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
            <option value="Keto">Keto</option>
          </select>
          <div className="d-flex gap-2">
            <button
              onClick={() => handleSave("dietaryPreference")}
              className="btn-save"
              disabled={!hasChanged("dietaryPreference")}
            >
              Save
            </button>
            <button onClick={() => handleCancel("dietaryPreference")} className="btn-cancel">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="setting-display d-flex justify-content-between align-items-center flex-wrap gap-2">
          <span>{formData.dietaryPreference}</span>
          <button onClick={() => handleEdit("dietaryPreference")} className="btn-edit">Edit</button>
        </div>
      )}
    </motion.div>

    <motion.div className="setting-row setting-card col-12 col-md-12" whileHover={{ scale: 1.02 }} style={{ marginBottom: "20px" }}>
      <label className="setting-label">Notifications:</label>
      <div className="setting-toggle d-flex align-items-center gap-2">
        <input
          type="checkbox"
          name="notifications"
          checked={formData.notifications}
          onChange={handleChange}
          id="notifications-toggle"
        />
        <label htmlFor="notifications-toggle" className="toggle-label"></label>
        <span className="toggle-status">
          {formData.notifications ? "Enabled" : "Disabled"}
        </span>
      </div>
    </motion.div>
  </div>
</motion.div>

    </>
  );
};

export default Settings;
