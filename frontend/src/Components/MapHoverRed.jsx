import React, { useState, useEffect, useMemo, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import "../css/MapHoverRedGray.scss";

function MapHoverRedGray(props) {
  const nationName = props.nationName;
  const nationCode = props.nationCode;
  return (
    <div className="MapHoverRedGray_Wrap">
      <div className="countryName">{nationName}</div>
    </div>
  );
}

export default MapHoverRedGray;
