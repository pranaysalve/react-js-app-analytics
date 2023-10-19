import { useState } from "react";

const CardWithNavTabForList = ({ data }) => {
  const channels = [...new Set(data?.map((item) => item.channel))];
  const [activeTab, setActiveTab] = useState(0);
  const [selectedChannel, setSelectedChannel] = useState(channels[activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedChannel(channels[tab]);
  };

  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto border rounded-lg bg-white overflow-scroll">
      <ul
        className="flex flex-wrap text-sm font-medium text-center  border-b border-gray-200 rounded-t-lg bg-gray-50"
        id="defaultTab"
        data-tabs-toggle="#defaultTabContent"
        role="tablist"
      >
        {channels?.map((channel, index) => (
          <li className="mr-2" key={index}>
            <button
              type="button"
              className={`${
                activeTab === index ? " font-semibold bg-gray-200" : ""
              } inline-block p-4 rounded-tl-lg hover:bg-gray-200`}
              onClick={() => handleTabChange(index)}
            >
              {channel}
            </button>
          </li>
        ))}
      </ul>
      <div className="w-full h-fit col-span-1 relative m-auto p-4 border rounded-lg bg-white overflow-scroll">
        <ul>
          {data.map((item, index) => {
            if (item.channel === selectedChannel) {
              return (
                <li
                  key={index}
                  className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
                >
                  <div className="pl-4">
                    <p className="text-gray-800">{item.hashtag}</p>
                  </div>
                  <p className="lg:flex md:hidden absolute right-6 text-sm">
                    {item.count}
                  </p>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default CardWithNavTabForList;
