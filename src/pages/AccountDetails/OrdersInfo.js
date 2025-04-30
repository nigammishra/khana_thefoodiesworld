import React from 'react'
import { Link } from 'react-router-dom'

const OrdersInfo = () => {
  return (
    <div>
          <>
      {/* Inner Page Banner */}
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

      </>
    </div>
  )
}

export default OrdersInfo