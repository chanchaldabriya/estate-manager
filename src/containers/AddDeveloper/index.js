import React, { useState } from "react";
import { connect } from "react-redux";
import { addDeveloper } from "../../actions";
import GradientText from "../../components/GradientText";
import GradientButton from "../../components/GradientButton";
import "./index.css";

const AddDeveloper = ({ dispatch }) => {
  /* Developer data */
  const [developerData, setDeveloperData] = useState({
    logo: "",
    title: "",
    totalExp: 0,
    totalProjects: 0,
    desc: "",
    imgTitle: "",
    location: "",
    imgURL: "",
  });

  /* Local form field creator function */
  const formField = (label, value, placeholder, name, type = "text") => {
    return (
      <div className="AddDeveloper-formField">
        <label className="AddDeveloper-label">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          className="AddDeveloper-input"
          name={name}
          value={value}
          onChange={(e) => {
            const { name, value } = e.target;
            setDeveloperData({
              ...developerData,
              [name]: value,
            });
          }}
        />
      </div>
    );
  };

  return (
    <form className="AddDeveloper">
      <GradientText firstText="Featured" secondText="Developers" />

      {/* Form fields */}
      {formField(
        "Developer Logo Image URL",
        developerData["logo"],
        "Enter logo image URL",
        "logo"
      )}

      {formField(
        "Developer name",
        developerData["title"],
        "Enter developer name",
        "title",
        "text",
        true
      )}

      {formField(
        "Years of experience.",
        developerData["totalExp"],
        "Enter total years of experience",
        "totalExp",
        "number"
      )}

      {formField(
        "Projects count",
        developerData["totalProjects"],
        "Enter number of projects",
        "totalProjects",
        "number"
      )}

      {formField(
        "Description",
        developerData["desc"],
        "Enter developer description",
        "desc"
      )}

      {formField(
        "Project name",
        developerData["imgTitle"],
        "Enter project name",
        "imgTitle"
      )}

      {formField(
        "Project location",
        developerData["location"],
        "Enter project location",
        "location"
      )}

      {formField(
        "Project image URL",
        developerData["imgURL"],
        "Enter project image URL",
        "imgURL"
      )}

      <GradientButton
        name="Add"
        style={{ padding: 10, width: "100%" }}
        onClick={() => dispatch(addDeveloper(developerData))}
        disabled={developerData["title"].length === 0}
      />
    </form>
  );
};

export default connect()(AddDeveloper);
