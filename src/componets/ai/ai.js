import React, { useEffect, useState } from 'react';
import Bullet from '../Asset/Bullet.png'
import '../ai/ai.css'
import axios from 'axios';
import Swal from 'sweetalert2';

const Ai = () => {

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
    img.src = require("../Asset/Artificial Intelligence.png");
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <div className='ai'>
    
      <div className="ai-front-page"  style={{ display: isLoaded ? "flex" : "none" }}>
      <div className="container p-0">
          {/* Left Side Content */}
          <div className="ai-front-page-center row">
            <div className="col-md-6 ai-front-heading p-0">
              <h1>Artificial Intelligence</h1>
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
            Artificial Intelligence
          </h1>
          <p>
            Artificial Intelligence (AI) is transforming industries by enabling intelligent decision-making, process automation, and enhanced customer experiences. At Paval Soft, we specialize in delivering cutting-edge AI solutions that empower businesses to stay competitive and innovative. From predictive analytics to natural language processing, our AI services harness the power of machine learning, deep learning, and advanced algorithms to unlock new possibilities for your business.
          
            Artificial Intelligence (AI) is transforming industries by enabling intelligent decision-making, process automation, and enhanced customer experiences. At Paval Soft, we specialize in delivering cutting-edge AI solutions that empower businesses to stay competitive and innovative. From predictive analytics to natural language processing, our AI services harness the power of machine learning, deep learning, and advanced algorithms to unlock new possibilities for your business.
          </p>
        </div>
      </div>


      <div className="h-w-b">
        <div className="container py-4">
          <div className="row align-items-start">
            {/* Left Column */}
            <div className="col-lg-6 col-md-12 mb-4">
              <h1 className="section-title">Why choose Us?</h1>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
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

            {/* Right Column */}
            <div className="col-lg-6 col-md-12 mb-4">
              <h1 className="section-title">Benefits in Hire Dedicated Developers</h1>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Lorem ipsum dolor sit amet consectetur </p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Lorem ipsum dolor sit amet consectetur </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 4 section  */}
      <div className='ai-content-form'>
        <div className="content-layout">
          <div className="content-left-side">
            <h1>Why Choose Paval Soft for AI Development?</h1>
            <p>
              At Paval Soft, we combine deep expertise in artificial intelligence with a business-oriented approach to deliver solutions that meet your specific needs. Our AI experts focus on innovation, scalability, and security to create systems that drive growth and efficiency. Whether you're looking to automate workflows, enhance customer experiences, or gain valuable insights, our tailored AI solutions help you achieve your goals.
            </p>
            <h1>Get Started Today</h1>
            <p>
              Unlock the power of artificial intelligence with Paval Soft. From ideation to deployment, our team ensures seamless integration of AI technologies into your business. Contact us today to explore how AI can revolutionize your organization!
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

export default Ai
