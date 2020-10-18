import React, { useEffect } from "react";
import { useState } from "react";
import DeveloperCard from "../DeveloperCard";
import GradientButton from "../GradientButton";
import GradientText from "../GradientText";
import "./index.css";

export default ({
  developers,
  fetchAllDevelopers,
  addDeveloper,
  deleteDeveloper,
}) => {
  useEffect(() => {
    // Make API call to fetch all developers after mount
    debugger;
    fetchAllDevelopers();
  }, [fetchAllDevelopers]);

  // const [id, setId] = useState(10);

  return (
    <>
      <div className="DeveloperList-header">
        <div className="DeveloperList-header-text">
          <GradientText firstText="Featured" secondText="Developers" />
          <span>Prominent developers in Bangalore</span>
        </div>
        <GradientButton name="Add New Developer" showPlusIcon />
      </div>

      {/* <ul className="DeveloperList">
        {developers.map((item) => (
          <li key={item.id}>
            {item.title}-{item.id}
          </li>
        ))}
      </ul> */}

      <div className="DeveloperList-container">
        {developers.map(dev => <DeveloperCard developer={dev} key={dev.id}/>)}
      </div>

      {/* <button
        onClick={() =>
          addDeveloper({ title: "Altran Inc.", location: "Gurgaon" })
        }
      >
        Add Developer
      </button>

      <input value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => deleteDeveloper(id)}>Delete Developer</button> */}
    </>
  );
};
