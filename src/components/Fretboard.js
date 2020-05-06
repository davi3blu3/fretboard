import React from 'react';
import './Fretboard.css';

const Note = props => {
    return (
        <div>
            <div className="note" key={props.index}>{props.note}</div>
            <div className="string"></div>
        </div>        
    );
};

const Fret = props => {
    return (
        <div className="fret">
            { props.notes.map((note, index) => <Note note={note} index={index} />)}
        </div>
    );
};

const Fretboard = props => {
    return (
        <div>
            { props.fretboardNotes.map((fretNotes, index) => <Fret key={index} notes={fretNotes} />)}
        </div>
    );
}

export default Fretboard;