import React from "react";
import "./index.css";

export default ({ developer = {} }) => {
  const {
    logo,
    imgURL,
    imgTitle,
    title,
    totalExp,
    totalProjects,
    desc,
    location,
  } = developer;

  const statComponent = (data, info) => {
    return (
      <div className="Stat">
        <span className="Stat-data">{data}</span>
        <span className="Stat-info">{info}</span>
      </div>
    );
  };

  return (
    <div className="DeveloperCard">
      <div className="DeveloperCard-header">
        <img
          className="DeveloperCard-logo"
          src={logo}
          alt="developer-logo"
        ></img>
        <div className="DeveloperCard-info">
          <h3 className="DeveloperCard-title">{title}</h3>
          <div className="DeveloperCard-exp">
            {statComponent(totalExp, "Years Exp.")}
            {statComponent(totalProjects, "Projects")}
          </div>
        </div>
      </div>

      <p className="DeveloperCard-desc line-clamp">{desc}</p>

      <div className="DeveloperCard-location">
        <span className="DeveloperCard-location-title">{imgTitle}</span>
        <div
          className="DeveloperCard-location-img"
          style={{
            background: `url(${imgURL}) center center/cover no-repeat`,
          }}
        >
          <div className="DeveloperCard-location-info">
            <span>{imgTitle}</span>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
