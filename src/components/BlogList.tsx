import React from 'react';

const BlogList = () => {
    const blogPosts = [
        {
            title: 'Understanding Azure Architecture',
            date: '2023-01-15',
            excerpt: 'A deep dive into the principles of Azure architecture and best practices.',
            link: '/blog/understanding-azure-architecture'
        },
        {
            title: 'Building Scalable Applications on Azure',
            date: '2023-02-10',
            excerpt: 'Learn how to design applications that scale seamlessly in the Azure cloud.',
            link: '/blog/building-scalable-applications'
        },
        {
            title: 'Azure DevOps: A Comprehensive Guide',
            date: '2023-03-05',
            excerpt: 'An overview of Azure DevOps and how it can streamline your development process.',
            link: '/blog/azure-devops-guide'
        }
    ];

    return (
        <div className="blog-list">
            <h2>Blog Posts</h2>
            <ul>
                {blogPosts.map((post, index) => (
                    <li key={index}>
                        <h3>{post.title}</h3>
                        <p>{post.date}</p>
                        <p>{post.excerpt}</p>
                        <a href={post.link}>Read more</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;