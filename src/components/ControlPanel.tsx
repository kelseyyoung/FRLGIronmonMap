import React from "react";
import "./ControlPanel.css";
import PokeBall from "../assets/PokeballItem.png";
import TMItem from "../assets/TMItem.png";
import HiddenItem from "../assets/HiddenItem.png";
import { Dialog, DialogTitle, Icon } from "@mui/material";
import {
  MapPortalLinesType,
  mapSettingsSlice,
  useAppDispatch,
  useAppSelector,
} from "../state";

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
          <input
            type="checkbox"
            checked={showTrainerData}
            onChange={() => dispatch(setShowTrainerData(!showTrainerData))}
          />
          <label className="checkbox-label">Show Trainer Data</label>
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            checked={showItemData}
            onChange={() => dispatch(setShowItemData(!showItemData))}
          />
          <label className="checkbox-label">Show Item Data</label>
        </div>
        <div className="control-panel-subtitle">Highlight Items</div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            checked={highlightItems}
            onChange={() => dispatch(setHighlightItems(!highlightItems))}
          />
          <img alt="Item" className="item-checkbox-img" src={PokeBall} />
          <label className="checkbox-label">Regular</label>
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            checked={highlightTMs}
            onChange={() => dispatch(setHighlightTMs(!highlightTMs))}
          />
          <img alt="TM" className="item-checkbox-img" src={TMItem} />
          <label className="checkbox-label">TMs</label>
        </div>
        <div className="checkbox-group">
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
          <label className="checkbox-label">Hidden</label>
        </div>
        <div className="control-panel-subtitle">Map Portals</div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            checked={showMapPortals}
            onChange={() => dispatch(setShowMapPortals(!showMapPortals))}
          />
          <label className="checkbox-label">Show Map Portals</label>
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            checked={showMapPortalLines}
            onChange={() =>
              dispatch(setShowMapPortalLines(!showMapPortalLines))
            }
          />
          <label className="checkbox-label">Connect Portals</label>
        </div>
        <div className="checkbox-group">
          <input
            type="radio"
            name="portalLines"
            checked={showMapPortalLinesType === MapPortalLinesType.Always}
            disabled={!showMapPortalLines}
            onChange={onPortalLinesRadioChanged}
            value={MapPortalLinesType.Always}
          />
          <label className={`${!showMapPortalLines ? "disabled" : ""}`}>
            Always
          </label>
          <input
            type="radio"
            name="portalLines"
            checked={showMapPortalLinesType === MapPortalLinesType.Hover}
            disabled={!showMapPortalLines}
            onChange={onPortalLinesRadioChanged}
            value={MapPortalLinesType.Hover}
          />
          <label className={`${!showMapPortalLines ? "disabled" : ""}`}>
            Hover
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
      <Dialog open={infoDialogOpen} onClose={() => setInfoDialogOpen(false)}>
        <DialogTitle>About</DialogTitle>
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
          creating such a fun challenge run!
        </div>
      </Dialog>
      <Dialog open={helpDialogOpen} onClose={() => setHelpDialogOpen(false)}>
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
