import React, { useState } from 'react';

function Schedule({ events }) {
  const [openAbstractIndex, setOpenAbstractIndex] = useState(-1);  // Initialize with -1 to indicate no abstract is open

  const toggleAbstract = (index) => {
    // Toggle between showing and hiding the abstract by checking if it's already open
    setOpenAbstractIndex(openAbstractIndex === index ? -1 : index);
  };

  return (
    <section className="schedule-section container">
      <h2 className="text-center mb-4">Event Schedule</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Speaker/Session</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <React.Fragment key={index}>
              <tr onClick={() => toggleAbstract(index)}>
                <td>{event.time}</td>
                <td>{event.speaker}</td>
                <td>
                  {event.title}
                  {event.abstract && <span className="dropdown-indicator">&#9660;</span>}
                </td>
              </tr>
              {openAbstractIndex === index && event.abstract && (
                <tr className="abstract-details">
                  <td colSpan="3">
                    <strong>Abstract:</strong>
                    <p>{event.abstract}</p>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Schedule;