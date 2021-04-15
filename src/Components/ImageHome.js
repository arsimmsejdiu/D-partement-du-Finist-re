import React from 'react';
import about from '../img/Carte-du-Finistere_full.png';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
        </div>
    )
}

export default ImageSection;
