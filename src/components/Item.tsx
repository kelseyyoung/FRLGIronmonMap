import {
  defaultItemHeight,
  defaultItemWidth,
  ItemData,
  ItemType,
} from "../data";
import { Tooltip } from "./Tooltip";
import "./Item.css";
import { useEntityMark, useHoverableTooltip } from "../hooks";
import { InteractablePolygon } from "./InteractablePolygon";
import React from "react";
import { EntityMarkIcon } from "./EntityMark";
import { useAppSelector } from "../state";

export interface ItemProps extends ItemData {}

// TODO: Memoize?
const convertItemTypeToClassName = (itemType: ItemType) => {
  switch (itemType) {
    case ItemType.Normal:
      return "normal";
    case ItemType.TM:
      return "tm";
    case ItemType.Hidden:
      return "hidden";
    default:
      return "";
  }
};

export const Item = (props: ItemProps) => {
  const { x, y, spawnInfo, type } = props;
  const marks = React.useRef<EntityMarkIcon[]>([
    "none",
    "checked",
    "crossed",
    "starred",
  ]);

  const {
    showItemData: showTooltip,
    highlightItems,
    highlightHiddenItems,
    highlightTMs,
  } = useAppSelector((state) => state.settings);

  const highlight = React.useMemo(() => {
    if (type === ItemType.Normal && highlightItems) {
      return true;
    } else if (type === ItemType.TM && highlightTMs) {
      return true;
    } else if (type === ItemType.Hidden && highlightHiddenItems) {
      return true;
    }
    return false;
  }, [type, highlightItems, highlightTMs, highlightHiddenItems]);

  const { currentMark, incrementMark, EntityMark } = useEntityMark(
    marks.current
  );

  const { shouldShowTooltip, showTooltipOnHover, hideTooltipOnHover } =
    useHoverableTooltip(showTooltip);

  return (
    <>
      <InteractablePolygon
        onClick={incrementMark}
        onMouseEnter={showTooltipOnHover}
        onMouseLeave={hideTooltipOnHover}
        x={x}
        y={y}
        height={defaultItemHeight}
        width={defaultItemWidth}
        polygonClassNames={`${
          highlight ? "highlight" : ""
        } ${convertItemTypeToClassName(type)}`}
      >
        <EntityMark x={x + 1} y={y} size={12} mark={currentMark} />
      </InteractablePolygon>
      {spawnInfo && (
        <Tooltip
          x={x}
          y={y}
          show={shouldShowTooltip}
          targetWidth={defaultItemWidth}
        >
          <div>{spawnInfo}</div>
        </Tooltip>
      )}
    </>
  );
};
