import React from "react";
import "./ControlPanel.css";
import PokeBall from "../assets/PokeballItem.png";
import TMItem from "../assets/TMItem.png";
import HiddenItem from "../assets/HiddenItem.png";

export type CheckboxClickedCallback = (newVal: boolean) => void;

export interface ControlPanelProps {
  onShowTrainerDataClicked?: CheckboxClickedCallback;
  onShowItemDataClicked?: CheckboxClickedCallback;
  onHighlightItemsClicked?: CheckboxClickedCallback;
  onHighlightTMsClicked?: CheckboxClickedCallback;
  onHighlightHiddenClicked?: CheckboxClickedCallback;
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
  } = props;

  const [showTrainerData, setShowTrainerData] = React.useState(false);
  const [showItemData, setShowItemData] = React.useState(false);
  const [highlightItems, setHighlightItems] = React.useState(false);
  const [highlightTMs, setHighlightTMs] = React.useState(false);
  const [highlightHidden, setHighlightHidden] = React.useState(false);

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

  return (
    <div className="control-panel">
      <span className="control-panel-title">Control Panel</span>
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
    </div>
  );
};
