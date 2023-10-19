/* SERVICE LAYER CONSTANTS */
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const SOCIAL_MEDIA_TYPE = {
  twitter: "twitter",
  facebook: "facebook",
  reddit: "reddit",
  instagram: "instagram",
  articles: "articles",
  youtube: "youtube",
  tiktok: "tiktok",
  linkedin: "linkedin",
  linkedinPublicPage: "linkedinPublicPage",
  facebookAds: "facebookAds",
  trustpilot: "trustpilot",
};
export const SOCIAL_MEDIA_NAMES = {
  twitter: "Twitter",
  facebook: "Facebook",
  reddit: "Reddit",
  instagram: "Instagram",
  news: "News",
  youtube: "Youtube",
  tiktok: "TikTok",
  linkedin: "LinkedIn",
  facebookAds: "FacebookAds",
  hubspot: "HubSpot",
  discord: "Discord",
  salesforce: "salesforce",
};

export const SOCIAL_MEDIA_SUBTAB_PARAM = {
  instagram: "ig_type",
  tiktok: "tiktok_type",
};

export const ORGANIZATION_STATS_DATA = {
  commentMentionsCount: "commentMentionsCount",
  impressionCount: "impressionCount",
  shareCount: "shareCount",
  clickCount: "clickCount",
  likeCount: "likeCount",
  shareMentionsCount: "shareMentionsCount",
  uniqueImpressionsCount: "uniqueImpressionsCount",
};
//we have interval paramater which is sued in apis to show in the application, which will definte the chartd ata base don day, week, total. we are defining the constants here
export const INTERVAL = {
  total: "total",
  day: "day",
  week: "week",
  month: "month",
  year: "year",
};
//in our application,  we have different tabs like active followers, sentiment trend etc. Here we are defining the constants.
export const TYPE = {
  sentiment: "sentiment",
  engagementrate: "engagementrate",
  detailed: "detailed",
  categories: "categories",
  hashtags: "hashtags",
  hashtagsDetail: "hashtagsdetail",
  categorySentiment: "categorysentiment",
  aspectsentiment: "aspectsentiment",
  entities: "entities",
  followers: "followers",
  instafollowers: "instafollowers",
  influencers: "influencers",
  activefollowers: "activefollowers",
  posts: "posts",
  followersbycountry: "followersbycountry",
  activehours: "activehours",
  emotion: "emotion",
  topinfluencers: "topinfluencers",
  keystats: "keystats",
  activitystats: "activitystats",
  imageanalysis: "imageanalysis",
  imageanalysisdetail: "imageanalysisdetail",
  aspectdetails: "aspectdetails",
  entitiesdetail: "entitiesdetail",
  viralposts: "viralpostbasedonengagement",
  details: "details",
};

// eslint-disable-next-line no-undef
export const FACEBOOK_APP_ID = process.env.REACT_APP_FACEBOOK_APP_ID;

// export const FACEBOOK_LOGIN_SCOPE =
//   "ads_management,email,pages_messaging,read_insights,pages_manage_ads,pages_manage_metadata,pages_read_engagement,pages_read_user_content,pages_manage_posts,pages_manage_engagement,pages_show_list,public_profile";
export const FACEBOOK_LOGIN_SCOPE = "email,public_profile";
export const FACEBOOK_ADS_LOGIN_SCOPE =
  "ads_read,pages_show_list,ads_management,pages_manage_posts,pages_manage_ads,pages_read_engagement,pages_manage_metadata,pages_manage_engagement,pages_messaging,catalog_management,pages_read_user_content";
export const INSTAGRAM_LOGIN_SCOPE =
  "instagram_manage_insights,instagram_basic,instagram_manage_comments,pages_show_list,pages_read_engagement,ads_read,pages_show_list,ads_management,pages_manage_posts,pages_manage_ads,pages_read_engagement,pages_manage_metadata,pages_manage_engagement,pages_messaging,catalog_management,pages_read_user_content";

