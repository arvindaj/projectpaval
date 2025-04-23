import React from "react";
import "../footer/footer.css"; // Ensure this CSS file contains the necessary styles
import { NavLink } from "react-router-dom";
import logo from "../Asset/Paval Soft - LOGO 1.png";
import ChatBot from "../chatbot/chatbot";


// Import the ChatBot component
const Footer = () => {


  const currentYear = new Date().getFullYear(); // Get the current year




  return (
    <footer className="footer bg-dark text-white py-5 p-3 ">
      {/* ChatBot Component at the Top of the Footer */}
      <div className="chatbot-container">
        <ChatBot />
      </div>

      {/* Section 1: Newsletter Subscription */}
      <div className="container-fluid pt-1">
        <div className="row align-items-center">
          {/* Left side paragraph */}
      <div className="col-md-6 col-12 text-center text-md-start p-2 px-4">
            <h5 style={{ color: "#8EC440", fontWeight: "bold" }}>Stay Updated with Our Newsletter!</h5>
            <p style={{ color: "#fff", fontSize: "14px" }}>
              Subscribe to our newsletter and be the first to receive exclusive updates,<br/> special offers, and the latest news.
            </p>
          </div>

          {/* Right side form */}
          <div className="col-md-6 col-12 d-flex justify-content-center justify-content-md-end align-items-center pe-md-4">
            <form className="d-flex flex-row flex-md-row gap-3 w-100 w-md-auto">
              <input
                type="email"
                className="form-control w-50 w-md-auto"
                placeholder="Enter your email"
                required
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#333",
                  color: "#fff",
                  border: "1px solid #8EC440",
                  padding: "10px 15px",
                }}
              />

              <button
                type="submit"
                className="btn w-md-auto"
                style={{
                  backgroundColor: "#8EC440",
                  color: "#000",
                  borderRadius: "10px",
                  padding: "10px 20px",
                  width:"114px"
                }}
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Section 2: Services and Categories */}
      <div className="container-fluid">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-3 col-sm-12 mb-4 py-4 px-4  ">
            <img src={logo} alt="Logo" className="py-0 px-0 mt-0 mb-2 img-fluid" />
            <h5 className="py-2 px-2">Our Services</h5>
            <p className="py-2 px-2 text-start">
              Explore a wide range of professional services to meet your business needs.
            </p>
            <div className="d-flex flex-wrap justify-content-start px-2 gap-3 mt-3 ">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </div>

            <style>
              {`
      /* For small screens (768px and below) */
      @media (max-width: 768px) {
        .d-flex {
          flex-direction: row !important; /* Keep icons in a row on smaller screens */
          justify-content: center; /* Center the icons horizontally */
          gap: 15px ; /* Add gap between icons */
        }

        .d-flex a {
          font-size: 20px; /* Adjust font size for better visibility */
        }
      }
    `}
            </style>
          </div>


          {/* Right Section with Categories */}
          <div className="col-12 py-1 col-md-9">
            <div className="categories-container m-5 mt-2">

              {/* Category 1 */}
              <div className="category">
                <h6>Platforms</h6>
                <NavLink to="/WebDevelopment">
                  <button className="custom-button">
                    Web Development
                  </button>
                </NavLink>
                <NavLink to="/DotnetDevelopment">
                  <button className="custom-button">
                    .NET Development
                  </button>
                </NavLink>
                <NavLink to="/PhpDevelopment">
                  <button className="custom-button">
                    PHP Development
                  </button>
                </NavLink>
                <NavLink to="/IOSDevelopment">
                  <button className="custom-button">
                    IOS Development
                  </button>
                </NavLink>
                <NavLink to="/DevOps">
                  <button className="custom-button">
                    DevOps
                  </button>
                </NavLink>
              </div>

              {/* Category 2 */}
              <div className="category g-col-6">
                <h6>Products</h6>
                <NavLink to="/MobileApplication">
                  <button className="custom-button">
                    Mobile Application
                  </button>
                </NavLink>
                <NavLink to="/Ecommerce">
                  <button className="custom-button">
                    E-Commerce
                  </button>
                </NavLink>
                <NavLink to="/Awscloud">
                  <button className="custom-button">
                    AWS Cloud
                  </button>
                </NavLink>
                <NavLink to="/Wordpress">
                  <button className="custom-button">
                    Wordpress
                  </button>
                </NavLink>
                <NavLink to="/Android">
                  <button className="custom-button">
                    Android
                  </button>
                </NavLink>
              </div>

              {/* Category 3 */}
              <div className="category">
                <h6>Technologies</h6>
                <NavLink to="/ArtificialIntelligence">
                  <button className="custom-button">
                    Artificial Intelligence
                  </button>
                </NavLink>
                <NavLink to="/IOT">
                  <button className="custom-button">
                    Internet of Things
                  </button>
                </NavLink>
                <NavLink to="/MachineLearning">
                  <button className="custom-button">
                    Machine Learning
                  </button>
                </NavLink>
                <NavLink to="/GenerativeAI">
                  <button className="custom-button">
                    Generative AI
                  </button>
                </NavLink>
                <NavLink to="/Blockchain">
                  <button className="custom-button">
                    Blockchain
                  </button>
                </NavLink>
              </div>

              {/* Category 4 */}
              <div className="category">
                <h6>Innovations</h6>
                <NavLink to="/CRM">
                  <button className="custom-button">
                    CRM Technologies
                  </button>
                </NavLink>
                <NavLink to="/DigitalMarketing">
                  <button className="custom-button">
                    Digital Marketing
                  </button>
                </NavLink>
                <NavLink to="/ContentWriting">
                  <button className="custom-button">
                    Content Writing
                  </button>
                </NavLink>
                <NavLink to="/SEO">
                  <button className="custom-button">
                    Search Engine
                  </button>
                </NavLink>
                <NavLink to="/UiUx">
                  <button className="custom-button">
                    UI & UX
                  </button>
                </NavLink>
              </div>

              {/* Category 5 */}
              <div className="category">
                <h6>Hire Professionals</h6>
                <NavLink to="/HireFullStack">
                  <button className="custom-button">
                    Full-Stack Developers
                  </button>
                </NavLink>
                <NavLink to="/HireMobileDevelopers">
                  <button className="custom-button">
                    Mobile Developers
                  </button>
                </NavLink>
                <NavLink to="/HireUiUx">
                  <button className="custom-button">
                    UI/UX Developers
                  </button>
                </NavLink>
                <NavLink to="/HireDigitalMarketing">
                  <button className="custom-button">
                    Digital Marketing
                  </button>
                </NavLink>
                <NavLink to="/HireQualityAnalyst">
                  <button className="custom-button">
                    Quality Analyst
                  </button>
                </NavLink>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Section 3: Footer Bottom */}
      <div className="mt-4 footer-copyright text-center">
        <p className="mb-1 fs-6 fs-md-5">
          &copy; {currentYear} Paval Soft Private Limited. All Rights Reserved.
        </p>
      </div>



    </footer>
  );
};

export default Footer;
