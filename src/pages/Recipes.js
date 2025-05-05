import React from 'react'
import Gallery from '../components/Gallery'
import { Link } from 'react-router-dom'

const Recipes = () => {
  return (
    <div>
      <>
       {/* Inner Page Banner */}
       <div className="inner-page-banner-area">
        <div className="container">
          <div className="pagination-area">
            <h2>Our recipes</h2>
            <ul>
              <li>
                <Link to="/khana_thefoodiesworld/">Home -</Link> /
              </li>
              <li>Our Menu</li>
            </ul>
          </div>
        </div>
      </div>
      </>
      <>
      <Gallery/>
      </>
    </div>
  )
}

export default Recipes