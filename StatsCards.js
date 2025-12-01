import React from 'react';

const StatsCards = ({ stats }) => {
    return (
        <div className="stats-cards-container">
            <div className="stats-card">
                <h3>Total Events</h3>
                <p className="stats-value">{stats.totalEvents}</p>
            </div>
            <div className="stats-card">
                <h3>My Association's Events</h3>
                <p className="stats-value">{stats.myAssociationEvents}</p>
            </div>
            <div className="stats-card">
                <h3>Other Events</h3>
                <p className="stats-value">{stats.otherEvents}</p>
            </div>
        </div>
    );
};

export default StatsCards;
