import React, { useEffect, useState } from 'react';
import '../about/about.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const About = () => {


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
      img.src = require("../Asset/About us.png");
      img.onload = () => setIsLoaded(true);
    }, []);
  
  

  return (

    <div className=' adout'>

      {/* 1 Adout-front-page section */}
      <div className="about-front-page" style={{ display: isLoaded ? "flex" : "none" }}>
      <div className="container p-0">
          {/* Left Side Content */}
          <div className="about-front-page-center row">
            <div className="col-md-6 about-front-heading p-0">
              <h1>About Us</h1>
              <p>
                Lorem ipsum dolor sit amet. Qui repellendus nulla sed facere modi est quia voluptas est illum beatae in dolorum eius aut earum obcaecati id ipsum excepturi.
                Lorem ipsum dolor sit amet. Qui repellendus nulla.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* 2 Adout-content section */}
        <div className="content-layout">
          <div className="content-left-side">
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
              Eget eget urna vitae odio eget id. In tristique at eu cursus lorem morbi laoreet lorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus sollicitudin nec at egestas ligula.
              Eget eget urna vitae odio eget id. In tristique at eu cursus lorem morbi laoreet lorem.
            </p>
          
          </div>


          {/* Right Side Contact Form */}
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

      <div className='aboutus-content'>
        <div className='aboutus'>
          
          
          <h1>
            About Us
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Quis maecenas sed odio hendrerit urna pretium. Auctor massa gravida tempor eu porta. Elementum consectetur sagittis elementum ultricies. Imperdiet ut amet augue lobortis eget euismod in volutpat. Aliquet in nec risus amet non porttitor integer. Porta aliquam massa facilisis aliquet lobortis imperdiet neque. Proin massa erat velit massa eu. Eget convallis quis volutpat sed. Pulvinar nam nulla duis quis etiam ac amet. Purus ultricies id quisque eget. Ante nisl nibh semper purus dignissim. Ullamcorper turpis blandit nisl amet. Consequat malesuada est ultricies lobortis est. Natoque posuere aliquet ipsum nisi ut tortor. Arcu nibh et consectetur blandit dolor tristique. Ultrices iaculis quis id et leo nisi. Feugiat turpis sapien eu vulputate faucibus laoreet tellus ut mattis. Placerat volutpat phasellus et nisl. Purus ac turpis sit aenean. Massa vitae odio malesuada vestibulum aliquam et ultrices donec. Molestie porttitor laoreet elementum dolor nulla tellus enim. Pellentesque quis a nibh faucibus posuere lacus ut. Habitasse nulla rutrum vel felis duis ac netus id. Augue amet condimentum at et nibh.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Quis maecenas sed odio hendrerit urna pretium. Auctor massa gravida tempor eu porta. Elementum consectetur sagittis elementum ultricies. Imperdiet ut amet augue lobortis eget euismod in volutpat. Aliquet in nec risus amet non porttitor integer. Porta aliquam massa facilisis aliquet lobortis imperdiet neque. Proin massa erat velit massa eu. Eget convallis quis volutpat sed. Pulvinar nam nulla duis quis etiam ac amet. Purus ultricies id quisque eget. Ante nisl nibh semper purus dignissim. Ullamcorper turpis blandit nisl amet. Consequat malesuada est ultricies lobortis est. Natoque posuere aliquet ipsum nisi ut tortor. Arcu nibh et consectetur blandit dolor tristique. Ultrices iaculis quis id et leo nisi. Feugiat turpis sapien eu vulputate faucibus laoreet tellus ut mattis. Placerat volutpat phasellus et nisl. Purus ac turpis sit aenean. Massa vitae odio malesuada vestibulum aliquam et ultrices donec. Molestie porttitor laoreet elementum dolor nulla tellus enim. Pellentesque quis a nibh faucibus posuere lacus ut. Habitasse nulla rutrum vel felis duis ac netus id. Augue amet condimentum at et nibh.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Quis maecenas sed odio hendrerit urna pretium. Auctor massa gravida tempor eu porta. Elementum consectetur sagittis elementum ultricies. Imperdiet ut amet augue lobortis eget euismod in volutpat. Aliquet in nec risus amet non porttitor integer. Porta aliquam massa faci
          </p>

        </div>
      </div>

    </div>
  )
}

export default About
