import React, { useState } from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

function Schedule({ events }) {
  const [openAbstractIndex, setOpenAbstractIndex] = useState(-1);

  const toggleAbstract = (index) => {
    setOpenAbstractIndex(openAbstractIndex === index ? -1 : index);
  };

  // Function to replace LaTeX expressions with TeX component
  const renderLatex = (text) => {
    // Split text at each $, capturing the contents between them
    const parts = text.split(/(\$.+?\$)/g);
    return parts.map((part, index) => {
      // Check if the part is a LaTeX expression enclosed by $
      if (part.startsWith('$') && part.endsWith('$')) {
        // Remove the $ delimiters and render using TeX component
        const latex = part.slice(1, -1).replace(/\\(.)/g, "\\$1"); // Ensure backslashes are correctly escaped
        return <TeX key={index} math={latex} />;
      }
      return part; // Normal text is returned directly
    });
  };
  return (
    <section className="schedule-section">
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
                  <p>
                    {event.abstract && <span className={openAbstractIndex === index ? "dropdown-indicator open" : "dropdown-indicator"}>&#9660;</span>}
                  </p>
                </td>
              </tr>
              {openAbstractIndex === index && event.abstract && (
              
                 <tr className="abstract-details">
                 <td colSpan="3">
                   <strong>Abstract:</strong>
                   <p>{renderLatex(event.abstract)}</p>
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