export const FACEBOOK_SDK_API_OPERATION = {
  login: "login",
  logout: "logout",
  init: "init",
  instagramUserDetails: "instagramUserDetails",
  facebookUserDetails: "facebookUserDetails",
  facebookAdsUserDetails: "facebookAdsUserDetails",
};

export const SAVE_LOGIN_TOKEN_CHANNEL = {
  facebook: "facebook",
  facebookads: "facebookads",
  instagram: "instagram",
  facebookadsbots: "facebookadsbots",
  linkedin: "linkedin",
  tiktok: "tiktok",
  hubspot: "hubspot",
  discord: "discord",
  salesforce: "salesforce",
};

export const USER_PROFILE_OPERATION = {
  profileInfo: "profileInfo",
  updateProfileInfo: "updateProfileInfo",
};

export const CHART_TYPE_NAME = {
  twitterFacebookSentimentTimeline: "Twitter Facebook Sentiment Timeline",
  globalNewsByCategories: "Global News by Categories",
  latestNewsCluster:
    "Timeline of latest News by Clusters (Risk, Opportunity, Warnings etc)",
  sentimentDialChart: {
    twitter: "Twitter Sentiment",
    facebook: "Facebook Sentiment",
    reddit: "Reddit Sentiment",
    articles: "News Sentiment",
  },
  sentimentByCategory: "Sentiment by Catergory",
  sentimentTrendLines: "Average Sentiment Timeline",
  engagementTrendLines: "Engagement Pecerntage Trend",
  followersTrendLines: "Followers Trend",
  followersTimeline: "Followers Timeline",
  followersReach: "Followers Reach",
  sentimentTrendBars: "Sentiment Category Timeline",
  mentiontimelineSummary: "Mention Timeline Summary",
  mentiontimelineHistroy: "Mention Timeline History",
  wordCloudChart: {
    topHashTags: "Top Hashtags",
    topAspectSentiment: "Top Aspect Sentiment",
    positiveAspectSentiment: "Positive Aspect Sentiment",
    negativeAspectSentiment: "Negative Aspect Sentiment",
    neutralAspectSentiment: "Neutral Aspect Sentiment",
    neutralEntities: "Neutral Entities",
    positiveEntities: "Positive Entities",
    negativeEntities: "Negative Entities",
  },
  FollowersLineChart: {
    twitter: "Twitter Followers",
    facebook: "Facebook Followers",
    reddit: "Reddit Followers",
    articles: "News Followers",
    youtube: "Youtube Followers",
    instagram: "Instagram Followers",
  },
  engagementEntries: "Engagement Entries Stats",
  topFollowers: "Top Followers",
  influencerMentions: "Influencer Mentions",
  followersByCountry: "Followers By Country",
  userActiveTimeline: "User's Active Timeline across Days (GMT)",
  emotion: "Emotion Insights",
  emotionDailyTrend: "Emotion Daily Trend",
  emotionInsights: "Emotion Insights",
  followers: "Followers",
  engagementStats: "Engagement Stats",
  userActivity: "7 Days User Activity",
  weeklyUserActivity: "Weekly User Activity",
  topinfluencersTreeMap: "Top Influencers Ranking",
  campaignStatsTrend: "Campaign Stats Trend",
  campaignStatsDetails: "Campaign Stats Details",
  adsStatsTrend: "Ads Stats Trend",
  adsStatsDetails: "Ads Stats Details",
  adsetsStatsTrend: "Adsets Stats Trend",
  adsetsStatsDetails: "Adsets Stats Details",
  topImageCategories: "Top Image Categories",
  imageCategoriesTrend: "Image Categories Trend",
  hashtagTrend: "Hashtag Trend",
};

export const DAYS = "Days";

export const CUSTOM_RANGE = "Custom_Range";

export const INSTAGRAM_TYPE = [
  "manual_users",
  "manual_tags",
  "manual_hashtags",
];

export const PROFILE_OPERATION_TYPE = {
  getProfileInfo: "getProfileInfo",
  socialMediaSaveToken: "socialMediaSaveToken",
  addCompany: "addCompany",
  removeCompany: "removeCompany",
  editCompany: "editCompany",
  updateInfo: "updateInfo",
  socialMediaLogout: "socialMediaLogout",
};

