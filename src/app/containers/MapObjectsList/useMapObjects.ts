import { TabIds } from "@/app/containers/MapControlsTabs";
import { tabsData } from "./data";
import { useCallback, useState } from "react";

export const useMapObjects = (activeTab: TabIds) => {
  const [tabs, setTabs] = useState(tabsData);

  const onChangeVisible = useCallback(
    (id: number) => {
      setTabs((prev) => ({
        ...tabs,
        [activeTab]: prev[activeTab].map((item) =>
          item.id === id ? { ...item, isActive: !item.isActive } : item
        ),
      }));
    },
    [activeTab, tabs]
  );

  return { items: tabs[activeTab], onChangeVisible };
};
