import React from "react";
import "./ControlPanel.css";
import PokeBall from "../assets/PokeballItem.png";
import TMItem from "../assets/TMItem.png";
import HiddenItem from "../assets/HiddenItem.png";
import { Dialog, DialogTitle, Icon } from "@mui/material";

export type CheckboxClickedCallback = (newVal: boolean) => void;

export interface ControlPanelProps {
  onShowTrainerDataClicked?: CheckboxClickedCallback;
  onShowItemDataClicked?: CheckboxClickedCallback;
  onHighlightItemsClicked?: CheckboxClickedCallback;
  onHighlightTMsClicked?: CheckboxClickedCallback;
  onHighlightHiddenClicked?: CheckboxClickedCallback;
  onShowMapPortalsClicked?: CheckboxClickedCallback;
  onShowMapPortalLinesClicked?: CheckboxClickedCallback;
}

// TODO: perhaps useMemo this inside ControlPanel
const invertValueHandler = (
  callback: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return () => {
    callback((value) => !value);
  };
};

export const ControlPanel = (props: ControlPanelProps) => {
  const {
    onShowTrainerDataClicked,
    onShowItemDataClicked,
    onHighlightItemsClicked,
    onHighlightTMsClicked,
    onHighlightHiddenClicked,
    onShowMapPortalsClicked,
    onShowMapPortalLinesClicked,
  } = props;

  const [showTrainerData, setShowTrainerData] = React.useState(false);
  const [showItemData, setShowItemData] = React.useState(false);
  const [highlightItems, setHighlightItems] = React.useState(false);
  const [highlightTMs, setHighlightTMs] = React.useState(false);
  const [highlightHidden, setHighlightHidden] = React.useState(false);
  const [showMapPortals, setShowMapPortals] = React.useState(false);
  const [showMapPortalLines, setShowMapPortalLines] = React.useState(false);

  const [collapsed, setCollapsed] = React.useState(false);

  const [helpDialogOpen, setHelpDialogOpen] = React.useState(false);
  const [infoDialogOpen, setInfoDialogOpen] = React.useState(false);

  React.useEffect(() => {
    onShowTrainerDataClicked?.(showTrainerData);
  }, [onShowTrainerDataClicked, showTrainerData]);

  React.useEffect(() => {
    onShowItemDataClicked?.(showItemData);
  }, [onShowItemDataClicked, showItemData]);

  React.useEffect(() => {
    onHighlightItemsClicked?.(highlightItems);
  }, [onHighlightItemsClicked, highlightItems]);

  React.useEffect(() => {
    onHighlightTMsClicked?.(highlightTMs);
  }, [onHighlightTMsClicked, highlightTMs]);

  React.useEffect(() => {
    onHighlightHiddenClicked?.(highlightHidden);
  }, [onHighlightHiddenClicked, highlightHidden]);

  React.useEffect(() => {
    onShowMapPortalsClicked?.(showMapPortals);
  }, [onShowMapPortalsClicked, showMapPortals]);

  React.useEffect(() => {
    onShowMapPortalLinesClicked?.(showMapPortalLines);
  }, [onShowMapPortalLinesClicked, showMapPortalLines]);

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
            onChange={invertValueHandler(setShowTrainerData)}
          />
          <label className="checkbox-label">Show Trainer Data</label>
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            checked={showItemData}
            onChange={invertValueHandler(setShowItemData)}
          />
          <label className="checkbox-label">Show Item Data</label>
        </div>
        <div className="control-panel-subtitle">Highlight Items</div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            checked={highlightItems}
            onChange={invertValueHandler(setHighlightItems)}
          />
          <img className="item-checkbox-img" src={PokeBall} />
          <label className="checkbox-label">Regular</label>
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            checked={highlightTMs}
            onChange={invertValueHandler(setHighlightTMs)}
          />
          <img className="item-checkbox-img" src={TMItem} />
          <label className="checkbox-label">TMs</label>
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            checked={highlightHidden}
            onChange={invertValueHandler(setHighlightHidden)}
          />
          <img className="item-checkbox-img" src={HiddenItem} />
          <label className="checkbox-label">Hidden</label>
        </div>
        <div className="control-panel-subtitle">Map Portals</div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            checked={showMapPortals}
            onChange={invertValueHandler(setShowMapPortals)}
          />
          <label className="checkbox-label">Show Map Portals</label>
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            checked={showMapPortalLines}
            onChange={invertValueHandler(setShowMapPortalLines)}
          />
          <label className="checkbox-label">Show Map Portal Lines</label>
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