export const INSIGHTS_TYPE = {
  favouriteDashboard: "favouriteDashboard",
  earlyWarningInsights: "earlyWarningInsights",
  actionableInsights: "actionableInsights",
  facebookAdsInsights: "facebookAdsInsights",
  linkedInInsights: "linkedInInsightss",
  portfolioInsights: "portfolioInsights",
};

export const TIKTOK_TYPE = ["userposts", "userhashtags", "keywordposts"];

export const MAP_TYPE = { country: "Country", region: "Region" };

export const ACCORDIAN_EXPAND_TEXT = {
  showTweets: { show: "Show Tweets", hide: "Hide Tweets" },
  showMentions: { show: "Show Mentions", hide: "Hide Mentions" },
};

export const TABLE_COMMENT_HREF_PLACEHOLDER_TEXT = {
  instagram: { placeholder: "Show Comment" },
  reddit: { placeholder: "Show Comment" },
  facebook: { placeholder: "Show Comment" },
  tiktok: { placeholder: "Show Comment" },
  twitter: { placeholder: "Show Comment" },
  facebookAds: { placeholder: "Show Comment" },
  linkedin: { placeholder: "Show Comment" },
  articles: { placeholder: "Show Article" },
  youtube: { placeholder: "Show Video" },
};
export const TABLE_COMMENT_LEAD = {
  instagram: { Lead: " Add Lead" },
  reddit: { Lead: "Add Lead" },
  facebook: { Lead: "Add Lead" },
  tiktok: { Lead: "Add Lead" },
  twitter: { Lead: "Add Lead" },
  facebookAds: { Lead: "Add Lead" },
  linkedin: { Lead: "Add Lead" },
  articles: { Lead: "Add Lead" },
  youtube: { Lead: "Add Lead" },
  linkedinPublicPage: { Lead: "Add Lead" },
};
export const TABLE_LEAD = {
  twitter: { Lead: "Add Lead" },
};

