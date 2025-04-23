import React, { useState } from "react";
import "./addblog.css";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [formData, setFormData] = useState({
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
    date: "",
  });
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // Fetch the base URL from the environment variable
  // const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("image", image);
      formDataToSend.append("title", formData.title);
      formDataToSend.append("content", formData.content);
      formDataToSend.append("fullContent", formData.fullContent);
      formDataToSend.append("heading", formData.heading);
      formDataToSend.append("paraone", formData.paraone);
      formDataToSend.append("headingtwo", formData.headingtwo);
      formDataToSend.append("paratwo", formData.paratwo);
      formDataToSend.append("whyChooseHeading", formData.whyChooseHeading);
      formDataToSend.append("whyChoosePoints", formData.whyChoosePoints);
      formDataToSend.append("author", formData.author);
      formDataToSend.append("date", formData.date);

      // Upload the blog to the server
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
      console.log("API Base URL:", API_BASE_URL);

      const response = await fetch(`${API_BASE_URL}/blogs`, {
        method: "POST",
        body: formDataToSend,
      });



      if (response.ok) {
        setSuccess(true); // Show success popup
        setTimeout(() => {
          navigate("/dashboard/blogs"); // Redirect after 2 seconds
        }, 2000);
        setFormData({
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
          date: "",
        });
        setImage(null); // Reset image
      } else {
        alert("Failed to submit blog.");
      }
    } catch (error) {
      console.error("Error submitting blog:", error);
    }
  };

  return (
    <div className="add-blog-container">
      <h2 className="text-whitem">Add Blog</h2>
      <h4 className="text-white">Blog Details</h4>
      <form className="add-blog-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="imageUpload" className="text-white">
            + Upload Blog Image
          </label>
          <input
            type="file"
            id="imageUpload"
            className="form-control"
            onChange={handleImageChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title" className="text-white">
            Title *
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            placeholder="Enter Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content" className="text-white">
            Content *
          </label>
          <textarea
            id="content"
            className="form-control"
            placeholder="Type Here"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="fullContent" className="text-white">
            Full Content *
          </label>
          <textarea
            id="fullContent"
            className="form-control"
            placeholder="Type Here"
            value={formData.fullContent}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="Heading" className="text-white">
            Heading *
          </label>
          <input
            type="text"
            id="heading"
            className="form-control"
            placeholder="Enter heading"
            value={formData.heading}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="paraone" className="text-white">
            paraone *
          </label>
          <textarea
            id="paraone"
            className="form-control"
            placeholder="Type Here"
            value={formData.paraone}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="Headingtwo" className="text-white">
            Heading *
          </label>
          <input
            type="text"
            id="headingtwo"
            className="form-control"
            placeholder="Enter heading"
            value={formData.headingtwo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="paratwo" className="text-white">
            paraone *
          </label>
          <textarea
            id="paratwo"
            className="form-control"
            placeholder="Type Here"
            value={formData.paratwo}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="whyChooseHeading" className="text-white">
            Why Choose Heading *
          </label>
          <input
            type="text"
            id="whyChooseHeading"
            className="form-control"
            placeholder="Enter Why Choose heading"
            value={formData.whyChooseHeading}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="whyChoosePoints" className="text-white">
            Why Choose Points (Separate with commas) *
          </label>
          <textarea
            id="whyChoosePoints"
            className="form-control"
            placeholder="Enter points for why choose this blog"
            value={formData.whyChoosePoints}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="author" className="text-white">
            Author *
          </label>
          <input
            type="text"
            id="author"
            className="form-control"
            placeholder="Enter Author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date" className="text-white">
            Date *
          </label>
          <input
            type="date"
            id="date"
            className="form-control"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <button type="reset" className="btn btn-secondary">
            Reset
          </button>
        </div>
      </form>

      {success && (
        <div className="alert-overlay">
          <div className="alert-box">
            <p>Blog submitted successfully!</p>
            <button onClick={() => setSuccess(false)} className="btn btn-primary">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBlog;
