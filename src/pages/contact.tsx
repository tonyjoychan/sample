import React from 'react';

const Contact: React.FC = () => {
    return (
        <div>
            <h1>Contact Tony Joychan</h1>
            <p>If you would like to get in touch with me, please fill out the form below or reach out via email.</p>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
            <p>You can also reach me at: <a href="mailto:tony.joychan@example.com">tony.joychan@example.com</a></p>
        </div>
    );
};

export default Contact;