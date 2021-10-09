import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

<<<<<<< HEAD
// import "./styles.css";

=======
>>>>>>> 36d63709442af201f742dba13a7cf286ceffd47a
import MapChart from "./MapChart";

function Map() {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default Map;
