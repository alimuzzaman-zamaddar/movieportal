import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <header className="modern-banner"
            style={{
                backgroundImage: `url('https://i.ibb.co/w6HSVwB/young-rhaenyra-targaryen-house-of-the-dragon-939-0-g.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
            }}>
            <div className="modern-banner-overlay"></div>
            <div className="modern-banner-contents">
                <h1 className="modern-banner-title">Home of Dragon</h1>
                <div className="modern-banner-buttons">
                    <button className="modern-banner-button play-button">Play</button>
                    <button className="modern-banner-button mylist-button">My List</button>
                </div>
                <p className="modern-banner-description">
                    This is a brief description of the movie or series.
                    Experience a world like never before!
                </p>
            </div>
            <div className="modern-banner-fadeBottom"></div>
        </header>
    );
};

export default Banner;
