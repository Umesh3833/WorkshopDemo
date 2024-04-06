import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Make sure this CSS file is in the src folder

function App() {
  return (
    <div>
      <header className="header-section text-center">
        <h1 className="my-4">Your Event Title</h1>
        <p className="lead">A brief tagline or description of the event</p>
      </header>

      <section className="speakers-section container my-5">
        <h2 className="text-center mb-4">Speakers</h2>
        <div className="row">
          {/* Example Speaker Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="speaker-card p-4 text-center">
              <img src="https://via.placeholder.com/150" alt="Speaker" className="img-fluid mb-3 rounded-circle" />
              <h3 className="speaker-name">Speaker Name</h3>
              <p className="speaker-info">Speaker's Title or Affiliation</p>
            </div>
          </div>
          {/* Repeat for other speakers */}
        </div>
      </section>

      <section className="itinerary-section container my-5">
        <h2 className="text-center mb-4">Event Schedule</h2>
        <ul className="timeline-list">
          <li className="timeline-item">
            <span className="timeline-time">09:00 AM -</span>
            <span className="timeline-event">Opening Remarks</span>
          </li>
          <li className="timeline-item">
            <span className="timeline-time">10:00 AM -</span>
            <span className="timeline-event">Talk by Speaker 1: Topic</span>
          </li>
          {/* Repeat for other timeline items */}
        </ul>
      </section>
    </div>
  );
}

export default App;