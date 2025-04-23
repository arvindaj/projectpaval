import React, { useEffect, useState } from 'react';
import Bullet from '../Asset/Bullet.png'
import '../phpdevelopment/phpdevelopment.css'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaCogs, FaChartLine, FaRocket, FaSign, FaCheck, FaPalette } from "react-icons/fa";
import { FaShield } from 'react-icons/fa6';


const Phpdevelopment = () => {


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
        img.src = require("../Asset/php Development.png");
        img.onload = () => setIsLoaded(true);
    }, []);


    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    // State to manage expanded/collapsed state of each FAQ item
    const [expandedIndex, setExpandedIndex] = useState(null);

    // FAQ data
    const faqData = [
        {
            question: " What is PHP used for??",
            answer:
                "PHP is used for server-side scripting to create dynamic and interactive web applications.",
            headerColor: "#000",
            bodyColor: "#1C1C1C",
        },
        {
            question: "Can PHP be used for mobile development??",
            answer:
                "PHP is mainly used for web development but can integrate with mobile applications via APIs.",
            headerColor: "#000",
            bodyColor: "#1C1C1C",
        },
        {
            question: "What frameworks are used for PHP development?",
            answer:
                "Popular frameworks include Laravel, Symfony, CodeIgniter, and Zend.",
            headerColor: "#000",
            bodyColor: "#1C1C1C",
        },
        {
            question: " Is PHP secure for web development??",
            answer:
                "Yes, PHP can be secure when best practices, like input validation and encryption, are followed.",
            headerColor: "#000",
            bodyColor: "#1C1C1C",
        },
        {
            question: "How long does it take to develop a PHP website?",
            answer:
                "The development time depends on project complexity, features, and client specifications.",
            headerColor: "#000",
            bodyColor: "#1C1C1C",
        },
        {
            question: "Do you offer maintenance for PHP websites?",
            answer:
                "Yes, ongoing support, updates, and maintenance are provided post-launch.",
            headerColor: "#000",
            bodyColor: "#1C1C1C",
        },
    ];



    return (
        <div className='phpdevelopment'>

            {/* 1st Section */}
            <div className="php-front-page d-flex align-items-center" style={{ display: isLoaded ? "flex" : "none" }}>
                <div className="container p-3">
                    {/* Content Section */}
                    <div className="php-front-page-center row align-items-center">
                        <div className="col-md-6 php-front-heading text-md-start text-center">
                            <h1 className="fw-bold responsive-heading">
                                Transforming Software Delivery with DevOps Excellence
                            </h1>
                            <p className="responsive-text">
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
                        PHP Web Application and Development Company
                    </h1>
                    <p>
                        Paval Soft excels in delivering robust PHP development solutions tailored to client needs. We leverage the power of PHP to create dynamic, scalable, and secure web applications. Our expertise ensures the development of efficient, high-performance websites and platforms.
                    </p>
                    <p>
                        With a focus on custom development, Paval Soft builds PHP solutions that align with specific business objectives. We utilize frameworks like Laravel and CodeIgniter to enhance functionality and reduce development time. Our solutions are optimized for security and seamless user experience.
                    </p>
                    <p>
                        We offer comprehensive post-launch support to ensure the smooth operation of PHP-based websites. Our team provides regular updates, troubleshooting, and security patches. This ongoing maintenance helps clients maintain site performance and stay ahead of technological advancements.
                    </p>
                </div>

            </div>

            {/* 3 section card point */}
            <Container fluid className="py-2 px-5 bg-black text-white">
                {/* Header Section */}
                <h2 style={{ color: "#8EC440", fontWeight: "bold" }} className="text-center">
                    PHP Development Workflow
                </h2>
                <p className="text-center">
                    Paval Soft offers comprehensive DevOps solutions to streamline software development and deployment processes.
                </p>
                <br />
                {/* Row for Cards */}
                <Row className="gy-4">
                    {/* Card 1 */}
                    <Col md={6} lg={4}>
                        <Card className="h-100 shadow-lg border-0 bg-dark text-white">
                            <Card.Body>
                                {/* Flexbox Layout for Icon and Title */}
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaCogs style={{ color: "#8EC440", paddingRight: "10px" }} className="fs-1" />
                                    <Card.Title style={{ color: "#8EC440", fontWeight: "bold", paddingTop: "10px", fontSize: "1rem" }}>
                                        Requirement Gathering
                                    </Card.Title>
                                </div>

                                <Card.Text>
                                    We collaborate with clients to understand project goals, infrastructure needs, and development objectives.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={4}>
                        <Card className="h-100 shadow-lg border-0 bg-dark text-white">
                            <Card.Body>
                                {/* Flexbox Layout for Icon and Title */}
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaChartLine style={{ color: "#8EC440", paddingRight: "10px" }} className="fs-1" />
                                    <Card.Title style={{ color: "#8EC440", fontWeight: "bold", paddingTop: "10px", fontSize: "1rem" }}>
                                        Planning and Architecture
                                    </Card.Title>
                                </div>

                                <Card.Text>
                                    We create a roadmap to define the project structure, including database design and technical approach.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className="h-100 shadow-lg border-0 bg-dark text-white">
                            <Card.Body>
                                {/* Flexbox Layout for Icon and Title */}
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaPalette style={{ color: "#8EC440", paddingRight: "10px" }} className="fs-1" />
                                    <Card.Title style={{ color: "#8EC440", fontWeight: "bold", paddingTop: "10px", fontSize: "1rem" }}>
                                        Design and Prototyping
                                    </Card.Title>
                                </div>

                                <Card.Text>
                                    We develop wireframes and design prototypes to visualize the user interface and experience
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className="h-100 shadow-lg border-0 bg-dark text-white">
                            <Card.Body>
                                {/* Flexbox Layout for Icon and Title */}
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaShield style={{ color: "#8EC440", paddingRight: "10px" }} className="fs-1" />
                                    <Card.Title style={{ color: "#8EC440", fontWeight: "bold", paddingTop: "10px", fontSize: "1rem" }}>
                                        Development and Coding
                                    </Card.Title>
                                </div>

                                <Card.Text>
                                    Our team writes clean, efficient PHP code using frameworks like Laravel or CodeIgniter.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={4}>
                        <Card className="h-100 shadow-lg border-0 bg-dark text-white">
                            <Card.Body>
                                {/* Flexbox Layout for Icon and Title */}
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaCheck style={{ color: "#8EC440", paddingRight: "10px" }} className="fs-1" />
                                    <Card.Title style={{ color: "#8EC440", fontWeight: "bold", paddingTop: "10px", fontSize: "1rem" }}>
                                        Testing and Quality Assurance
                                    </Card.Title>
                                </div>

                                <Card.Text>
                                    We conduct extensive testing to identify bugs, ensuring optimal performance and functionality.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={4}>
                        <Card className="h-100 shadow-lg border-0 bg-dark text-white">
                            <Card.Body>
                                {/* Flexbox Layout for Icon and Title */}
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaRocket style={{ color: "#8EC440", paddingRight: "10px" }} className="fs-1" />
                                    <Card.Title style={{ color: "#8EC440", fontWeight: "bold", paddingTop: "10px", fontSize: "1rem" }}>
                                        Deployment and Launch
                                    </Card.Title>
                                </div>

                                <Card.Text>
                                    We deploy the PHP website to live servers after final approval and quality checks.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={4}>
                        <Card className="h-100 shadow-lg border-0 bg-dark text-white">
                            <Card.Body>
                                {/* Flexbox Layout for Icon and Title */}
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaSign style={{ color: "#8EC440", paddingRight: "10px" }} className="fs-1" />
                                    <Card.Title style={{ color: "#8EC440", fontWeight: "bold", paddingTop: "10px", fontSize: "1rem" }}>
                                        Post-Launch Support
                                    </Card.Title>
                                </div>

                                <Card.Text>
                                    We provide ongoing monitoring, maintenance, and updates to ensure site performance.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>

            {/* 4 section  */}
            <div className="container-fluid text-center py-5 px-5" style={{ backgroundColor: "#000", color: "#8EC440" }}>
                <h2 className="animate__animated animate__fadeInDown mb-4">Why Choose Paval Soft?</h2>

                <div className="row justify-content-center">
                    <div className="col-12 col-md-4">
                        <div className="custom-border mb-4 p-4 rounded">
                            <h5 style={{ color: "#8EC440" }}>Expert PHP Development Team</h5>
                            <p style={{ color: "#ddd" }}>
                                Our team is skilled in creating high-quality, scalable, and secure PHP solutions.
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="custom-border animate__animated animate__fadeInUp animate__delay-1s mb-4 p-4 rounded">
                            <h5 style={{ color: "#8EC440" }}>Customized Solutions for Every Business</h5>
                            <p style={{ color: "#ddd" }}>
                                We deliver tailored PHP websites and applications that meet unique client requirements.
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="custom-border animate__animated animate__fadeInUp animate__delay-1s mb-4 p-4 rounded">
                            <h5 style={{ color: "#8EC440" }}>Reliable Post-Launch Support</h5>
                            <p style={{ color: "#ddd" }}>
                                We ensure continuous maintenance, updates, and technical support for all PHP projects.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* 5 section */}
            <div className="container-fluid py-5 bg-black px-5" >
                <div className="row g-4">
                    {/* Left Card */}
                    <div className="col-lg-6 col-md-12">
                        <div className="card custom-card">
                            <div className="card-body ">
                                <h3 className="card-title py-2">Benefits of PHP Implementation</h3>
                                <div className="logo-hire">
                                    <img src={Bullet} alt="Bullet" />
                                    <p>Expertise in custom PHP development</p>
                                </div>
                                <div className="logo-hire">
                                    <img src={Bullet} alt="Bullet" />
                                    <p>Focused approach to project success.</p>
                                </div>
                                <div className="logo-hire">
                                    <img src={Bullet} alt="Bullet" />
                                    <p>Faster turnaround with dedicated developers</p>
                                </div>
                                <div className="logo-hire">
                                    <img src={Bullet} alt="Bullet" />
                                    <p>Scalable solutions tailored to requirements</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="col-lg-6 col-md-12">
                        <div className="card custom-card">
                            <div className="card-body">
                                <h3 className="card-title py-2">Paval Soft PHP Expertise</h3>
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
                        </div>
                    </div>
                </div>

                {/* Custom Styles */}
                <style jsx>{`
        .custom-card {
          background: #000;
          color: #0f0;
          border: 1px solid rgba(141, 196, 64, 0.47);
          border-radius: 10px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .custom-card:hover {
          transform: scale(1.05);
          box-shadow: 0px 4px 15px rgba(125, 219, 31, 0.67);
        }
        .card-title {
          color: #8EC440;
        }
        .logo-hire {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }
        .logo-hire img {
          width: 20px;
          height: 20px;
        }
        p {
          color: #ddd;
          margin: 0;
        }
      `}</style>
            </div>

            {/* 6 section  */}
            <div className='php-content-form'>
                <div className="content-layout">
                    <div className="content-left-side">
                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                        <p>
                            At Paval Soft, our PHP web development service conforms to values and effectively placed at the peek of the development industry. Our well organized PHP developers / professionals create difficult, enterprise class s in detail process, analyzing your present strategies along with online business goals.Paval Soft provides PHP programming and website application development for web applications and development. We afford all kind of custom php programming as per the clients needs for their php web application development and or php software development and php programming
                        </p>
                        <p>
                            With Paval Soft, you can outsource all your PHP Web Development Requirements and you can focus on your core business activities. To know further details about our PHP web development services, feel free to contact us.
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

            {/* section 7 Frequently  */}
            <Container fluid className="py-2 bg-black text-white">
                {/* Section Heading */}
                <h2 className="text-center" style={{ color: "#8EC440", fontWeight: "bold" }}>
                    Frequently Asked Questions
                </h2>
                <p className="text-center mb-4">
                    Find answers to common questions about DevOps and how it can benefit your business.
                </p>

                {/* FAQ Section with Left Content and Right Image */}
                <Row className="justify-content-center rounded shadow-lg p-4" style={{ backgroundColor: "#000" }}>

                    {/* Left Column for FAQ Content */}
                    <Col md={12} lg={8}>
                        {faqData.map((faq, index) => (
                            <div key={index} className="mb-1">
                                {/* FAQ Header */}
                                <Button
                                    onClick={() => toggleExpand(index)}
                                    style={{
                                        backgroundColor: faq.headerColor,
                                        color: "#ddd",
                                        width: "100%",

                                        // Center the question text
                                        borderColor: "#44522F",
                                        borderRadius: "5px",
                                        padding: "10px",
                                        display: "flex",
                                        justifyContent: "space-between", // Space between the number and the button
                                        alignItems: "center", // Center align content vertically
                                    }}
                                >
                                    {/* Left Side: Number */}
                                    <span style={{ fontSize: "18px", fontWeight: "bold", backgroundColor: "#8EC440", color: "#000", width: "30px" }}>
                                        0{index + 1}
                                    </span>

                                    {/* Centered Question */}
                                    <span style={{ fontSize: "16px", fontWeight: "bold", textAlign: "left" }}>
                                        {faq.question}
                                    </span>

                                    {/* Right Side: "+" Button */}
                                    <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                                        {expandedIndex === index ? "-" : "+"}
                                    </span>
                                </Button>

                                {/* FAQ Body (Conditionally Rendered) */}
                                {expandedIndex === index && (
                                    <div
                                        style={{
                                            backgroundColor: faq.bodyColor,
                                            color: "#ddd",
                                            padding: "25px",
                                            paddingLeft: "40px",
                                            borderRadius: "5px",
                                            marginTop: "5px",
                                            textAlign: "center",
                                        }}
                                    >
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </Col>

                </Row>
            </Container>

        </div>
    )
}

export default Phpdevelopment
