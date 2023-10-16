import clsx from "clsx";
import { EyeIcon } from "../../icons";
import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from "react";
import { colors } from "@/app/theme/colors";

type VisibilityTogglerProps = {
  isActive?: boolean;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const VisibilityToggler = ({
  isActive,
  ...props
}: VisibilityTogglerProps) => {
  return (
    <button
      className={clsx(
        "rounded-full p-1",
        isActive ? "bg-dartVader" : "bg-lighthouse"
      )}
      {...props}
    >
      <EyeIcon fill={isActive ? colors.white : colors.millionGrey} />
    </button>
  );
};
