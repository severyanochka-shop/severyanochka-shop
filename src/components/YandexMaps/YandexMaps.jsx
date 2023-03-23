import React, { useEffect, useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export const YandexMaps = ({ width, height, mapsData }) => {
  const [state, setState] = useState([59.93, 30.31]);
  const defaultState = { center: state, zoom: 10 };

  // const images = [...Array(26)].map((n, i) => {
  //   const letter = String.fromCharCode(i + 97);
  //   return 1;
  // });
  // let geocoder = YMaps.Geocoder("Москва");
  // console.log(YMaps.Geocoder);
  return (
    <YMaps onLoad={(ymaps) => console.log(ymaps)}>
      <Map defaultState={defaultState} width={width} height={height}>
        {/* {mapsData.map((el) => (
          <Placemark
            key={el.street}
            geometry={getCoord(el.street).geo_lat, }
            options={{
              iconLayout: "default#image",
              iconImageSize: [50, 50],
              iconImageHref: n,
            }}
          />
        ))} */}
      </Map>
    </YMaps>
  );
};
