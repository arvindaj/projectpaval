import React, { useEffect, useState } from 'react';
import Bullet from '../Asset/Bullet.png'
import './hiredm.css'
import axios from 'axios';
import Swal from 'sweetalert2';


const Hiredm = () => {


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
      img.src = require("../Asset/Hire Digital Marketing banner.png");
      img.onload = () => setIsLoaded(true);
    }, []);
  


  return (
    <div className='hiredm'>
      {/* 1 section */}
      <div className="hiredm-front-page"style={{ display: isLoaded ? "flex" : "none" }}>
      <div className="container p-0">
          {/* Left Side Content */}
          <div className="hiredm-front-page-center row">
            <div className="col-md-6 hiredm-front-heading p-0">
              <h1>Hire Digital Marketing</h1>
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
            Hire Digital Marketing
          </h1>
          <p>
            Benivolent has acquired an eminent position in this competitive world for its cost effectual and qualitative expert web development services. We present our clients with some of the superlative veterans for web Application development. Hire web developers with high quality and latest acquaintance in the web development field with us. We have well applauded web professionals who can make your website very interactive with their unique web development skills. 
            The most unique attributes that our web developer professionals symbolize are knowledge, Team spirit, and imagination and thereby, providing you with the best of the web development services. The aim of hire dedicated web developer is to leverage his skills and proficiency in customized web development. Benivolent have well trained Web Developers in an assortment of programming languages, IT technologies, popular and latest web development frameworks to meet the exact web development needs of our offshore clients. You can hire web developers for your explicit web development needs from Benivolent. Furthermore, the thought of hiring dedicated developers from benivolent web developers is cost-effective and leads to innovations in recent technology even as working on dissimilar web development projects across a broad range of industries.
          </p>
          <br />
          <h3>Benefits of hiring web developers from Benivolent</h3>
          <p>
            Benivolent level of communication to your project is like you are having an in-house development facility to execute standard/customer particular quality framework, allowing our customers to gain aggressive advantages from our highly qualified team. While you engage to hire dedicated developers from Benivolent to your project team, you're adding a knowledgeable staff to your team who will develop your web existence though its extensive work exposure
          </p>

        </div>

      </div>

      <div className="h-w-b">
        <div className="container">
          <div className="row align-items-start">
            {/* Left Column */}
            <div className="col-lg-6 col-md-12 mb-4">
              <h1 className="section-title">Benefits of Hire a Web Developer</h1>

              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Enhanced Brand Visibility</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Stronger Audience Engagement</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Improved Conversion Rates</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Thought Leadership</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Cost-Effectiveness</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6 col-md-12 mb-4">
              <h1 className="section-title">Pavalsoft Generative AI Expertise</h1>
              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Enhanced Brand Visibility</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Stronger Audience Engagement</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Improved Conversion Rates</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Thought Leadership</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Cost-Effectiveness</p>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* 3 section  */}
      <div className='hiredm-content-form'>
        <div className="content-layout">
          <div className="content-left-side">
            <h1>Why Choose Benivolent for Hiring?</h1>
            <p>
              Benivolent enthusiastic and dedicated web developers provide the same services as you would get from an in-house staffs, but are located and working from our Offshore development Center in India. Feel Free to hire dedicated developers and also to submit your Enquires.
              Benivolent enthusiastic and dedicated web developers provide the same services as you would get from an in-house staffs, but are located and working from our Offshore development Center in India. Feel Free to hire dedicated developers and also to submit your Enquires.
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

export default Hiredm
