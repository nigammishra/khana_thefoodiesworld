import React from 'react'
import { Link } from 'react-router-dom'

const Notifications = () => {
  return (
    <div>
          <>
      {/* Inner Page Banner */}
      <div className="inner-page-banner-area">
        <div className="container">
          <div className="pagination-area">
            <h2>Notifications  </h2>
            <ul>
              <li><Link to="/khana_thefoodiesworld/">Home -</Link> /</li>
              <li>Notifications</li>
            </ul>
          </div>
        </div>
      </div>

      </>
    </div>
  )
}

export default Notifications