import React from 'react';
import GradientText from '../GradientText';
import GradientButton from '../GradientButton';
import './index.css';

const formField = (label, value, placeholder, type="text") => {
    return (
        <div className="AddDeveloper-formField">
            <label className="AddDeveloper-label">{label}</label>
            <input type={type} placeholder={placeholder} className="AddDeveloper-input" value={value} />
        </div>
    );
}

export default () => {
    return (
        <form className="AddDeveloper">
            <GradientText firstText="Featured" secondText="Developers" />

            {/* Form fields */}
            { formField("Developer Logo Image URL", "", "Enter logo image URL") }

            { formField("Developer name", "", "Enter developer name") }

            { formField("Years of experience.", "", "Enter total years of experience") }

            { formField("Projects count", "", "Enter number of projects") }

            { formField("Description", "", "Enter developer description") }

            { formField("Project name", "", "Enter project name") }

            { formField("Project location", "", "Enter project location") }

            { formField("Project image URL", "", "Enter project image URL") }

            <GradientButton name="Update" />
        </form>
    );
};