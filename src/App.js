import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Speakers from './Speakers';
import Schedule from './Schedule';
import {speakers,events} from './Constants'

function App() {
 
  return (
    <div>
      <Header />
      <Speakers speakers={speakers} />
      <Schedule events={events} />
      <footer className="text-center mt-4 p-4">
        <p>Contact us at [email address] for more information.</p>
      </footer>
    </div>
  );
}

export default App;