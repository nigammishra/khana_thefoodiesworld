import React, { useState } from "react";
import "../../pages/AccountDetails/Accountcss/forgot.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your forgot password logic here
    alert(`Password reset link sent to: ${email}`);
  };

  return (
    <>
     {/* Inner Page Banner */}
            <div className="inner-page-banner-area">
              <div className="container">
                <div className="pagination-area">
                  <h2>ForgotPassword</h2>
                  <ul>
                    <li>
                      <Link to="/khana_thefoodiesworld/">AccountDetails -</Link> /
                    </li>
                    <li>ForgotPassword</li>
                  </ul>
                </div>
              </div>
            </div>
    <div className="forgot-wrapper">
      <div className="forgot-container">
        <h2 className="forgot-title">Forgot Password</h2>
        <p className="forgot-subtext">
          Enter your email address and we’ll send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit} className="forgot-form">
          <label htmlFor="email" className="forgot-label">Email</label>
          <input
            type="email"
            id="email"
            className="forgot-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="forgot-button">Send Reset Link</button>
        </form>
        <div className="forgot-footer">
          <Link to="/account/signin" className="back-to-login">← Back to Login</Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default ForgotPassword;
