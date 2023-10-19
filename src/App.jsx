import { useState, useEffect } from "react";
import "./App.css";
import {
  fetchStatsData,
  fetchFollowers,
  fetchSentiments,
  fetchHashtags,
  fetchPosts,
} from "./service/service";
import Searchbar from "./components/Searchbar";
import TopCards from "./components/TopCards";
import SentimentChart from "./components/SentimentChart";
import CardWithNavTab from "./components/CardWithNavTab";
import ListComponent from "./components/ListComponent";
import { PlotlyLineChart } from "./components/PlotlyLineChart";
import { CardLG } from "./components/Card";
import PostListComponent from "./components/PostList";

function App() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [followers, setFollowers] = useState();
  const [sentiments, setSentiments] = useState();
  const [hashtags, setHashtags] = useState();
  const [posts, setPosts] = useState();
  const searchParams = "";
  useEffect(() => {
    // fetchStatsData(searchParams)
    //   .then((res) => setData(res))
    //   .catch((err) => setError(err));

    fetchFollowers()
      .then((res) => setFollowers(res))
      .catch((err) => setError(err));

    fetchSentiments()
      .then((res) => setSentiments(res))
      .catch((err) => setError(err));

    fetchHashtags()
      .then((res) => setHashtags(res))
      .catch((err) => setError(err));

    fetchPosts()
      .then((res) => setPosts(res))
      .catch((err) => setError(err));
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen">
      <Searchbar />
      <div className="grid grid-cols-3">
        <div className="flex">
          <CardLG
            title="Social Media Followers"
            childComponent={<TopCards followers={followers} />}
          />
          {/* <TopCards followers={followers} /> */}
        </div>
        <div className="col-span-2 ">
          <CardLG
            title="Sentiment Chart"
            width={"full"}
            height={"fit"}
            childComponent={<PlotlyLineChart sentiments={sentiments} />}
          />
        </div>
      </div>
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <div className="flex">
          <CardLG
            title="#HashTags"
            width={"full"}
            height={"96"}
            childComponent={<ListComponent data={hashtags} type={"Hashtags"} />}
          />
        </div>
        <div>
          <CardLG
            title="Latest Posts"
            width={"full"}
            height={"96"}
            childComponent={<PostListComponent data={posts} />}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
