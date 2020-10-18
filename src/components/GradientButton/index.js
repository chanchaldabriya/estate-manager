import React from 'react';
import './index.css';

export default ({name="Button", onClick, showPlusIcon=false}) => {
    return (
        <button className="GradientButton" onClick={onClick}>{`+ ${name}`}</button>
    );
};