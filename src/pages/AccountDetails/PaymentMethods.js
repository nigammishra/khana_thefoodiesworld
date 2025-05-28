import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../../pages/AccountDetails/Accountcss/payment.css";
import visa from '../../images/paymentImages/visa.svg'
import americanExpress from '../../images/paymentImages/american-express.svg'
import amazonpay from '../../images/paymentImages/amazonpay.svg'
import mastercard from '../../images/paymentImages/mastercard.svg'
import paypal from '../../images/paymentImages/paypal.svg'
import discover from '../../images/paymentImages/discover-card.svg'
import googlepay from '../../images/paymentImages/google-pay.svg'

const paymentMethodLogos = {
  Visa: visa,
  MasterCard: mastercard,
  AmEx: americanExpress,
  amazonpay: amazonpay,
  Discover: discover,
  PayPal: paypal,
  GooglePay: googlepay,
};

const paymentMethodOptions = [
  { value: "Visa", label: "Visa" },
  { value: "MasterCard", label: "MasterCard" },
  { value: "AmEx", label: "American Express" },
  { value: "Discover", label: "Discover" },
  { value: "PayPal", label: "PayPal" },
  { value: "GooglePay", label: "Google Pay" },
];

const cardTypeVariants = {
  initial: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  selected: { scale: 1.05, boxShadow: "0 0 8px #007bff" },
};

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50, transition: { duration: 0.3 } },
};

