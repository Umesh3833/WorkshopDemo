import React from 'react';

function Speakers({ speakers }) {
  return (
    <section className="speakers-section container">
        <h2 className="text-center mb-4">Speakers</h2>
        <div className="row">
            {speakers.map((speaker, index) => (
                <div key={index} className="col-md-6 col-lg-4 mb-4">
                    <div className="speaker-card p-4 text-center">
                        <img src={speaker.imageUrl} alt={speaker.name} className="img-fluid rounded-circle mb-3" />
                        <h3><a href={speaker.link} target="_blank" rel="noopener noreferrer">{speaker.name}</a></h3>
                        <p>{speaker.bio}</p>
                        <p><em>{speaker.college}</em></p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
}

export default Speakers;