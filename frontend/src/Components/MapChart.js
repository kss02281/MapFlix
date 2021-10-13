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
                      const { NAME, POP_EST } = geo.properties;
                      const countryName = {
                        display: "inline-block",
                        boder: "1px solid black",
                        fontSize: "35px",
                        marginBottom: "6px",
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
                            <div style={{backgroundColor: "white", color:'black'}}>
                              <div style={number}>6</div>
                              <div style={text}>Subscibes</div>
                              <div style={text2}>67.28M</div>
                              <div style={image}>
                                <img src="https://han.gl/kF7Bm" width="150px" alt=""/>
                              </div>
                            </div>
                            <hr style={line}></hr>
                            <div style={{backgroundColor: "white", color:'black', fontSize:'2em'}}>
                              <p className='hover' style={{marginTop:'50px'}}>nation name</p>
                              <p className='hover' style={{padding: '5px'}}>{NAME}</p>
                              <p className='hover'>{rounded(POP_EST)}</p>
                            </div>
                          </div>
                        </div>
                      );
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
