import React, { useEffect, useState } from 'react';
import Bullet from '../Asset/Bullet.png'
import '../genai/genai.css'
import axios from 'axios';
import Swal from 'sweetalert2';


const Genai = () => {


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
    img.src = require("../Asset/Generative AI banner.png");
    img.onload = () => setIsLoaded(true);
  }, []);



  return (
    <div className='genai'>

      {/* 1 section  */}
      <div className="genai-front-page"style={{ display: isLoaded ? "flex" : "none" }}>
      <div className="container p-0">
          {/* Left Side Content */}
          <div className="genai-front-page-center row">
            <div className="col-md-6 genai-front-heading p-0">
              <h1>Generative AI</h1>
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
            Generative AI
          </h1>
          <p>
            Generative AI is revolutionizing how businesses innovate, enabling the creation of entirely new content, ideas, and solutions using advanced machine learning techniques. At Paval Soft, we specialize in developing custom generative AI models that empower businesses to automate creativity, improve efficiency, and unlock unprecedented potential. From text generation to image synthesis, our generative AI solutions are tailored to meet diverse business needs across industries.
          </p>
          <p>
            Generative AI is revolutionizing how businesses innovate, enabling the creation of entirely new content, ideas, and solutions using advanced machine learning techniques. At Paval Soft, we specialize in developing custom generative AI models that empower businesses to automate creativity, improve efficiency, and unlock unprecedented potential. From text generation to image synthesis, our generative AI solutions are tailored to meet diverse business needs across industries.
          </p>
        </div>
      </div>


      <div className="h-w-b">
        <div className="container">
          <div className="row align-items-start">
            {/* Left Column */}
            <div className="col-lg-6 col-md-12 mb-4">
              <h1 className="section-title">Benefits of Professional Generative AI</h1>

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
      {/* 4 section  */}
      <div className='genai-content-form'>
        <div className="content-layout">
          <div className="content-left-side">
            <h1>Why Choose Paval Soft for Generative AI Development?</h1>
            <p>
              At Paval Soft, we bring creativity and technical expertise together to deliver cutting-edge generative AI solutions. Our team is adept at designing and deploying AI models that address your specific challenges and open new avenues for growth. Whether you’re looking to automate content creation, enhance user experiences, or revolutionize product design, we deliver solutions that align with your goals
            </p>
            <h1>Get Started Today</h1>
            <p>
              Unlock the transformative potential of generative AI with Paval Soft. From ideation to deployment, we provide end-to-end support to ensure your generative AI project is a success. Contact us today to explore how generative AI can drive innovation and value for your business!
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

export default Genai
