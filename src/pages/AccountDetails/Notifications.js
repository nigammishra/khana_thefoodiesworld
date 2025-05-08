import React from "react";
import "../../pages/AccountDetails/Accountcss/NotificationPage.css";
import { Link } from "react-router-dom";

const NotificationPage = () => {
  return (
    <>
      {/* Inner Page Banner */}
      <div className="inner-page-banner-area">
        <div className="container">
          <div className="pagination-area">
            <h2>Notifications</h2>
            <ul>
              <li><Link to="/khana_thefoodiesworld/">Home -</Link> /</li>
              <li>Notifications</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="notification-container">
        <div className="notification-box">
          <h1 className="notification-title">🍽️ Delicious Alerts Await!</h1>
          <p className="notification-subtitle">
            Stay updated with the latest recipes, features, and food news curated just for you.
          </p>
          <ul className="notification-list">
            <li>
              🔔 New recipe added: Spicy Thai Noodles
              <button className="disabled-btn" disabled>Coming Soon</button>
            </li>
            <li>
              🎉 Your favorite chef just shared a tip!
              <button className="disabled-btn" disabled>Exclusive</button>
            </li>
            <li>
              📢 System update: Personalized recipe suggestions enabled.
              <button className="disabled-btn" disabled>Beta</button>
            </li>
            <li>
              🕒 Reminder: Try our weekend baking challenge.
              <button className="disabled-btn" disabled>Closed</button>
            </li>
          </ul>
          <button className="notification-btn">Mark All as Read</button>
        </div>
      </div>
    </>
  );
};

export default NotificationPage;
