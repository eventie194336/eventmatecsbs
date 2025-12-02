import React from 'react';

const Navbar = ({ onCreate }) => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 0',
      borderBottom: '1px solid #eee'
    },
    left: {
      display: 'flex',
      flexDirection: 'column'
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: '700',
      margin: 0
    },
    subtitle: {
      fontSize: '0.9rem',
      color: '#666',
      marginTop: '0.25rem'
    },
    button: {
      padding: '0.5rem 0.9rem',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      fontWeight: 600,
      cursor: 'pointer'
    }
  };

  return (
    <header style={styles.container}>
      <div style={styles.left}>
        <h1 style={styles.title}>Evo</h1>
        <div style={styles.subtitle}>Your Event Evolution Partner</div>
      </div>

      <div>
        <button style={styles.button} onClick={onCreate}>+ Create Event</button>
      </div>
    </header>
  );
};

export default Navbar;
