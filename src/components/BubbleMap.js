import React from "react";
import "../App.css";
import {HeatmapLayer, LayerEvent, MapboxScene, PointLayer, PolygonLayer, Popup} from "@antv/l7-react";

const colors =
  ['#f7fcf0','#e0f3db','#ccebc5','#a8ddb5','#7bccc4','#4eb3d3','#2b8cbe','#08589e'];
function joinData(geodata, ncovData) {
  const ncovDataObj = {};
  ncovData.forEach((item) => {
    const {
      countryName,
      countryEnglishName,
      currentConfirmedCount,
      confirmedCount,
      suspectedCount,
      curedCount,
      deadCount,
    } = item;
    if (countryName === '中国') {
      if (!ncovDataObj[countryName]) {
        ncovDataObj[countryName] = {
          countryName,
          countryEnglishName,
          currentConfirmedCount: 0,
          confirmedCount: 0,
          suspectedCount: 0,
          curedCount: 0,
          deadCount: 0,
        };
      } else {
        ncovDataObj[countryName].currentConfirmedCount += currentConfirmedCount;
        ncovDataObj[countryName].confirmedCount += confirmedCount;
        ncovDataObj[countryName].suspectedCount += suspectedCount;
        ncovDataObj[countryName].curedCount += curedCount;
        ncovDataObj[countryName].deadCount += deadCount;
      }
    } else {
      ncovDataObj[countryName] = {
        countryName,
        countryEnglishName,
        currentConfirmedCount,
        confirmedCount,
        suspectedCount,
        curedCount,
        deadCount,
      };
    }
  });
  const geoObj = {};
  geodata.features.forEach((feature) => {
    const { name } = feature.properties;
    geoObj[name] = feature.properties;
    const ncov = ncovDataObj[name] || {};
    feature.properties = {
      ...feature.properties,
      ...ncov,
    };
  });
  return geodata;
}

const BubbleMap = React.memo(function Map(props) {
  const [data, setData] = React.useState();
  const [filldata, setfillData] = React.useState();
  const [popupInfo, setPopupInfo] = React.useState();
  React.useEffect(() => {
    const fetchData = async () => {
      const [geoData, ncovData, gridData] = await Promise.all([
        fetch(
          'https://gw.alipayobjects.com/os/bmw-prod/e62a2f3b-ea99-4c98-9314-01d7c886263d.json',
        ).then((d) => d.json()),
        // https://lab.isaaclin.cn/nCoV/api/area?latest=1
        fetch(
          'https://gw.alipayobjects.com/os/bmw-prod/55a7dd2e-3fb4-4442-8899-900bb03ee67a.json',
        ).then((d) => d.json()),
        fetch(
          'https://gw.alipayobjects.com/os/bmw-prod/8990e8b4-c58e-419b-afb9-8ea3daff2dd1.json',
        ).then((d) => d.json()),
      ]);
      const worldData = joinData(geoData, ncovData.results);
      const pointdata = worldData.features.map((feature) => {
        return feature.properties;
      });
      setfillData(gridData);
      setData(pointdata);
    };
    fetchData();
  }, []);
  function showPopup(args) {
    setPopupInfo({
      lnglat: args.lngLat,
      feature: args.feature,
    });
  }

  return (
    <>
      <MapboxScene
        map={{
          center: [110.19382669582967, 50.258134],
          pitch: 0,
          style: 'blank',
          zoom: 1,
        }}
        style={{
          width: '100%',
          height: '400px'
        }}
      >
        {popupInfo && (
          <Popup lnglat={popupInfo.lnglat}>
            {popupInfo.feature.countryEnglishName}
            <ul
              style={{
                margin: 0,
              }}
            >
              <li>Current Confirmed:{popupInfo.feature.currentConfirmedCount}</li>
              <li>Total Confirmed:{popupInfo.feature.confirmedCount}</li>
              <li>Cured:{popupInfo.feature.curedCount}</li>
              <li>Dead:{popupInfo.feature.deadCount}</li>
            </ul>
          </Popup>
        )}
        {data && [
          <HeatmapLayer
            key={'1'}
            source={{
              data: filldata,
              transforms: [
                {
                  type: 'hexagon',
                  size: 500000,
                  field: 'capacity',
                  method: 'sum',
                },
              ],
            }}
            color={{
              values: 'rgb(221,230,238)',
            }}
            shape={{
              values: 'hexagon',
            }}
            style={{
              coverage: 0.7,
              angle: 0.3,
              opacity: 0.8,
            }}
          />,
          <PointLayer
            key={'2'}
            options={{
              autoFit: true,
            }}
            source={{
              data,
              parser: {
                type: 'json',
                coordinates: 'centroid',
              },
            }}
            scale={{
              values: {
                confirmedCount: {
                  type: 'log',
                },
              },
            }}
            color={{
              field: 'confirmedCount',
              values: (count) => {
                return count > 100000
                ? colors[7]
                : count > 50000
                  ? colors[6]
                  : count > 10000
                    ? colors[5]
                    : count > 5000
                      ? colors[4]
                      : count > 1000
                        ? colors[3]
                        : count > 100
                          ? colors[2]
                          : count > 1
                            ? colors[1]
                            : colors[0];
              },
            }}
            shape={{
              values: 'circle',
            }}
            active={{
              option: {
                color: '#0c2c84',
              },
            }}
            size={{
              field: 'confirmedCount',
              values: [0, 25],
            }}
            style={{
              opacity: 0.6,
            }}
          >
            <LayerEvent type="mousemove" handler={showPopup} />
            <LayerEvent type="click" handler={
              (item) => {
                console.log(item.feature);
                props.parent.getChildrenMsg(this, item.feature.countryEnglishName);
              }
            } />
          </PointLayer>,
        ]}
      </MapboxScene>
    </>
  );
});

export default BubbleMap;