import React from "react";
import FullKanto from "./assets/FullKanto.png";
import "./FRLGIronmonMap.css";
import { MapInteractionCSS } from "react-map-interaction";
import { ControlPanel, Trainer, Item } from "./components";
import { ItemData, items, ItemType, trainers } from "./data";

export const DEBUG_MODE = false;

export const FRLGIronmonMap = () => {
  const [showTrainerData, setShowTrainerData] = React.useState(false);
  const [showItemData, setShowItemData] = React.useState(false);
  const [highlightItems, setHighlightItem] = React.useState(false);
  const [highlightTMs, setHighlightTMs] = React.useState(false);
  const [highlightHidden, setHighlightHidden] = React.useState(false);

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

  return (
    <div className="frlg-ironmon-map">
      <ControlPanel
        onShowTrainerDataClicked={setShowTrainerData}
        onShowItemDataClicked={setShowItemData}
        onHighlightItemsClicked={setHighlightItem}
        onHighlightTMsClicked={setHighlightTMs}
        onHighlightHiddenClicked={setHighlightHidden}
      />
      <MapInteractionCSS maxScale={100}>
        <div id="tooltip-container"></div>
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
        </svg>
      </MapInteractionCSS>
    </div>
  );
};
