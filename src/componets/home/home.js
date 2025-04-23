import React, { useRef, useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";
import "../home/home.css";
import "../home/homeresponsive.css"
import Mobile from '../Asset/Mobile app development.png';
import Mobilecolor from '../Asset/Mobile app development color.png';
import Ecommerce from '../Asset/Ecommerce Development bw.png';
import Ecommercecolor from '../Asset/Ecommerce Development color.png';
import Web from '../Asset/Web development.png';
import Webactivecolor from '../Asset/Web development color.png'
import Webdesign from '../Asset/web design.png';
import ImgBrowser from '../Asset/Browser.png';
import Seo from '../Asset/Seo.png';
import Vector from '../Asset/Vector.png';
import Designer from '../Asset/Designer.png';
import SeoBannerbw from '../Asset/Seo Banner bw.png';
import SeoBannerClr from '../Asset/Seo Banner clr.png';
import Webdesignproduct from '../Asset/webdesign 16.png';
import Cmsdevelopmentproduct from '../Asset/cms development 17.png';
import Digitalmarketingproduct from '../Asset/digital marketing 15.png';
import hiredeveloperproduct from '../Asset/hire developer 18.png';
import Digitalcolor from '../Asset/digital marketing 15 color.png';
import hiredevelopercolor from '../Asset/hire developer color.png';
import cmscolor from '../Asset/cms color.png';
import webdesigncolor from '../Asset/web design color.png'
import axios from 'axios';
import Swal from 'sweetalert2';



const Home = () => {


  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/content`, formData);
      console.log('Content submitted:', response.data);
      setFormData({ name: '', email: '', phone: '', message: '' });
      Swal.fire({ title: 'Success!', text: 'Your message has been sent successfully.', icon: 'success', confirmButtonText: 'OK', confirmButtonColor: '#8EC440' });
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire({ title: 'Error!', text: 'Failed to submit your message. Please try again later.', icon: 'error', confirmButtonText: 'OK', confirmButtonColor: '#d33' });
    } finally {
      setLoading(false);
    }
  };

  const wrapperRef = useRef(null);
  const [hoveredService, setHoveredService] = useState(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    let scrollAmount = 0; // Current scroll position
    const scrollSpeed = 0.5; // Adjust scroll speed

    const loopAnimation = () => {
      if (wrapper) {
        scrollAmount += scrollSpeed; // Increment scroll position
        wrapper.style.transform = `translateX(-${scrollAmount}px)`; // Apply translateX

        // Reset scroll position when the content scrolls out of view
        if (scrollAmount >= wrapper.scrollWidth / 2) {
          scrollAmount = 0;
        }

        requestAnimationFrame(loopAnimation); // Continue animation
      }
    };

    loopAnimation(); // Start the animation

    return () => {
      cancelAnimationFrame(loopAnimation); // Cleanup on unmount
    };
  }, []);






  const navigate = useNavigate(); // Navigation

  // Handle service card hover
  const handleMouseEnter = (index) => setHoveredService(index);
  const handleMouseLeave = () => setHoveredService(null);

  // Navigate to the selected service
  const handleReadMore = (path) => {
    navigate(path);
  };

  const services = [
    {
      img: Web,
      hoverImg: Webactivecolor,
      title: "Web Development",
      description: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Lectus sollicitudin nec at egestas ligula.",
        "Eget eget urna vitae odio eget id.",
      ],
      path: "/api/services/WebDevelopment",
    },
    {
      img: Mobile,
      hoverImg: Mobilecolor,
      title: "Mobile App Development",
      description: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Lectus sollicitudin nec at egestas ligula.",
        "Eget eget urna vitae odio eget id.",
      ],
      path: "/api/services/MobileApplication",
    },
    {
      img: Ecommerce,
      hoverImg: Ecommercecolor,
      title: "E-commerce Development",
      description: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Lectus sollicitudin nec at egestas ligula.",
        "Eget eget urna vitae odio eget id.",
      ],
      path: "/api/services/Ecommerce",
    },
  ];




  const [activeService, setActiveService] = useState("Digital Marketing");

  const serviceContent = {
    "Digital Marketing": {
      text: "Lorem ipsum dolor sit amet consectetur. Consectetur id arcu adipiscing ac id augue sollicitudin urna nascetur. Risus aliquet ullamcorper vitae tempor egestas tellus enim sed. Velit in sagittis euismod turpis arcu sapien enim in mi. Interdum sit massa at nec pharetra elementum non integer. Mauris gravida scelerisque eu pulvinar. In mauris viverra metus euismod natoque maecenas sodales arcu est. Gravida magna dictum et pharetra consequat risus pellentesque amet.",
      image: Digitalmarketingproduct, // Replace with appropriate image path
      hoverImage: Digitalcolor, // Hover image
    },
    "Web Design": {
      text: "Lorem ipsum dolor sit amet consectetur. Consectetur id arcu adipiscing ac id augue sollicitudin urna nascetur. Risus aliquet ullamcorper vitae tempor egestas tellus enim sed. Velit in sagittis euismod turpis arcu sapien enim in mi. Interdum sit massa at nec pharetra elementum non integer. Mauris gravida scelerisque eu pulvinar. In mauris viverra metus euismod natoque maecenas sodales arcu est. Gravida magna dictum et pharetra consequat risus pellentesque amet.",
      image: Webdesignproduct, // Replace with appropriate image path
      hoverImage: webdesigncolor, // Hover image
    },
    "CMS Development": {
      text: "Lorem ipsum dolor sit amet consectetur. Consectetur id arcu adipiscing ac id augue sollicitudin urna nascetur. Risus aliquet ullamcorper vitae tempor egestas tellus enim sed. Velit in sagittis euismod turpis arcu sapien enim in mi. Interdum sit massa at nec pharetra elementum non integer. Mauris gravida scelerisque eu pulvinar. In mauris viverra metus euismod natoque maecenas sodales arcu est. Gravida magna dictum et pharetra consequat risus pellentesque amet.",
      image: Cmsdevelopmentproduct,
      hoverImage: cmscolor, // Hover image
    },
    "Hire Developers": {
      text: "Lorem ipsum dolor sit amet consectetur. Consectetur id arcu adipiscing ac id augue sollicitudin urna nascetur. Risus aliquet ullamcorper vitae tempor egestas tellus enim sed. Velit in sagittis euismod turpis arcu sapien enim in mi. Interdum sit massa at nec pharetra elementum non integer. Mauris gravida scelerisque eu pulvinar. In mauris viverra metus euismod natoque maecenas sodales arcu est. Gravida magna dictum et pharetra consequat risus pellentesque amet.",
      image: hiredeveloperproduct,
      hoverImage: hiredevelopercolor, // Hover image
    }

  };
  // const services = ["Digital Marketing", "Web Design", "CMS Development", "Hire Developers"];
  const [hoveredImage, setHoveredImage] = useState(null);

  const [currentImage, setCurrentImage] = useState(SeoBannerbw);

  // Function to handle hover enter
  const handleMouseEnterseo = () => {
    setCurrentImage(SeoBannerClr); // Change to the colored image on hover
  };

  // Function to handle hover leave
  const handleMouseLeaveseo = () => {
    setCurrentImage(SeoBannerbw); // Revert to the original image on mouse leave
  };



  return (
    <div className="home">
      {/* 1 home-container*/}
      <div className="home-container">
        <div className="home-content-container">
          <br />
          <h1>
            Lorem ipsum dolor sit amet consectetur.<br />
            Aliquam id odio turpis arcu nullam at.<br />
            Senectus sed nisi eu donec.
          </h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur. Mollis faucibus sed dignissim est massa vitae.
            Pharetra amet sed nec massa adipiscing vehicula euismod malesuada. Lacus sed ut porttitor
            faucibus risus dapibus lectus pulvinar accumsan.
            Lorem ipsum dolor sit amet consectetur. Mollis faucibus sed dignissim est massa vitae.
            Pharetra amet sed nec massa adipiscing vehicula euismod malesuada. Lacus sed ut porttitor
            faucibus risus dapibus lectus pulvinar accumsan. Sit sit consectetur cursus arcu eget. Sit sit consectetur cursus arcu eget.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur. Mollis faucibus sed dignissim est massa vitae.
            Pharetra amet sed nec massa adipiscing vehicula euismod malesuada. Lacus sed ut porttitor
            faucibus risus dapibus lectus pulvinar accumsan. Sit sit consectetur cursus arcu eget.
          </p>
          <br />
          <button className="home-content-explore-button">Explore Paval Soft</button>
        </div>
      </div>

      {/* 2 Services scroll-container */}
      <div className="scroll-container" style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
        <h1>Services</h1>
        <div
          ref={wrapperRef}
          className="wrapper"
          style={{
            display: "inline-flex",
            transform: "translateX(0px)",
            overflow: "hidden",
          }}
        >
          {/* Duplicate services for seamless scrolling */}
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="service-card"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="service-left">
                <img
                  className="service-img"
                  src={hoveredService === index ? service.hoverImg : service.img}
                  alt={service.title}
                />
              </div>
              <div className="service-right">
                <h3 className="service-title">{service.title}</h3>
                <div className="service-description">
                  {service.description.slice(0, 3).map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                <button
                  className="read-more-button"
                  onClick={() => handleReadMore(service.path)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Content Layout Section */}
      <div className="content-layout">
        {/* Left Side Content */}
        <div className="content-left-side">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus sollicitudin nec at egestas ligula.
            Eget eget urna vitae odio eget id. In tristique at eu cursus lorem morbi laoreet lorem
            ultrices. Adipiscing enim fermentum eu montes mattis odio sed nulla bibendum.
            Eget amet tristique malesuada accumsan consequat at netus sit. Nunc lorem odio nisl sit
            orci nulla velit. Morbi id amet condimentum justo diam placerat scelerisque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus sollicitudin nec at egestas ligula.
            Eget eget urna vitae odio eget id. In tristique at eu cursus lorem morbi laoreet lorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus sollicitudin nec at egestas ligula.
            Eget eget urna vitae odio eget id. In tristique at eu cursus lorem morbi laoreet lorem.
          </p>
        </div>


        {/* Right Side Contact Form */}
        <div className="form-card">
          <form onSubmit={handleSubmit} className="form-content">
            <h1 className="form-title">Quick Proposal</h1>

            <div className="form-group">
              <label
                htmlFor="name"
                className={`form-label ${formData.name ? "filled" : ""}`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="email"
                className={`form-label ${formData.email ? "filled" : ""}`}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="phone"
                className={`form-label ${formData.phone ? "filled" : ""}`}
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="message"
                className={`form-label ${formData.message ? "filled" : ""}`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="form-input"
              ></textarea>
            </div>

            <div className='form-button-container'>
                <button type='submit' className='form-button' disabled={loading}>
                  {loading ? 'Processing...' : 'Submit'}
                </button>
              </div>

          </form>
        </div>
      </div>



      {/* 4 bar-layout Section */}
      <div className="bar-layout">
        <div className="bar-layout-top">
          <div className="bar-tab">
            <img src={Webdesign} alt="Web Design" />
            <h1>Web Design Package</h1>
          </div>
          <div className="bar-tab">
            <img src={ImgBrowser} alt="Web Developer" />
            <h1>Web Developer</h1>
          </div>
          <div className="bar-tab">
            <img src={Seo} alt="Hire SEO" />
            <h1>Hire SEO Expert</h1>
          </div>
        </div>
        <div className="bar-layout-bottom">
          <div className="bar-tab">
            <img src={Designer} alt="Hire Designer" />
            <h1>Hire Dedicated Designer</h1>
          </div>
          <div className="bar-tab">
            <img src={Vector} alt="Hire Developer" />
            <h1>Hire Dedicated Developer</h1>
          </div>
        </div>
      </div>

      {/* 5  bar-product-service */}
      <div className="product-service-wrapper">
        <div className="product-service">
          <div className="product-service-top">
            <nav className="product-service-top-nav-links d-flex flex-wrap justify-content-center align-items-center gap-3 p-3">
              {Object.keys(serviceContent).map((service) => (
                <button
                  key={service}
                  onClick={() => setActiveService(service)}
                  className={`btn nav-link ${activeService === service ? "active" : ""}`}
                >
                  {service}
                </button>
              ))}
            </nav>
          </div>

          <div className="product-service-bottom">
            <div className="product-service-bottom-left">
              <p>{serviceContent[activeService].text}</p>
            </div>
            <div className="product-service-bottom-right px-2 py-4">
              <img
                src={
                  hoveredImage === activeService
                    ? serviceContent[activeService].hoverImage
                    : serviceContent[activeService].image
                }
                alt={activeService}
                onMouseEnter={() => setHoveredImage(activeService)}
                onMouseLeave={() => setHoveredImage(null)}
                className="hoverable-image"
              />
            </div>
          </div>
          
        </div>
      </div>

      {/* 6 search-engine-optimization */}
      <div className="search-engine-optimization">
        <div className="search-engine-optimization-left">
          <h1>Search Engine Optimization</h1>
          <h1>Top 10 Ranking</h1>
          <h1>Guaranteed!</h1>
        </div>
        <div className="search-engine-optimization-right">
          <img
            src={currentImage}
            alt="SEO Banner"
            onMouseEnter={handleMouseEnterseo}
            onMouseLeave={handleMouseLeaveseo}
          />
        </div>
      </div>

    </div>
  );
};

export default Home;
