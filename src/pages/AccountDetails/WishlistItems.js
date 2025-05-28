import React from 'react';
import { Link } from 'react-router-dom';
import "../../pages/AccountDetails/Accountcss/WishlistItems.css";

const wishlist = [
  { id: 1, name: 'Paneer Butter Masala', price: '₹250', category: 'Main Course' },
  { id: 2, name: 'Chocolate Lava Cake', price: '₹150', category: 'Dessert' },
  { id: 3, name: 'Masala Dosa', price: '₹120', category: 'South Indian' },
];

const WishlistItems = () => {
  return (
    <div className="wishlist-container">
      {/* Inner Page Banner */}
      <div className="inner-page-banner-area">
        <div className="container">
          <div className="pagination-area">
            <h2 className="wishlist-heading">Wishlist Items</h2>
            <ul className="breadcrumb">
              <li><Link to="/khana_thefoodiesworld/">Home -</Link> /</li>
              <li>Wishlist Items</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
  <div className="row mt-5">
    <div className="col-12 text-center">
      <h1 className="section-title">🍽️ Welcome Back, Food Explorer!</h1>
      <p className="section-description">
        We're excited to have you on board again!
      </p>
      <p className="section-description mt-3">
        Here's your <strong>curated wishlist</strong> full of delicious delights you're craving! <br />
        Add them to your cart before they’re gone — your next meal adventure awaits. 😋
      </p>
      <p className="section-note mt-4 text-muted">
        Tip: You can manage or remove items anytime, or explore more <Link to="/khana_thefoodiesworld/menu" className="wishlist-link">from our menu</Link>.
      </p>
    </div>
  </div>
</div>

      {/* Wishlist Table */}
      <div className="wishlist-table-area container">
        <table className="wishlist-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Dish Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((item, index) => (
              <tr key={item.id} className="wishlist-row">
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>
                  <button className="remove-btn">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishlistItems;
