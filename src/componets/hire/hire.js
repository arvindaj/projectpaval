import React, { useState, } from 'react'
import '../hire/hire.css';
import Bullet from '../Asset/Bullet.png'


const Hire = () => {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
    };



    return (
        <div className='hire'>




            {/* Section 3 */}
            <div className="h-w-b">
                <div className="container py-0">
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
                            <h1 className="section-title">Benefits in Hire Dedicated Developers</h1>
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
                                <p>Lorem ipsum dolor sit amet consectetur with a long text that should wrap correctly on all devices.</p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>Lorem ipsum dolor sit amet consectetur with even longer text for testing responsiveness.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* 4 section */}
            <div className='hire-content-form'>
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
                    </div>


                    <form onSubmit={handleSubmit} className="content-right-side">
                        <h1>Quick Proposal</h1>

                        <div className="form-group-content">
                            <label htmlFor="name" className={formData.name ? "filled" : ""}>
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group-content">
                            <label htmlFor="email" className={formData.email ? "filled" : ""}>
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group-content">
                            <label htmlFor="phone" className={formData.phone ? "filled" : ""}>
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group-content">
                            <label htmlFor="message" className={formData.message ? "filled" : ""}>
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="content-right-side-submit-button-container">
                            <button type="submit" className="content-right-side-submit-button">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Hire
