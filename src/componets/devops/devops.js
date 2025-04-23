import React, { useEffect, useState } from 'react';
import Bullet from '../Asset/Bullet.png'
import '../devops/devops.css'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaCogs, FaChartLine, FaCodeBranch, FaTools, FaRocket, FaHeadset } from "react-icons/fa";


const Devops = () => {


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
    img.src = require("../Asset/Devops.png");
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
      question: "What is DevOps?",
      answer:
        "DevOps is a set of methodologies that integrates software development and IT operations to enhance collaboration and streamline automation.",
      headerColor: "#000",
      bodyColor: "#1C1C1C",
    },
    {
      question: "How does DevOps improve software delivery?",
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
      question: "Is DevOps suitable for all businesses?",
      answer:
        "Yes, DevOps can benefit businesses of all sizes by improving collaboration, efficiency, and scalability.",
      headerColor: "#000",
      bodyColor: "#1C1C1C",
    },
    {
      question: "How does DevOps ensure application security?",
      answer:
        "DevOps integrates security practices into the development cycle, ensuring secure code and timely vulnerability fixes.",
      headerColor: "#000",
      bodyColor: "#1C1C1C",
    },
    {
      question: "What is the role of automation in DevOps?",
      answer:
        "Automation in DevOps helps streamline repetitive tasks, improving efficiency, consistency, and error reduction.",
      headerColor: "#000",
      bodyColor: "#1C1C1C",
    },
  ];



  return (
    <div className='Content'>

      {/* 1 section */}
      <div className="devops-front-page d-flex align-items-center" style={{ display: isLoaded ? "flex" : "none" }}>
        <div className="container p-3">
          <div className="devops-front-page-center row align-items-center">
            <div className="col-md-6 devops-front-heading text-md-start text-center">
              <h1 className="fw-bold responsive-heading">DevOps Development</h1>
              <p className="responsive-text">
                Paval Soft offers comprehensive DevOps solutions to streamline software development and deployment processes.
                Our approach helps clients achieve continuous integration, delivery, and a more efficient workflow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className='aboutus-content'>
        <div className="aboutus">

          <h2 style={{ color: "#8EC440", fontWeight: "bold" }} className="py-2">
            DevOps
          </h2>
          <p>
            Paval Soft offers comprehensive DevOps solutions to streamline software development and deployment processes. We ensure faster delivery and improved collaboration between teams by integrating development and IT operations. Our approach helps clients achieve continuous integration, delivery, and a more efficient workflow.
          </p>
          <p>
            At Paval Soft, DevOps practices include automating testing, deployment, and monitoring to minimize manual errors and enhance productivity. We implement tools like Jenkins, Docker, and Kubernetes to optimize infrastructure management. This results in reduced downtime, better resource allocation, and more consistent application performance.
          </p>
          <p>
            We provide continuous support for DevOps pipelines, ensuring scalability and smooth project execution. Our expertise helps clients adopt best practices in monitoring, security, and performance. We enable businesses to scale quickly and efficiently while maintaining high-quality software.
          </p>

        </div>
      </div>

      {/* 3 section card point */}
      <Container fluid className="py-2 px-5 bg-black text-white">
        {/* Header Section */}
        <h2 style={{ color: "#8EC440", fontWeight: "bold" }} className="text-center">
          DevOps Workflow
        </h2>


        {/* Row for Cards */}
        <Row className="gy-4 py-2">
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
                  We create a detailed roadmap to define DevOps tools, processes, and deployment strategies for the project.
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
                    Development and Integration
                  </Card.Title>
                </div>

                <Card.Text>
                  Our development team writes and integrates code, utilizing CI/CD pipelines for automated testing and deployment.
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
                    Continuous Testing and Monitoring
                  </Card.Title>
                </div>

                <Card.Text>
                  We ensure code quality and track application performance through automated testing and monitoring tools.
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
                    Deployment and Automation
                  </Card.Title>
                </div>

                <Card.Text>
                  We deploy the code automatically using containerization tools like Docker, ensuring efficient and scalable releases.
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
                    Feedback and Optimization
                  </Card.Title>
                </div>

                <Card.Text>
                  We gather continuous feedback to optimize processes, fix issues, and enhance the overall software performance.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>

      {/* 4 section  */}
      <div className="container-fluid text-center py-5 px-5" style={{ backgroundColor: "#000", color: "#8EC440" }}>
        <h2 style={{ color: "#8EC440", fontWeight: "bold" }} className="py-2">
        Why Choose Paval Soft?
        </h2>

        <div className="row justify-content-center">
          <div className="col-12 col-md-4">
            <div className="custom-border mb-4 p-4 rounded">
              <h5 style={{ color: "#8EC440" }}>Expert DevOps Team</h5>
              <p style={{ color: "#ddd" }}>
                Our skilled team ensures seamless integration of development and IT operations for faster delivery.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="custom-border animate__animated animate__fadeInUp animate__delay-1s mb-4 p-4 rounded">
              <h5 style={{ color: "#8EC440" }}>Automated Processes for Efficiency</h5>
              <p style={{ color: "#ddd" }}>
                We implement automation tools and best practices to streamline testing, deployment, and monitoring, reducing errors.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="custom-border animate__animated animate__fadeInUp animate__delay-1s mb-4 p-4 rounded">
              <h5 style={{ color: "#8EC440" }}>Continuous Support and Scalability</h5>
              <p style={{ color: "#ddd" }}>
                We offer ongoing support to help businesses scale quickly and maintain high-performance software.
              </p>
            </div>
          </div>

        </div>
      </div>

      { /*  5 section point diff  */}
      <div className="container-fluid py-5 bg-black px-5" >
        <div className="row g-4">
          {/* Left Card */}
          <div className="col-lg-6 col-md-12">
            <div className="card custom-card">
              <div className="card-body ">
                <h3 className="card-title py-2">Benefits of DevOps Implementation,</h3>

                <div className="logo-hire">
                  <img src={Bullet} alt="Bullet" />
                  <p>Enhanced Collaboration and Communication</p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Bullet" />
                  <p>Faster Software Delivery</p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Bullet" />
                  <p>Improved Product Quality</p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Bullet" />
                  <p>Increased Operational Efficiency</p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Bullet" />
                  <p>Continuous Improvement and Innovation</p>
                </div>

              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="col-lg-6 col-md-12">
            <div className="card custom-card">
              <div className="card-body">
                <h3 className="card-title py-2">Paval Soft DevOps Expertise</h3>
                <div className="logo-hire">
                  <img src={Bullet} alt="Bullet" />
                  <p>Automation of deployment pipelines</p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Bullet" />
                  <p>Infrastructure as code proficiency</p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Bullet" />
                  <p>Cloud services integration skills</p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Bullet" />
                  <p>Continuous monitoring and feedback loops </p>
                </div>
                <div className="logo-hire">
                  <img src={Bullet} alt="Bullet" />
                  <p>Version control system management </p>
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

      {/* 6 from section  */}
      <div className='devops-content-form'>
        <div className="content-layout">
          <div className="content-left-side">
            <h1>Devops</h1>
            <p>
              Contact us today to transform your software delivery lifecycle with our top-notch DevOps services!
              Contact us today to transform your software delivery lifecycle with our top-notch DevOps services!
              Contact us today to transform your software delivery lifecycle with our top-notch DevOps services!
            </p>
            <p>
              Contact us today to transform your software delivery lifecycle with our top-notch DevOps services!
            </p>
            <p>
              Contact us today to transform your software delivery lifecycle with our top-notch DevOps services!
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

export default Devops
