import React, { memo, useEffect, useState } from "react";
import { csv } from "d3-fetch";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from "react-simple-maps";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { getTopContentList } from "../Redux/actions/topContentList";

import MapHoverGreen from "./MapHoverGreen";
import MapHoverYellow from "./MapHoverYellow";
import MapHoverRedGray from "./MapHoverRed";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

function colorScale(Status) {
  if (Status === "1") {
    return "rgb(5, 150, 105)";
  } else if (Status === "2") {
    return "rgb(245, 158, 11)";
  } else if (Status === "3") {
    return "rgb(220, 38, 38)";
  } else {
    return "#aaaaaa";
  }
}

const MapChart = ({ setTooltipContent }) => {
  const [data, setData] = useState([]);

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
                    fill={d ? colorScale(d["Status"]) : "#ffffff"}
                    onClick={(Status) => {
                      const { NAME, ISO_A2 } = geo.properties;
                      console.log(NAME, ISO_A2);
                      if (d["Status"] === "1" || d["Status"] === "2") {
                        history.push(
                          `/timeLine/nationInfo?nation=${NAME}&nationCode=${ISO_A2.toLowerCase()}`
                        );
                      }
                    }}
                    onMouseEnter={() => {
                      const { NAME, ISO_A2 } = geo.properties;
                      console.log(NAME, ISO_A2);
                      if (d["Status"] === "1") {
                        setTooltipContent(
                          <MapHoverGreen
                            nationName={NAME}
                            nationCode={ISO_A2.toLowerCase()}
                          ></MapHoverGreen>
                        );
                      } else if (d["Status"] === "3" || d["Status"] === "4") {
                        setTooltipContent(
                          <MapHoverRedGray
                            nationName={NAME}
                            nationCode={ISO_A2.toLowerCase()}
                          ></MapHoverRedGray>
                        );
                      } else if (d["Status"] === "2") {
                        setTooltipContent(
                          <MapHoverYellow
                            nationName={NAME}
                            nationCode={ISO_A2.toLowerCase()}
                          ></MapHoverYellow>
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
