import React, { useEffect, useState } from 'react';
import Bullet from '../Asset/Bullet.png'
import '../wordpress/wordpress.css'
import axios from 'axios';
import Swal from 'sweetalert2';

const Wordpress = () => {


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
        img.src = require("../Asset/Wordpress Development.png");
        img.onload = () => setIsLoaded(true);
      }, []);
    

    return (
        <div className='wordpress'>

            {/* 1 section  */}
            <div className="wordpress-front-page" style={{ display: isLoaded ? "flex" : "none" }}>
            <div className="container p-0">
                    {/* Left Side Content */}
                    <div className="wordpress-front-page-center row">
                        <div className="col-md-6 wordpress-front-heading p-0">
                            <h1>Wordpress</h1>
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
                        Wordpress Development
                    </h1>
                    <p>
                        Wordpress is an open source content management system primarily used for blog publishing; and it can be easily customized, manageable and developed according to unique client needs. In Global, Wordpress is used by more than 200 million website and it remains second most popular tool. Wordpress is an enormously flexible platform for development and integration of websites. It has robust simple structural design, custom templates supporting and plug-ins modules to control and manage blog with websites.

                    </p>

                    <p>
                        Wordpress is completely open source and it has no restriction to change and modify. It includes all unique core features of new community sites like membership management and content management. Wordpress powers traffic intensive, highly optimized code, ready made plugins makes most innovative success on internet.
                    </p>

                </div>

            </div>

            {/* 3 section  */}

            <div className="h-w-b">
                <div className="container py-4">
                    <div className="row align-items-start">
                        {/* Left Column */}
                        <div className="col-lg-6 col-md-12 mb-4">
                            <h1 className="section-title">Benivolent WordPress expert service</h1>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>WordPress integration and design.</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>WordPress blog development.</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>Open Source CMS Development.</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>WordPress unique theme design.</p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-lg-6 col-md-12 mb-4">
                            <h1 className="section-title">Benefits of WordPress Development</h1>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>User-Friendly Interface</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>Easily Customizable</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>Responsive Design.</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>Robust Security.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4 section  */}
            <div className='wordpress-content-form'>
                <div className="content-layout">
                    <div className="content-left-side">
                        <h1>WordPress Plugin Development Services at Benivolent</h1>
                        <p>
                            Benivolent is one of the best wordpress development company, which has profound practice in WordPress plugin development. Our talented Wordpress development team is highly talented in all sectors of Wordpress blog creation, and Plugin development, wordoress customization and theme design services. We have involved in all services pertaining to wordpress CMS development. We offer a search engine friendly sites/ blogs, which help our clients to compete successive web presence.
                        </p>
                        <p>
                            To learn more details about Benivolent Wordpress customization services, then please specify your requirement here for wordpress CMS solutions.
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

export default Wordpress
