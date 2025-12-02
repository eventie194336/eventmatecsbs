import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, selectedTab, setSelectedTab }) => {
  const styles = {
    container: {
      display: 'flex',
      gap: '0.75rem',
      alignItems: 'center',
      margin: '1rem 0'
    },
    input: {
      flex: 1,
      padding: '0.5rem 0.75rem',
      borderRadius: '8px',
      border: '1px solid #ddd'
    },
    tabs: {
      display: 'flex',
      gap: '0.5rem'
    },
    tabBtn: (active) => ({
      padding: '0.45rem 0.65rem',
      borderRadius: '8px',
      border: active ? '1px solid #007bff' : '1px solid #e0e0e0',
      backgroundColor: active ? '#e7f0ff' : 'white',
      color: active ? '#007bff' : '#444',
      cursor: 'pointer',
      fontWeight: 600
    })
  };

  return (
    <div style={styles.container}>
      <input
        placeholder="Search events, association, coordinator..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.input}
      />

      <div style={styles.tabs}>
        {['All', 'Ongoing', 'Completed'].map((t) => (
          <button
            key={t}
            style={styles.tabBtn(selectedTab === t)}
            onClick={() => setSelectedTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
