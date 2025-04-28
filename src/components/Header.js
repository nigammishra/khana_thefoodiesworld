import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../images/khanalogo.png";

// Dummy wishlist items (you can fetch this from API later)
const wishlistItems = [
  { id: 1, name: "Pizza Margherita", amount: 12.99, status: "Delivered", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },
  { id: 2, name: "Veg Burger", amount: 8.49, status: "Processing", image: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
  { id: 3, name: "Chocolate Cake", amount: 15.00, status: "Failed", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0" },
];


const dropdownData = [
  {
    id: "dropdown1",
    title: "Account Settings",
    items: [
      {
        title: "SignIn",
        desc: "Access your account easily",
        href: "/account/signin",
        icon: '<i class="fas fa-sign-in-alt animated-icon" style="color: #4CAF50;"></i>',
      },
      {
        title: "SignUp",
        desc: "Create a new account",
        href: "/account/signup",
        icon: '<i class="fas fa-user-plus animated-icon" style="color: #2196F3;"></i>',
      },
      {
        title: "ForgotPassword",
        desc: "Recover your password",
        href: "/account/forgot-password",
        icon: '<i class="fas fa-unlock-alt animated-icon" style="color: #FFC107;"></i>',
      },
      {
        title: "Settings",
        desc: "Manage your preferences",
        href: "/account/settings",
        icon: '<i class="fas fa-cog animated-icon" style="color: #9C27B0;"></i>',
      },
    ],
    apps: [
      {
        name: "OrdersDetails",
        desc: "View your orders",
        href: "/account/orders-details",
        icon: '<i class="fas fa-shopping-cart animated-icon" style="color: #FF5722;"></i>',
      },
      {
        name: "AddressDetails",
        desc: "Update your addresses",
        href: "/account/address-details",
        icon: '<i class="fas fa-map-marker-alt animated-icon" style="color: #00BCD4;"></i>',
      },
      {
        name: "PaymentMethods",
        desc: "Manage your payments",
        href: "/account/payment-methods",
        icon: '<i class="fas fa-credit-card animated-icon" style="color: #795548;"></i>',
      },
      {
        name: "Notifications",
        desc: "Check your alerts",
        href: "/account/notifications",
        icon: '<i class="fas fa-bell animated-icon" style="color: #FF9800;"></i>',
      },
      {
        name: "WishlistItems",
        desc: "Your favorite items",
        href: "/account/wishlist-items",
        icon: '<i class="fas fa-heart animated-icon" style="color: #E91E63;"></i>',
      },
    ],
  },
];

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // Canvas open/close
  const [wishlistCount, setWishlistCount] = useState(0);

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const toggleHamburger = () => {
    setHamburgerOpen((prev) => !prev);
  };

  const toggleProfile = (e) => {
    e.stopPropagation();
    setIsProfileOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = () => closeDropdown();
    const handleEsc = (e) => {
      if (e.key === "Escape") closeDropdown();
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    setWishlistCount(wishlistItems.length); // Set wishlist count when component mounts

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "green";
      case "Processing":
        return "orange";
      case "Failed":
        return "red";
      default:
        return "gray";
    }
  };
  


  return (
    <>
      <header id="nav-menu" aria-label="navigation bar">
        <div className="container contain-style">
          <div className="nav-start">
            <a className="logo" href="/khana_thefoodiesworld/">
              <img src={logo} width="140" alt="Inc Logo" />
            </a>
            <nav className={`menu ${hamburgerOpen ? "show" : ""}`}>
              <ul className="menu-bar">
                <li><a className="nav-link" href="/about">About</a></li>
                <li><a className="nav-link" href="/menu">Menu</a></li>
                <li><a className="nav-link" href="/recipes">Recipes</a></li>
                <li><a className="nav-link" href="/shopdetails">Shop Details</a></li>
                <li><a className="nav-link" href="/contacts">Contact</a></li>

                {/* Dropdown */}
                {dropdownData.map((drop) => (
                  <li key={drop.id}>
                    <button
                      className="nav-link dropdown-btn"
                      aria-haspopup="true"
                      aria-expanded={openDropdown === drop.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(drop.id);
                      }}
                    >
                      {drop.title}
                      <i className="bx bx-chevron-down" aria-hidden="true"></i>
                    </button>
                    <div
                      id={drop.id}
                      className={`dropdown ${openDropdown === drop.id ? "active" : ""}`}
                    >
                      <ul role="menu">
                        {drop.items.map((item, idx) => (
                          <li key={idx} role="menuitem">
                            <a className="dropdown-link" href={item.href}>
                              {item.icon && (
                                <span
                                  className="icon"
                                  dangerouslySetInnerHTML={{ __html: item.icon }}
                                />
                              )}
                              <div>
                                <span className="dropdown-link-title">{item.title}</span>
                                {item.desc && <p>{item.desc}</p>}
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>

                      <ul role="menu">
                        {drop.apps && drop.apps.length > 0 && (
                          <>
                            <li className="dropdown-title">
                              <span className="dropdown-link-title">More Settings</span>
                            </li>
                            {drop.apps.map((app, idx) => (
                              <li key={idx} role="menuitem">
                                <a className="dropdown-link" href={app.href}>
                                  {app.icon && (
                                    <span
                                      className="icon"
                                      dangerouslySetInnerHTML={{ __html: app.icon }}
                                    />
                                  )}
                                  <div>
                                    <span className="dropdown-link-title">{app.name}</span>
                                    {app.desc && <p>{app.desc}</p>}
                                  </div>
                                </a>
                              </li>
                            ))}
                          </>
                        )}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="nav-end">
            <div className="right-container">
              <form className="search" role="search" onClick={(e) => e.stopPropagation()}>
                <input type="search" name="search" placeholder="Search" />
                <i className="bx bx-search" aria-hidden="true"></i>
              </form>

              

              {/* Profile Button */}
              <button className="profile-btn" onClick={toggleProfile}>
                <img
                  src="https://github.com/Evavic44/responsive-navbar-with-dropdown/blob/main/assets/images/user.jpg?raw=true"
                  width="30"
                  height="30"
                  alt="user"
                />
              </button>

              <button className="btn btn-primary">Logout</button>
            </div>

            <button
              id="hamburger"
              aria-label="hamburger"
              aria-haspopup="true"
              aria-expanded={hamburgerOpen}
              onClick={(e) => {
                e.stopPropagation();
                toggleHamburger();
              }}
            >
              <i className="bx bx-menu" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Profile Offcanvas */}
{isProfileOpen && (
  <div className="profile-canvas">
    <div className="profile-header">
      <h3>My Profile</h3>
      <button onClick={toggleProfile} className="close-btn">&times;</button>
    </div>
    <div className="profile-body">
      <img
        src="https://github.com/Evavic44/responsive-navbar-with-dropdown/blob/main/assets/images/user.jpg?raw=true"
        width="80"
        height="80"
        alt="User"
        style={{ borderRadius: "50%", marginBottom: "10px" }}
      />
      <h4>Frontend Ace...</h4>
      <p>frontendace@gmail.com</p>
      <hr />
      <h5>Wishlist Items: {wishlistCount}</h5>

      {/* Wishlist Items List */}
      <div className="wishlist-items">
        {wishlistItems.map((item) => (
          <div className="wishlist-item" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              width="50"
              height="50"
              style={{ borderRadius: "10px", objectFit: "cover", marginRight: "10px" }}
            />
            <div>
              <h6 style={{ margin: "0" }}>{item.name}</h6>
              <p style={{ margin: "0", fontSize: "14px", color: "#555" }}>
                ${item.amount.toFixed(2)}
              </p>
              <p style={{ margin: "0", fontSize: "12px", color: getStatusColor(item.status) }}>
                {item.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default Header;
