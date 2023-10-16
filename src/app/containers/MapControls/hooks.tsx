import { IconsMenuItem } from "@/app/components/common/IconsMenu";
import { useMemo, useState } from "react";
import { TabIds } from "../MapControlsTabs";
import { CompassIcon, RulerIcon, StackIcon } from "@/app/components/icons";
import { colors } from "@/app/theme/colors";

export const useMapControls = () => {
  const [activeTab, setActiveTab] = useState<TabIds>();

  const menuItems = useMemo<IconsMenuItem[]>(() => {
    return [
      {
        tooltip: "Открыть схему",
        icon: <CompassIcon stroke={colors.dartVader} />,
        isActive: activeTab === TabIds.SCHEMA,
        onClick: () => {
          setActiveTab((prev) =>
            prev !== TabIds.SCHEMA ? TabIds.SCHEMA : undefined
          );
        },
      },
      {
        tooltip: "Открыть спутник",
        icon: <RulerIcon stroke={colors.dartVader} />,
        isActive: activeTab === TabIds.SATELLITE,
        onClick: () => {
          setActiveTab((prev) =>
            prev !== TabIds.SATELLITE ? TabIds.SATELLITE : undefined
          );
        },
      },
      {
        tooltip: "Открыть гибрид",
        icon: <StackIcon stroke={colors.dartVader} />,
        isActive: activeTab === TabIds.HYBRID,
        onClick: () => {
          setActiveTab((prev) =>
            prev !== TabIds.HYBRID ? TabIds.HYBRID : undefined
          );
        },
      },
    ];
  }, [activeTab]);

  return {
    activeTab,
    setActiveTab,
    menuItems,
  };
};
