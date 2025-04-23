import React, { useEffect, useState } from 'react';
import Bullet from '../Asset/Bullet.png'
import '../iot/iot.css'
import axios from 'axios';
import Swal from 'sweetalert2';

const IoT = () => {


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
    <div className='iot'>

      {/* 1 section  */}
      <div className="iot-front-page" style={{ display: isLoaded ? "flex" : "none" }}>
      <div className="container p-0">
          {/* Left Side Content */}
          <div className="iot-front-page-center row">
            <div className="col-md-6 iot-front-heading p-0">
              <h1>IOT</h1>
              <p>
                Lorem ipsum dolor sit amet. Qui repellendus nulla sed facere modi est quia voluptas est illum beatae in dolorum eius aut earum obcaecati id ipsum excepturi.
                Lorem ipsum dolor sit amet. Qui repellendus nulla.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* 2 section  */}
      <div className='aboutus-content'>
        <div className="aboutus">
          <h1>
            Internet Of Things
          </h1>
          <p>
            The Internet of Things (IoT) is revolutionizing industries by connecting devices, systems, and users to create intelligent ecosystems. At Paval Soft, we specialize in delivering end-to-end IoT solutions that empower businesses to unlock new opportunities, enhance operational efficiency, and provide seamless user experiences. From smart device integration to advanced analytics, our IoT development services enable organizations to harness the power of connected technologies and stay ahead in the digital era.
         
            The Internet of Things (IoT) is revolutionizing industries by connecting devices, systems, and users to create intelligent ecosystems. At Paval Soft, we specialize in delivering end-to-end IoT solutions that empower businesses to unlock new opportunities, enhance operational efficiency, and provide seamless user experiences. From smart device integration to advanced analytics, our IoT development services enable organizations to harness the power of connected technologies and stay ahead in the digital era.
          </p>
          <p>
            The Internet of Things (IoT) is revolutionizing industries by connecting devices, systems, and users to create intelligent ecosystems. At Paval Soft, we specialize in delivering end-to-end IoT solutions that empower businesses to unlock new opportunities, enhance operational efficiency, and provide seamless user experiences. From smart device integration to advanced analytics, our IoT development services enable organizations to harness the power of connected technologies and stay ahead in the digital era.
          </p>
        </div>
      </div>

      {/* 3 section  */}



      <div className="h-w-b">
        <div className="container py-4">
          <div className="row align-items-start">
            {/* Left Column */}
            <div className="col-lg-6 col-md-12 mb-4">
              <h1 className="section-title">Benefits of IoT Development</h1>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Enhanced Connection</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Data-Driven Insights.</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Improved Efficiency.</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Remote Monitoring.</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6 col-md-12 mb-4">
              <h1 className="section-title">Paval Soft IoT Development Expertise</h1>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>IoT App Development</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>IoT Device Integration</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 4 section  */}
      <div className='iot-content-form'>
        <div className="content-layout">
          <div className="content-left-side">
            <h1>Why Choose Paval Soft for IoT Development?</h1>
            <p>
              At Paval Soft, we combine technological expertise with innovative thinking to deliver IoT solutions that transform businesses. Our team focuses on understanding your unique needs to create intelligent, secure, and scalable systems that drive efficiency and innovation. With a commitment to quality and customer satisfaction, we help businesses navigate the complexities of IoT and unlock its full potential.
            </p>
            <h1>Get Started Today</h1>
            <p>
              Transform your business with IoT solutions from Paval Soft. Whether you’re looking to build a smart ecosystem or optimize existing IoT infrastructure, our experts are here to help.
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

export default IoT
