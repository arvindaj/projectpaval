import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogDetails = () => {
  const { id } = useParams(); // Blog ID from URL
  const { state } = useLocation(); // State from navigation
  const isAdmin = state?.isAdmin || false; // Admin check
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  // Fetch blog details
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/blogs/${id}`);
        setBlog(response.data.data); // Adjust based on API response structure
      } catch (err) {
        console.error(err);
        setError("Blog not found or an error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
    // Cleanup on unmount
    return () => {
      document.body.style.backgroundColor = "black"; // Reset background on component unmount
      document.body.style.color = ""; // Reset text color
    };
  }, [id, API_BASE_URL]);
  

  if (loading) return <h2 className="text-center mt-5">Loading...</h2>;
  if (error) return <h2 className="text-center mt-5">{error}</h2>;

  // Handle whyChoosePoints formatting (split by newline or commas)
  const whyChoosePoints = blog.whyChoosePoints?.split(/[\r\n,]+/).filter(Boolean) || [];

  return (
    
    <div className="container-fluid p-5 mt-5" >
      {/* Blog Hero Section */}
      <div className="blog-hero mb-4">
        {blog.image ? (
          <img
            src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${blog.image}`}
            alt={blog.title || "Blog Image"}
            style={{ width: "100%", height: "400px", borderRadius: "5px" }}
          />
        ) : (
          <div
            className="no-image-placeholder"
            style={{
              width: "100%",
              height: "200px",
              backgroundColor: "#f0f0f0",
              borderRadius: "5px",
            }}
          >
            <p className="text-center" style={{ lineHeight: "200px", color: "#aaa" }}>
              No Image Available
            </p>
          </div>
        )}
        <div className="mt-3 text-center">
          <h1 style={{ color: "#8EC440" }}>{blog.title || "Untitled Blog"}</h1>
          <p className="text-muted">
            By {blog.author || "Anonymous"} | {blog.date || "Unknown Date"}
          </p>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="blog-content mb-5">
        {/* <h3 style={{ color: "#8EC440" }}>Content</h3> */}
        <p style={{ lineHeight: "1.8", fontSize: "1.1rem", textAlign: "justify", color: "#9BA49E" }}>
          {blog.fullContent || "No content available for this blog."}
        </p>
      </div>

      {/* Blog paraone Section */}
      {blog.heading && (
      <div className="blog-paraone mb-5">
      <h3 className="text-left" style={{ color: "#8EC440" }}>
            {blog.heading}
          </h3>
        {/* <h3 style={{ color: "#8EC440" }}>Content</h3> */}
        <p style={{ lineHeight: "1.8", fontSize: "1.1rem", textAlign: "justify", color: "#9BA49E" }}>
          {blog.paraone || "No content available for this blog."}
        </p>
      </div>
      )}

      {/* Blog paratwo Section */}
      {blog.headingtwo && (
      <div className="blog-paratwo mb-5">
      <h3 className="text-left" style={{ color: "#8EC440" }}>
            {blog.headingtwo}
          </h3>
        {/* <h3 style={{ color: "#8EC440" }}>Content</h3> */}
        <p style={{ lineHeight: "1.8", fontSize: "1.1rem", textAlign: "justify", color: "#9BA49E" }}>
          {blog.paratwo || "No content available for this blog."}
        </p>
      </div>
      )}


      {/* Why Choose Section */}
      {blog.whyChooseHeading && (
        <div className="why-choose-section mb-5">
          <h3 className="text-left" style={{ color: "#8EC440" }}>
            {blog.whyChooseHeading}
          </h3>
          <ul>
            {whyChoosePoints.map((point, index) => (
              <li key={index} style={{ fontSize: "1.1rem", color: "#9BA49E" }}>
                {point.trim()}
              </li>
            ))}
          </ul>
        </div>
      )}


      
      {/* About the Author Section */}
      <div
        className="author-section bg-light p-4 rounded mb-5"
        style={{ color: "#333", border: "1px solid #ddd" }}
      >
        <h4>About the Author</h4>
        <div className="d-flex align-items-center mt-3">
          {blog.image ? (
            <img
              src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${blog.image}`}
              alt={blog.title || "Blog Image"}
              style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover" }}
            />
          ) : (
            <div
              className="no-image-placeholder"
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "#f0f0f0",
                borderRadius: "50%",
              }}
            >
              <p className="text-center" style={{ lineHeight: "100px", color: "#aaa" }}>
                No Image
              </p>
            </div>
          )}
          <div className="ms-3">
            <h6 className="mb-1">{blog.author || "Anonymous"}</h6>
            <p className="text-muted mb-0">
              {blog.authorBio || "Blogger | Tech Enthusiast | Content Creator"}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-4 text-center">
        {isAdmin ? (
          <button
            className="btn btn-secondary"
            style={{ marginBottom: "50px", backgroundColor: "#8EC440" }}
            onClick={() => navigate("/dashboard/blogs")}
          >
            Back to Dashboard
          </button>
        ) : (
          <Link
            to="/blog"
            className="btn btn-secondary"
            style={{ marginBottom: "50px", backgroundColor: "#8EC440" }}
          >
            Back to Blogs
          </Link>
        )}
      </div>
    </div>
    
  );
};

export default BlogDetails;
