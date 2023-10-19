export const BASE_URI = `https://alivecore360.com/api/stats/v5?key=15d273cc-0b8a-4460-9cd8-55fa55a3e1c1&lang=en`;

export const fetchStatsData = async (parmas) => {
  const setSearchURI = BASE_URI.concat(`&${parmas}`);
  const response = await fetch(setSearchURI);

  const result = await response.json();

  return result;
};

export const fetchFollowers = async () => {
  const followersURI =
    "https://alivecore360.com/api/stats/v5?key=15d273cc-0b8a-4460-9cd8-55fa55a3e1c1&lang=en&days=50&interval=day&type=followers&Twitter_handler=adidas&Instagram_page=adidas&ig_type=manual_users&Facebook_page=adidas&youtube_channel=adidas";
  const Followers = await fetch(followersURI);
  const res = Followers.json();

  return res;
};

export const fetchSentiments = async () => {
  const sentimentURI =
    "https://alivecore360.com/api/stats/v5?key=15d273cc-0b8a-4460-9cd8-55fa55a3e1c1&lang=en&days=50&interval=day&type=sentiment&Twitter_handler=adidas&Instagram_page=adidas&ig_type=manual_users&Facebook_page=adidas&youtube_channel=adidas";
  const Sentiments = await fetch(sentimentURI);
  const res = Sentiments.json();

  return res;
};

export const fetchHashtags = async () => {
  const hashtagsURI =
    "https://alivecore360.com/api/stats/v5?key=15d273cc-0b8a-4460-9cd8-55fa55a3e1c1&lang=en&days=50&interval=day&type=hashtags&Twitter_handler=adidas&Instagram_page=adidas&ig_type=manual_users&Facebook_page=adidas&youtube_channel=adidas";
  const Hashtags = await fetch(hashtagsURI);
  const res = Hashtags.json();

  return res;
};
export const fetchPosts = async () => {
  const PostsURI =
    "https://alivecore360.com/api/stats/v5?key=15d273cc-0b8a-4460-9cd8-55fa55a3e1c1&lang=en&days=50&interval=day&type=posts&Twitter_handler=adidas&Instagram_page=adidas&ig_type=manual_users&Facebook_page=adidas&youtube_channel=adidas";
  const Posts = await fetch(PostsURI);
  const res = Posts.json();
  console.log({ Posts: res });
  return res;
};
