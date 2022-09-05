import React from "react";
import { buildBoundingBox, convertBoundingBoxToPolygonPoints } from "../data";
import "./InteractablePolygon.css";

export interface InteractablePolygonProps {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLAnchorElement>;
  x: number;
  y: number;
  width: number;
  height: number;
  children?: React.ReactNode;
  polygonClassNames?: string;
}

export const InteractablePolygon = (props: InteractablePolygonProps) => {
  const {
    onClick,
    onMouseEnter,
    onMouseLeave,
    x,
    y,
    width,
    height,
    children,
    polygonClassNames,
  } = props;

  const boundingBox = buildBoundingBox({ x, y }, width, height);

  return (
    <a
      className="click-zone"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <polygon
        className={`click-zone-polygon ${polygonClassNames || ""}`}
        points={convertBoundingBoxToPolygonPoints(boundingBox)}
      />
      {children}
    </a>
  );
};
