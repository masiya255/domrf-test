"use client";

import { ObjectsList } from "@/app/components/common";
import { TabIds } from "../MapControlsTabs";
import { useMapObjects } from "./useMapObjects";

type MapObjectsListProps = {
  activeTab: TabIds;
};

export const MapObjectsList = ({ activeTab }: MapObjectsListProps) => {
  const { items, onChangeVisible } = useMapObjects(activeTab);

  return <ObjectsList items={items} onChangeVisible={onChangeVisible} />;
};
