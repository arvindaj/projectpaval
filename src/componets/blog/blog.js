import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../blog/blog.css";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/blogs`);
        const data = response.data.data;
        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          console.error("Unexpected API response format");
          setBlogs([]);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, [API_BASE_URL]);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
 
  const [isLoaded, setIsLoaded] = useState(false);
    
  useEffect(() => {
    const img = new Image();
    img.src = require("../Asset/Blog banner.png");
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <div className="blog-page">
      {/* Blog Front Page Section */}
      <div className="blog-front-page"style={{ display: isLoaded ? "flex" : "none" }}>
      <div className="container p-0">
          <div className="blog-front-page-center row">
            <div className="col-md-6 blog-front-heading p-0">
              <h1>Blog</h1>
              <p>
                Lorem ipsum dolor sit amet. Qui repellendus nulla sed facere modi est quia voluptas est illum beatae in
                dolorum eius aut earum obcaecati id ipsum excepturi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="container-fluid mt-5 p-5">
        {blogs.length === 0 ? (
          <p className="text-center text-muted">No blogs available at the moment.</p>
        ) : (
          <>
            <div className="row">
              {(showAll ? blogs : blogs.slice(0, 6)).map((blog) => (
                <div className="col-md-6 col-lg-4 mb-4" key={blog._id}>
                  <Link to={`/blog/${blog._id}`} className="text-decoration-none text-dark">
                    <div className="card h-100">
                      <img
                        src={
                          blog.image
                            ? `${process.env.REACT_APP_IMAGE_BASE_URL}/${blog.image}`
                            : "https://via.placeholder.com/300x200?text=No+Image"
                        }
                        className="card-img-top"
                        alt={blog.title || "Blog Image"}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{blog.title}</h5>
                        <p className="card-text">
                          {blog.content ? blog.content.substring(0, 100) + "..." : "No content available."}
                        </p>
                        <p className="small" style={{ color: "#97989F" }}>
                          {blog.author || "Unknown"} -{" "}
                          {new Date(blog.date).toLocaleDateString() || "N/A"}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* View All Blogs Button */}
            <div className="text-center mt-4">
  <button
    className="btn"
    style={{ backgroundColor: "#8EC440", borderColor: "#8EC440", marginBottom: "16px" }}
    onClick={toggleShowAll}
  >
    {showAll ? "View Less Blogs" : "View All Blogs"}
  </button>
</div>

          </>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