export const MENTIONTIMELINE_SUMMARY_MAPPING = {
  twitter: [
    {
      type: "line",
      x: "Date",
      y: "Likes",
      name: "Likes",
      yaxis: "nsty2",
      color: "#050505",
    },
    {
      type: "bar",
      x: "Date",
      y: "Followers",
      name: "Followers",
      color: "#04b9a6",
    },
    {
      type: "bar",
      x: "Date",
      y: "Sentiment",
      name: "Sentiment",
      color: "#06adcf",
    },
    {
      type: "bar",
      x: "Date",
      y: "Engagement",
      name: "Engagement",
      color: "#1c8299",
    },

    {
      type: "bar",
      x: "Date",
      y: "Mentions",
      name: "Mentions",
      color: "#006d3f",
    },

    {
      type: "bar",
      x: "Date",
      y: "ShareCounts",
      name: "Share Counts",
      color: "#1c5d99",
    },
  ],
  tiktok: [
    {
      type: "bar",
      x: "Date",
      y: "Likes",
      name: "Likes",
      yaxis: "nsty2",
      color: "#050505",
    },
    {
      type: "bar",
      x: "Date",
      y: "Mentions",
      name: "Mentions",
      color: "#006d3f",
    },
    {
      type: "bar",
      x: "Date",
      y: "Sentiment",
      name: "Sentiment",
      color: "#06adcf",
    },
    {
      type: "bar",
      x: "Date",
      y: "Engagement",
      name: "Engagement",
      color: "#1c8299",
    },

    {
      type: "bar",
      x: "Date",
      y: "EngagementPercentage",
      name: "Engagement %",
      color: "#1c5d99",
    },

    {
      type: "bar",
      x: "Date",
      y: "ShareCounts",
      name: "Share Counts",
      color: "#1c5d99",
    },
    {
      type: "bar",
      x: "Date",
      y: "PlayCount",
      name: "Play Count",
      color: "#009934",
    },
  ],
  facebook: [
    {
      type: "line",
      x: "Date",
      y: "Likes",
      name: "Likes",
      yaxis: "nsty2",
      color: "#050505",
    },
    {
      type: "bar",
      x: "Date",
      y: "Followers",
      name: "Followers",
      color: "#04b9a6",
    },
    {
      type: "bar",
      x: "Date",
      y: "Sentiment",
      name: "Sentiment",
      color: "#06adcf",
    },
    {
      type: "bar",
      x: "Date",
      y: "Engagement",
      name: "Engagement",
      color: "#1c8299",
    },
    {
      type: "bar",
      x: "Date",
      y: "Mentions",
      name: "Mentions",
      color: "#1c5d99",
    },
    {
      type: "bar",
      x: "Date",
      y: "ShareCounts",
      name: "Share Counts",
      color: "#1c5d99",
    },
  ],
  youtube: [
    {
      type: "line",
      x: "Date",
      y: "Likes",
      name: "Likes",
      yaxis: "nsty2",
      color: "#050505",
    },
    {
      type: "bar",
      x: "Date",
      y: "Followers",
      name: "Followers",
      color: "#04b9a6",
    },
    {
      type: "bar",
      x: "Date",
      y: "Sentiment",
      name: "Sentiment",
      color: "#06adcf",
    },
    {
      type: "bar",
      x: "Date",
      y: "Engagement",
      name: "Engagement",
      color: "#1c8299",
    },

    {
      type: "bar",
      x: "Date",
      y: "Mentions",
      name: "Mentions",
      color: "#006d3f",
    },
    {
      type: "bar",
      x: "Date",
      y: "ShareCounts",
      name: "Share Counts",
      color: "#1c5d99",
    },
  ],
  instagram: [
    {
      type: "line",
      x: "Date",
      y: "Likes",
      name: "Likes",
      yaxis: "nsty2",
      color: "#050505",
    },
    {
      type: "bar",
      x: "Date",
      y: "Followers",
      name: "Followers",
      color: "#04b9a6",
    },
    {
      type: "bar",
      x: "Date",
      y: "Sentiment",
      name: "Sentiment",
      color: "#06adcf",
    },
    {
      type: "bar",
      x: "Date",
      y: "Engagement",
      name: "Engagement",
      color: "#1c8299",
    },

    {
      type: "bar",
      x: "Date",
      y: "Mentions",
      name: "Mentions",
      color: "#006d3f",
    },
    {
      type: "bar",
      x: "Date",
      y: "ShareCounts",
      name: "Share Counts",
      color: "#1c5d99",
    },
  ],
  reddit: [
    {
      type: "line",
      x: "Date",
      y: "Likes",
      name: "Likes",
      yaxis: "nsty2",
      color: "#050505",
    },
    {
      type: "bar",
      x: "Date",
      y: "Followers",
      name: "Followers",
      color: "#04b9a6",
    },
    {
      type: "bar",
      x: "Date",
      y: "Sentiment",
      name: "Sentiment",
      color: "#06adcf",
    },
    {
      type: "bar",
      x: "Date",
      y: "Engagement",
      name: "Engagement",
      color: "#1c8299",
    },

    {
      type: "bar",
      x: "Date",
      y: "Mentions",
      name: "Mentions",
      color: "#006d3f",
    },
    {
      type: "bar",
      x: "Date",
      y: "Mentions",
      name: "Mentions",
      color: "#1c5d99",
    },
    {
      type: "bar",
      x: "Date",
      y: "ShareCounts",
      name: "Share Counts",
      color: "#1c5d99",
    },
  ],
  articles: [
    {
      type: "line",
      x: "Date",
      y: "Likes",
      name: "Likes",
      yaxis: "nsty2",
      color: "#050505",
    },
    {
      type: "bar",
      x: "Date",
      y: "Followers",
      name: "Followers",
      color: "#04b9a6",
    },
    {
      type: "bar",
      x: "Date",
      y: "Sentiment",
      name: "Sentiment",
      color: "#06adcf",
    },
    {
      type: "bar",
      x: "Date",
      y: "Engagement",
      name: "Engagement",
      color: "#1c8299",
    },

    {
      type: "bar",
      x: "Date",
      y: "Mentions",
      name: "Mentions",
      color: "#006d3f",
    },

    {
      type: "bar",
      x: "Date",
      y: "ShareCounts",
      name: "Share Counts",
      color: "#1c5d99",
    },
  ],
};
export const MENTIONTIMELINE_HISTROY_MAPPING = {
  twitter: [
    {
      type: "line",
      x: "Date",
      y: "Likes",
      name: "Likes",
      yaxis: "nsty2",
      color: "#050505",
    },

    {
      type: "bar",
      x: "Date",
      y: "Comments",
      name: "Comments",
      color: "#1c5d99",
    },
  ],
  tiktok: [
    {
      type: "bar",
      x: "Date",
      y: "Likes",
      name: "Likes",
      yaxis: "nsty2",
      color: "#050505",
    },
    {
      type: "bar",
      x: "Date",
      y: "Comments",
      name: "Comments",
      color: "#04b9a6",
    },
  ],
  facebook: [
    {
      type: "line",
      x: "Date",
      y: "Likes",
      name: "Likes",
      yaxis: "nsty2",
      color: "#050505",
    },

    {
      type: "bar",
      x: "Date",
      y: "Comments",
      name: "Comments",
      color: "#1c5d99",
    },
  ],
  instagram: [
    {
      type: "line",
      x: "Date",
      y: "Likes",
      name: "Likes",
      yaxis: "nsty2",
      color: "#050505",
    },

    {
      type: "bar",
      x: "Date",
      y: "Comments",
      name: "Comments",
      color: "#1c5d99",
    },
  ],
  reddit: [
    {
      type: "line",
      x: "Date",
      y: "Likes",
      name: "Likes",
      yaxis: "nsty2",
      color: "#050505",
    },

    {
      type: "bar",
      x: "Date",
      y: "Comments",
      name: "Comments",
      color: "#1c5d99",
    },
  ],
  articles: [
    {
      type: "line",
      x: "Date",
      y: "Likes",
      name: "Likes",
      yaxis: "nsty2",
      color: "#050505",
    },

    {
      type: "bar",
      x: "Date",
      y: "Comments",
      name: "Comments",
      color: "#1c5d99",
    },
  ],
  youtube: [
    {
      type: "line",
      x: "Date",
      y: "Likes",
      name: "Likes",
      yaxis: "nsty2",
      color: "#050505",
    },

    {
      type: "bar",
      x: "Date",
      y: "Comments",
      name: "Comments",
      color: "#1c5d99",
    },
  ],
};
export const HISTORICAL_STATS_MAPPING = [
  {
    type: "lines",
    x: "Date",
    y: "Likes",
    name: "Likes",
    yaxis: "nsty2",
    color: "#050505",
  },
  {
    type: "lines",
    x: "Date",
    y: "Comments",
    name: "Comments",
    color: "#006d3f",
  },
  {
    type: "lines",
    x: "Date",
    y: "comments_to_likes_ratio",
    name: "comments_to_likes_ratio",
    color: "#06adcf",
  },
  {
    type: "lines",
    x: "Date",
    y: "engagement_rate",
    name: "engagement_rate",
    color: "#b0390b",
  },
  {
    type: "lines",
    x: "Date",
    y: "followers_count",
    name: "followers_count",
    color: "#960631",
  },
  // {
  //   type: "lines",
  //   x: "Date",
  //   y: "following_count",
  //   name: "following_count",
  //   color: "#009934",
  //   fill: 'tozeroy',
  // },
  // {
  //   type: "lines",
  //   x: "Date",
  //   y: "weekly_posts",
  //   name: "weekly_posts",
  //   color: "#009934",
  //   fill: 'tozeroy',
  // },
  {
    type: "lines",
    x: "Date",
    y: "media_count",
    name: "media_count",
    color: "#d1db16",
  },
];
