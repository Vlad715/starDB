import React from 'react';

import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndificator = () => {
    return ( 
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            <span className="boom">BOOM!</span>
            <span>
                Something has gone terribly wrong
            </span>
            <span>
                (but we already send droids to fix it )
            </span>
        </div>
    );
};

export default ErrorIndificator;
