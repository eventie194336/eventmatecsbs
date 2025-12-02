import React from 'react';

const SectionTitle = ({ title }) => {
  const styles = {
    title: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#333',
      marginBottom: '1rem',
      marginTop: '1rem'
    }
  };

  return <h2 style={styles.title}>{title}</h2>;
};

export default SectionTitle;