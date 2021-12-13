import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import MapHoverRedGray from './MapHoverRed';
import MapChart from "./MapChart";
import '../css/tooltip.scss';

function Map() {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip  class="reactTooltip" arrowColor="transparent">{content}</ReactTooltip>
    </div>
  );
}

export default Map;
