import React, { useEffect } from "react";
import { useState } from "react";
import DeveloperCard from "../DeveloperCard";
import GradientButton from "../GradientButton";
import GradientText from "../GradientText";
import "./index.css";
import { useHistory } from "react-router-dom";

export default ({
  developers,
  fetchAllDevelopers,
  addDeveloper,
  deleteDeveloper,
}) => {
  let history = useHistory();

  useEffect(() => {
    // Make API call to fetch all developers after mount
    debugger;
    fetchAllDevelopers();
  }, [fetchAllDevelopers]);

  return (
    <>
      <div className="DeveloperList-header">
        <div className="DeveloperList-header-text">
          <GradientText firstText="Featured" secondText="Developers" />
          <span>Prominent developers in Bangalore</span>
        </div>
        <GradientButton
          name="Add New Developer"
          showPlusIcon
          onClick={() => history.push("/add")}
        />
      </div>

      {/* <ul className="DeveloperList">
        {developers.map((item) => (
          <li key={item.id}>
            {item.title}-{item.id}
          </li>
        ))}
      </ul> */}

      <div className="DeveloperList-container">
        {developers.map((dev) => (
          <DeveloperCard
            developer={dev}
            key={dev.id}
            deleteDev={(id) => {debugger; deleteDeveloper(id)}}
          />
        ))}
      </div>

      <button
        onClick={() =>
          addDeveloper({ title: "Altran Inc.", location: "Gurgaon" })
        }
      >
        Add Developer
      </button>
    </>
  );
};
