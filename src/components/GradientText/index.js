import React from 'react';
import './index.css';

export default ({firstText="Gradient", secondText="Text"}) => {
    return (
        <span className="GradientText">
            <span className="GradientText-1">{firstText}</span>
            <span className="GradientText-2">{secondText}</span>
        </span>
    );
};