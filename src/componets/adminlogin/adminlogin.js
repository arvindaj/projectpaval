import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adminlogin.css";
import logo from "../Asset/Paval Soft - LOGO 1.png";
import loginimage from "../Asset/imagelogin.png";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve values from environment variables
    const adminUsername = process.env.REACT_APP_ADMIN_USERNAME;
    const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD;

    if (username === adminUsername && password === adminPassword) {
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      setError("Invalid username or password.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="admin-login-container  d-flex align-items-center" style={{ backgroundColor: "black" }}>
      <div className="container-fluid">
        <div className="row">
          {/* Left Column: Image */}
          <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center">
            <img
              src={loginimage}
              alt="Login Illustration"
              className="img-fluid login-image"
            />
          </div>

          {/* Right Column: Login Form */}
          <div className="col-lg-6 position-relative">
            {/* Logo Positioned Outside */}
            <div className="logo-container new-logo-container" style={{ left: "50%" }}>
              <img src={logo} alt="Paval Soft" className="logo new-logo" />
            </div>
            <div className="login-card p-4">
              <h2 className="text-center mb-4">Admin Login</h2>
              <form onSubmit={handleLogin}>
                {/* Username Field */}
                <div style={{ marginBottom: "1rem" }}>
                  <label htmlFor="username" style={{ color: "#fff", fontWeight: "200" }}>Username:</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{
                      color: "#fff",
                      width: "100%",
                      padding: "10px",
                      fontSize: "14px",
                      border: "1px solid #BBFF59",
                      borderRadius: "10px",
                      background: "#2B2B2B",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                    }}
                  />
                </div>

                {/* Password Field with Eye Button Inside */}
                <div style={{ marginBottom: "1.5rem", position: "relative" }}>
                  <label htmlFor="password" style={{ color: "#fff", fontWeight: "200" }}>Password:</label>
                  <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{
                        flex: "1",
                        color: "#fff",
                        padding: "10px",
                        fontSize: "14px",
                        border: "1px solid #BBFF59",
                        borderRadius: "10px",
                        background: "#2B2B2B",
                        outline: "none",
                        transition: "border-color 0.3s ease",
                        paddingRight: "40px", // Space for the button inside
                      }}
                    />
                    {/* Eye Button Inside the Input */}
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      style={{
                        position: "absolute",
                        right: "10px",
                        background: "transparent",
                        border: "none",
                        padding: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                        style={{ fontSize: "18px", color: "#BBFF59" }}></i>
                    </button>
                  </div>
                </div>

                {/* Error Message (If Any) */}
                {error && <p style={{ color: "#ff4d4d" }}>{error}</p>}

                {/* Login Button */}
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#8EC440",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "16px",
                    borderRadius: "8px",
                    transition: "background-color 0.3s ease, transform 0.2s ease, color 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "scale(1.02)";
                    e.target.style.backgroundColor = "#BBFF59";
                    e.target.style.color = "#000"; // Change font color to black on hover
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.backgroundColor = "#8EC440";
                    e.target.style.color = "#fff"; // Revert font color to white
                  }}
                >
                  Login
                </button>

              </form>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
