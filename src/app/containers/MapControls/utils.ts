import { Variants } from "framer-motion";
import { Positions } from "./types";

const getAnimationVariant = (direction: "left" | "right"): Variants => {
  return {
    hidden: {
      x: direction === "right" ? "100vh" : "-100vh",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      x: direction === "right" ? "100vh" : "-100vh",
      opacity: 0,
    },
  };
};

export const positionMap: Record<
  Positions,
  { container: string; modal: string; variants: Variants }
> = {
  "top-left": {
    container: "left-10 top-10",
    modal: "left-full top-0",
    variants: getAnimationVariant("left"),
  },
  "top-right": {
    container: "right-10 top-10",
    modal: "right-full top-0",
    variants: getAnimationVariant("right"),
  },
  "bottom-left": {
    container: "bottom-10 left-10",
    modal: "left-full bottom-0",
    variants: getAnimationVariant("left"),
  },
  "bottom-right": {
    container: "bottom-10 right-10",
    modal: "right-full bottom-0",
    variants: getAnimationVariant("right"),
  },
};