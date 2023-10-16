import { ObjectListItem } from "@/app/components/common";
import { TabIds } from "@/app/containers/MapControlsTabs";
import { colors } from "@/app/theme/colors";

export const tabsData: { [key in TabIds]: ObjectListItem[] } = {
  [TabIds.SCHEMA]: [
    {
      id: 1,
      color: colors.doverGrey,
      title: "Кадастровые округа",
      isActive: false,
    },
    {
      id: 2,
      color: colors.electricEel,
      title: "Кадастровые районы",
      isActive: false,
    },
    {
      id: 3,
      color: colors.darkLimeGreen,
      title: "Кадастровые кварталы",
      isActive: false,
    },
    { id: 4, color: colors.astorathRed, title: "Граница РФ", isActive: false },
    {
      id: 5,
      color: colors.distinctPurple,
      title: "Субъекты РФ",
      isActive: false,
    },
    {
      id: 6,
      color: colors.sunglowGecko,
      title: "Муниципальные районы и городские округа",
      isActive: false,
    },
    {
      id: 7,
      color: colors.luminescentGreen,
      title: "Сельские и городские поселения",
      isActive: false,
    },
    {
      id: 8,
      color: colors.orangePospsicle,
      title: "Населенные пункты",
      isActive: false,
    },
  ],
  [TabIds.SATELLITE]: [
    {
      id: 1,
      color: colors.electricEel,
      title: "Кадастровые округа",
      isActive: false,
    },
    {
      id: 2,
      color: colors.doverGrey,
      title: "Кадастровые районы",
      isActive: false,
    },
    {
      id: 3,
      color: colors.astorathRed,
      title: "Кадастровые кварталы",
      isActive: false,
    },
    { id: 4, color: colors.darkLimeGreen, title: "Граница РФ", isActive: false },
    {
      id: 5,
      color: colors.sunglowGecko,
      title: "Субъекты РФ",
      isActive: false,
    },
    {
      id: 6,
      color: colors.distinctPurple,
      title: "Муниципальные районы и городские округа",
      isActive: false,
    },
    {
      id: 7,
      color: colors.orangePospsicle,
      title: "Сельские и городские поселения",
      isActive: false,
    },
    {
      id: 8,
      color: colors.luminescentGreen,
      title: "Населенные пункты",
      isActive: false,
    },
  ],
  [TabIds.HYBRID]: [
    {
      id: 1,
      color: colors.doverGrey,
      title: "Кадастровые округа",
      isActive: false,
    },
    {
      id: 2,
      color: colors.electricEel,
      title: "Кадастровые районы",
      isActive: false,
    },
    {
      id: 3,
      color: colors.darkLimeGreen,
      title: "Кадастровые кварталы",
      isActive: false,
    },
    { id: 4, color: colors.astorathRed, title: "Граница РФ", isActive: false },
    {
      id: 5,
      color: colors.distinctPurple,
      title: "Субъекты РФ",
      isActive: false,
    },
    {
      id: 6,
      color: colors.sunglowGecko,
      title: "Муниципальные районы и городские округа",
      isActive: false,
    },
    {
      id: 7,
      color: colors.luminescentGreen,
      title: "Сельские и городские поселения",
      isActive: false,
    },
    {
      id: 8,
      color: colors.orangePospsicle,
      title: "Населенные пункты",
      isActive: false,
    },
  ],
};
