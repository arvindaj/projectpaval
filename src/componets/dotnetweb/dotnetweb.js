import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../crm/crm.css'
import '../dotnetweb/dotnetweb.css'
import Bullet from '../Asset/Bullet.png'
import Swal from 'sweetalert2';

const Dotnetweb = () => {

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
    <div className='dotnetweb'>
      {/* 1 section */}
      <div className="dotnet-front-page" style={{ display: isLoaded ? "flex" : "none" }}>
      <div className="container p-0">
          {/* Left Side Content */}
          <div className="dotnet-front-page-center row">
            <div className="col-md-6 dotnet-front-heading p-0">
              <h1>.NET Development</h1>
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
            .NET Web Portal Development
          </h1>
         
        
         
          <p>
            Well, it was a pretty unique and unusual experience. Benivolent Soft Tech has a dedicated team of designers and developers who have created web portals for a number of clients.
         
            Filmics, one of our reputed clients, was the first one to have approached us to design their web site. They are basically into film industry and their website carries all information about the stars and their lives, the latest releases and so on. We provided a cost-effective and enterprise level solution for this client. E-ticketing was one of the preeminent applications we designed for them.
          
            Well, it was a pretty unique and unusual experience. Benivolent Soft Tech has a dedicated team of designers and developers who have created web portals for a number of clients.
         
            Filmics, one of our reputed clients, was the first one to have approached us to design their web site. They are basically into film industry and their website carries all information about the stars and their lives, the latest releases and so on. We provided a cost-effective and enterprise level solution for this client. E-ticketing was one of the preeminent applications we designed for them.
          </p>



        
          <p>"We were irresolute if we were doing the right thing when they first approached us. They promised to deliver the product just like how we wanted it. They were new to the industry. But, I was surprised by their confidence and have given them our project. We have stuck with each other since then and well as they say the rest is history."</p>

        </div>

      </div>
      <div className="h-w-b">
        <div className="container">
          <div className="row align-items-start">
            {/* Left Column */}
            <div className="col-lg-6 col-md-12 mb-4">
              <h1 className="section-title">Benefits of Devops Implementation</h1>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Accelerated time-to-market.</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Enhanced collaboration and communication.</p>
              </div>
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Improved deployment frequency and reliability.</p>
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
              <div className="logo-hire">
                <img src={Bullet} alt="Bullet" />
                <p>Configuration Management:</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 section  */}
      <div className='dotnetweb-content-form'>
        <div className="content-layout">
          <div className="content-left-side">
            <h1>SMM</h1>
            <p>
              To know more detail about Paval soft Social Media Marketing, kindly fill quick proposal form.
            </p>
            <p>
              Filmics, one of our reputed clients, was the first one to have approached us to design their web site. They are basically into film industry and their website carries all information about the stars and their lives, the latest releases and so on. We provided a cost-effective and enterprise level solution for this client. E-ticketing was one of the preeminent applications we designed for them.
            </p>
            <p>
              Filmics, one of our reputed clients, was the first one to have approached us to design their web site. They are basically into film industry and their website carries all information about the stars and their lives, the latest releases and so on. We provided a cost-effective and enterprise level solution for this client. E-ticketing was one of the preeminent applications we designed for them.
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

export default Dotnetweb
