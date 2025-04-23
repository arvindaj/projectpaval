import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./dashblog.css";

const DashBlog = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalBlogs: 0,
    totalPages: 1,
  });
  const [error, setError] = useState(null);
  //nst [showFullWhyChoose] = useState(false); // State for toggling whyChoosePoints view

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const fetchBlogs = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs`);
      if (!response.ok) {
        throw new Error("Failed to fetch blogs. Please try again.");
      }
      const data = await response.json();
      setBlogData(data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError(error.message || "An error occurred while fetching blogs.");
    }
  }, [API_BASE_URL]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const deleteBlog = async (blogId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/blogs/${blogId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setBlogData(blogData.filter((blog) => blog._id !== blogId)); // Update the state by removing the deleted blog
        alert("Blog deleted successfully.");
      } else {
        throw new Error("Failed to delete the blog.");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert(error.message || "An error occurred while deleting the blog.");
    }
  };

  const truncateTextToWords = (text, wordCount) => {
    if (!text) return "No content available";
    const words = text.split(" ");
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(" ") + "...";
    }
    return text;
  };

  const handlePageChange = (newPage) => {
    setPagination((prev) => ({
      ...prev,
      page: newPage,
    }));
  };

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="blog-container container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-white">Blogs</h2>
        <button
          className="btn custom-add-blog-btn"
          onClick={() => navigate("/dashboard/blog/add")}
        >
          Add Blog
        </button>
      </div>
      <h4 className="text-white">Blog Details</h4>


      <div className="table-container container-fluid px-0" style={{ marginTop: "20px" }}>
        <table className="table table-dark table-striped table-hover" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <thead>
            <tr>
              <th>S/No</th>
              <th>Image</th>
              <th>Title</th>
              <th>Content</th>
              <th>Full Content</th>
              <th>Author</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogData.length > 0 ? (
              blogData.map((blog, index) => (
                <tr key={blog._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={
                        blog.image
                          ? `${process.env.REACT_APP_IMAGE_BASE_URL}/${blog.image}`
                          : "https://via.placeholder.com/100?text=No+Image"
                      }
                      alt={blog.title || "Blog Image"}
                      style={{
                        width: "80px",
                        height: "auto",
                        borderRadius: "8px",
                      }}
                    />
                  </td>
                  <td>{blog.title || "Untitled"}</td>
                  <td>{truncateTextToWords(blog.content, 3)}...</td>
                  <td>{truncateTextToWords(blog.fullContent, 3)}...</td>
                  <td>{blog.author || "Anonymous"}</td>
                  <td>{blog.date || "Unknown Date"}</td>
                  <td>
                    <div className="action-buttons d-flex">
                      <button
                        className="btn btn-primary btn-sm me-1"
                        onClick={() =>
                          navigate(`/dashboard/blog/${blog._id}`, {
                            state: { isAdmin: true },
                          })
                        }
                        style={{ fontSize: "14px", display: "flex", alignItems: "center" }}
                      >
                        <i className="bi bi-eye me-1" style={{ fontSize: "16px" }}></i> View
                      </button>

                      <button
                        className="btn btn-success btn-sm me-1"
                        onClick={() => navigate(`/dashboard/blog/edit/${blog._id}`)}
                        style={{ fontSize: "14px", display: "flex", alignItems: "center" }}
                      >
                        <i className="bi bi-pencil-square me-1" style={{ fontSize: "16px" }}></i> Edit
                      </button>


                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                          const confirmDelete = window.confirm(
                            "Are you sure you want to delete this blog?"
                          );
                          if (confirmDelete) {
                            deleteBlog(blog._id);
                          }
                        }}
                        style={{ fontSize: "14px", display: "flex", alignItems: "center" }}
                      >
                        <i className="bi bi-trash me-1" style={{ fontSize: "16px" }}></i> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">
                  No blogs available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>



{/* page 1 */}

      <div className="d-flex justify-content-left align-items-left mt-3">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className={`page-item ${pagination.page <= 1 ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(pagination.page - 1)}
                disabled={pagination.page <= 1}
              >
                Previous
              </button>
            </li>
            <li className="page-item">
              <span className="page-link">
                Page {pagination.page} of {pagination.totalPages}
              </span>
            </li>
            <li className={`page-item ${pagination.page >= pagination.totalPages ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(pagination.page + 1)}
                disabled={pagination.page >= pagination.totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>


    </div>
  );
};

export default DashBlog;
