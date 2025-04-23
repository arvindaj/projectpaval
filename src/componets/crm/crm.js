import React, { useEffect, useState } from 'react';
import Bullet from '../Asset/Bullet.png'
import '../crm/crm.css'
import axios from 'axios';
import Swal from 'sweetalert2';

const Crm = () => {


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
    img.src = require("../Asset/CRM banner.png");
    img.onload = () => setIsLoaded(true);
  }, []);


  return (
    <div className='crm'>
      {/* 1 section */}
      <div className="crm-front-page"style={{ display: isLoaded ? "flex" : "none" }}>
      <div className="container p-0">
          {/* Left Side Content */}
          <div className="crm-front-page-center row">
            <div className="col-md-6 crm-front-heading p-0">
              <h1>CRM</h1>
              <p>
                Lorem ipsum dolor sit amet. Qui repellendus nulla sed facere modi est quia voluptas est illum beatae in dolorum eius aut earum obcaecati id ipsum excepturi.
                Lorem ipsum dolor sit amet. Qui repellendus nulla.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2 section */}
      <div className='crm-about'>
        <div className="crm-contentus">

          <h1>
            Customer Relationship Management
          </h1>
          <p>
            The function of Customer Relationship Management (CRM) is to facilitate various organizations serve customers enhanced through introducing them to a series of processes and procedures that improved the buying experience for customers. This is done through implementing a flourishing CRM approach through a software package that has been specifically designed to support these business processes and procedures.
          </p>
          <p>
            Benivolent effort of CRM involves focusing on service automated processes, information congregation and processing, integrating and automating various customer serving processes in a company. It also manages to remain track of customer preferences, buying habits, deals with service requests, information requests, complaints etc. It enables them to retrieve and store information and serve the customer efficiently. It also helps them to support new customers, cater to the needs of the elder ones and basically achieve customer retention.
          </p>
          <br />

          <h3>CRM Solutions</h3>
          <p>CRM solutions assist make sure that your sales, marketing, and support efforts are all working near a common goal, so you can obtain your business success to a entire new level. With CRM solutions from Benivolent you’ll streamline and automate business processes, give everybody in your company a complete vision of the customer, provide deeper analysis and insight into critical sales and customer metrics, and keep every one focused on getting new customers while observance the ones you already have happy.</p>
          <p>
            With an effective Customer Relationship Management in place, one can suppose revenue optimization and lifelong customer loyalty. In a way, it serves as a perfect platform to take your business to new heights. All aspects of business such as the marketing, product, processes, technology and other services get an enormous boost with the implementation of a CRM system.
            Benivolent CRM system can reduce the overhead cost of your business drastically, thus increasing the profitability of the business. Since it helps you gain new customers, you will eventually see your sales and profit shoot up.
          </p>
        </div>
      </div>


      <div className="h-w-b">
          <div className="container py-2">
            <div className="row align-items-start">
              {/* Left Column */}
              <div className="col-lg-6 col-md-12 mb-4">
                <h1 className="section-title">Benefits of Devops Implementation</h1>
                <div className="logo-hire">
                  <img src={Bullet} alt="Paval Soft logo" />
                  <p>CRM Solutions for Sales & Marketing.</p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Paval Soft logo" />
                  <p>CRM Solutions for Activity Management.</p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Paval Soft logo" />
                  <p>CRM Solutions for Service & Support.</p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Bullet" />
                  <p>Reduced system downtime and quick recovery.</p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Bullet" />
                  <p>Scalable infrastructure with automated processes.</p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Paval Soft logo" />
                  <p>A wide variety of reports</p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Paval Soft logo" />
                  <p>Sharing of documents</p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Paval Soft logo" />
                  <p>Tracking all the tasks</p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Paval Soft logo" />
                  <p>The ability to import data easily from other sources</p>
                </div>

              </div>

              {/* Right Column */}
              <div className="col-lg-6 col-md-12 mb-4">
                <h1 className="section-title">Benivolent CRM system.</h1>
                <div className="logo-hire">
                  <img src={Bullet} alt="Paval Soft logo" />
                  <p>A multi-user environment</p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Paval Soft logo" />
                  <p>Secrecy of data</p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Paval Soft logo" />
                  <p>Management of contact as well as lead</p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Paval Soft logo" />
                  <p>Automation of the sales force</p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Paval Soft logo" />
                  <p>Email marketing and reporting</p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Paval Soft logo" />
                  <p>Ability to customize the knowledge base</p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Paval Soft logo" />
                  <p>To provide employees with all the information</p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Paval Soft logo" />
                  <p>Improvement in customer retention rate</p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Paval Soft logo" />
                  <p>High sales conversion</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* 3 section  */}
      <div className='crm-content-form'>
        <div className="content-layout">
          <div className="content-left-side">
            <h1>Customer Relationship Management (CRM)</h1>

            <p>
              If Customer Relationship Management (CRM) is properly implemented, it's not worth less than gold for your business. Feel free to click here for more clear information about Benivolent CRM

              If Customer Relationship Management (CRM) is properly implemented, it's not worth less than gold for your business. Feel free to click here for more clear information about Benivolent CRM
            </p>
            <p>
              If Customer Relationship Management (CRM) is properly implemented, it's not worth less than gold for your business. Feel free to click here for more clear information about Benivolent CRM
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

export default Crm
