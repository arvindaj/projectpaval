import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../android/android.css'
import Swal from 'sweetalert2';
import Bullet from '../Asset/Bullet.png'

const Android = () => {

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
        img.src = require("../Asset/Android Development banner.png");
        img.onload = () => setIsLoaded(true);
      }, []);
    

    return (
        <div className='android'>

            {/* 1 section  */}
            <div className="android-front-page"style={{ display: isLoaded ? "flex" : "none" }}>
            <div className="container p-0">
                    {/* Left Side Content */}
                    <div className="android-front-page-center row">
                        <div className="col-md-6 android-front-heading p-0">
                            <h1>Android</h1>
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
                        Android Development
                    </h1>
                    <p>
                        Android is an operating system bought by Google and has ever since found its application in the mobile phones. Android is developer’s favorite for it is an open source platform, thus enabling them to create their design.

                    </p>

                    <p>
                        Paval Soft has taken this taken advantage of this open source platform in creating its applications. We have designed applications that will soon be released in the market. We have managed to come up with applications in the following fields: Travel, Business, Fun, and Internet. We are also providing customized solutions for applications based on the requirements of our customers.
                    </p>

                    <p>
                        The design team at Paval Soft has managed to create an application which keeps you updated with your PNR status, called the “My status” application. This makes it easier for the user to get his status on his mobile rather than waiting in some queue at the browsing center or rushing home to login to the site. Our team of experts provides professional advice on accessing and downloading these applications. We are also promoting software games applications which run on this platform. We are promoting our software games in free and paid editions. The only constraint with free edition is that it comes with limited features. The paid edition has all the levels and a variety of templates to choose from. Wondering what you can gift your friend? Your problem can be solved by logging onto our website to download the fun application, "Krawkle". This application instantly sends an e-card to your friend. We are planning to venture out in other fields before the end of this fiscal year.
                    </p>

                    <p>
                        We are also conducting weekend workshops for students who are interested in getting acquainted with Android operating systems and its applications. We will also providing them with certificates.
                    </p>

                </div>

            </div>

            <div className="h-w-b">
                <div className="container">
                    <div className="row align-items-start">
                        {/* Left Column */}
                        <div className="col-lg-6 col-md-12 mb-4">
                            <h1 className="section-title">Benefits of Professional Android</h1>

                            <div className="logo-hire">
                                <img src={Bullet} alt="Paval Soft logo" />
                                <p>Enhanced Brand Visibility</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Paval Soft logo" />
                                <p>Stronger Audience Engagement</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Paval Soft logo" />
                                <p>Improved Conversion Rates</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Paval Soft logo" />
                                <p>Thought Leadership</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Paval Soft logo" />
                                <p>Cost-Effectiveness</p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-lg-6 col-md-12 mb-4">
                            <h1 className="section-title">Pavalsoft Android Expertise</h1>
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
            {/* 4 section  */}
            <div className='android-content-form'>
                <div className="content-layout">
                    <div className="content-left-side">
                        <h1>WordPress Plugin Development Services at Paval Soft</h1>
                        <p>
                            Paval Soft is one of the best wordpress development company, which has profound practice in WordPress plugin development. Our talented Wordpress development team is highly talented in all sectors of Wordpress blog creation, and Plugin development, wordoress customization and theme design services. We have involved in all services pertaining to wordpress CMS development. We offer a search engine friendly sites/ blogs, which help our clients to compete successive web presence.
                        </p>
                        <p>
                            To learn more details about Paval Soft Wordpress customization services, then please specify your requirement here for wordpress CMS solutions.
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

export default Android
