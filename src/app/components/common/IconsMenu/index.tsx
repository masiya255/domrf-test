import { ReactNode } from "react";
import { clsx } from "clsx";
import { Tooltip } from "react-tooltip";

export type IconsMenuItem = {
  tooltip: string;
  icon: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
};

interface IconsMenuProps {
  items: IconsMenuItem[];
  tooltipPlace?: "left" | "right";
}

export const IconsMenu = ({ items, tooltipPlace = "left" }: IconsMenuProps) => {
  return (
    <div className={clsx("rounded-2xl bg-white shadow-2xl")}>
      {items.map((item, index) => {
        const isLastItem = items.length - 1 === index;
        return (
          <button
            key={index}
            type="button"
            data-tooltip-id={`button-tooltip-${index}`}
            data-tooltip-content={item.tooltip}
            data-tooltip-place={tooltipPlace}
            className={clsx([
              "hover:bg-lighthouse flex h-14 w-14 items-center justify-center transition-colors",
              item.isActive && "bg-lighthouse",
              isLastItem ? "rounded-bl-2xl rounded-br-2xl" : "border-b",
              index === 0 && "rounded-tl-2xl rounded-tr-2xl",
            ])}
            onClick={item.onClick}
          >
            {item.icon}
            <Tooltip id={`button-tooltip-${index}`} />
          </button>
        );
      })}
    </div>
  );
};
