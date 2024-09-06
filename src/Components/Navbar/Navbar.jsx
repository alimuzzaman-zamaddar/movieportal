import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 px-4 md:px-8 lg:px-16">
            {/* Navbar Start - Netflix Logo */}
            <div className="navbar-start">
                <a className="text-2xl font-bold text-red-600">Netflix</a>
            </div>

            {/* Navbar Center - Menu Items */}
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1 space-x-4 text-white">
                    <li><a>Home</a></li>
                    <li><a>TV Shows</a></li>
                    <li><a>Movies</a></li>
                    <li><a>New & Popular</a></li>
                    <li><a>My List</a></li>
                </ul>
            </div>

            {/* Navbar End - Icons */}
            <div className="navbar-end flex items-center space-x-4">
                {/* Search Icon */}
                <button className="btn btn-ghost text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-5 w-5">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                        />
                    </svg>
                </button>

                {/* Notifications Icon */}
                <button className="btn btn-ghost text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-5 w-5">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V10a6 6 0 10-12 0v4c0 .554-.446 1-1 1H3v2h5"
                        />
                    </svg>
                </button>

                {/* Profile Dropdown */}
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost avatar">
                        <div className="w-8 rounded-full">
                            <img src="https://placeimg.com/80/80/people" alt="Profile" />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Profile</a></li>
                        <li><a>Account Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className="navbar-center md:hidden">
                <div className="dropdown">
                    <label tabIndex={0} role="button" className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-16 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>TV Shows</a></li>
                        <li><a>Movies</a></li>
                        <li><a>New & Popular</a></li>
                        <li><a>My List</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;