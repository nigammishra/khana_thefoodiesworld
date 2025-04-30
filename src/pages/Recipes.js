import React from 'react'
import { Link } from 'react-router-dom'

const Recipes = () => {
  return (
    <div>
          <>
      {/* Inner Page Banner */}
      <div className="inner-page-banner-area">
        <div className="container">
          <div className="pagination-area">
            <h2>Our Recipes</h2>
            <ul>
              <li><Link to="/khana_thefoodiesworld/">Home -</Link> /</li>
              <li>Our Recipes</li>
            </ul>
          </div>
        </div>
      </div>

      </>
    </div>
  )
}

export default Recipes