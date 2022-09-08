import React from "react";
import Checkmark from "../assets/checkmark.png";
import Crossed from "../assets/crossed.png";
import Starred from "../assets/star.png";

export type EntityMarkIcon = "none" | "checked" | "crossed" | "starred";

const getImageCallbackWithProps = (markIcon: string) => {
  return (props?: React.SVGProps<SVGImageElement>) => {
    return <image {...props} xlinkHref={markIcon} />;
  };
};

export const entityMarkIconMap: Record<
  EntityMarkIcon,
  (props?: React.SVGProps<SVGImageElement>) => JSX.Element
> = {
  none: () => <></>,
  checked: getImageCallbackWithProps(Checkmark),
  crossed: getImageCallbackWithProps(Crossed),
  starred: getImageCallbackWithProps(Starred),
};

export interface EntityMarkProps {
  mark: EntityMarkIcon;
  x: number;
  y: number;
  size: number;
}

// TODO: add react.memo to all components?
export const EntityMark = (props: EntityMarkProps) => {
  const { mark, x, y, size } = props;

  return entityMarkIconMap[mark]({
    x,
    y,
    height: size,
    width: size,
  });
};
