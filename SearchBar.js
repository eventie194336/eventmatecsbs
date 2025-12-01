import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, selectedTab, setSelectedTab }) => {
    return (
        <div className="search-bar-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="filter-tabs">
                {['All', 'Ongoing', 'Completed'].map((tab) => (
                    <button
                        key={tab}
                        className={`filter-tab ${selectedTab === tab ? 'active' : ''}`}
                        onClick={() => setSelectedTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
