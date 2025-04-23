import React, { useEffect, useState } from 'react';
import Bullet from '../Asset/Bullet.png'
import '../seo/seo.css'
import axios from 'axios';
import Swal from 'sweetalert2';

const Seo = () => {

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
    img.src = require("../Asset/SEO banner.png");
    img.onload = () => setIsLoaded(true);
  }, []);



  return (
    <div className='seo'>
      {/* 1 section */}
      <div className="seo-front-page"style={{ display: isLoaded ? "flex" : "none" }}>
      <div className="container p-0">
          {/* Left Side Content */}
          <div className="seo-front-page-center row">
            <div className="col-md-6 seo-front-heading p-0">
              <h1>SEO</h1>
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
            Search Engine Optimization
          </h1>
          <p>
            Search Engine Optimization (SEO) practices help business to optimize their visitor traffic through ethical and cost-effective way. Benivolent organic search engine optimization techniques always apply with industrial expertise to improve the volume of traffic, quality for your website and help you to stabilize your online identity. Our white hat practices stem from a sequence of methodical researches like keyword analysis, site analysis, competitor analysis and search engine algorithms analysis.

          </p>
          <p>
            Paval Soft SEO practice will be result focused, maximize your ROI and make your business ‘endeavor a success’. Our approaches are business specific, result oriented and industry oriented.
         
            Paval Soft SEO practice will be result focused, maximize your ROI and make your business ‘endeavor a success’. Our approaches are business specific, result oriented and industry oriented.
          </p>

          <h5>
            Reports
          </h5>
          <p>
            Paval Soft believe that updating our Clients about the improvement of their websites is as important as optimizing the sites for better rankings and also for greater internet visibility. We will send essential periodical reports to our Clients to keep them updated about the progress made in their websites. The report involves:
         
            Paval Soft SEO practice will be result focused, maximize your ROI and make your business ‘endeavor a success’. Our approaches are business specific, result oriented and industry oriented.
          </p>
          <p>
            Paval Soft SEO practice will be result focused, maximize your ROI and make your business ‘endeavor a success’. Our approaches are business specific, result oriented and industry oriented.
          </p>

        </div>

      </div>
      <div className="h-w-b">
        <div className="container">
          <div className="row align-items-start">
            {/* Left Column */}
            <div className="col-lg-6 col-md-12 mb-4">
              <h1 className="section-title">Our SEO Company Work Flow</h1>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Wide-ranging of Website Analysis.</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Competitive Analysis.</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Enhanced collaboration and communication.</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Keyword Research & Analysis.</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Reduced system downtime and quick recovery.</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Scalable infrastructure with automated processes.</p>
              </div>

            </div>

            {/* Right Column */}
            <div className="col-lg-6 col-md-12 mb-4">
              <h1 className="section-title">Benivolent SEO</h1>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Directory Submissions.</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Article Submissions</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Press Release Submissions</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Containerization and Orchestration </p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Blogging </p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>RSS feeds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      {/* 3 section  */}
      <div className='seo-content-form'>
        <div className="content-layout">
          <div className="content-left-side">
            <h1>Search Engine Optimization</h1>

            <p>
              Paval soft business is built on contacts. Our Professional SEO Company resources preserve one-to-one associates with our Clients and update them on the changes made in their websites to receive opinion and suggestions. Our dedicated SEO Experts will be available for contact from Monday to Saturday Via:
              Paval soft business is built on contacts. Our Professional SEO Company resources preserve one-to-one associates with our Clients and update them on the changes made in their websites to receive opinion and suggestions. Our dedicated SEO Experts will be available for contact from Monday to Saturday Via:
            </p>
            <p>
              To know more detail about Paval soft Search engine Optimization Techniques and services please submit your requirement here
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

export default Seo
