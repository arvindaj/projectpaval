import React, { useEffect, useState } from 'react';
import Bullet from '../Asset/Bullet.png'
import './uiux.css'
import axios from 'axios';
import Swal from 'sweetalert2';


const Uiux = () => {

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
      img.src = require("../Asset/UI UX.png");
      img.onload = () => setIsLoaded(true);
    }, []);
  
  

  return (
    <div className='uiux'>
      {/* 1 section */}
      <div className="uiux-front-page"style={{ display: isLoaded ? "flex" : "none" }}>
      <div className="container p-0">
          {/* Left Side Content */}
          <div className="uiux-front-page-center row">
            <div className="col-md-6 uiux-front-heading p-0">
              <h1>UI & UX</h1>
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
            UI & UX
          </h1>
          <p>
            UI & UX is the cornerstone of effective communication and brand storytelling in the digital era. At Benivolent, we specialize in crafting high-quality, engaging, and SEO-friendly content that resonates with your audience and drives meaningful interactions. Whether it’s captivating website copy, informative blog posts, or persuasive marketing content, our expert writers deliver customized solutions tailored to your business needs.
         
            UI & UX is the cornerstone of effective communication and brand storytelling in the digital era. At Benivolent, we specialize in crafting high-quality, engaging, and SEO-friendly content that resonates with your audience and drives meaningful interactions. Whether it’s captivating website copy, informative blog posts, or persuasive marketing content, our expert writers deliver customized solutions tailored to your business needs.
          </p>
          <br />
          <h3>Benivolent Content Writing Expertise</h3>
          <p>
            Benivolent's content writing expertise spans a diverse range of services designed to elevate your brand and connect with your audience effectively. Our Website Content Writing focuses on crafting compelling content that highlights your brand's uniqueness and value proposition, while our Blog Writing delivers informative and engaging articles that establish your brand's voice and authority. We specialize in SEO Content Writing, creating keyword-rich content to boost your search engine visibility, and Social Media Content, producing impactful posts that drive engagement across platforms. Our Product Descriptions emphasize features and benefits to captivate potential buyers, and our Marketing Content includes persuasive email campaigns, brochures, and ad copy. For technical audiences, we offer Technical Writing to simplify complex concepts, while our Creative Writing uses storytelling, slogans, and narratives to leave a lasting impression on your audience.
          </p>

        </div>
      </div>

      <div className="h-w-b">
                <div className="container">
                    <div className="row align-items-start">
                        {/* Left Column */}
                        <div className="col-lg-6 col-md-12 mb-4">
                            <h1 className="section-title">Benefits of Professional Content Writing</h1>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>Enhanced Brand Visibility.</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>Stronger Audience Engagement.</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>Improved Conversion Rates.</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>Thought Leadership.</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>Cost-Effectiveness.</p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-lg-6 col-md-12 mb-4">
                            <h1 className="section-title">Paval Soft Content Writing</h1>
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
                          
                        </div>
                    </div>
                </div>
            </div>

      {/* 3 section  */}
      <div className='uiux-content-form'>
        <div className="content-layout">
          <div className="content-left-side">
            <h1>Why Choose Benivolent for Content Writing?</h1>
            <p>
              At Benivolent, our team of skilled writers combines creativity with a strategic approach to deliver content that aligns with your goals. We understand the importance of tone, style, and relevance, ensuring that every piece of content strengthens your brand identity and meets audience expectations.
            </p>
            <h1>Let’s Create Together</h1>
            <p>
              Empower your brand with Benivolent's professional content writing services. Whether you're looking to inform, persuade, or inspire, we create content that drives results. Contact us today to discuss your content needs and unlock the potential of compelling storytelling!
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

export default Uiux
