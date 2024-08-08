// import React from 'react';
import WatermarkImage from '../Watermark.svg'; // Import the SVG file
import '../App.scss';


const Watermark = () => {
    return (
        <div className="watermark">
            <img src={WatermarkImage} alt="Watermark" />
        </div>
    );
};

export default Watermark;