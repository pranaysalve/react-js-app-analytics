import moment from "moment";
export const filterFollwers = (data) => {
  let followers = {
    instagramFollowers: Number(
      data?.stats?.instagram?.timelineStats?.timelinePageLikes[0].Followers
    ),
    twitterFollowers: Number(
      data?.stats?.twitter?.timelineStats?.timelinePageLikes[0].Followers
    ),
  };

  return followers;
};

export const filterSentiments = (sentiments) => {
  let sentimentData = {
    Facebook:
      sentiments?.stats?.facebook?.timelineStats?.timeline?.lenght === 0
        ? null
        : sentiments?.stats?.facebook?.timelineStats?.timeline,
    Twitter:
      sentiments?.stats?.twitter?.timelineStats?.timeline?.lenght === 0
        ? null
        : sentiments?.stats?.twitter?.timelineStats?.timeline,
    Instagram:
      sentiments?.stats?.instagram?.timelineStats?.timeline?.lenght === 0
        ? null
        : sentiments?.stats?.instagram?.timelineStats?.timeline,
    Youtube:
      sentiments?.stats?.youtube?.timelineStats?.timeline?.lenght === 0
        ? null
        : sentiments?.stats?.youtube?.timelineStats?.timeline,
  };

  return filterSentimentsByChannel(sentimentData);
};

export const filterSentimentsByChannel = (sentiments) => {
  const twitterSentiments = sentiments?.Twitter;
  const facebookSentiments = sentiments?.Facebook;
  const instagramSentiments = sentiments?.Instagram;
  const youtubeSentiments = sentiments?.Youtube;

  let someSentiments = [];

  if (
    twitterSentiments ||
    facebookSentiments ||
    instagramSentiments ||
    youtubeSentiments
  ) {
    for (const item of facebookSentiments) {
      facebookSentiments &&
        someSentiments.push({
          channel: "Facebook",
          date: moment(item?.date, "YYYY-MM-DD").format("DD-MMM-YY"),
          negativeSentiment: item?.sentimentAsCategories?.negative,
          positiveSentiment: item?.sentimentAsCategories?.positive,
          neutralSentiment: item?.sentimentAsCategories?.neutral,
        });
    }
    for (const item of instagramSentiments) {
      instagramSentiments &&
        someSentiments.push({
          channel: "Instagram",
          date: moment(item?.date, "YYYY-MM-DD").format("DD-MMM-YY"),
          negativeSentiment: item?.sentimentAsCategories?.negativeComments,
          positiveSentiment: item?.sentimentAsCategories?.positiveComments,
          neutralSentiment: item?.sentimentAsCategories?.neutralComments,
        });
    }
    for (const item of youtubeSentiments) {
      youtubeSentiments &&
        someSentiments.push({
          channel: "Youtube",
          date: moment(item?.date, "YYYY-MM-DD").format("DD-MMM-YY"),
          negativeSentiment: item?.sentimentAsCategories?.negativeComments,
          positiveSentiment: item?.sentimentAsCategories?.positiveComments,
          neutralSentiment: item?.sentimentAsCategories?.neutralComments,
          meanSentiment: item?.meanSentiment,
        });
    }
    for (const item of twitterSentiments) {
      twitterSentiments &&
        someSentiments.push({
          channel: "Twitter",
          date: moment(item?.date, "YYYY-MM-DD").format("DD-MMM-YY"),
          negativeSentiment: item?.sentimentAsCategories?.negativeTweets,
          positiveSentiment: item?.sentimentAsCategories?.positiveTweets,
          neutralSentiment: item?.sentimentAsCategories?.neutralTweets,
          meanSentiment: item?.meanSentiment,
        });
    }
  }
  return someSentiments;
};
export const formatNumber = (number) => {
  if (typeof number !== "number") {
    return "-";
  }

  if (number >= 1000000) {
    return (number / 1000000).toFixed(2) + " Mil";
  } else if (number >= 1000 && number < 1000000) {
    return (number / 1000).toFixed(2) + " K";
  } else {
    return number;
  }
};

export const hashTagExtractor = (data) => {
  let hashtag = [];

  const twitterHashtagsArray =
    data?.Twitter || data?.twitter.timelineStats?.timeline;
  const facebookHashtagsArray =
    data?.Facebook || data?.facebook.timelineStats?.timeline;
  const instagramHashtagsArray =
    data?.Instagram || data?.instagram.timelineStats?.timeline;
  const youtubeHashtagsArray =
    data?.Youtube || data?.youtube.timelineStats?.timeline;

  if (
    twitterHashtagsArray ||
    facebookHashtagsArray ||
    instagramHashtagsArray ||
    youtubeHashtagsArray
  ) {
    for (const item of instagramHashtagsArray) {
      Object.entries(item.hashtags).forEach(([key, value]) => {
        hashtag.push({
          channel: "Instagram",
          hashtag: key,
          count: value,
        });
      });
    }
    for (const item of twitterHashtagsArray) {
      Object.entries(item.hashtags).forEach(([key, value]) => {
        hashtag.push({
          channel: "Twitter",
          hashtag: key,
          count: value,
        });
      });
    }
    for (const item of facebookHashtagsArray) {
      Object.entries(item.hashtags).forEach(([key, value]) => {
        hashtag.push({
          channel: "Facebook",
          hashtag: key,
          count: value,
        });
      });
    }
    for (const item of youtubeHashtagsArray) {
      Object.entries(item.hashtags).forEach(([key, value]) => {
        hashtag.push({
          channel: "Youtube",
          hashtag: key,
          count: value,
        });
      });
    }
  }

  return hashtag;
};

export const filterPosts = (data) => {
  let posts = [];
  // console.log({ data });
  const twitterPosts =
    data?.Twitter || data?.stats?.twitter?.timelineStats?.timeline;
  const facebookPosts =
    data?.Facebook || data?.stats?.facebook?.timelineStats?.timeline;
  const instagramPosts =
    data?.Instagram || data?.stats?.instagram?.timelineStats?.timeline;
  const youtubePosts =
    data?.Youtube || data?.stats?.youtube?.timelineStats?.timeline;
  console.log({ youtubePosts });
  if (twitterPosts || facebookPosts || instagramPosts || youtubePosts) {
    for (const item of instagramPosts) {
      // console.log({ item });
      posts.push({
        channel: "Instagram",
        date: item?.date,
        postDetails: {
          user: item.posts[0].post_by,
          postLink: item.posts[0].postLink,
          post: item.posts[0].text,
          userUrl: item.posts[0].profile_url,
        },
      });
    }
    for (const item of facebookPosts) {
      // console.log({ item });
      posts.push({
        channel: "Facebook",
        date: item?.date,
        postDetails: {
          user: item.posts[0].post_by,
          postLink: item.posts[0].postLink,
          post: item.posts[0].text,
          userUrl: item.posts[0].profile_url,
        },
      });
    }
    for (const item of twitterPosts) {
      // console.log({ item });
      posts.push({
        channel: "Twitter",
        date: item?.date,
        postDetails: {
          user: item.posts[0].handler_name,
          postLink: item.posts[0].postlink,
          post: item.posts[0].tweet,
          userUrl: item.posts[0].profile_url,
        },
      });
    }
    for (const item of youtubePosts) {
      // console.log({ item });
      posts.push({
        channel: "Youtube",
        date: item?.date,
        postDetails: {
          user: item.posts[0].channel_name,
          postLink: item.posts[0].video_url,
          post: item.posts[0].video_description,
          userUrl: item.posts[0].channel_link,
        },
      });
    }
  }
  console.log({ posts });
  return posts;
};
