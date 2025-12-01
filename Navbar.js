import React from 'react';
import '../App.css'; // Assuming global styles or create specific css

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1 className="navbar-title">Evo</h1>
                <span className="navbar-subtitle">TCE CSBS EVENTS</span>
            </div>
            <button className="create-event-btn">
                + Create Event
            </button>
        </nav>
    );
};

export default Navbar;
