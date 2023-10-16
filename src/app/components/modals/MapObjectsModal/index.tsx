import clsx from "clsx";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { MouseEventHandler, ReactNode, useEffect, useRef } from "react";

type MapObjectsModalProps = {
  isVisible?: boolean;
  hideModal: () => void;
  header: ReactNode;
  content: ReactNode;
  animationVariants: Variants;
  positionClassnames: string;
};

export const MapObjectsModal = ({
  isVisible,
  hideModal,
  header,
  content,
  animationVariants,
  positionClassnames,
}: MapObjectsModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (isVisible && ref.current && !ref.current.contains(e.target)) {
        hideModal();
      }
    };
    document.addEventListener("click", checkIfClickedOutside);

    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [hideModal, isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={ref}
          variants={animationVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={clsx("absolute mx-2", positionClassnames)}
        >
          <div className="w-[310px] space-y-5 rounded-2xl bg-white p-4">
            {header}
            <div className="space-y-3">{content}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
