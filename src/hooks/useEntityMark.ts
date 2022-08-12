import React from "react";
import { EntityMarkIcon, EntityMark } from "../components";

export const useEntityMark = (
  marks: EntityMarkIcon[],
  startingMark?: EntityMarkIcon
) => {
  const [currentMarkIndex, setCurrentMarkIndex] = React.useState(
    startingMark ? marks.indexOf(startingMark) : 0
  );

  const incrementMark = React.useCallback(() => {
    setCurrentMarkIndex((currentMarkIndex) => {
      return (currentMarkIndex + 1) % marks.length;
    });
  }, [marks, setCurrentMarkIndex]);

  return {
    currentMark: marks[currentMarkIndex],
    incrementMark,
    EntityMark,
  };
};
