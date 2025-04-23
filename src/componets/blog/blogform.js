import React, { useState } from 'react';
import axios from 'axios';
import './blogform.css';
import { useNavigate } from 'react-router-dom'; // For navigation

const BlogForm = () => {
    const initialBlogData = {
        title: '',
        image: '',
        content: '',
        fullContent: '',
        author: '',
        date: '',
    };

    const [blogData, setBlogData] = useState(initialBlogData);
    const [imageName, setImageName] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const navigate = useNavigate(); // Hook for navigation

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBlogData({ ...blogData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageName(file.name); // Set the file name to display
            const formData = new FormData();
            formData.append('image', file);

            setIsUploading(true); // Show uploading status

            // Upload the image to the backend
            axios.post('http://localhost:5000/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            .then(response => {
                setBlogData({ ...blogData, image: response.data.imageUrl });
                setIsUploading(false); // Upload completed
            })
            .catch(error => {
                console.error("Error uploading image:", error);
                setIsUploading(false); // Reset upload status in case of error
            });
        }
    };

    const handleBlogSubmit = async (e) => {
        e.preventDefault();

        if (!blogData.title || !blogData.content || !blogData.image) {
            alert("Title, content, and image are required.");
            return;
        }

        try {
            await axios.post('http://localhost:5000/blogs', blogData);
            alert('Blog added successfully!');
            resetForm(); // Clear the form after successful submission
        } catch (err) {
            console.error(err);
            alert('Error adding blog.');
        }
    };

    const resetForm = () => {
        setBlogData(initialBlogData);
        setImageName('');
        document.getElementById('image').value = ''; // Reset the file input
    };

    const removeImage = () => {
        setImageName('');
        setBlogData({ ...blogData, image: '' });
        document.getElementById('image').value = ''; // Reset the file input
    };

    return (
        <div className="blog-form-container">
            <h3>Add Blog</h3>
            <form onSubmit={handleBlogSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        name="title"
                        placeholder="Enter blog title"
                        onChange={handleInputChange}
                        value={blogData.title}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Upload Image</label>
                    <input
                        id="image"
                        name="image"
                        type="file"
                        onChange={handleFileChange}
                        disabled={isUploading} // Disable input while uploading
                    />
                    {imageName && !isUploading && (
                        <div className="image-name">
                            <span>{imageName}</span>
                            <button
                                type="button"
                                onClick={removeImage}
                                className="remove-btn"
                                aria-label="Remove image"
                            >
                                ×
                            </button>
                        </div>
                    )}
                    {isUploading && <div>Uploading image...</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        placeholder="Write a short description"
                        onChange={handleInputChange}
                        value={blogData.content}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="fullContent">Full Content</label>
                    <textarea
                        id="fullContent"
                        name="fullContent"
                        placeholder="Write the full content"
                        onChange={handleInputChange}
                        value={blogData.fullContent}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input
                        id="author"
                        name="author"
                        placeholder="Enter author's name"
                        onChange={handleInputChange}
                        value={blogData.author}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        onChange={handleInputChange}
                        value={blogData.date}
                    />
                </div>
                <button
                    type="submit"
                    className="blog-form-button"
                    disabled={isUploading} // Disable submit while uploading
                >
                    {isUploading ? 'Uploading...' : 'Submit Blog'}
                </button>
            </form>
            <button
                className="btn btn-secondary mt-3"
                onClick={() => navigate('/admin/blogs')} // Navigate to the admin blog list
            >
                View All Blogs
            </button>
        </div>
    );
};

export default BlogForm;
