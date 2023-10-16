import { MarkIcon } from "../../icons";
import { VisibilityToggler } from "../VisibilityToggler";

export type ObjectListItem = {
  id: number;
  isActive: boolean;
  color: string;
  title: string;
};

type ObjectsListProps = {
  items: ObjectListItem[];
  onChangeVisible: (id: number) => void;
};

export const ObjectsList = ({ items, onChangeVisible }: ObjectsListProps) => {
  return items.map((item) => (
    <div key={item.id} className="flex items-start space-x-2">
      <MarkIcon stroke={item.color} />
      <span className="flex-1">{item.title}</span>
      <VisibilityToggler
        isActive={item.isActive}
        onClick={() => {
          onChangeVisible(item.id);
        }}
      />
    </div>
  ));
};
