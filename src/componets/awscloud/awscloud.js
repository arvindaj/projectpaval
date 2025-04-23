import React, { useEffect, useState } from 'react';
import Bullet from '../Asset/Bullet.png'
import './awscloud.css'
import axios from 'axios';
import Swal from 'sweetalert2';

const Awscloud = () => {

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
    img.src = require("../Asset/AWS Cloud banner.png");
    img.onload = () => setIsLoaded(true);
  }, []);


  return (
    <div className='awscloud'>
      {/* 1 section */}
      {/* 1 section  */}
      <div className="awscloud-front-page"style={{ display: isLoaded ? "flex" : "none" }}>
      <div className="container p-0">
          {/* Left Side Content */}
          <div className="awscloud-front-page-center row">
            <div className="col-md-6 awscloud-front-heading p-0">
              <h1>AWS Cloud</h1>
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
            AWS Cloud
          </h1>
          <p>
            AWS (Amazon Web Services) has revolutionized the way businesses operate by providing a scalable, secure, and flexible cloud computing platform. At Paval Soft, we specialize in leveraging AWS's extensive suite of services to help businesses innovate, optimize, and scale their operations. Whether you need infrastructure modernization, seamless data management, or powerful application hosting, our AWS expertise ensures your business stays ahead in the digital age.
            AWS (Amazon Web Services) is a transformative cloud computing platform that empowers businesses with scalability, security, and flexibility. Paval Soft specializes in leveraging AWS’s extensive suite of services to help organizations innovate, optimize, and grow. From seamless cloud migration and serverless architecture to DevOps implementation and data analytics, we provide tailored solutions for diverse business needs. Our expertise includes designing and managing scalable infrastructures, deploying cloud-native applications, and implementing secure storage and backup solutions using AWS tools like EC2, Lambda, S3, and RDS. With AWS, businesses benefit from global reach, cost efficiency, high availability, and advanced technologies such as AI and machine learning. At Paval Soft, our certified AWS professionals ensure your cloud journey is seamless and aligned with your objectives, enabling you to achieve unparalleled agility, efficiency, and innovation. Contact us today to unlock the full potential of AWS for your business.
          </p>

          <br />


          <h3>
            Paval soft AWS Cloud Expertise
          </h3>

          <p>
            AWS (Amazon Web Services) is a transformative cloud computing platform that empowers businesses with scalability, security, and flexibility. Paval Soft specializes in leveraging AWS’s extensive suite of services to help organizations innovate, optimize, and grow. From seamless cloud migration and serverless architecture to DevOps implementation and data analytics, we provide tailored solutions for diverse business needs. Our expertise includes designing and managing scalable infrastructures, deploying cloud-native applications, and implementing secure storage and backup solutions using AWS tools like EC2, Lambda, S3, and RDS. With AWS, businesses benefit from global reach, cost efficiency, high availability, and advanced technologies such as AI and machine learning. At Paval Soft, our certified AWS professionals ensure your cloud journey is seamless and aligned with your objectives, enabling you to achieve unparalleled agility, efficiency, and innovation. Contact us today to unlock the full potential of AWS for your business.
          </p>
        </div>
      </div>


      <div className="h-w-b">
        <div className="container">
          <div className="row align-items-start">
            {/* Left Column */}
            <div className="col-lg-6 col-md-12 mb-4">
              <h1 className="section-title">Benefits of AWS Cloud Services</h1>
              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Scalability: Scale resources up or down instantly based</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Cost Efficiency: Pay only for what you use, reducing IT costs.</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>High Availability: Ensure uninterrupted services</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Enhanced Security: Protect data with advanced</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Paval Soft logo" />
                <p>Global Reach: Deploy applications and services</p>
              </div>

            </div>

            {/* Right Column */}
            <div className="col-lg-6 col-md-12 mb-4">
              <h1 className="section-title">Paval Soft Devops Expertise</h1>
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
      <div className='awscloud-content-form'>
        <div className="content-layout">
          <div className="content-left-side">
            <h1>Why Choose Paval Soft for AWS Cloud Services?</h1>
            <p>
              Paval Soft combines deep AWS expertise with a client-centric approach to deliver tailored solutions that align with your business objectives. Our certified AWS professionals ensure seamless implementation, optimization, and management of cloud services, empowering your organization to achieve unparalleled agility, efficiency, and innovation.
            </p>
            <h1>
              Get Started Today
            </h1>
            <p>
              Unlock the full potential of AWS with Paval Soft comprehensive cloud services. Whether you're transitioning to the cloud, optimizing existing workflows, or exploring AWS's advanced capabilities, we are here to guide you every step of the way. Contact us to begin your AWS cloud journey today!
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

export default Awscloud
