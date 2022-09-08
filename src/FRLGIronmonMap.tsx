import React from "react";
import FullKanto from "./assets/FullKanto.png";
import FullKantoPaths from "./assets/FullKantoPaths.png";
import "./FRLGIronmonMap.css";
import { MapInteractionCSS } from "react-map-interaction";
import { ControlPanel, Trainer, Item, MapPortal } from "./components";
import { BoundingBoxCoords, items, trainers, portalGroups } from "./data";
import { useAppSelector } from "./state";

export const DEBUG_MODE = false;

export interface MapInteractionCSSValue {
  scale: number;
  translation: BoundingBoxCoords;

  // Translation directions
  // Move map "up": decrease y
  // Move map "down": increase y
  // Move map "right": increase x
  // Move map "left": decrease x
}

export const FRLGIronmonMap = () => {
  const [mapData, setMapData] = React.useState<MapInteractionCSSValue>({
    scale: 1,
    translation: { x: 0, y: 0 },
  });

  const showRoutes = useAppSelector((state) => state.settings).showRoutes;

  const offsetMapCoords = React.useCallback(
    (x: number, y: number) => {
      setMapData((value: MapInteractionCSSValue) => {
        return {
          ...value,
          translation: {
            x: value.translation.x + x,
            y: value.translation.y + y,
          },
        };
      });
    },
    [setMapData]
  );

  return (
    <div className="ironmon-map">
      <ControlPanel />
      <MapInteractionCSS
        value={mapData}
        onChange={(value: MapInteractionCSSValue) => {
          setMapData(value);
        }}
        maxScale={100}
      >
        <div
          id="portal-label-container"
          className="react-portal-container"
        ></div>
        <div id="tooltip-container" className="react-portal-container"></div>
        {/* TODO: can we get the height and width from the image? Think "FullKanto" is just the string though */}
        {/* if so, then put into variables */}
        <img
          width="7700"
          height="6400"
          src={FullKanto}
          alt="Full Kanto"
          className="full-map-img"
        ></img>
        <img
          width="7700"
          height="6400"
          alt="All Routes"
          className={`full-map-img ${
            showRoutes ? "routes-visible" : "routes-hidden"
          }`}
          src={FullKantoPaths}
        ></img>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="7700"
          height="6400"
          className="svg-container"
        >
          {trainers.map((trainer, index) => {
            return (
              <Trainer
                key={trainer.name.split(" ").join("") + "-" + index}
                {...trainer}
              />
            );
          })}
          {items.map((item, index) => {
            return <Item key={"item-" + index} {...item} />;
          })}
          {portalGroups.map((portalGroup) => {
            return portalGroup.portals.map((portal, portalIndex) => (
              <MapPortal
                key={"portal-" + portalIndex}
                index={portalIndex + 1}
                scale={mapData.scale}
                offsetMapCoords={offsetMapCoords}
                color={portalGroup.color}
                {...portal}
              />
            ));
          })}
        </svg>
      </MapInteractionCSS>
    </div>
  );
};
