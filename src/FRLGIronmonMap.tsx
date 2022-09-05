import React from "react";
import FullKanto from "./assets/FullKanto.png";
import "./FRLGIronmonMap.css";
import { MapInteractionCSS } from "react-map-interaction";
import { ControlPanel, Trainer, Item, MapPortal } from "./components";
import {
  BoundingBoxCoords,
  ItemData,
  items,
  ItemType,
  trainers,
  portalGroups,
} from "./data";

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
  const [showTrainerData, setShowTrainerData] = React.useState(false);
  const [showItemData, setShowItemData] = React.useState(false);
  const [highlightItems, setHighlightItem] = React.useState(false);
  const [highlightTMs, setHighlightTMs] = React.useState(false);
  const [highlightHidden, setHighlightHidden] = React.useState(false);
  const [showMapPortals, setShowMapPortals] = React.useState(false);
  const [showMapPortalLines, setShowMapPortalLines] = React.useState(false);
  const [showMapPortalLinesHover, setShowMapPortalLinesHover] =
    React.useState(false);

  const [value, setValue] = React.useState<MapInteractionCSSValue>({
    scale: 1,
    translation: { x: 0, y: 0 },
  });

  const highlightItem = React.useCallback(
    (item: ItemData) => {
      if (item.type === ItemType.Normal && highlightItems) {
        return true;
      } else if (item.type === ItemType.TM && highlightTMs) {
        return true;
      } else if (item.type === ItemType.Hidden && highlightHidden) {
        return true;
      }
      return false;
    },
    [highlightItems, highlightTMs, highlightHidden]
  );

  const offsetMapCoords = React.useCallback(
    (x: number, y: number) => {
      setValue((value: MapInteractionCSSValue) => {
        return {
          ...value,
          translation: {
            x: value.translation.x + x,
            y: value.translation.y + y,
          },
        };
      });
    },
    [setValue]
  );

  return (
    <div className="frlg-ironmon-map">
      <ControlPanel
        onShowTrainerDataClicked={setShowTrainerData}
        onShowItemDataClicked={setShowItemData}
        onHighlightItemsClicked={setHighlightItem}
        onHighlightTMsClicked={setHighlightTMs}
        onHighlightHiddenClicked={setHighlightHidden}
        onShowMapPortalsClicked={setShowMapPortals}
        onShowMapPortalLinesClicked={setShowMapPortalLines}
        onShowMapPortalLinesHoverClicked={setShowMapPortalLinesHover}
      />
      <MapInteractionCSS
        value={value}
        onChange={(value: MapInteractionCSSValue) => {
          setValue(value);
        }}
        maxScale={100}
      >
        <div id="tooltip-container"></div>
        <div id="portal-label-container"></div>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="7700"
          height="6400"
        >
          {/* TODO: can we get the height and width from the image? Think "FullKanto" is just the string though */}
          {/* if so, then put into variables */}
          <image width="7700" height="6400" xlinkHref={FullKanto}></image>
          {trainers.map((trainer, index) => {
            return (
              <Trainer
                key={trainer.name.split(" ").join("") + "_" + index}
                showTooltip={showTrainerData}
                {...trainer}
              />
            );
          })}
          {items.map((item, index) => {
            return (
              <Item
                key={"item-" + index}
                showTooltip={showItemData}
                highlight={highlightItem(item)}
                {...item}
              />
            );
          })}
          {portalGroups.map((portalGroup) => {
            return portalGroup.portals.map((portal, portalIndex) => (
              <MapPortal
                key={"portal-" + portalIndex}
                index={portalIndex + 1}
                scale={value.scale}
                offsetMapCoords={offsetMapCoords}
                color={portalGroup.color}
                show={showMapPortals}
                showLines={showMapPortalLines}
                showLinesOnHover={showMapPortalLinesHover}
                {...portal}
              />
            ));
          })}
        </svg>
      </MapInteractionCSS>
    </div>
  );
};
