import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Speakers from './Speakers';
import Schedule from './Schedule';
import Venue from './Venue'
import {speakers,events} from './Constants'

function App() {
 
  return (
    <div>
      <Header />
      <Venue />
      <Speakers speakers={speakers} />
      <Schedule events={events} />
      <footer className="text-center mt-4 p-4">
        <p className="lead">Organizer: Sharayu Moharir</p>
        <p>Contact: sharayu.moharir@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;