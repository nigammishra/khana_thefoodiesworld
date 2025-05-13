import React, { useState } from "react";
import "../../pages/AccountDetails/Accountcss/orderinfo.css";
import { Link } from "react-router-dom";

const OrderInfo = () => {
  // State to track which order's details are being shown
  const [showDetails, setShowDetails] = useState({});

  const orders = [
    {
      id: "ORD123456",
      date: "May 13, 2025",
      customer: {
        name: "Nigam Mishra",
        email: "nigam@example.com",
        phone: "+91 9876543210",
        address: "Plot 12, Bhubaneswar, Odisha, India",
      },
      items: [
        { id: 1, name: "Paneer Butter Masala", quantity: 2, price: 180 },
        { id: 2, name: "Butter Naan", quantity: 4, price: 30 },
        { id: 3, name: "Mango Lassi", quantity: 2, price: 50 },
      ],
      status: "Preparing",
      deliveryMethod: "Home Delivery",
      paymentMethod: "Online",
    },
    {
      id: "ORD123457",
      date: "May 11, 2025",
      customer: {
        name: "Riya Sharma",
        email: "riya.sharma@example.com",
        phone: "+91 9123456789",
        address: "Sector 5, Noida, Uttar Pradesh, India",
      },
      items: [
        { id: 1, name: "Chicken Biryani", quantity: 1, price: 250 },
        { id: 2, name: "Raita", quantity: 1, price: 40 },
      ],
      status: "Delivered",
      deliveryMethod: "Pickup",
      paymentMethod: "Cash on Delivery",
    },
    {
      id: "ORD123458",
      date: "May 09, 2025",
      customer: {
        name: "Amit Verma",
        email: "amit.verma@example.com",
        phone: "+91 9988776655",
        address: "MG Road, Pune, Maharashtra, India",
      },
      items: [
        { id: 1, name: "Veg Thali", quantity: 1, price: 220 },
        { id: 2, name: "Masala Chaas", quantity: 2, price: 30 },
        { id: 3, name: "Gulab Jamun", quantity: 3, price: 25 },
      ],
      status: "Out for Delivery",
      deliveryMethod: "Home Delivery",
      paymentMethod: "UPI",
    },
  ];

  // Function to toggle the details of each order
  const toggleDetails = (orderId) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [orderId]: !prevState[orderId], // Toggle visibility for the clicked order
    }));
  };

  return (
    <>
      <div className="inner-page-banner-area">
        <div className="container">
          <div className="pagination-area">
            <h2>Orders Info</h2>
            <ul>
              <li><Link to="/khana_thefoodiesworld/">Home -</Link> /</li>
              <li>Orders Info</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container order-style">
      <h2 className="order-title">🍴 Order Summary</h2>
      <div className="order-container">
        {orders.map((order) => {
          const totalAmount = order.items.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
          );

          return (
            <>
            
            <div className="order-box" key={order.id}>
              <div className="order-card">
                <h3 className="card-title">Order Details</h3>
                <p><strong>Order ID:</strong> {order.id}</p>
                <p><strong>Date:</strong> {order.date}</p>
                <p><strong>Status:</strong> <span className="status">{order.status}</span></p>
                <p><strong>Delivery:</strong> {order.deliveryMethod}</p>
                <p><strong>Payment:</strong> {order.paymentMethod}</p>

                <button
                  className="toggle-btn"
                  onClick={() => toggleDetails(order.id)}
                >
                  {showDetails[order.id] ? "Hide Details" : "View Details"}
                </button>
              </div>

              <div className={`slide-details ${showDetails[order.id] ? "show" : ""}`}>
                <div className="order-grid">
                  <div className="order-card">
                    <h3 className="card-title">Customer Info</h3>
                    <p><strong>Name:</strong> {order.customer.name}</p>
                    <p><strong>Email:</strong> {order.customer.email}</p>
                    <p><strong>Phone:</strong> {order.customer.phone}</p>
                    <p><strong>Address:</strong> {order.customer.address}</p>
                  </div>

                  <div className="order-card">
                    <h3 className="card-title">🧾 Items Ordered</h3>
                    <div className="table-wrapper">
                      <table className="order-table">
                        <thead>
                          <tr>
                            <th>Item</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Subtotal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.items.map((item) => (
                            <tr key={item.id}>
                              <td>{item.name}</td>
                              <td>{item.quantity}</td>
                              <td>₹{item.price}</td>
                              <td>₹{item.quantity * item.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="total-amount">
                      Total: ₹{totalAmount}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default OrderInfo;
