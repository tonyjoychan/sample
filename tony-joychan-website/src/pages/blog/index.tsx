import React from 'react';
import BlogList from '../../components/BlogList';

const BlogPage = () => {
    return (
        <div>
            <h1>Blog</h1>
            <p>Welcome to my blog! Here you'll find my thoughts on Azure architecture, technology trends, and more.</p>
            <BlogList />
        </div>
    );
};

export default BlogPage;