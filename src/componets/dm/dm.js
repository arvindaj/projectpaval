import React, { useEffect, useState } from 'react';
import Bullet from '../Asset/Bullet.png'
import './dm.css'
import '../crm/crm.css'
import axios from 'axios';
import Swal from 'sweetalert2';



const Digitalmarketing = () => {

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
    img.src = require("../Asset/Digital markerting.png");
    img.onload = () => setIsLoaded(true);
  }, []);


  return (
    <div className='dm'>
      <div className="dm-front-page" style={{ display: isLoaded ? "flex" : "none" }}>
      <div className="container p-0">
          {/* Left Side Content */}
          <div className="dm-front-page-center row">
            <div className="col-md-6 dm-front-heading p-0">
              <h1>Digital Marketing</h1>
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
            Digitalmarketing
          </h1>
          <p>
            Digital marketing has become an essential strategy for businesses to build brand awareness, engage customers, and drive growth in today's competitive landscape. At Paval Soft, we specialize in delivering comprehensive digital marketing solutions tailored to your business needs. From creating impactful campaigns to optimizing your online presence, we help you connect with your audience and achieve measurable results.

            Digital marketing has become an essential strategy for businesses to build brand awareness, engage customers, and drive growth in today's competitive landscape. At Paval Soft, we specialize in delivering comprehensive digital marketing solutions tailored to your business needs. From creating impactful campaigns to optimizing your online presence, we help you connect with your audience and achieve measurable results.
          </p>
          <h3>Benefits of Digital Marketing</h3>
          <p>
            Paval Soft's digital marketing expertise encompasses a wide range of services designed to enhance your online presence and drive measurable results. Our Search Engine Optimization (SEO) strategies improve website rankings to attract organic traffic, while Pay-Per-Click (PPC) Advertising delivers targeted leads through cost-effective campaigns. We excel in Social Media Marketing, engaging audiences on platforms like Facebook, Instagram, LinkedIn, and Twitter, and specialize in Content Marketing by creating valuable content that resonates with your target audience. Through Email Marketing, we nurture leads and retain customers with personalized campaigns, while our Influencer Marketing collaborations enhance brand credibility and reach. Additionally, our Video Marketing solutions captivate audiences with engaging storytelling, and our comprehensive Analytics and Reporting ensure that all campaigns are optimized for maximum effectiveness.
          </p>
        </div>
      </div>

      <div className="h-w-b">
        <div className="container">
          <div className="row align-items-start">
            {/* Left Column */}
            <div className="col-lg-6 col-md-12 mb-4">
              <h1 className="section-title">Benefits of Professional Digital Marketing</h1>

              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Increased Online Visibility</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Targeted Marketing</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Cost-Effectiveness</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Measurable Results</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Improved Engagement</p>
              </div>

            </div>

            {/* Right Column */}
            <div className="col-lg-6 col-md-12 mb-4">
              <h1 className="section-title">Pavalsoft Digital Marketing Expertise</h1>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Continuous Integration and Continuous Delivery.</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Infrastructure as Code (IaC)</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Cloud Enablement</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Containerization and Orchestration </p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Security Integration (DevSecOps) </p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Configuration Management:</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 section  */}
      <div className='dm-content-form'>
        <div className="content-layout">
          <div className="content-left-side">
            <h1>Why Choose Paval Soft for Digital Marketing?</h1>
            <p>
              At Paval Soft, we take a data-driven approach to digital marketing, ensuring that every campaign is aligned with your business goals. Our team of experts stays updated on the latest trends and tools to deliver innovative strategies that generate real results. Whether you’re looking to increase website traffic, generate leads, or enhance brand loyalty, we provide solutions that make a tangible impact.
            </p>
            <h1>Get Started Today</h1>
            <p>
              Elevate your business with Paval Soft's digital marketing services. From strategy development to execution and optimization, we’re here to help you succeed in the digital landscape. Contact us today to discuss your goals and let’s create a customized digital marketing strategy that drives success!
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

export default Digitalmarketing