const PaymentMethods = () => {
  const [methods, setMethods] = useState([
    { id: 1, type: "Visa", last4: "1234", expiry: "12/25" },
    { id: 2, type: "PayPal", email: "user@example.com" },
  ]);

  const [newMethod, setNewMethod] = useState({
    type: "",
    cardNumber: "",
    expiry: "",
    email: "",
    nameOnCard: "",
    cvc: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMethod((prev) => ({ ...prev, [name]: value }));
  };

  const selectPaymentType = (type) => {
    setNewMethod({
      type,
      cardNumber: "",
      expiry: "",
      email: "",
      nameOnCard: "",
      cvc: "",
    });
  };

  const addMethod = (e) => {
    e.preventDefault();

    if (!newMethod.type) {
      alert("Select a payment method type.");
      return;
    }

    if (
      ["Visa", "MasterCard", "AmEx", "Discover"].includes(newMethod.type)
    ) {
      if (!newMethod.nameOnCard) {
        alert("Enter name on card.");
        return;
      }
      if (newMethod.cardNumber.replace(/\s/g, "").length !== 16) {
        alert("Card number must be 16 digits.");
        return;
      }
      if (!newMethod.expiry) {
        alert("Enter expiry date.");
        return;
      }
      if (!newMethod.cvc || newMethod.cvc.length < 3) {
        alert("Enter a valid CVC.");
        return;
      }
    } else if (newMethod.type === "PayPal" || newMethod.type === "GooglePay") {
      if (!newMethod.email || !newMethod.email.includes("@")) {
        alert("Enter a valid email for PayPal or Google Pay.");
        return;
      }
    }

    const newEntry = {
      id: Date.now(),
      type: newMethod.type,
      last4:
        newMethod.cardNumber.replace(/\s/g, "").length === 16
          ? newMethod.cardNumber.replace(/\s/g, "").slice(-4)
          : null,
      expiry: newMethod.expiry || null,
      email: newMethod.email || null,
      nameOnCard: newMethod.nameOnCard || null,
    };

    setMethods((prev) => [...prev, newEntry]);

    setNewMethod({
      type: "",
      cardNumber: "",
      expiry: "",
      email: "",
      nameOnCard: "",
      cvc: "",
    });
  };

  const removeMethod = (id) => {
    setMethods((prev) => prev.filter((method) => method.id !== id));
  };

  return (
    <>
      <div className="inner-page-banner-area">
        <div className="container">
          <div className="pagination-area">
            <h2>Payment methods</h2>
            <ul>
              <li>
                <Link to="/khana_thefoodiesworld/">Home -</Link> /
              </li>
              <li>Payment methods</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="pm-card">
        <div className="pm-card-title">
          <h2>Choose a payment method</h2>
        </div>

        <div className="pm-card-body">
          <div className="pm-payment-type">
            <h4>Payment type</h4>
            <div
              className="pm-types"
              style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent:"center", alignItems:"center" }}
            >
              {paymentMethodOptions.map(({ value, label }) => (
                <motion.div
                  key={value}
                  className={`pm-type ${
                    newMethod.type === value ? "selected" : ""
                  }`}
                  onClick={() => selectPaymentType(value)}
                  style={{
                    cursor: "pointer",
                    border:
                      newMethod.type === value
                        ? "2px solid #007bff"
                        : "1px solid #ccc",
                    padding: "10px",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100px",
                  }}
                  variants={cardTypeVariants}
                  initial="initial"
                  animate={newMethod.type === value ? "selected" : "initial"}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={paymentMethodLogos[value]}
                    alt={label}
                    style={{ width: "60px", marginBottom: "5px" }}
                  />
                  <p>{label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.form
            onSubmit={addMethod}
            className="pm-payment-info"
            style={{ marginTop: "20px" }}
            initial="hidden"
            animate="visible"
            variants={formVariants}
            transition={{ duration: 0.5 }}
          >
            {(newMethod.type &&
              ["Visa", "MasterCard", "AmEx", "Discover"].includes(
                newMethod.type
              )) && (
              <>
                <div className="pm-field full">
                  <label htmlFor="nameOnCard">Name on card</label>
                  <input
                    type="text"
                    id="nameOnCard"
                    name="nameOnCard"
                    value={newMethod.nameOnCard}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="pm-field full">
                  <label htmlFor="cardNumber">Card number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={newMethod.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 1234 5678"
                    maxLength={19}
                    pattern="\d{4} \d{4} \d{4} \d{4}"
                    required
                  />
                </div>

                <div className="pm-field half">
                  <label htmlFor="expiry">Expiration date</label>
                  <input
                    type="text"
                    id="expiry"
                    name="expiry"
                    value={newMethod.expiry}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    required
                  />
                </div>

                <div className="pm-field half">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    type="text"
                    id="cvc"
                    name="cvc"
                    value={newMethod.cvc}
                    onChange={handleInputChange}
                    placeholder="123"
                    maxLength={4}
                    required
                  />
                </div>
              </>
            )}

            {(newMethod.type &&
              (newMethod.type === "PayPal" || newMethod.type === "GooglePay")) && (
              <div className="pm-field full">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={newMethod.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            )}

            {newMethod.type && (
              <div className="pm-footer" style={{ marginTop: "15px" }}>
                <button
                  type="submit"
                  className="pm-button button-primary"
                  whileHover={{ scale: 1.05 }}
                >
                  Add Payment Method
                </button>
              </div>
            )}
          </motion.form>
        </div>

        {/* List of saved payment methods */}
        <div className="pm-saved-methods container" style={{ marginTop: "30px" }}>
  <h3>Saved Payment Methods</h3>
  {methods.length === 0 && <p>No payment methods saved.</p>}

  <ul style={{ listStyle: "none", padding: 0 }}>
    <AnimatePresence>
      {methods.map((method) => (
        <motion.li
          key={method.id}
          className="row"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
            border: "1px solid #ddd",
            padding: "10px",
            borderRadius: "5px",
            flexWrap: "wrap", // Important for small screens
          }}
          variants={listItemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          layout
        >
          <div className="col-12 col-sm-auto d-flex align-items-center mb-2 mb-sm-0">
            <img
              src={paymentMethodLogos[method.type]}
              alt={method.type}
              style={{ width: "50px", marginRight: "10px" }}
            />
          </div>

          <div className="col-12 col-sm flex-grow-1 mb-2 mb-sm-0">
            {["Visa", "MasterCard", "AmEx", "Discover"].includes(method.type) ? (
              <>
                <strong>{method.type}</strong> ending in {method.last4} | Expiry: {method.expiry}
              </>
            ) : (
              <>
                <strong>{method.type}</strong> | Email: {method.email}
              </>
            )}
          </div>

          <div className="col-12 col-sm-auto text-sm-end">
            <button
              onClick={() => removeMethod(method.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: "3px",
                width: "100%", // Makes it full-width on small screens
              }}
            >
              Remove
            </button>
          </div>
        </motion.li>
      ))}
    </AnimatePresence>
  </ul>
</div>

      </section>
    </>
  );
};

export default PaymentMethods;
