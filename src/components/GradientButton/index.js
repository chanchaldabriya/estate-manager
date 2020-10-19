import React from "react";
import "./index.css";

export default ({ name = "Button", showPlusIcon = false, ...otherProps }) => {
  return (
    <button
      className={`GradientButton ${showPlusIcon ? "withPlus" : ""}`}
      {...otherProps}
    >
      {name}
    </button>
  );
};
