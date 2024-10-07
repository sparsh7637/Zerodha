import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

function Navbar() {
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [userExists, setUserExists] = useState(false); // To track if user is logged in
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      if (cookies.token) {
        try {
          // Call the backend to verify user
          const { data } = await axios.get("http://localhost:3002/verifyUser", {
            withCredentials: true, // Ensure cookies are sent
          });

          if (data.status) {
            // If the user is authenticated, show the dashboard
            setUserExists(true);
          } else {
            // Remove the token if invalid and reset user state
            removeCookie("token");
            setUserExists(false);
          }
        } catch (error) {
          console.error("Error verifying user", error);
          removeCookie("token");
          setUserExists(false);
        }
      }
    };

    verifyUser();
  }, [cookies.token, removeCookie]);

  const handleLogout = () => {
    removeCookie("token");
    setUserExists(false);
    navigate("/signup");
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container ">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "22%" }}
            alt="Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {userExists ? (
                  <>
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        to="http://localhost:3001"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button
                        onClick={handleLogout}
                        className="nav-link active"
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/signup">
                        Signup
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/login">
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
