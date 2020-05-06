import React from 'react';
import './Fretboard.css';

const Fret = props => {
    return (
        <div className="fret">
            { props.notes.map((note, index) => {
                return <div className="note" key={index}>{note}</div>;
              })
            }
        </div>
    );
};

const Fretboard = props => {
    return (
        <div>
            { props.fretboardNotes.map((fretNotes, index) => {
                return <Fret key={index} notes={fretNotes} />;
              })
            }
        </div>
    );
}

export default Fretboard;