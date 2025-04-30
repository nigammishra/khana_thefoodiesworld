import React from 'react'
import { Link } from 'react-router-dom'

const ShopDetails = () => {
  return (
    <div>
          <>
      {/* Inner Page Banner */}
      <div className="inner-page-banner-area">
        <div className="container">
          <div className="pagination-area">
            <h2>Shop details</h2>
            <ul>
              <li><Link to="/khana_thefoodiesworld/">Home -</Link> /</li>
              <li>Shop details</li>
            </ul>
          </div>
        </div>
      </div>

      </>
    </div>
  )
}

export default ShopDetails