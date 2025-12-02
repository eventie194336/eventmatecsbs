import React from 'react';
import EventCard from './EventCard';

const EventList = ({ events = [], mode = 'other' }) => {
  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: '1rem'
    }
  };

  if (!events || events.length === 0) {
    return <div>No events to display.</div>;
  }

  return (
    <div style={styles.grid}>
      {events.map((ev) => (
        <EventCard key={ev.id} event={ev} mode={mode} />
      ))}
    </div>
  );
};

export default EventList;
