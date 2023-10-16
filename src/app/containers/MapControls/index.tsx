"use client";

import { IconsMenu } from "@/app/components/common";
import clsx from "clsx";
import { MapObjectsList } from "../MapObjectsList";
import { MapControlsTabs } from "../MapControlsTabs";
import { MapObjectsModal } from "@/app/components/modals";
import { Positions } from "./types";
import { positionMap } from "./utils";
import { useMapControls } from "./hooks";

type MapControlsProps = {
  position: Positions;
};

export const MapControls = ({ position }: MapControlsProps) => {
  const { menuItems, activeTab, setActiveTab } = useMapControls();

  const currentPosition = positionMap[position];

  const isModalOpened = activeTab !== undefined;

  const hideModal = () => setActiveTab(undefined);

  return (
    <div className={clsx("absolute", currentPosition.container)}>
      {isModalOpened && (
        <MapObjectsModal
          isVisible={isModalOpened}
          hideModal={hideModal}
          header={
            <MapControlsTabs activeTab={activeTab} onChangeTab={setActiveTab} />
          }
          content={<MapObjectsList activeTab={activeTab} />}
          animationVariants={currentPosition.variants}
          positionClassnames={currentPosition.modal}
        />
      )}
      <IconsMenu items={menuItems} />
    </div>
  );
};
