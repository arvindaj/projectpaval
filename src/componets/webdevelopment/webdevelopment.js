import React, { useEffect, useState } from 'react';
import Bullet from '../Asset/Bullet.png'
import '../webdevelopment/webdevelopment.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaCogs, FaChartLine, FaCodeBranch, FaTools, FaRocket, FaHeadset } from "react-icons/fa";


const Webdevelopment = () => {


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
        img.src = require("../Asset/Web banner.png");
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
            question: "What services does web development cover?",
            answer:
                "It includes website design, coding, testing, and deployment.",
            headerColor: "#000",
            bodyColor: "#1C1C1C",
        },
        {
            question: "How long does development take?",
            answer:
                "DevOps speeds up software delivery by automating processes like testing, deployment, and monitoring.",
            headerColor: "#000",
            bodyColor: "#1C1C1C",
        },
        {
            question: "What tools are used in DevOps?",
            answer:
                "Common tools include Jenkins, Docker, Kubernetes, Terraform, and Git for continuous integration and deployment.",
            headerColor: "#000",
            bodyColor: "#1C1C1C",
        },
        {
            question: "What technologies are commonly used?",
            answer:
                "Yes, DevOps can benefit businesses of all sizes by improving collaboration, efficiency, and scalability.",
            headerColor: "#000",
            bodyColor: "#1C1C1C",
        },
        {
            question: "Can I request custom features?",
            answer:
                "DevOps integrates security practices into the development cycle, ensuring secure code and timely vulnerability fixes.",
            headerColor: "#000",
            bodyColor: "#1C1C1C",
        },
        {
            question: "Will my website be mobile-friendly?",
            answer:
                "Automation in DevOps helps streamline repetitive tasks, improving efficiency, consistency, and error reduction.",
            headerColor: "#000",
            bodyColor: "#1C1C1C",
        },
        {
            question: "Do you provide website maintenance",
            answer:
                "Yes, ongoing updates and support are available.",
            headerColor: "#000",
            bodyColor: "#1C1C1C",
        }
    ];



    return (
        <div className='webdevelopment'>
            {/* 1 section */}
            <div className="web-front-page" style={{ display: isLoaded ? "flex" : "none" }}>
                <div className="container p-0">
                    {/* Left Side Content */}
                    <div className="web-front-page-center row">
                        <div className="col-md-6 web-front-heading p-0">
                            <h1>Web Development</h1>
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
                        Website Development
                    </h1>
                    <p>
                        Paval Soft is a leading provider of innovative web development solutions, offering tailored services to meet diverse business needs. We specialize in creating dynamic websites, scalable web applications, and user-centric digital platforms. Our solutions are designed to enhance brand visibility and improve customer engagement.
                    </p>
                    <p>
                        The development team at Paval Soft combines creativity and technical expertise to deliver robust and visually appealing websites. We leverage cutting-edge technologies such as HTML5, CSS3, JavaScript, and modern frameworks to ensure responsive and fast-loading sites. Clients benefit from customized solutions that align with their brand identity and goals.
                    </p>
                    <p>
                        We emphasize a collaborative approach, working closely with clients throughout development. We ensure timely delivery and seamless user experiences, from initial design concepts to deployment. Our commitment to quality and innovation makes them a trusted partner in the digital landscape.
                    </p>
                </div>
            </div>


            {/* section card point */}
            <Container fluid className="py-2 px-5 bg-black text-white">
                {/* Header Section */}
                <h1 style={{ color: "#8EC440", fontWeight: "bold" }} className="text-center">
                    Web Development Workflow
                </h1>
                <p className="text-center">
                    Paval Soft offers comprehensive Web Development  solutions to streamline software development and deployment processes.
                </p>

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
                                        Planning and Strategy
                                    </Card.Title>
                                </div>

                                <Card.Text>
                                    We create a comprehensive project roadmap, including timelines, technical requirements, and design concepts.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className="h-100 shadow-lg border-0 bg-dark text-white">
                            <Card.Body>
                                {/* Flexbox Layout for Icon and Title */}
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaCodeBranch style={{ color: "#8EC440", paddingRight: "10px" }} className="fs-1" />
                                    <Card.Title style={{ color: "#8EC440", fontWeight: "bold", paddingTop: "10px", fontSize: "1rem" }}>
                                        Design and Prototyping
                                    </Card.Title>
                                </div>
                                <Card.Text>
                                    We develop wireframes and prototypes to visualize the site's layout and user interface before actual coding begins.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className="h-100 shadow-lg border-0 bg-dark text-white">
                            <Card.Body>
                                {/* Flexbox Layout for Icon and Title */}
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaTools style={{ color: "#8EC440", paddingRight: "10px" }} className="fs-1" />
                                    <Card.Title style={{ color: "#8EC440", fontWeight: "bold", paddingTop: "10px", fontSize: "1rem" }}>
                                        Development
                                    </Card.Title>
                                </div>

                                <Card.Text>
                                    We build sites using modern technologies, ensuring responsive design, functionality, and security.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={4}>
                        <Card className="h-100 shadow-lg border-0 bg-dark text-white">
                            <Card.Body>
                                {/* Flexbox Layout for Icon and Title */}
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaTools style={{ color: "#8EC440", paddingRight: "10px" }} className="fs-1" />
                                    <Card.Title style={{ color: "#8EC440", fontWeight: "bold", paddingTop: "10px", fontSize: "1rem" }}>
                                        Testing and Quality Assurance
                                    </Card.Title>
                                </div>

                                <Card.Text>
                                    We conduct extensive testing to identify and fix bugs, ensuring the site functions smoothly across devices.
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
                                    After final approval, we deployed the website on live servers and made it accessible to users.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} lg={4}>
                        <Card className="h-100 shadow-lg border-0 bg-dark text-white">
                            <Card.Body>
                                {/* Flexbox Layout for Icon and Title */}
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaHeadset style={{ color: "#8EC440", paddingRight: "10px" }} className="fs-1" />
                                    <Card.Title style={{ color: "#8EC440", fontWeight: "bold", paddingTop: "10px", fontSize: "1rem" }}>
                                        Maintenance and Support
                                    </Card.Title>
                                </div>

                                <Card.Text>
                                    We provide continuous monitoring, updates, and technical support to maintain optimal performance.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
            </Container>

            {/* why pavalsoft  */}

            <div className='aboutus-content'>
                <div className='aboutus'>
                    
                    <h2>Why Choose Paval Soft?</h2>
                    <br />
                    <h5>Expert Team and Innovation Focus</h5>
                    <p>Skilled developers delivering cutting-edge solutions.
                    </p>
                    <h5> Customized Solutions for Businesses</h5>
                    <p>Tailored designs meeting unique client needs.</p>
                    <h5>Reliable Support and Maintenance</h5>
                    <p>Ongoing assistance ensuring seamless performance.</p>

                </div>
            </div>


            {/* section points */}
            <div className="h-w-b ">
                <div className="container">
                    <div className="row align-items-start">
                        {/* Left Column */}
                        <div className="col-lg-6 col-md-12 mb-4">
                            <h1 className="section-title">Web Development Services involves</h1>
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
                            <h1 className="section-title">Benefit Dedicated Developers</h1>
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
                                <p>Lorem ipsum dolor sit amet consectetur with a long text </p>
                            </div>
                            <div className="logo-hire">
                                <img src={Bullet} alt="Bullet" />
                                <p>Lorem ipsum dolor sit amet consectetur with even </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* 4 section  */}
            <div className='w-d-a-content-form'>
                <div className="content-layout">
                    <div className="content-left-side">
                        <h1>Some of our IT enabled services include:</h1>
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
            <div className='w-p-a'>

                <div className="web-php-aspnet">
                    <div className="web-php-aspnet-item">
                        <h1>Web Application</h1>
                        <p>
                            Paval Soft Web Application developments are business-critical and avail you to sail smooth through demanding and constantly-evolving technological changes. Our web applications tone-down IT complexity, facilitate flawless work flow and synchronize business operations, making them easy to manage and monitor.
                        </p>
                    </div>
                    <div className="web-php-aspnet-item">
                        <h1>PHP Development</h1>
                        <p>
                            PHP stands for Pre Hypertext Processor. PHP is a great HTML-embedded server-side scripting language, and is the main significant option for developing energetic and interactive websites. Our PHP Web Development Service is more experimental, integrative, qualified and ropes for web standards causing it to be the wonderful platform to develop and set up modern web stuff.
                        </p>
                    </div>
                    <div className="web-php-aspnet-item">
                        <h1>ASP.Net Development</h1>
                        <p>
                            ASP .NET is one of the main core technologies used for web application development in our company. Paval Soft have successfully developed several web projects based on .NET technologies that diverge greatly in business logic and technical complexity from simple CMS-enabled websites to composite business applications exceeding more than 50 man-years of efforts.
                        </p>
                    </div>
                </div>

            </div>


            {/* section 4 Frequently  */}
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

                                        textAlign: "center", // Center the question text
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
                                    <span style={{ fontSize: "16px", fontWeight: "bold", textAlign: "center" }}>
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
                                            padding: "15px",
                                            borderRadius: "5px",
                                            marginTop: "5px",
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

export default Webdevelopment
