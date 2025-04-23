import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./admindashboard.css";
import logo from "../Asset/Paval Soft - LOGO 1.png";
import profileImage from "../Asset/profile.png";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication details (e.g., token)
    localStorage.removeItem("authToken"); // Adjust key based on your implementation

    // Redirect to login page
    navigate("/admin");
  };

  return (
    <div
    className="container-fluid d-flex "
    style={{
      backgroundColor: "black",
      minHeight: "100vh", // Ensures the layout takes full height
      flexDirection: "row", // Sidebar on the left and content on the right
    }}
  >
      {/* Sidebar */}
      <div className="sidebar text-white">
        <div className="logo-container text-center py-4">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav className="nav flex-column">
          <Link
            to="/dashboard"
            className={`nav-link text-white ${location.pathname === "/dashboard" ? "active-menu" : ""
              }`}
          >
            <i className="bi bi-house-door"></i> Dashboard
          </Link>
          <Link
            // to="/home"
            className={`nav-link text-white ${location.pathname === "/home" ? "active-menu" : ""
              }`}
          >
            <i className="bi bi-house"></i> Home
          </Link>
          <Link
            // to="/about"
            className={`nav-link text-white ${location.pathname === "/about" ? "active-menu" : ""
              }`}
          >
            <i className="bi bi-info-circle"></i> About
          </Link>
          <Link
            // to="/services"
            className={`nav-link text-white ${location.pathname === "/services" ? "active-menu" : ""
              }`}
          >
            <i className="bi bi-briefcase"></i> Services
          </Link>
          <Link
            // to="/hire"
            className={`nav-link text-white ${location.pathname === "/hire" ? "active-menu" : ""
              }`}
          >
            <i className="bi bi-person-check"></i> Hire
          </Link>
          <Link
            to="/dashboard/blogs"
            className={`nav-link text-white ${location.pathname === "/dashboard/blogs" ? "active-menu" : ""
              }`}
          >
            <i className="bi bi-pencil-square"></i> Blogs
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content container-fluid flex-grow-1 p-0"  
      style={{
          backgroundColor: "#000",
        }}>
        {/* Header */}
        <div
          className="container-fluid d-flex justify-content-end align-items-center py-3 bg-black text-white"
          style={{ display: "flex", justifyContent: "flex-end", paddingRight: "0px" }}
        >
          {/* Profile Dropdown */}
          <div className="dropdown">
            <button
              className="btn  d-flex align-items-center"
              id="profileDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                background: "none",
                border: "none",
                padding: "10px",
                cursor: "pointer",
                fontSize: "28px", // Increased size
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* Profile Image */}
              <img
                src={profileImage}
                alt="Profile"
                className="profile-image rounded-circle"
                style={{
                  width: "50px", // Bigger icon size
                  height: "50px",
                  objectFit: "cover",
                  border: "2px solid #8EC440",
                  marginRight: "10px",
                  transition: "transform 0.2s ease-in-out",
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              />
              <i className="bi bi-caret-down-fill text-white"  style={{ fontSize:"18px", paddingTop:"20px"
                }}></i> {/* Dropdown icon */}
            </button>

            {/* Dropdown Menu */}
            <ul
              className="dropdown-menu dropdown-menu-end bg-dark shadow"
              style={{
                minWidth: "180px",
                borderRadius: "10px",
                padding: "5px",
              }}
            >
              <li>
                <button
                  className="dropdown-item text-white bg-dark"
                  onClick={handleLogout}
                  style={{
                    fontSize: "16px",
                    padding: "10px 15px",
                    background: "none",
                    border: "none",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <i className="bi bi-box-arrow-right me-2"></i> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="content p-0">
          <Outlet /> {/* Child routes will render here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;