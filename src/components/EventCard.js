import React from 'react';
import StatusChip from './StatusChip';
import ProgressBar from './ProgressBar';

const EventCard = ({ event, mode }) => {
    const styles = {
        card: {
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            transition: 'transform 0.2s ease',
            cursor: 'pointer'
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
        },
        title: {
            fontSize: '1.125rem',
            fontWeight: 'bold',
            color: '#333',
            margin: '0 0 0.25rem 0'
        },
        association: {
            fontSize: '0.875rem',
            color: '#666',
            margin: 0
        },
        details: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.5rem',
            fontSize: '0.875rem',
            color: '#555'
        },
        detailItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
        },
        button: {
            marginTop: 'auto',
            padding: '0.75rem',
            borderRadius: '8px',
            border: '1px solid #007bff',
            backgroundColor: mode === 'my' ? '#007bff' : 'transparent',
            color: mode === 'my' ? 'white' : '#007bff',
            fontWeight: '600',
            cursor: 'pointer',
            textAlign: 'center',
            transition: 'all 0.2s ease'
        }
    };

    return (
        <div style={styles.card}>
            <div style={styles.header}>
                <div>
                    <h3 style={styles.title}>{event.title}</h3>
                    <p style={styles.association}>{event.association}</p>
                </div>
                <StatusChip status={event.status} />
            </div>

            <div style={styles.details}>
                <div style={styles.detailItem}>📅 {event.date}</div>
                <div style={styles.detailItem}>📍 {event.venue}</div>
                <div style={styles.detailItem}>👤 {event.coordinator}</div>
            </div>

            <ProgressBar stage={event.stage} />

            <button style={styles.button}>
                {mode === 'my' ? 'Update Progress →' : 'View Details 👁'}
            </button>
        </div>
    );
};

export default EventCard;
