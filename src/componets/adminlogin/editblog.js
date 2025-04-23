import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditBlog = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    fullContent: "",
    heading: "",
    paraone: "",
    headingtwo: "",
    paratwo: "",
    whyChooseHeading: "",
    whyChoosePoints: "",
    author: "",
    image: null,
    
  });

  // Fetch the API base URL from environment variables
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  // Fetch blog data by ID
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/blogs/${id}`);
        console.log(response.data); // Check the exact structure
        if (response.data && response.data.data) {
          setBlogData(response.data.data); // Adjust if necessary based on actual response
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id, API_BASE_URL]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    setBlogData({ ...blogData, image: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", blogData.title);
    formData.append("content", blogData.content);
    formData.append("fullContent", blogData.fullContent);
    formData.append("heading", formData.heading);
    formData.append("paraone", formData.paraone);
    formData.append("headingtwo", formData.headingtwo);
    formData.append("paratwo", formData.paratwo);
    formData.append("whyChooseHeading", blogData.whyChooseHeading);
    formData.append("whyChoosePoints", blogData.whyChoosePoints);
    formData.append("author", blogData.author);
    

    // Append image only if it's a new file upload
    if (blogData.image && typeof blogData.image !== "string") {
      formData.append("image", blogData.image);
    }

    try {
      const response = await axios.put(`${API_BASE_URL}/blogs/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200) {
        alert("Blog updated successfully!");
        navigate("/dashboard/blogs");
      } else {
        alert("Failed to update the blog.");
      }
    } catch (error) {
      console.error("Error updating blog:", error.response?.data || error.message);
      alert("Failed to update the blog.");
    }
  };

  return (
    <div className="edit-blog-container" style={{ width: "600px" }}>
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={blogData.title}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            name="content"
            value={blogData.content}
            onChange={handleChange}
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Full Content</label>
          <textarea
            name="fullContent"
            value={blogData.fullContent}
            onChange={handleChange}
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group">
          <label> Heading</label>
          <input
            type="text"
            name="heading"
            value={blogData.heading}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>paraone</label>
          <textarea
            name="paraone"
            value={blogData.paraone}
            onChange={handleChange}
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Headingtwo</label>
          <input
            type="text"
            name="headingtwo"
            value={blogData.headingtwo}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>paratwo</label>
          <textarea
            name="paratwo"
            value={blogData.paratwo}
            onChange={handleChange}
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={blogData.author}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Why Choose Heading</label>
          <input
            type="text"
            name="whyChooseHeading"
            value={blogData.whyChooseHeading}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Why Choose Points</label>
          <textarea
            name="whyChoosePoints"
            value={blogData.whyChoosePoints}
            onChange={handleChange}
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Image</label>
          {blogData.image && typeof blogData.image === "string" && (
            <div>
              <p>Current Image:</p>
              <img
                src={`${API_BASE_URL}/uploads/${blogData.image}`}
                alt={blogData.title}
                style={{ width: "150px", marginBottom: "10px" }}
              />
            </div>
          )}
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="form-control"
          />
        </div>

        <button
          type="submit"
          className="btn custom-btn mt-3"
          style={{ backgroundColor: "#BBFF59" }}
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
