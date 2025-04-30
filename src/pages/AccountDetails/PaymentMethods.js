import React from 'react'
import { Link } from 'react-router-dom'

const PaymentMethods = () => {
  return (
    <div>
          <>
      {/* Inner Page Banner */}
      <div className="inner-page-banner-area">
        <div className="container">
          <div className="pagination-area">
            <h2>Payment methods</h2>
            <ul>
              <li><Link to="/khana_thefoodiesworld/">Home -</Link> /</li>
              <li>Payment methods</li>
            </ul>
          </div>
        </div>
      </div>

      </>
    </div>
  )
}

export default PaymentMethods