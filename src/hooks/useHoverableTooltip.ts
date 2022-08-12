import React from "react";

export const useHoverableTooltip = (showTooltip?: boolean) => {
  const [showTooltipHover, setShowTooltipHover] = React.useState(false);

  const showTooltipOnHover = React.useCallback(() => {
    if (!showTooltipHover && !showTooltip) {
      setShowTooltipHover(true);
    }
  }, [showTooltip, showTooltipHover, setShowTooltipHover]);

  const hideTooltipOnHover = React.useCallback(() => {
    if (showTooltipHover && !showTooltip) {
      setShowTooltipHover(false);
    }
  }, [showTooltip, showTooltipHover, setShowTooltipHover]);

  return {
    shouldShowTooltip: showTooltip || showTooltipHover,
    showTooltipOnHover,
    hideTooltipOnHover,
  };
};
