import React from "react";
import "../css/MapHoverRedGray.scss";

function MapHoverRedGray(props) {
  const nationName = props.nationName;
  return (
    <div className="MapHoverRedGray_Wrap">
      <div className="countryName">{nationName}</div>
    </div>
  );
}

export default MapHoverRedGray;
