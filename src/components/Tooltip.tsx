import React from "react";
import * as ReactDOM from "react-dom";
import "./Tooltip.css";

export interface TooltipProps {
  x: number;
  y: number;
  targetWidth: number;
  show: boolean;
  children: React.ReactNode;
}

export const Tooltip = (props: TooltipProps) => {
  const { x, y, show, children, targetWidth } = props;
  const el = React.useRef(document.createElement("div"));

  const tooltipContainerRef = React.useRef<HTMLDivElement | null>(null);

  const tooltipHeight = tooltipContainerRef.current?.offsetHeight;
  const tooltipWidth = tooltipContainerRef.current?.offsetWidth;
  const tooltipXPosition = tooltipWidth
    ? x - (tooltipWidth / 2 - targetWidth / 2)
    : x;
  const tooltipYPosition = tooltipHeight ? y - tooltipHeight : y;

  React.useEffect(() => {
    const tooltipContainer = document.getElementById("tooltip-container");
    const currentEl = el.current;
    tooltipContainer?.appendChild(currentEl);

    return () => {
      tooltipContainer?.removeChild(currentEl);
    };
  }, []);

  return ReactDOM.createPortal(
    <div
      style={{
        top: tooltipYPosition,
        left: tooltipXPosition,
        visibility: show ? "visible" : "hidden",
      }}
      ref={tooltipContainerRef}
      className="tooltip"
    >
      {children}
      <div className="tooltip-beak"></div>
    </div>,
    el.current
  );
};
