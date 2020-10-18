import React from 'react';
import './index.css';

export default ({name="Button", onClick, showPlusIcon=false}) => {
    return (
        <button className={`GradientButton ${showPlusIcon ? "withPlus" : ""}`} onClick={onClick}>{name}</button>
    );
};