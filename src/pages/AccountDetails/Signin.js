import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../pages/AccountDetails/Accountcss/signinandup.css";
import Partners from "../../components/Partners"; 
import AOS from "aos";
import "aos/dist/aos.css";
import LoaderOne from "../../Loaders/LoaderOne";

const Signin = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
    document.body.classList.add("active");
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
    document.body.classList.remove("active");
  };


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
              <h2>sign in</h2>
              <ul>
                <li>
                  <Link to="/khana_thefoodiesworld/">AccountDetails -</Link> /
                </li>
                <li>signin & Signup</li>
              </ul>
            </div>
          </div>
        </div>
      </>
       

      <>
      <div className="container">
      <div className="row mt-5">
          <div className="col-12">
            <h1 className="section-title">Welcome Back, Food Explorer!</h1>
          
            <p className="section-description">
              Sign in to unlock a world of flavors, secret recipes, and your
              personalized culinary journey.
            </p>
          </div>
        </div>
        </div>
        <div className="container">
          <div className="body-style">
            <div className="container con-style">
              <div className="blueBg">
                <div className="box signin">
                  <h2>Already Have An Account?</h2>
                  <button className="signinBtn" onClick={handleSignInClick}>
                    Sign in
                  </button>
                </div>
                <div className="box signup">
                  <h2>Don't Have An Account?</h2>
                  <button className="signupBtn" onClick={handleSignUpClick}>
                    Sign Up
                  </button>
                </div>
              </div>

              <div className={`formBx ${isSignUp ? "active" : ""}`}>
                <div className="form signinForm">
                  <form>
                    <h3>Sign In</h3>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <div className="social">
                      <i className="bx bxl-facebook-circle facebook"></i>
                      <i className="bx bxl-google google"></i>
                      <i className="bx bxl-twitter twitter"></i>
                      <i className="bx bxl-linkedin-square linkedin"></i>
                    </div>
                    <input type="submit" value="Login" />
                    <Link href="/account/forgot-password" className="forgot">
                      Forgot Password ?
                    </Link>
                  </form>
                </div>

                <div className="form signupForm">
                  <form>
                    <h3>Sign Up</h3>
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <input type="submit" value="Sign Up" />
                    <Link href="/account/forgot-password" className="forgot">
                      Forgot Password ?
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      < Partners/>
    </div>
  );
};

export default Signin;
