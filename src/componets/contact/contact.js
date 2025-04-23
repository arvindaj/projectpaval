import React, { useEffect, useState } from "react";
import '../contact/contact.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const Contact = () => {

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
    img.src = require("../Asset/Contact us banner.png");
    img.onload = () => setIsLoaded(true);
  }, []);


  return (
    <div className='contact'>
      <div className='contact-front-page'style={{ display: isLoaded ? "flex" : "none" }}>
      <div className="container p-0">
          <div className='contact-front-page-center row'>
            <div className='col-md-6 contact-front-heading p-0'>
              <h1>Contact Us</h1>
              <p>Lorem ipsum dolor sit amet..
              eget urna vitae odio eget id. In tristique at eu cursus lorem morbi laoreet lorem
              ultrices. Adipiscing enim fermentum eu montes mattis odio sed nulla bibendum.
              Eget amet tristique malesuada accumsan consequat at net.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='contact-content'>
        <div className='content-layout'>
          <div className='content-left-side'>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus sollicitudin nec at egestas ligula.
              Eget eget urna vitae odio eget id. In tristique at eu cursus lorem morbi laoreet lorem
              ultrices. Adipiscing enim fermentum eu montes mattis odio sed nulla bibendum.
              Eget amet tristique malesuada accumsan consequat at netus sit. Nunc lorem odio nisl sit
              orci nulla velit. Morbi id amet condimentum justo diam placerat scelerisque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus sollicitudin nec at egestas ligula.
              Eget eget urna vitae odio eget id. In tristique at eu cursus lorem morbi laoreet lorem
              ultrices. Adipiscing enim fermentum eu montes.
            </p>
          </div>
          <div className='form-card'>
            <form onSubmit={handleSubmit} className='form-content'>
              <h1 className='form-title'>Quick Proposal</h1>
              <div className='form-group'>
                <label htmlFor='name' className={`form-label ${formData.name ? "filled" : ""}`}>Name</label>
                <input type='text' id='name' name='name' placeholder='Name' value={formData.name} onChange={handleChange} required className='form-input' />
              </div>
              <div className='form-group'>
                <label htmlFor='email' className={`form-label ${formData.email ? "filled" : ""}`}>Email Address</label>
                <input type='email' id='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required className='form-input' />
              </div>
              <div className='form-group'>
                <label htmlFor='phone' className={`form-label ${formData.phone ? "filled" : ""}`}>Phone Number</label>
                <input type='tel' id='phone' name='phone' placeholder='Phone' value={formData.phone} onChange={handleChange} required className='form-input' />
              </div>
              <div className='form-group'>
                <label htmlFor='message' className={`form-label ${formData.message ? "filled" : ""}`}>Message</label>
                <textarea id='message' name='message' placeholder='Your message...' value={formData.message} onChange={handleChange} required className='form-input'></textarea>
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
  );
}

export default Contact;
