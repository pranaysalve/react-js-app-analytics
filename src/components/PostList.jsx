import React from "react";
// import { data } from "../data/data.js";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { filterPosts } from "../utils";
import moment from "moment";
const PostListComponent = ({ data }) => {
  const posts = filterPosts(data);
  //   const channel = [...new Set(data?.map((item) => item.channel))];

  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <ul>
        {posts?.map((item, index) => (
          <a
            key={index}
            href={item.postDetails.postLink}
            target="_blank"
            rel="noreferrer"
          >
            <li
              key={index}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
            >
              <div
                className={`${
                  item.channel === "Twitter"
                    ? "bg-blue-100"
                    : item.channel === "Facebook"
                    ? "bg-blue-200"
                    : item.channel === "Instagram"
                    ? "bg-pink-100"
                    : item.channel === "Youtube"
                    ? "bg-red-100"
                    : ""
                } rounded-lg p-3`}
              >
                {item.channel === "Twitter" && (
                  <BsTwitter className={`text-blue-500`} />
                )}
                {item.channel === "Facebook" && (
                  <BsFacebook className={`text-blue-700`} />
                )}
                {item.channel === "Instagram" && (
                  <BsInstagram className={`text-pink-800`} />
                )}
                {item.channel === "Youtube" && (
                  <BsYoutube className={`text-red-600`} />
                )}
              </div>

              <div className="pl-4">
                <p className="text-sm">{moment(item.date, "YYYY-MM-DD").format("DD MMM YY")}</p>
                <p className=" text-blue-500 hover:font-semibold">
                  <a href={item.postDetails.userUrl}>
                    @{item.postDetails.user}
                  </a>
                </p>
                <p className="text-gray-700 text-md">{item.postDetails.post}</p>
              </div>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default PostListComponent;
