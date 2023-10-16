import { Tabs, TabItem } from "@/app/components/common";
import { ComponentProps } from "react";

export enum TabIds {
  SCHEMA,
  SATELLITE,
  HYBRID,
}

const items: TabItem[] = [
  {
    id: TabIds.SCHEMA,
    label: "Схема",
  },
  {
    id: TabIds.SATELLITE,
    label: "Спутник",
  },
  {
    id: TabIds.HYBRID,
    label: "Гибрид",
  },
];

type MapControlsTabsProps = Omit<ComponentProps<typeof Tabs>, "items">;

export const MapControlsTabs = (props: MapControlsTabsProps) => (
  <Tabs items={items} {...props} />
);
