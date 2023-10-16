import clsx from "clsx";

export type TabItem = {
  id: number;
  label: string;
};

type TabProps = {
  items: TabItem[];
  activeTab: number;
  onChangeTab: (activeTab: number) => void;
};

export const Tabs = ({ items, activeTab, onChangeTab }: TabProps) => {
  return (
    <div className="bg-lighthouse relative flex h-12 items-center rounded-2xl">
      <div
        className="bg-dartVader absolute h-14 w-1/3 rounded-2xl transition-all"
        style={{
          left: `${(activeTab / items.length) * 100}%`,
        }}
      />
      {items.map((item, index) => (
        <button
          key={index}
          className={clsx(
            "text-dartVader z-10 h-full flex-1",
            activeTab === item.id && "text-white"
          )}
          onClick={() => {
            onChangeTab(item.id);
          }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};
