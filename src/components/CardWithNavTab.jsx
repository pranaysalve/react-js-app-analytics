import { useState } from "react";

const CardWithNavTab = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow h-80">
      <ul
        className="flex flex-wrap text-sm font-medium text-center  border-b border-gray-200 rounded-t-lg bg-gray-50"
        id="defaultTab"
        data-tabs-toggle="#defaultTabContent"
        role="tablist"
      >
        {children?.map((child, index) => (
          <li className="mr-2" key={index}>
            <button
              type="button"
              className={`${
                activeTab === index ? " font-semibold bg-gray-200" : ""
              } inline-block p-4 rounded-tl-lg hover:bg-gray-200`}
              onClick={() => handleTabChange(index)}
            >
              {child.key}
            </button>
          </li>
        ))}
      </ul>
      {children?.map((child, index) => (
        <div key={index} className="">
          <div
            className={`p-4 h-60 bg-white rounded-lg md:p-8 text-gray-700 ${
              activeTab === index ? "block " : "hidden"
            }`}
          >
            {children[index]}
          </div>
        </div>
      ))}
    </div>
  );
};

CardWithNavTab.Tab = ({ children }) => {
  return <div>{children}</div>;
};

CardWithNavTab.Tab.displayName = "CardWithNavTab.Tab";

export default CardWithNavTab;
