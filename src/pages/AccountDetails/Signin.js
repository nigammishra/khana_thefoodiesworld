import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div>
          <>
      {/* Inner Page Banner */}
      <div className="inner-page-banner-area">
        <div className="container">
          <div className="pagination-area">
            <h2>sign in</h2>
            <ul>
              <li><Link to="/khana_thefoodiesworld/">Home -</Link> /</li>
              <li>sign in</li>
            </ul>
          </div>
        </div>
      </div>

      </>
    </div>
  )
}

export default Signin