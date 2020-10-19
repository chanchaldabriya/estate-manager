import React from "react";
import { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

export default ({ deleteDev, developer }) => {
  let history = useHistory();

  const {
    logo,
    imgURL,
    imgTitle,
    title,
    totalExp,
    totalProjects,
    desc,
    location,
    id,
  } = developer;

  const statComponent = (data, info) => {
    return (
      <div className="Stat">
        <span className="Stat-data">{data}</span>
        <span className="Stat-info">{info}</span>
      </div>
    );
  };

  const [showContextMenu, setShowContextMenu] = useState(false);

  return (
    <div
      className="DeveloperCard"
      onMouseOverCapture={() => setShowContextMenu(true)}
      onMouseLeave={() => setShowContextMenu(false)}
    >
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

      {showContextMenu && (
        <div className="DeveloperCard-contextMenu">
          <button
            className="DeveloperCard-contextMenu-btn"
            onClick={() => history.push(`/edit/${id}`)}
          >
            <FontAwesomeIcon
              icon={faEdit}
              color="white"
              className="DeveloperCard-contextMenu-btn-icon editIcon"
            />
            <span className="DeveloperCard-contextMenu-btn-text">Edit</span>
          </button>

          <button
            className="DeveloperCard-contextMenu-btn"
            onClick={() => deleteDev(id)}
          >
            <FontAwesomeIcon
              icon={faTrash}
              color="white"
              className="DeveloperCard-contextMenu-btn-icon deleteIcon"
            />
            <span className="DeveloperCard-contextMenu-btn-text">Delete</span>
          </button>
        </div>
      )}
    </div>
  );
};
