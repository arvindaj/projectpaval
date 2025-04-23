import React, { useEffect, useState } from 'react';
import Bullet from '../Asset/Bullet.png'
import './ecommerce.css'
import axios from 'axios';
import Swal from 'sweetalert2';

const Ecommerce = () => {

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



  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = require("../Asset/Devops.png");
    img.onload = () => setIsLoaded(true);
  }, []);


  return (
    <div className='ecommerce'>
      {/* 1 section */}
      <div className="ecommerce-front-page"style={{ display: isLoaded ? "flex" : "none" }}>
      <div className="container p-0">
          {/* Left Side Content */}
          <div className="ecommerce-front-page-center row">
            <div className="col-md-6 ecommerce-front-heading p-0">
              <h1>Ecommerce</h1>
              <p>
                Lorem ipsum dolor sit amet. Qui repellendus nulla sed facere modi est quia voluptas est illum beatae in dolorum eius aut earum obcaecati id ipsum excepturi.
                Lorem ipsum dolor sit amet. Qui repellendus nulla.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2 section */}
      <div className='aboutus-content'>
        <div className="aboutus">
          <h1>
            ECommerce Development
          </h1>
          <p>
            Today’s competitive business scenarios have flexible demand to meet new imperative business process. Ecommerce website development from Paval Soft softech will assist you in online business by matching your company requirements with the current market trends in web-technology. Ecommerce, known as Electronic commerce, represents the buying and selling of products or services over the Internet and other computer networks. Exchange of inquiries, orders, invoices, transfer of funds, etc. happens directly over the internet. Ecommerce Website Design helps you a online visibility to your business
          
            Today’s competitive business scenarios have flexible demand to meet new imperative business process. Ecommerce website development from Paval Soft softech will assist you in online business by matching your company requirements with the current market trends in web-technology. Ecommerce, known as Electronic commerce, represents the buying and selling of products or services over the Internet and other computer networks. Exchange of inquiries, orders, invoices, transfer of funds, etc. happens directly over the internet. Ecommerce Website Design helps you a online visibility to your business
          </p>
          <br />
          <p>
            Affordable Ecommerce website design and ecommerce development are professionally maintained for your company. With every ecommerce website development, our ecommerce development team takes a time to listen your words and find the best ecommerce website development to host your ecommerce site. We are the best ecommerce development company dedicated to providing online web promotion using ecommerce development: professional ecommerce development, ecommerce development services, ecommerce development prices and maintenance services for your business.
          </p>
         
        </div>
      </div>

      <div className="h-w-b">
        <div className="container py-0">
          <div className="row align-items-start">
            {/* Left Column */}
            <div className="col-lg-6 col-md-12 mb-4">
              <h1 className="section-title">Paval Soft Ecommerce</h1>

              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Ecommerce Online Web Store Development</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Online payment and Security Development</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Credit card Integration gateways Development</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Ecommerce Hosting Services</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Ecommerce Team Custom Support services</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6 col-md-12 mb-4">
              <h1 className="section-title">Navigation</h1>
             
          <div className="logo-hire">
            <img src={Bullet} alt="Paval Soft logo" />
            <p>Ecommerce Online Web Store Development</p>
          </div>
          <div className="logo-hire">
            <img src={Bullet} alt="Paval Soft logo" />
            <p>Online payment and Security Development</p>
          </div>
          <div className="logo-hire">
            <img src={Bullet} alt="Paval Soft logo" />
            <p>Credit card Integration gateways Development</p>
          </div>
          <div className="logo-hire">
            <img src={Bullet} alt="Paval Soft logo" />
            <p>Ecommerce Hosting Services</p>
          </div>
          <div className="logo-hire">
            <img src={Bullet} alt="Paval Soft logo" />
            <p>Ecommerce Team Custom Support services</p>
          </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 section  */}
      <div className='ecommerce-content-form'>
        <div className="content-layout">
          <div className="content-left-side">
            <h1>Ecommerce Development</h1>
            <p>
              E-commerce development is vital in the modern business landscape, empowering organizations to reach global audiences, streamline sales processes, and enhance customer experiences. At Benivolent, we specialize in creating robust, scalable, and feature-rich e-commerce solutions tailored to meet your unique business requirements. Our expertise spans from designing intuitive storefronts to implementing secure payment gateways and integrating advanced analytics for data-driven decision-making.
            </p>
            <p>
              Contact us today for your ecommerce website design and development & Custom Web Site Development.
            </p>

          </div>


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
      </div>

    </div>
  )
}

export default Ecommerce
