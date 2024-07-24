import React from 'react';
import toonData from '../data-toons.jsx'

const Party = () => {
    return (
        <div>
            <h1>Meet the Gang</h1>
            <toonData data={toonData} />
        </div>
    );
}

export default Party;