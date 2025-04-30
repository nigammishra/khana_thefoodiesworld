import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
          <>
      {/* Inner Page Banner */}
      <div className="inner-page-banner-area">
        <div className="container">
          <div className="pagination-area">
            <h2>Our Menu</h2>
            <ul>
              <li><Link to="/khana_thefoodiesworld/">Home -</Link> /</li>
              <li>Our Menu</li>
            </ul>
          </div>
        </div>
      </div>

      </>
    </div>
  )
}

export default Menu