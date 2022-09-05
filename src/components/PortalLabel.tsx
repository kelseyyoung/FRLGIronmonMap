import React from "react";
import * as ReactDOM from "react-dom";
import "./PortalLabel.css";

export interface PortalLabelProps {
  x: number;
  y: number;
  show: boolean;
  portalIndex: number;
  color: string;
  hovered?: boolean;
}

export const PortalLabel = (props: PortalLabelProps) => {
  const { x, y, show, portalIndex, color, hovered } = props;
  const el = React.useRef(document.createElement("div"));

  const portalLabelContainerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const tooltipContainer = document.getElementById("portal-label-container");
    const currentEl = el.current;
    tooltipContainer?.appendChild(currentEl);

    return () => {
      tooltipContainer?.removeChild(currentEl);
    };
  }, []);

  return ReactDOM.createPortal(
    <div
      style={{
        top: y - 4,
        left: x - 4,
        visibility: true ? "visible" : "hidden",
        borderColor: color,
      }}
      ref={portalLabelContainerRef}
      className={`portal-label ${hovered ? "hovered" : ""}`}
    >
      {portalIndex}
    </div>,
    el.current
  );
};
