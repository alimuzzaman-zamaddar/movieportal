import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="netflix-footer">
            <div className="footer-container">
                <div className="footer-row">
                    <a href="#">FAQ</a>
                    <a href="#">Help Center</a>
                    <a href="#">Account</a>
                    <a href="#">Media Center</a>
                </div>
                <div className="footer-row">
                    <a href="#">Investor Relations</a>
                    <a href="#">Jobs</a>
                    <a href="#">Ways to Watch</a>
                    <a href="#">Terms of Use</a>
                </div>
                <div className="footer-row">
                    <a href="#">Privacy</a>
                    <a href="#">Cookie Preferences</a>
                    <a href="#">Corporate Information</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="footer-row">
                    <a href="#">Speed Test</a>
                    <a href="#">Legal Notices</a>
                    <a href="#">Netflix Originals</a>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="social-icons">
                    {/* Add social media icons here */}
                </div>
                <p>&copy; 2024 Netflix, Inc.</p>
            </div>
        </footer>
    );
};

export default Footer;
