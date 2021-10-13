import React, { useState, useEffect, useMemo, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import "../css/MapHover.scss";

function MapHoverNodata(props) {
  const nationName = props.nationName;
  const nationCode = props.nationCode;
  return (
    <div>
      <div className="countryName">{nationName}</div>
      <div className="hover_Wrap">
        <div className="noData">No Data</div>
      </div>
    </div>
  );
}

export default MapHoverNodata;
