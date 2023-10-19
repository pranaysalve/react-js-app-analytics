import { SOCIAL_MEDIA_TYPE } from "../constants";
import { get } from "./axiosInstance"
import { LIVE_SEARCH_URI } from "../../common/endpoints";

const liveSearchHandlers = function () {
  this.youtube = async function (params) {
    if (params.handle) {
      return await get(LIVE_SEARCH_URI, {
        params: {
          youtube_channel: params.handle.toLowerCase().replace(/\s/g, ""),
          lang: "en",
          optional_connectors: "livesearch",
          days: params.days,
          option: "channel",
          size: 0,
          page: 1,
        },
      });
    }
  };

  this.facebook = async function (params) {
    if (params.handle) {
      return await get(LIVE_SEARCH_URI, {
        params: {
          Facebook_page: params.handle,
          lang: "en",
          optional_connectors: "livesearch",
          days: params.days,
          size: 0,
          page: 1,
        },
      });
    }
  };

  this.twitter = async function (params) {
    if (params.handle) {
      return await get(LIVE_SEARCH_URI, {
        params: {
          Twitter_handler: params.handle.toLowerCase(),
          lang: "en",
          optional_connectors: "livesearch",
          days: params.days,
          size: 0,
          page: 1,
        },
      });
    }
  };

  this.reddit = async function (params) {
    if (params.handle) {
      return await get(LIVE_SEARCH_URI, {
        params: {
          Reddit: params.handle.toLowerCase().replace(/\s/g, ""),
          lang: "en",
          optional_connectors: "livesearch",
          days: params.days,
          size: 0,
          page: 1,
        },
      });
    }
  };

  this.instagram = async function (params) {
    if (params.handle) {
      return await get(LIVE_SEARCH_URI, {
        params: {
          Instagram_page: params.handle.toLowerCase(),
          lang: "en",
          optional_connectors: "livesearch",
          days: params.days,
          size: 0,
          page: 1,
          ig_type: params.ig_type,
        },
      });
    }
  };

  this.articles = async function (params) {
    if (params.handle) {
      return await get(LIVE_SEARCH_URI, {
        params: {
          news_keyword: params.handle,
          lang: "en",
          optional_connectors: "livesearch",
          days: params.days,
          country:
            !params.country || params.country.length === 0
              ? "all"
              : params.country.join(),
          size: 0,
          page: 1,
        },
      });
    }
  };

  this.tiktok = async function (params) {
    if (params.handle) {
      return await get(LIVE_SEARCH_URI, {
        params: {
          tiktok_username: params.handle.toLowerCase(),
          lang: "en",
          optional_connectors: "livesearch",
          days: params.days,
          size: 0,
          page: 1,
          tiktok_type: params.tiktok_type,
        },
      });
    }
  };

  this.trustpilot = async function (params) {
    if (params.handle) {
      return await get(LIVE_SEARCH_URI, {
        params: {
          trustPilotcompanyName: params.handle.toLowerCase(),
          lang: "en",
          optional_connectors: "livesearch",
          days: params.days,
          size: 0,
          page: 1,
        },
      });
    }
  };

  this.getLiveSearchData = (socialMediaType, params) => {
    // if (true) {
    //   return Promise.resolve(true);
    // }
    switch (socialMediaType) {
      case SOCIAL_MEDIA_TYPE.articles:
        return this.articles(params);
      case SOCIAL_MEDIA_TYPE.instagram:
        return this.instagram(params);
      case SOCIAL_MEDIA_TYPE.reddit:
        return this.reddit(params);
      case SOCIAL_MEDIA_TYPE.facebook:
        return this.facebook(params);
      case SOCIAL_MEDIA_TYPE.twitter:
        return this.twitter(params);
      case SOCIAL_MEDIA_TYPE.youtube:
        return this.youtube(params);
      case SOCIAL_MEDIA_TYPE.tiktok:
        return this.tiktok(params);
      case SOCIAL_MEDIA_TYPE.trustpilot:
        return this.trustpilot(params);
      default:
        return Promise.reject("Illegal Social Media Type");
    }
  };
};

export const initialLiveSearchHandlers = new liveSearchHandlers()
  .getLiveSearchData;
