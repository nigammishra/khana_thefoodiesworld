 import React, { useEffect, useState } from "react";
import Gallery from '../components/Gallery'
import { Link } from 'react-router-dom' 
import AOS from "aos";
import "aos/dist/aos.css";
import LoaderOne from "../Loaders/LoaderOne";

const Recipes = () => {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const timeout = setTimeout(() => setLoading(false), 4000);  // Loader duration
    return () => clearTimeout(timeout);
  }, []);

  // If loading, show the loader
  if (loading) return <LoaderOne />;
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