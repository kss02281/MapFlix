import React, { memo, useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from "react-simple-maps";
import { useHistory } from "react-router";

import { useDispatch } from "react-redux";
import { getTopContentList } from '../Redux/actions/topContentList' 

import MapHover from "./MapHover";
import MapHoverNodata from "./MapHoverNodata";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

function colorScale(Status) {
  if (Status === "1") {
    return "rgb(5, 150, 105)";
  } else if (Status === "2") {
    return "rgb(245, 158, 11)";
  } else if (Status === "3") {
    return "rgb(220, 38, 38)";
  } else {
    return "gray";
  }
}

const MapChart = ({ setTooltipContent }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    csv(`/vulnerability.csv`).then((data) => {
      setData(data);
    });
  }, []);

  const history = useHistory();
  return (
    <>
      <ComposableMap
        width={400}
        height={130}
        data-tip=""
        projectionConfig={{
          scale: 40,
        }}
      >
        <Sphere stroke="#ffffff" strokeWidth={0.5} />
        <Graticule stroke="#ffffff" strokeWidth={0.5} />
        {data.length > 0 && (
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                console.log();
                const d = data.find((s) => s.ISO3 === geo.properties.ISO_A3);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={d ? colorScale(d["Status"]) : "gray"}
                    onClick={(Status) => {
                      const { NAME, ISO_A2 } = geo.properties;
                      console.log(NAME, ISO_A2);
                      if (d["Status"] === "1") {
                        dispatch(getTopContentList({nationCode: ISO_A2.toLowerCase()}))
                        history.push(`/timeLine/nationInfo?nation=${NAME}&nationCode=${ISO_A2.toLowerCase()}`)

                      }
                    }}
                    onMouseEnter={() => {
                      const { NAME, ISO_A2 } = geo.properties;
                      console.log(NAME, ISO_A2);
                      if (d["Status"] === "1") {
                        setTooltipContent(
                          <MapHover
                            nationName={NAME}
                            nationCode={ISO_A2.toLowerCase()}
                          ></MapHover>
                        );
                      } else if (d["Status"] === "3" || d["Status"] === "2") {
                        setTooltipContent(
                          <MapHoverNodata
                            nationName={NAME}
                            nationCode={ISO_A2.toLowerCase()}
                          ></MapHoverNodata>
                        );
                      }
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={{
                      hover: {
                        fill: "#F53",
                        outline: "none",
                        cursor: "pointer",
                      },
                      default: {
                        outline: "none",
                      },
                      pressed: {
                        outline: "none",
                        cursor: "pointer",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        )}
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
