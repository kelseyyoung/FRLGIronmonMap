import { defaultPortalSize, MapPortalData } from "../data";
import { InteractablePolygon } from "./InteractablePolygon";
import React from "react";
import { PortalLabel } from "./PortalLabel";
import "./MapPortal.css";

export interface MapPortalProps extends MapPortalData {
  offsetMapCoords: (x: number, y: number) => void;
  index: number;
  scale: number;
  color: string;
  show?: boolean;
  showLines?: boolean;
}

export const MapPortal = (props: MapPortalProps) => {
  const {
    portal1,
    portal2,
    scale,
    offsetMapCoords,
    index,
    color,
    show,
    showLines,
  } = props;

  const [hovered, setHovered] = React.useState(false);

  const onPortal1Click = React.useCallback(() => {
    // Move map to portal2
    // Calculate distance between the two
    const xDiff = portal1.x - portal2.x;
    const yDiff = portal1.y - portal2.y;

    // Notes:
    // Positive x means we have to move map to the right (and vice versa)
    // Negative y means we have to move map up (and vice versa)
    offsetMapCoords(xDiff * scale, yDiff * scale);
  }, [portal1, portal2, offsetMapCoords, scale]);

  const onPortal2Click = React.useCallback(() => {
    // Move map to portal1
    // Calculate distance between the two
    const xDiff = portal2.x - portal1.x;
    const yDiff = portal2.y - portal1.y;
    offsetMapCoords(xDiff * scale, yDiff * scale);
  }, [portal1, portal2, offsetMapCoords, scale]);

  return (
    <>
      <InteractablePolygon
        onClick={onPortal1Click}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        x={portal1.x}
        y={portal1.y}
        height={defaultPortalSize}
        width={defaultPortalSize}
      ></InteractablePolygon>
      <InteractablePolygon
        onClick={onPortal2Click}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        x={portal2.x}
        y={portal2.y}
        height={defaultPortalSize}
        width={defaultPortalSize}
      ></InteractablePolygon>
      {show && (
        <>
          <PortalLabel
            x={portal1.x}
            y={portal1.y}
            show={false}
            portalIndex={index}
            color={color}
            hovered={hovered}
          />
          <PortalLabel
            x={portal2.x}
            y={portal2.y}
            show={false}
            portalIndex={index}
            color={color}
            hovered={hovered}
          />
        </>
      )}
      {showLines && (
        <line
          className={`map-portal-line ${hovered ? "hovered" : ""}`}
          x1={portal1.x + 10}
          y1={portal1.y + 10}
          x2={portal2.x + 10}
          y2={portal2.y + 10}
          stroke={color}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      )}
    </>
  );
};
