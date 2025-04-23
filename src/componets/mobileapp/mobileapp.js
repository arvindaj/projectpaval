import React, { useEffect, useState } from 'react';
import Bullet from '../Asset/Bullet.png'
import '../mobileapp/mobileapp.css';
import axios from 'axios';
import Swal from 'sweetalert2';


const Mobileapp = () => {


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
    img.src = require("../Asset/Mobile Application Development banner.png");
    img.onload = () => setIsLoaded(true);
  }, []);


    return (
        <div className='mobileapp'>
            {/* 1 section */}
            <div className="mobileapp-front-page" style={{ display: isLoaded ? "flex" : "none" }}>
                <div className="container p-0 ">
                    {/* Left Side Content */}
                    <div className="mobileapp-front-page-center row">
                        <div className="col-md-6 mobileapp-front-heading p-0">
                            <h1>Mobile Application</h1>
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
                        Mobile Application Development
                    </h1>
                    <p>
                        Mobile application development plays a pivotal role in modern businesses, enabling seamless interaction with customers and improving operational efficiency. Paval Soft specializes in crafting high-quality, feature-rich, and user-friendly mobile applications that cater to diverse business needs. From ideation to deployment, our team ensures that your app delivers exceptional user experiences and meets the demands of the dynamic mobile landscape.
                    </p>
                    <p>
                        Our software website development team has a wide range of experience in a number of technologies commonly used to design and develop highly unique software products and solutions. Our developers choose the right technology that fulfills your business needs. Great software solutions have to drive a balance and sometimes use addition of technologies to generate a user-friendly software development that's simply maintained and supported going forward. . Our qualified team builds and integrates databases in numerous platforms and we find the simplest, most effective programming path without sacrificing performance.
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
                            <h1 className="section-title">Benefits Dedicated Developers</h1>
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
                                <p>Lorem ipsum dolor sit amet consectetu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4 section  */}
            <div className='w-d-a-content-form'>
                <div className="content-layout">
                    <div className="content-left-side">
                        <h1>Key Services Offered by Paval Soft in Mobile Application Development.</h1>
                        <p>
                            Paval Soft offers a wide range of mobile application development services tailored to meet diverse business needs. Our expertise includes Native Mobile App Development, delivering platform-specific functionality and performance for Android and iOS apps, and Hybrid Mobile App Development, which combines the best of native and web technologies for a versatile user experience. We specialize in Progressive Web App Development (PWA) to create web-based apps with native-like features, as well as IoT-Enabled Apps that seamlessly connect with smart devices and wearables. line shopping for businesses and customers alike.
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
            {/* 5 section*/}


        </div>


    )
}

export default Mobileapp
