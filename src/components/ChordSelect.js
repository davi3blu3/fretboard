import React from 'react';

const ChordSelect = props => {

    const majorTriadFromRoot = root => {
        const rootIndex = props.scale.indexOf(root);
        const thirdIndex = (rootIndex + 4) > 11 ? rootIndex - 8 : rootIndex + 4;
        const fifthIndex = (rootIndex + 7) > 11 ? rootIndex - 5 : rootIndex + 7;
        return `${props.scale[rootIndex]} - ${props.scale[thirdIndex]} - ${props.scale[fifthIndex]}`;
    };

    return (
        <div>
            <div>Notes of C Major triad are:</div>
            <div>{majorTriadFromRoot('E')}</div>
        </div>
    );
};

export default ChordSelect;