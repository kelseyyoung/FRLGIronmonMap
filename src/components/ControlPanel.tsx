import React from "react";
import "./ControlPanel.css";
import PokeBall from "../IronmonMapUtils/assets/PokeballItem.png";
import TMItem from "../IronmonMapUtils/assets/TMItem.png";
import HiddenItem from "../IronmonMapUtils/assets/HiddenItem.png";
import TrainerDemo from "../assets/demoGifs/TrainerDemo.gif";
import ItemDemo from "../assets/demoGifs/ItemDemo.gif";
import PortalClickDemo from "../assets/demoGifs/PortalClickDemo.gif";
import MapPortalsDemo from "../assets/demoGifs/MapPortalsDemo.gif";
import { Dialog, DialogTitle, Icon } from "@mui/material";
import {
  MapPortalLinesType,
  mapSettingsSlice,
  useAppDispatch,
  useAppSelector,
} from "../IronmonMapUtils/state";

export const ControlPanel = () => {
  const {
    showTrainerData,
    showItemData,
    highlightItems,
    highlightTMs,
    highlightHiddenItems,
    showMapPortals,
    showMapPortalLines,
    showMapPortalLinesType,
    showRoutes,
  } = useAppSelector((state) => state.settings);
  const {
    setShowTrainerData,
    setShowItemData,
    setHighlightItems,
    setHighlightTMs,
    setHighlightHiddenItems,
    setShowMapPortals,
    setShowMapPortalLines,
    setShowMapPortalLinesType,
    setShowRoutes,
  } = mapSettingsSlice.actions;
  const dispatch = useAppDispatch();

  const [collapsed, setCollapsed] = React.useState(false);

  const [helpDialogOpen, setHelpDialogOpen] = React.useState(false);
  const [infoDialogOpen, setInfoDialogOpen] = React.useState(false);

  const onPortalLinesRadioChanged = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        setShowMapPortalLinesType(
          parseInt(event.target.value) as MapPortalLinesType
        )
      );
    },
    [dispatch, setShowMapPortalLinesType]
  );

  return (
    <>
      <div className={`control-panel ${collapsed ? "collapsed" : ""}`}>
        <div className="control-panel-title">
          <span>Control Panel</span>
          <button
            type="button"
            className="collapse-button"
            onClick={() => setCollapsed((collapsed) => !collapsed)}
          >
            <Icon fontSize="small">{collapsed ? "add" : "remove"}</Icon>
          </button>
        </div>
        <div className="control-panel-subtitle">Trainer/Item Info</div>
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={showTrainerData}
              onChange={() => dispatch(setShowTrainerData(!showTrainerData))}
            />
            Show Trainer Data
          </label>
        </div>
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={showItemData}
              onChange={() => dispatch(setShowItemData(!showItemData))}
            />
            Show Item Data
          </label>
        </div>
        <div className="control-panel-subtitle">Highlight Items</div>
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={highlightItems}
              onChange={() => dispatch(setHighlightItems(!highlightItems))}
            />
            <img alt="Item" className="item-checkbox-img" src={PokeBall} />
            Regular
          </label>
        </div>
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={highlightTMs}
              onChange={() => dispatch(setHighlightTMs(!highlightTMs))}
            />
            <img alt="TM" className="item-checkbox-img" src={TMItem} />
            TMs
          </label>
        </div>
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={highlightHiddenItems}
              onChange={() =>
                dispatch(setHighlightHiddenItems(!highlightHiddenItems))
              }
            />
            <img
              alt="Hidden Item"
              className="item-checkbox-img"
              src={HiddenItem}
            />
            Hidden
          </label>
        </div>
        <div className="control-panel-subtitle">Map Portals</div>
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={showMapPortals}
              onChange={() => dispatch(setShowMapPortals(!showMapPortals))}
            />
            Show Map Portals
          </label>
        </div>
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={showMapPortalLines}
              onChange={() =>
                dispatch(setShowMapPortalLines(!showMapPortalLines))
              }
            />
            Connect Portals
          </label>
        </div>
        <div className="checkbox-group">
          <label
            className={`radio-label ${!showMapPortalLines ? "disabled" : ""}`}
          >
            <input
              type="radio"
              name="portalLines"
              checked={showMapPortalLinesType === MapPortalLinesType.Always}
              disabled={!showMapPortalLines}
              onChange={onPortalLinesRadioChanged}
              value={MapPortalLinesType.Always}
            />
            Always
          </label>
          <label
            className={`radio-label ${!showMapPortalLines ? "disabled" : ""}`}
          >
            <input
              type="radio"
              name="portalLines"
              checked={showMapPortalLinesType === MapPortalLinesType.Hover}
              disabled={!showMapPortalLines}
              onChange={onPortalLinesRadioChanged}
              value={MapPortalLinesType.Hover}
            />
            Hover
          </label>
        </div>
        <div className="control-panel-subtitle">Routes</div>
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={showRoutes}
              onChange={() => dispatch(setShowRoutes(!showRoutes))}
            />
            Show Routes
          </label>
        </div>
        <hr />
        <div className="buttons-container">
          <button
            type="button"
            className="control-panel-button"
            onClick={() => setInfoDialogOpen(true)}
          >
            <Icon fontSize="small">info</Icon>
          </button>
          <button
            type="button"
            className="control-panel-button"
            onClick={() => setHelpDialogOpen(true)}
          >
            <Icon fontSize="small">help</Icon>
          </button>
        </div>
      </div>
      <Dialog
        open={infoDialogOpen}
        onClose={() => setInfoDialogOpen(false)}
        scroll={"paper"}
        maxWidth={"md"}
      >
        <DialogTitle>About</DialogTitle>
        <div className="dialog-text">
          Trainer information is available on hover, showing the number of
          pokemon they have, the levels of their pokemon, and any movement
          information. Trainers can be "marked" by clicking on them
          <div className="demo-gif">
            <img src={TrainerDemo} />
          </div>
        </div>
        <div className="dialog-text">
          Items are also clickable/markable, and hidden items with step spawn
          rates have that information shown on hover
          <div className="demo-gif">
            <img src={ItemDemo} />
          </div>
        </div>
        <div className="dialog-text">
          Map "portals", like cave entrances and ladders, are clickable too!
          They will move the map to where it connects
          <div className="demo-gif">
            <img src={PortalClickDemo} />
          </div>
        </div>
        <div className="dialog-text">
          You can highlight all map portals via the Control Panel with various
          display options
          <div className="demo-gif">
            <img src={MapPortalsDemo} />
          </div>
        </div>
        <div className="dialog-text">
          <h4>Credits</h4>
          <div>
            Maps from{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.vgmaps.com/Atlas/GBA/index.htm#PokemonFireRedVersion"
            >
              VGMaps
            </a>
          </div>
          <div>
            Sprites from{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.spriters-resource.com/game_boy_advance/pokemonfireredleafgreen/"
            >
              The Spriters Resource
            </a>
          </div>
          <div>
            Hidden item and map information from{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://imgur.com/a/vw7y5mp"
            >
              these
            </a>{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://imgur.com/a/DnDEi9i"
            >
              two
            </a>{" "}
            imgur albums, from the Ironmon community
          </div>
        </div>
        <div className="dialog-text">
          More information about this map can be found on the{" "}
          <a
            rel="noreferrer"
            href="https://github.com/kelseyyoung/FRLGIronmonMap"
            target="_blank"
          >
            Github README
          </a>
          . This has been a fun passion project of mine, and I appreciate you
          checking out the app! Shoutouts to the Ironmon community as well for
          creating such a fun challenge run! If you are interested in learning
          more about Ironmon,{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://discord.gg/QEEsmNUX"
          >
            join the discord
          </a>
        </div>
      </Dialog>
      <Dialog
        open={helpDialogOpen}
        onClose={() => setHelpDialogOpen(false)}
        scroll={"paper"}
      >
        <DialogTitle>Help</DialogTitle>
        <div className="dialog-text">
          This is very much still a work in progress so there are sure to be
          bugs/missing data. The best way to file an issue is on{" "}
          <a
            rel="noreferrer"
            href="https://github.com/kelseyyoung/FRLGIronmonMap/issues"
            target="_blank"
          >
            Github
          </a>{" "}
          or contact me on Discord (kelsey#8920)
        </div>
      </Dialog>
    </>
  );
};
