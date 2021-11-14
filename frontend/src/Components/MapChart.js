import React, { memo, useEffect, useState } from 'react';
import { csv } from 'd3-fetch';
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from 'react-simple-maps';
import { useHistory } from 'react-router';
import MapHoverGreen from './MapHoverGreen';
import MapHoverYellow from './MapHoverYellow';
import MapHoverRedGray from './MapHoverRed';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

function colorScale(Status) {
  if (Status === '1') {
    return 'rgb(5, 150, 105)';
  } else if (Status === '2') {
    return 'rgb(245, 158, 11)';
  } else if (Status === '3') {
    return 'rgb(220, 38, 38)';
  } else {
    return '#aaaaaa';
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

  var timer;
  var hoverCheck = false;

  return (
    <>
      <ComposableMap
        width={300}
        height={130}
        data-tip=""
        projectionConfig={{
          scale: 40,
        }}
      >
        <Sphere stroke="rgba(233, 221, 221, 0.781)" strokeWidth={0.5} />
        <Graticule stroke="rgba(233, 221, 221, 0.781)" strokeWidth={0.5} />
        {data.length > 0 && (
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const d = data.find((s) => s.ISO3 === geo.properties.ISO_A3);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={d ? colorScale(d['Status']) : '#ffffff'}
                    onClick={(Status) => {
                      const { NAME, ISO_A2 } = geo.properties;
                      if (d['Status'] === '1' || d['Status'] === '2') {
                        history.push(`/timeLine/nationInfo?nation=${NAME}&nationCode=${ISO_A2.toLowerCase()}`);
                      }
                    }}
                    onMouseEnter={() => {
                      hoverCheck = true;
                      if (timer) {
                        clearTimeout(timer);
                      }
                      timer = setTimeout(function () {
                        const { NAME, ISO_A2 } = geo.properties;
                        if (hoverCheck == true) {
                          if (d['Status'] === '1') {
                            setTooltipContent(<MapHoverGreen nationName={NAME} nationCode={ISO_A2.toLowerCase()}></MapHoverGreen>);
                          } else if (d['Status'] === '3' || d['Status'] === '4') {
                            setTooltipContent(<MapHoverRedGray nationName={NAME} nationCode={ISO_A2.toLowerCase()}></MapHoverRedGray>);
                          } else if (d['Status'] === '2') {
                            setTooltipContent(<MapHoverYellow nationName={NAME} nationCode={ISO_A2.toLowerCase()}></MapHoverYellow>);
                          }
                        }
                      }, 50);
                    }}
                    onMouseLeave={() => {
                      hoverCheck = false;
                      setTooltipContent('');
                    }}
                    style={{
                      hover: {
                        fill: '#F53',
                        outline: 'none',
                        cursor: 'none',
                      },
                      default: {
                        outline: 'none',
                      },
                      pressed: {
                        outline: 'none',
                        cursor: 'pointer',
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
