import { useEffect, useState } from "react";
import {
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsYoutube,
  BsEmojiSmileFill,
  BsEmojiLaughingFill,
  BsEmojiHeartEyesFill,
} from "react-icons/bs";
import { filterFollwers, formatNumber } from "../utils";
const TopCards = ({ followers }) => {
  const [twitterFollowers, setTwitterFollowers] = useState();
  const [facebookFollowers, setFacebookFollowers] = useState();
  const [instaFollowers, setInstaFollowers] = useState();
  const [youtubeFollowers, setYoutubeFollowers] = useState();

  const filteredFollowers = filterFollwers(followers);
  useEffect(() => {
    setFacebookFollowers(formatNumber(filteredFollowers?.facebookFollowers));
    setInstaFollowers(formatNumber(filteredFollowers?.instagramFollowers));
    setTwitterFollowers(formatNumber(filteredFollowers?.twitterFollowers));
    setYoutubeFollowers(formatNumber(filteredFollowers?.youtubeFollowers));
  }, [followers]);
  return (
    <div className="">
      <div className="grid lg:grid-cols-4 gap-1 px-2 h-[160px]">
        <div className="bg-white flex  justify-start w-full border p-4 rounded-lg">
          <div className="flex flex-col w-full pb-1">
            <p className="text-sm font-bold">
              <BsTwitter color="#00ACEE" size={60} />
            </p>
            <p className="text-gray-900 text-lg font-semibold pt-2">
              {twitterFollowers ? twitterFollowers : "-"}
            </p>
            <p className="text-gray-600 ">Followers</p>
          </div>
        </div>
        <div className="bg-white flex justify-start w-full border p-4 rounded-lg">
          <div className="flex flex-col w-full pb-1">
            <p className="text-sm font-bold">
              <BsFacebook color="#3b5998" size={60} />
            </p>
            <p className="text-gray-600 text-lg pt-2 font-semibold ">
              {facebookFollowers ? facebookFollowers : "-"}
            </p>
            <p className="text-gray-600">Followers</p>
          </div>
        </div>
        <div className="bg-white flex justify-start w-full border p-4 rounded-lg">
          <div className="flex flex-col w-full pb-1">
            <p className="text-sm font-bold">
              <BsInstagram color="#d62976" size={60} />
            </p>
            <p className="text-gray-600 text-lg pt-2 font-semibold ">
              {instaFollowers ? instaFollowers : "-"}
            </p>
            <p className="text-gray-600 ">Followers</p>
          </div>
        </div>
        <div className="bg-white flex justify-start w-full border p-4 rounded-lg">
          <div className="flex flex-col w-full pb-1">
            <p className="text-sm font-bold">
              <BsYoutube color="#c4302b" size={60} />
            </p>
            <p className="text-gray-600 text-lg pt-2 font-semibold ">
              {youtubeFollowers ? youtubeFollowers : "-"}
            </p>
            <p className="text-gray-600 ">Followers</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-1 py-2 px-2 h-[100px]">
        <div className="bg-white flex justify-start w-full border p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4 justify-center items-center">
            <p className=" text-blue-400">
              <BsEmojiSmileFill size={60} />
            </p>
            <p className="text-gray-600">100K</p>
          </div>
        </div>
        <div className="bg-white flex justify-start w-full border p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4 justify-center items-center">
            <p className=" text-yellow-300">
              <BsEmojiLaughingFill size={60} />
            </p>
            <p className="text-gray-600">100K</p>
          </div>
        </div>
        <div className="bg-white flex justify-start w-full border p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4 justify-center items-center">
            <p className=" text-red-300">
              <BsEmojiHeartEyesFill size={60} />
            </p>
            <p className="text-gray-600">100K</p>
          </div>
        </div>
        <div className="bg-white flex justify-start w-full border p-4 rounded-lg">
          <div className="flex flex-col w-full pb-4 justify-center items-center">
            <p className=" text-blue-400">
              <BsEmojiSmileFill size={60} />
            </p>
            <p className="text-gray-600">100K</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCards;
