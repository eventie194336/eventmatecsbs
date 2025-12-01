import React from 'react';

const EventList = ({ events, mode }) => {
    return (
        <div className="event-list">
            {events.map((event) => (
                <div key={event.id} className="event-card">
                    <h3>{event.title}</h3>
                    <p>Association: {event.association}</p>
                    <p>Date: {event.date}</p>
                    <p>Status: {event.status}</p>
                    <div className="event-card-actions">
                        {mode === 'my' ? (
                            <button>Update Progress →</button>
                        ) : (
                            <button>View Details 👁</button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventList;
