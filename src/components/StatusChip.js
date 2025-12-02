import React from 'react';

const StatusChip = ({ status }) => {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'ongoing':
        return { bg: '#e3f2fd', text: '#1976d2' }; // Blue
      case 'completed':
        return { bg: '#e8f5e9', text: '#2e7d32' }; // Green
      case 'planning':
        return { bg: '#fff3e0', text: '#ef6c00' }; // Orange/Yellow
      default:
        return { bg: '#f5f5f5', text: '#757575' }; // Grey
    }
  };

  const colors = getStatusColor(status);

  const styles = {
    chip: {
      display: 'inline-block',
      padding: '0.25rem 0.75rem',
      borderRadius: '16px',
      backgroundColor: colors.bg,
      color: colors.text,
      fontSize: '0.75rem',
      fontWeight: '600',
      textTransform: 'capitalize'
    }
  };

  return <span style={styles.chip}>{status}</span>;
};

export default StatusChip;