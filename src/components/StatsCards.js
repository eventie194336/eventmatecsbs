import React from 'react';

const StatsCards = ({ stats }) => {
  const styles = {
    wrapper: { display: 'flex', gap: '1rem', margin: '1rem 0' },
    card: {
      flex: 1,
      backgroundColor: 'white',
      padding: '1rem',
      borderRadius: '10px',
      boxShadow: '0 1px 6px rgba(0,0,0,0.06)'
    },
    label: { fontSize: '0.9rem', color: '#666' },
    value: { fontSize: '1.5rem', fontWeight: 700, marginTop: '0.25rem' }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.label}>Total Events</div>
        <div style={styles.value}>{stats?.total ?? 0}</div>
      </div>

      <div style={styles.card}>
        <div style={styles.label}>My Association's Events</div>
        <div style={styles.value}>{stats?.my ?? 0}</div>
      </div>

      <div style={styles.card}>
        <div style={styles.label}>Other Events</div>
        <div style={styles.value}>{stats?.other ?? 0}</div>
      </div>
    </div>
  );
};

export default StatsCards;
