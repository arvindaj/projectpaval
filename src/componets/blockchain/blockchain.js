import React, { useEffect, useState } from 'react';
import Bullet from '../Asset/Bullet.png'
import '../blockchain/blockchain.css'
import axios from 'axios';
import Swal from 'sweetalert2';


const Blockchain = () => {


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
        img.src = require("../Asset/Blockchain banner.png");
        img.onload = () => setIsLoaded(true);
      }, []);
    
    


    return (
        <div className='blockchain'>

            {/* 1 section  */}
            <div className="blockchain-front-page"style={{ display: isLoaded ? "flex" : "none" }}>
            <div className="container p-0">
                    {/* Left Side Content */}
                    <div className="blockchain-front-page-center row">
                        <div className="col-md-6 blockchain-front-heading p-0">
                            <h1>Blockchain</h1>
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
                        Blockchain
                    </h1>
                    <p>
                        Blockchain technology is revolutionizing industries by offering decentralized, secure, and transparent solutions. At Benivolent, we specialize in developing customized blockchain applications that address a variety of business needs, from enhancing security to improving transparency and efficiency. Our team leverages blockchain's capabilities to transform how businesses manage transactions, data, and interactions, providing the foundation for innovation and growth.
                
                        Blockchain technology is revolutionizing industries by offering decentralized, secure, and transparent solutions. At Benivolent, we specialize in developing customized blockchain applications that address a variety of business needs, from enhancing security to improving transparency and efficiency. Our team leverages blockchain's capabilities to transform how businesses manage transactions, data, and interactions, providing the foundation for innovation and growth.
                    </p>

                </div>

            </div>



            <div className="h-w-b">
                <div className="container py-4">
                    <div className="row align-items-start">
                        {/* Left Column */}
                        <div className="col-lg-6 col-md-12 mb-4">
                            <h1 className="section-title">Benefits of Blockchain Development</h1>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>Enhanced Connection</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>Data-Driven Insights.</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>Improved Efficiency.</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>Remote Monitoring.</p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-lg-6 col-md-12 mb-4">
                            <h1 className="section-title">Paval Soft Blockchain Development </h1>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>IoT App Development</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>IoT Device Integration</p>
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
                    </div>
                </div>
            </div>

            {/* 4 section  */}
            <div className='blockchain-content-form'>
                <div className="content-layout">
                    <div className="content-left-side">
                        <h1>Why Choose Paval Soft for Blockchain Development?</h1>
                        <p>
                            At Paval Soft, we combine expertise in Blockchain with a deep understanding of industry needs to deliver impactful solutions. Our team ensures seamless integration of ML models into your workflows, empowering you to make smarter decisions and stay ahead of the competition. Whether you’re aiming to enhance customer experiences, optimize operations, or unlock new revenue streams, we tailor our ML services to help you achieve measurable results.
                        </p>
                        <h1>Get Started Today</h1>
                        <p>
                            Transform your business with Blockchain solutions from Paval Soft. Let us help you harness the power of data to drive innovation and achieve your business objectives. Contact us today to explore how Blockchain can create value for your organization!
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

export default Blockchain
