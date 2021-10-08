import React, { memo, useEffect, useState } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import { scaleLinear } from "d3-scale";
import { csv } from "d3-fetch";
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleLinear()
  .domain([0.29, 0.68])
  .range(["#ffedea", "#ff5233"]);

const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

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
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const d = data.find((s) => s.ISO3 === geo.properties.ISO_A3);
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d["2017"]) : "#F5F4F6"}
                  onClick={() => {
                    const { NAME } = geo.properties;
                    console.log(NAME);
                    history.push({
                      pathname: "/timeLine",
                      props: { nation: NAME },
                    });
                  }}
                  onMouseEnter={() => {
                    const { NAME, POP_EST } = geo.properties;
                    const countryName = {
                      display: "inline-block",
                      boder: "1px solid black",
                      fontSize: "35px",
                      marginBottom: "6px",
                    };
                    const mapBox = {
                      display: "grid",
                      width: "250px",
                      height: "250px",
                      boder: "1px solid black",
                      fontSize: "20px",
                      marginBottom: "6px",
                      backgroundColor: "yellow",
                      color: "black",
                      gridTemplateRows: "35px 40px 1fr",
                      gridTemplateColumns: "70px 1fr",
                    };
                    const container = {
                      display: "grid",
                      gridTemplateColumns: "1fr 10px 1fr",
                      gridGap: "10px",
                    };
                    const number = {
                      fontSize: "60px",
                      gridRow: "1/3",
                      textAlign: "center",
                      margin: "0",
                    };
                    const text = {
                      fontSize: "25px",
                      justifySelf: "end",
                      marginRight: "10px",
                    };
                    const text2 = {
                      justifySelf: "end",
                      marginRight: "10px",
                      fontWeight: "bold",
                    };
                    const image = {
                      alignSelf: "end",
                    };
                    const line = {
                      height: "235px",
                    };
                    setTooltipContent(
                      <div>
                        <div style={countryName}>{NAME}</div>
                        <div style={container}>
                          <div style={mapBox}>
                            <div style={number}>6</div>
                            <div style={text}>Subscibes</div>
                            <div style={text2}>67.28M</div>
                            <div style={image}>
                              <img src="https://han.gl/kF7Bm" width="150px" />
                            </div>
                          </div>
                          <hr style={line}></hr>
                          <div style={mapBox}>
                            <div>asd</div>
                            {NAME} ㅁㄴㅇㅁㄴㅇ {rounded(POP_EST)}
                          </div>
                        </div>
                      </div>
                    );
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  // style={{
                  //   default: {
                  //     // fill: "#D6D6DA",
                  //     fill: "#000",
                  //     outline: "none",
                  //   },
                  //   hover: {
                  //     // fill: "#F53",
                  //     fill: "#fff",
                  //     outline: "none",
                  //   },
                  //   pressed: {
                  //     // fill: "#E42",
                  //     fill: "#333",
                  //     outline: "none",
                  //   },
                  // }}
                />;
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
