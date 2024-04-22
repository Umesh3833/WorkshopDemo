import React, { useState, useRef, useEffect } from 'react';

function Speakers({ speakers }) {
    const [expandedBioIndex, setExpandedBioIndex] = useState(null);
    const [height, setHeight] = useState(0);  // To store dynamic content height
    const contentRefs = useRef([]);  // To store references to each bio content div

    const toggleBio = (index) => {
        if (expandedBioIndex === index) {
            setExpandedBioIndex(null);
            setHeight(0);  // Collapse the section
        } else {
            setExpandedBioIndex(index);
            setHeight(contentRefs.current[index].scrollHeight);  // Dynamically get height for smooth animation
        }
    };

    // Ensure the height adjusts when the index changes
    useEffect(() => {
        if (expandedBioIndex !== null) {
            setHeight(contentRefs.current[expandedBioIndex].scrollHeight);
        }
    }, [expandedBioIndex]);

    return (
        <section className="speakers-section container">
            <h2 className="text-center mb-4">Speakers</h2>
            <div className="row">
                {speakers.map((speaker, index) => (
                    <div key={index} className="col-md-6 col-lg-4 mb-4">
                        <div className="speaker-card p-4 text-center" onClick={() => toggleBio(index)}>
                            <img src={speaker.imageUrl} alt={speaker.name} className="img-fluid rounded-circle mb-3" />
                            <h3 onClick={(e) => e.stopPropagation()}>
                                <a href={speaker.link} target="_blank" rel="noopener noreferrer">
                                    {speaker.name}
                                </a>
                            </h3>
                            <div
                                ref={el => contentRefs.current[index] = el}  // Assign ref
                                style={{ maxHeight: expandedBioIndex === index ? `${height}px` : "0", overflow: 'hidden', transition: 'max-height 0.5s ease' }}
                                className="bio-content"
                            >
                                <p>{speaker.bio}</p>

                            </div>
                            <p><em>{speaker.college}</em></p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Speakers;