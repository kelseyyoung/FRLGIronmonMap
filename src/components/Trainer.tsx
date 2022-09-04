import {
  defaultTrainerHeight,
  defaultTrainerWidth,
  TrainerData,
} from "../data";
import "./Trainer.css";
import PokeBall from "../assets/pokeball.png";
import Spinner from "../assets/spinner.png";
import Walking from "../assets/walking.png";
import { Tooltip } from "./Tooltip";
import { useEntityMark, useHoverableTooltip } from "../hooks";
import { InteractablePolygon } from "./InteractablePolygon";
import React from "react";
import { EntityMarkIcon } from "./EntityMark";

export interface TrainerProps extends TrainerData {
  showTooltip?: boolean;
}

export const Trainer = (props: TrainerProps) => {
  const {
    name,
    numPokemon,
    x,
    y,
    showTooltip,
    walker,
    spinner,
    pokemonLevels,
  } = props;
  const marks = React.useRef<EntityMarkIcon[]>([
    "none",
    "checked",
    "crossed",
    "starred",
  ]);

  const { currentMark, incrementMark, EntityMark } = useEntityMark(
    marks.current
  );

  const { shouldShowTooltip, showTooltipOnHover, hideTooltipOnHover } =
    useHoverableTooltip(showTooltip);

  const formattedPokemonLevels = React.useMemo(() => {
    if (!pokemonLevels) {
      return "";
    }
    return [...new Set(pokemonLevels)].join(",");
  }, [pokemonLevels]);

  return (
    <>
      <InteractablePolygon
        onClick={incrementMark}
        onMouseEnter={showTooltipOnHover}
        onMouseLeave={hideTooltipOnHover}
        x={x}
        y={y}
        height={defaultTrainerHeight}
        width={defaultTrainerWidth}
      >
        <EntityMark x={x + 1} y={y + 4} size={16} mark={currentMark} />
      </InteractablePolygon>
      <Tooltip
        x={x}
        y={y}
        show={shouldShowTooltip}
        targetWidth={defaultTrainerWidth}
      >
        <div className="trainer-name">{name}</div>
        <div className="trainer-info">
          <span className="trainer-info-section">
            <img className="trainer-info-icon" src={PokeBall} />
            {numPokemon}
          </span>
          {formattedPokemonLevels && (
            <span className="trainer-info-section">
              {formattedPokemonLevels}
            </span>
          )}
          {spinner && (
            <span className="trainer-info-section">
              <img className="trainer-info-icon" src={Spinner} />
            </span>
          )}
          {walker && (
            <span className="trainer-info-section">
              <img className="trainer-info-icon" src={Walking} />
            </span>
          )}
        </div>
      </Tooltip>
    </>
  );
};
