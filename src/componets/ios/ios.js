import React, { useEffect, useState } from 'react';
import Bullet from '../Asset/Bullet.png'
import '../ios/ios.css'
import axios from 'axios';
import Swal from 'sweetalert2';


const Ios = () => {


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
      img.src = require("../Asset/IOS Development.png");
      img.onload = () => setIsLoaded(true);
    }, []);
  
  return (
    <div className='ios'>
      {/* 1 section */}
      <div className="ios-front-page" style={{ display: isLoaded ? "flex" : "none" }}>
      <div className="container p-0">
          {/* Left Side Content */}
          <div className="ios-front-page-center row">
            <div className="col-md-6 ios-front-heading p-0">
              <h1>IOS Development</h1>
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
            IOS Development
          </h1>
          <p>
            At Paval Soft, we specialize in delivering top-notch iOS development services to help businesses create innovative, user-friendly, and high-performance applications for Apple’s ecosystem.
          
            At Paval Soft, we specialize in delivering top-notch iOS development services to help businesses create innovative, user-friendly, and high-performance applications for Apple’s ecosystem.
         
            At Paval Soft, we specialize in delivering top-notch iOS development services to help businesses create innovative, user-friendly, and high-performance applications for Apple’s ecosystem.
        
            At Paval Soft, we specialize in delivering top-notch iOS development services to help businesses create innovative, user-friendly, and high-performance applications for Apple’s ecosystem.
          </p>
          <p>
            At Paval Soft, we specialize in delivering top-notch iOS development services to help businesses create innovative, user-friendly, and high-performance applications for Apple’s ecosystem.
          </p>
        </div>
      </div>
      
      <div className="h-w-b">
                <div className="container py-0">
                    <div className="row align-items-start">
                        {/* Left Column */}
                        <div className="col-lg-6 col-md-12 mb-4">
                            <h1 className="section-title">What We Offer?</h1>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>Custom iOS App Development</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>UI/UX Design.</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>Maintenance and Support.</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>App Store Submission.</p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-lg-6 col-md-12 mb-4">
                            <h1 className="section-title">Why choose us</h1>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>Experienced iOS developers.</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>Cutting-edge tools and technologies.</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>End-to-end project support.</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>Focused on delivering value and quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      {/* 3 section  */}
      <div className='ios-content-form'>
        <div className="content-layout">
          <div className="content-left-side">
            <h1>IOS Development</h1>

            <p>
              If IOS Development is properly implemented, it's not worth less than gold for your business. Feel free to click here for more clear information about Benivolent CRM

              information about Benivolent CRM
            </p>
            <p>
              If IOS Development is properly implemented, it's not worth less than gold for your business. Feel free to click here for more clear information about Benivolent CRM
            </p>
            <p>
              If IOS Development is properly implemented, it's not worth less than gold for your business. Feel free to click here for more clear information about Benivolent CRM
            </p>
            <p>
              If IOS Development is properly implemented, it's not worth less than gold for your business. Feel free to click here for more clear information about Benivolent CRM
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

export default Ios
