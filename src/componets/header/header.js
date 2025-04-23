import React, { useState} from "react";
import { NavLink } from "react-router-dom";
import logo from "../Asset/Paval Soft - LOGO 1.svg";
import '../header/header.css';
import 'font-awesome/css/font-awesome.min.css';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);




  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  // const [isSmallScreen, setIsSmallScreen] = useState(false);

  // // Effect to check screen size
  // useEffect(() => {
  //   const checkScreenSize = () => {
  //     setIsSmallScreen(window.innerWidth <= 435);
  //   };

  //   // Check screen size on mount
  //   checkScreenSize();

  //   // Listen for window resize
  //   window.addEventListener('resize', checkScreenSize);

  //   // Cleanup listener
  //   return () => {
  //     window.removeEventListener('resize', checkScreenSize);
  //   };
  // }, []);

  return (
    <header className="bg-dark text-white py-2">
      <div className="containe-fluid d-flex justify-content-between align-items-center px-4" style={{ margin: "0px" }}>
        {/* Logo */}
        <div className="logo">
          <img
            src={logo}
            alt="Paval Soft Logo"
            className="img-fluid"
            style={{ width: '200px', paddingLeft: '10px' }}
          />
        </div>


        {/* Left-side Navigation (Offcanvas) for small screens */}
        <div
          className={`offcanvas offcanvas-start ${isMenuOpen ? 'show' : ''}`}
          tabIndex="-1"
          id="leftOffcanvas"
          aria-labelledby="leftOffcanvasLabel"
        >
          <div className="offcanvas-header">
            {/* Close Button (X) */}
            <button
              type="button"
              className="btn-close text-reset"
              aria-label="Close"
              onClick={() => setIsMenuOpen(false)}  // Close the menu on click
            />
          </div>
          <div className="offcanvas-body">
            <nav>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="nav-link"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/About"
                    className="nav-link"
                  >
                    About
                  </NavLink>
                </li>
                {/* Dropdown for Services */}
                <li className="nav-item dropdown">
                  <button
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownHire"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </button>
                  <ul
                    className="dropdown-menu w-550 "
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-md-3">
                          <li>
                            <NavLink
                              to="/WebDevelopment"
                              className={({ isActive }) =>
                                isActive ? "dropdown-item col web-active" : "dropdown-item col"
                              }
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Web Development
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/DotnetDevelopment"
                              className={({ isActive }) =>
                                isActive ? "dropdown-item col dotnet-active" : "dropdown-item col"
                              }
                              onClick={() => setIsMenuOpen(false)}
                            >
                              .NET Development
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/PhpDevelopment"
                              className={({ isActive }) =>
                                isActive ? "dropdown-item col php-active" : "dropdown-item col"
                              }
                              onClick={() => setIsMenuOpen(false)}
                            >
                              PHP Development
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/IOSDevelopment"
                              className={({ isActive }) =>
                                isActive ? "dropdown-item col ios-active" : "dropdown-item col"
                              }
                              onClick={() => setIsMenuOpen(false)}
                            >
                              IOS Development
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/DevOps"
                              className={({ isActive }) =>
                                isActive ? "dropdown-item col devops-active" : "dropdown-item col"
                              }
                              onClick={() => setIsMenuOpen(false)}
                            >
                              DevOps
                            </NavLink>
                          </li>

                        </div>
                        <div className="col-md-3">
                          <li>
                            <NavLink
                              to="/MobileApplication"
                              className={({ isActive }) =>
                                isActive ? "dropdown-item col mobile-active" : "dropdown-item col"
                              }
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Mobile Application
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/Ecommerce"
                              className={({ isActive }) =>
                                isActive ? "dropdown-item col ecommerce-active" : "dropdown-item col"
                              }
                              onClick={() => setIsMenuOpen(false)}
                            >
                              E-Commerce
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/AWSCloud"
                              className={({ isActive }) =>
                                isActive ? "dropdown-item col aws-active" : "dropdown-item col"
                              }
                              onClick={() => setIsMenuOpen(false)}
                            >
                              AWS Cloud
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/Wordpress"
                              className={({ isActive }) =>
                                isActive ? "dropdown-item col wordpress-active" : "dropdown-item col"
                              }
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Wordpress
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/Android"
                              className={({ isActive }) =>
                                isActive ? "dropdown-item col android-active" : "dropdown-item col"
                              }
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Android
                            </NavLink>
                          </li>

                        </div>
                        <div className="col-md-3">

                          <li>
                            <NavLink
                              to="/IOT"
                              className={({ isActive }) =>
                                isActive ? "dropdown-item col iot-active" : "dropdown-item col"
                              }
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Internet of Things
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/ArtificialIntelligence"
                              className={({ isActive }) =>
                                isActive ? "dropdown-item col ai-active" : "dropdown-item col"
                              }
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Artificial Intelligence
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/MachineLearning"
                              className={({ isActive }) =>
                                isActive ? "dropdown-item col ml-active" : "dropdown-item col"
                              }
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Machine Learning
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/GenerativeAI"
                              className={({ isActive }) =>
                                isActive ? "dropdown-item col genai-active" : "dropdown-item col"
                              }
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Generative AI
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/Blockchain"
                              className={({ isActive }) =>
                                isActive ? "dropdown-item col blockchain-active" : "dropdown-item col"
                              }
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Blockchain
                            </NavLink>
                          </li>


                        </div>

                        <div className="col-md-3">
                          <li>
                            <NavLink
                              to="/CRM"
                              className={({ isActive }) =>
                                isActive ? "dropdown-item col crm-active" : "dropdown-item col"
                              }
                              onClick={() => setIsMenuOpen(false)}
                            >
                              CRM Technologies
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/DigitalMarketing"
                              className={({ isActive }) =>
                                isActive ? "dropdown-item col digitalmarketing-active" : "dropdown-item col"
                              }
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Digital Marketing
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/ContentWriting"
                              className={({ isActive }) =>
                                isActive ? "dropdown-item col contentwriting-active" : "dropdown-item col"
                              }
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Content Writing
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/UiUx"
                              className={({ isActive }) =>
                                isActive ? "dropdown-item col uiux-active" : "dropdown-item col"
                              }
                              onClick={() => setIsMenuOpen(false)}
                            >
                              UI & UX
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/SEO"
                              className={({ isActive }) =>
                                isActive ? "dropdown-item col seo-active" : "dropdown-item col"
                              }
                              onClick={() => setIsMenuOpen(false)}
                            >
                              SEO
                            </NavLink>
                          </li>


                        </div>
                      </div>
                    </div>
                  </ul>
                </li>

                {/* Dropdown for Hire */}
                <li className="nav-item dropdown">
                  <button
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownHire"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hire
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownHire">
                    <li>
                      <NavLink
                        to="/HireFullStack"
                        className={({ isActive }) =>
                          `dropdown-item ${isActive ? "hirefullstack-active" : ""}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Hire Full Stack Developers
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/HireMobileDevelopers"
                        className={({ isActive }) =>
                          `dropdown-item ${isActive ? "hiremobile-active" : ""}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Hire Mobile Developers
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/HireUiUx"
                        className={({ isActive }) =>
                          `dropdown-item ${isActive ? "hireuiux-active" : ""}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Hire UI/UX Developers
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/HireDigitalMarketing"
                        className={({ isActive }) =>
                          `dropdown-item ${isActive ? "hiredigitalmarketing-active" : ""}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Hire Digital Marketing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/HireQualityAnalyst"
                        className={({ isActive }) =>
                          `dropdown-item ${isActive ? "hirequality-active" : ""}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Hire Quality Analyst
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/blog"
                    className="nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Contact"
                    className="nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </NavLink>
                </li>
               
              </ul>
            </nav>
          </div>
        </div>

        {/* Centered Navbar Links for Larger Screens */}
        <nav className="d-none d-lg-block w-160">
          <ul className="nav justify-content-center w-100 m-0 p-0">
            <li className="nav-item pt-3">
              <NavLink to="/" className="nav-link px-4"
                activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item pt-3">
              <NavLink to="/about" className="nav-link px-4"
                activeClassName="active">
                About Us
              </NavLink>
            </li>
            {/* Dropdown for Services */}
            <div className="nav-item dropdown pt-3" >

              <button
                className="nav-link px-4"
                activeClassName="active"
                id="navbarDropdownHire"
              >
                Services
              </button>

              <ul className="dropdown-menu customs-dropdown-menu mt-0 px-2 me-2 position-absolute top-100 start-100 translate-middle-x shadow-lg">
                <div className="container-fluid ms-2 me-2" style={{ padding: '10px' }}>
                  <div className="card-group gray-100 " style={{ gap: '20px', paddingTop: '10px' }}>
                    <div className="dropdown-menu-dark gap-2 d-md-flex justify-content-md-end gap-3">
                      <a href="/WebDevelopment" className="btn-lg  gap-2 custom-link " style={{ width: '180px', height: '30px', textDecoration: 'none' }}>Web Development</a>
                      <a href="/ContentWriting" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '180px', height: '30px', textDecoration: 'none' }}>Content Writing</a>
                      <a href="/MobileApplication" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '180px', height: '30px', textDecoration: 'none' }}>Mobile Application</a>
                      <a href="/ArtificialIntelligence" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '180px', height: '30px', textDecoration: 'none' }}>Artificial intelligencece</a>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end gap-3">
                      <a href="/IOSDevelopment" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '180px', height: '30px', textDecoration: 'none' }}>IOS Development</a>
                      <a href="/Ecommerce" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '180px', height: '30px', textDecoration: 'none' }}>E-Commerce</a>
                      <a href="/IOT" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '180px', height: '30px', textDecoration: 'none' }}>Internet of Things</a>
                      <a href="/DigitalMarketing" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '180px', height: '30px', textDecoration: 'none' }}>Digital Marketing</a>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end gap-3">
                      <a href="/PhpDevelopment" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '180px', height: '30px', textDecoration: 'none' }}>PHP Development</a>
                      <a href="/Wordpress" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '180px', height: '30px', textDecoration: 'none' }}>Wordpress</a>
                      <a href="/GenerativeAI" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '180px', height: '30px', textDecoration: 'none' }}>Generative AI</a>
                      <a href="/MachineLearning" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '180px', height: '30px', textDecoration: 'none' }}>Machine Leaning</a>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end gap-3">
                      <a href="/DotnetDevelopment" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '180px', height: '30px', textDecoration: 'none' }}>.NET Development</a>
                      <a href="/UiUx" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '180px', height: '30px', textDecoration: 'none' }}>UI & UX</a>
                      <a href="/AWSCloud" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '180px', height: '30px', textDecoration: 'none' }}>AWS cloud</a>
                      <a href="/Blockchain" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '180px', height: '30px', textDecoration: 'none' }}>Blockchain</a>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end gap-3">
                      <a href="/DevOps" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '180px', height: '30px', textDecoration: 'none' }}>DevOps</a>
                      <a href="/SEO" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '180px', height: '30px', textDecoration: 'none' }}>SEO</a>
                      <a href="/Android" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '180px', height: '30px', textDecoration: 'none' }}>Android</a>
                      <a href="/CRM" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '180px', height: '30px', textDecoration: 'none' }}>CRM</a>
                    </div>
                  </div>
                </div>
              </ul>
            </div>

            {/* Dropdown for Hire */}
            <li className="nav-item dropdown pt-3"
              activeClassName="active">
              <button
                className="nav-link  px-4"
                id="navbarDropdownHire"
                aria-expanded="false"
              >
                Hire
              </button>
              <ul className="dropdown-menu customs-dropdown-menu mt-0 px-2 me-2 position-absolute top-100 start-100 translate-middle-x shadow-lg">
                <div className="container-fluid ms-2 me-2" style={{ maxWidth: '1200px', padding: '10px' }}>
                  <div className="card-group" style={{ gap: '10px', }}>

                    <div className="d-grid gap-1 gap-3 " style={{ gridTemplateColumns: '1fr', padding: '10px', paddingBottom: '0px' }}>
                      <a href="/HireFullStack" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '210px', height: '30px', textDecoration: 'none', padding: '10px', paddingTop: '0px' }}>Hire full Stack Developers</a>
                      <a href="/HireMobileDevelopers" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '210px', height: '30px', textDecoration: 'none', padding: '10px', paddingTop: '0px' }}>Hire Mobile Developers</a>
                      <a href="/HireUiUx" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '210px', height: '30px', textDecoration: 'none', padding: '10px', paddingTop: '0px' }}>Hire UI/UX Developers</a>
                      <a href="/HireDigitalMarketing" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '210px', height: '30px', textDecoration: 'none', padding: '10px', paddingTop: '0px' }}>Hire Digital Marketing</a>
                      <a href="/HireQualityAnalyst" className="btn-lg btn-primary gap-2 custom-link " style={{ width: '210px', height: '30px', textDecoration: 'none', padding: '10px', paddingTop: '0px' }}>Hire Quality Analyst</a>

                    </div>

                  </div>
                </div>
              </ul>

            </li>
            <li className="nav-item pt-3">
              <NavLink to="/blog" className="nav-link px-4">
                Blog
              </NavLink>
            </li>
            <li className="nav-item pt-3">
              <NavLink to="/Contact" className="nav-link px-4">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>




        <div className="d-flex align-items-center justify-content-end">
          {/* Contact Us Button */}
          {/* <a
            href="tel:+1234567890"
            className="contact-us-button"
            style={{ fontSize: isSmallScreen ? "14px" : "16px" }} // Adjust font size for small screens
          >
            <i
              className="fa-solid fa-phone"
              style={{ fontSize: isSmallScreen ? "16px" : "20px" }}
            ></i>
            <span className="contact-text">
              {isSmallScreen ? "" : " Call Us"}
            </span>
          </a> */}
          {/* Menu Button */}
          <button
            className="btn d-lg-none ms-2 contact-us-button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            style={{
              padding: "8px 12px",
              borderRadius: "50px",
            }}
          >
            ☰
          </button>

          <style>
            {`
          @media (max-width: 768px) {
            .btn {
              padding: 8px 10px; /* Compact button padding for mobile */
            }

            .fa-phone {
              margin-right: 0; /* Reduce margin on small screens */
            }

            .contact-text {
              display: none; /* Hide text on small screens */
            }
          }
             @media (max-width: 320px) {
            .btn {
              padding: 8px 10px; /* Compact button padding for mobile */
            }

            .fa-phone {
              margin-right: 0; /* Reduce margin on small screens */
            }

            .contact-text {
              display: none; /* Hide text on small screens */
            }
          }
        `}
          </style>
        </div>

      </div>
    </header>
  );
};

export default Header;
