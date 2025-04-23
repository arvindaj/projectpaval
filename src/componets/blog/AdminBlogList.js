import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import './adminbloglist.css';

const AdminBlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/blogs');
                setBlogs(response.data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };
        fetchBlogs();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this blog?")) return;

        try {
            // Send DELETE request to backend
            await axios.delete(`http://localhost:5000/blogs/${id}`);
            // Update the UI to remove the deleted blog
            setBlogs(blogs.filter(blog => blog._id !== id));
            alert("Blog deleted successfully!");
        } catch (error) {
            console.error("Error deleting blog:", error);
            alert("Failed to delete blog.");
        }
    };

    return (
        <div className="admin-blog-list">
            <div className="container mt-5">
                <h1 className="text-center mb-4">Manage Blogs</h1>
                <div className="row">
                    {blogs.map((blog) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={blog._id}>
                            <div className="card h-100 d-flex flex-column">
                                <img
                                    src={blog.image}
                                    className="card-img-top"
                                    alt={blog.title}
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{blog.title}</h5>
                                    <p className="card-text">
                                        {blog.content
                                            ? blog.content.substring(0, 100) + "..."
                                            : "No content available."}
                                    </p>
                                    <button
                                        className="btn btn-danger btn-sm mt-auto"
                                        onClick={() => handleDelete(blog._id)}
                                        style={{ width: "fit-content" }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminBlogList;
