import React from "react";
import FullKantoPaths from "./assets/FullKantoPaths.png";
import "./FRLGIronmonMap.css";
import { MapInteractionCSS } from "react-map-interaction";
import { ControlPanel } from "./components";
import {
  items,
  trainers,
  portalGroups,
  defaultItemHeight,
  defaultItemWidth,
  defaultPortalSize,
  defaultTrainerHeight,
  defaultTrainerWidth,
} from "./data";
import {
  BoundingBoxCoords,
  Item,
  MapPortal,
  TiledMap,
  Trainer,
  computeVisibleBounds,
  isBoxVisible,
  useRafThrottledValue,
  useViewportSize,
} from "./IronmonMapUtils";
import { useAppSelector } from "./IronmonMapUtils/state";

export interface MapInteractionCSSValue {
  scale: number;
  translation: BoundingBoxCoords;

  // Translation directions
  // Move map "up": decrease y
  // Move map "down": increase y
  // Move map "right": increase x
  // Move map "left": decrease x
}

const mapWidth = 7700;
const mapHeight = 6400;

// Extra content-space padding around the viewport when culling SVG overlay
// entities, so markers and their tooltips near the edge don't pop in/out while
// panning. Sized comfortably larger than any single entity + tooltip.
const VIRTUALIZATION_MARGIN = 300;

export const FRLGIronmonMap = () => {
  const [mapData, setMapData] = React.useState<MapInteractionCSSValue>({
    scale: 1,
    translation: { x: -2500, y: -2000 },
  });

  const showRoutes = useAppSelector((state) => state.settings).showRoutes;

  // The live `mapData` drives the CSS transform every frame so the map stays
  // responsive, but the derived culling work (SVG overlay + tile selection)
  // only needs to run once per painted frame. Throttling to animation frames
  // coalesces the multiple transform updates a single zoom gesture can emit.
  const throttledMapData = useRafThrottledValue(mapData);

  // Latest scale, read only inside portal click handlers. Kept in a ref so
  // zooming doesn't re-render every MapPortal on every frame.
  const scaleRef = React.useRef(mapData.scale);
  scaleRef.current = mapData.scale;

  // Only render trainers/items/portals whose bounding box intersects the
  // current viewport (plus a margin). Hundreds of entities otherwise sit in the
  // DOM even when zoomed/panned far away from them.
  const viewport = useViewportSize();
  const visibleBounds = React.useMemo(
    () =>
      computeVisibleBounds(
        throttledMapData.translation,
        throttledMapData.scale,
        viewport,
        VIRTUALIZATION_MARGIN
      ),
    [throttledMapData.translation, throttledMapData.scale, viewport]
  );

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
      <div className="map-viewport">
        <MapInteractionCSS
          value={mapData}
          onChange={(value: MapInteractionCSSValue) => {
            setMapData(value);
          }}
          maxScale={8}
        >
          <div
            id="portal-label-container"
            className="react-portal-container"
          ></div>
          <div id="tooltip-container" className="react-portal-container"></div>
          <TiledMap
            region="kanto"
            mapWidth={mapWidth}
            mapHeight={mapHeight}
            scale={throttledMapData.scale}
            translation={throttledMapData.translation}
          />
          <img
            width={mapWidth}
            height={mapHeight}
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
            width={mapWidth}
            height={mapHeight}
            className="svg-container"
          >
            {trainers.map((trainer, index) => {
              if (
                !isBoxVisible(
                  trainer.x,
                  trainer.y,
                  defaultTrainerWidth,
                  defaultTrainerHeight,
                  visibleBounds
                )
              ) {
                return null;
              }
              return (
                <Trainer
                  key={trainer.name.split(" ").join("") + "-" + index}
                  height={defaultTrainerHeight}
                  width={defaultTrainerWidth}
                  {...trainer}
                />
              );
            })}
            {items.map((item, index) => {
              if (
                !isBoxVisible(
                  item.x,
                  item.y,
                  defaultItemWidth,
                  defaultItemHeight,
                  visibleBounds
                )
              ) {
                return null;
              }
              return (
                <Item
                  key={"item-" + index}
                  height={defaultItemHeight}
                  width={defaultItemWidth}
                  {...item}
                />
              );
            })}
            {portalGroups.map((portalGroup) => {
              return portalGroup.portals.map((portal, portalIndex) => {
                // Keep the pair (and its connecting line) if either endpoint is
                // on-screen.
                if (
                  !isBoxVisible(
                    portal.portal1.x,
                    portal.portal1.y,
                    defaultPortalSize,
                    defaultPortalSize,
                    visibleBounds
                  ) &&
                  !isBoxVisible(
                    portal.portal2.x,
                    portal.portal2.y,
                    defaultPortalSize,
                    defaultPortalSize,
                    visibleBounds
                  )
                ) {
                  return null;
                }
                return (
                  <MapPortal
                    key={"portal-" + portalIndex}
                    index={portalIndex + 1}
                    scaleRef={scaleRef}
                    offsetMapCoords={offsetMapCoords}
                    color={portalGroup.color}
                    size={defaultPortalSize}
                    {...portal}
                  />
                );
              });
            })}
          </svg>
        </MapInteractionCSS>
      </div>
    </div>
  );
};
