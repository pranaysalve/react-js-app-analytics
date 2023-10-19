import { SAVE_LOGIN_TOKEN_CHANNEL } from "../../common/constants";

export const BASE_URI =
  "https://alivecore360.com/api/stats/v5?key=15d273cc-0b8a-4460-9cd8-55fa55a3e1c1&lang=en";

export const API_CONTEXT = `${BASE_URI}`;

// Chat GPT Convo History Endpoint
export const AI_CONVO_History = `${API_CONTEXT}/api/livesearch/gpt`;

/* SEARCH QUERY HANDLERS */
export const FB_SEARCH_HANDLES_URI = `${API_CONTEXT}/fb_page_search`;
export const NEWS_SEARCH_HANDLER_URI = `${API_CONTEXT}/news_search`;
export const YOUTUBE_SEARCH_HANDLES_URI = `${API_CONTEXT}/youtube_search`;
export const TWITTER_KEYWORD_SEARCH_HANDLES_URI = `${API_CONTEXT}/news_search`;
export const TWITTER_USERACCOUNT_SEARCH_HANDLES_URI = `${API_CONTEXT}/twitter_account_search`;
export const INSTAGRAM_USERACCOUNT_SEARCH_HANDLES_URI = `${API_CONTEXT}/instagram_search`;
export const INSTAGRAM_HASHTAG_SEARCH_HANDLES_URI = `${API_CONTEXT}/instagram_hashtag_search`;
export const TIKTOK_USERACCOUNT_SEARCH_HANDLES_URI = `${API_CONTEXT}/tiktok`;
export const TIKTOK_HASHTAG_SEARCH_HANDLES_URI = `${API_CONTEXT}/tiktok_hashtag`;
export const LINKEDIN_COMPANY_SEARCH_HANDLES_URI = `${API_CONTEXT}/linkedin_search`;

// SOCIAL MEDIA LEAD INSIGHTS
export const SOCIAL_MEDIA_INSIGHTS = `${API_CONTEXT}/api/remove/v5`;

/* SEARCH DATA URI */
export const LIVE_SEARCH_URI = `${API_CONTEXT}/api/livedata/v5`;
export const STATS_URI = `${API_CONTEXT}/api/stats/v5?`;

export const FB_ADS_INSIGHTS_URI = `${API_CONTEXT}/api/fbadinsights?`;
export const FB_ADS_URI = `${API_CONTEXT}/api/stats/v5?`;
export const FB_ADS_COMMENTS_URI = `${API_CONTEXT}/api/facebookAdsComments?`;

// LINKEDIN INSIGHTS
export const LINKEDIN_INSIGHTS_URI = `${STATS_URI}`;
export const LINKEDIN_PUBLICPAGE_INSIGHTS_URI = `${LIVE_SEARCH_URI}`;

// FB ADS READ STATUS
export const FB_ADS_READ_STATUS_URI = `${API_CONTEXT}/api/facebookAdsComments?`;
//SOCIAL MEDIA READ AND STAR STATUS
export const SOCIALMEDIA_READ_STAR_STATUS_URI = `${API_CONTEXT}/api/mark/v5?`;

//SOCIAL MEDIA LEAD STATUS
export const SOCIALMEDIA_LEAD_STATUS_URI = `${API_CONTEXT}/v5/lead/api?`;
//EXCELL ADD STATUS
export const EXCELL_ADD_STATUS_URI = `${API_CONTEXT}/api/historicalcsvupdate/v5?`;
//SOCIAL MEDIA SHOW LEAD STATUS
export const SOCIALMEDIA_SHOW_LEAD_STATUS_URI = `${API_CONTEXT}/v5/showlead/api?`;
//SOCIAL MEDIA SHOW SALES NAVIGATOR MANAGE LEAD LINK
export const SOCIALMEDIA_SHOW_SALES_NAVIGATOR_MANAGE_LEAD_LINK_URI = `${API_CONTEXT}/api/add/salesNavigator?`;
//SOCIAL MEDIA SHOW SALES NAVIGATOR MANAGE EMAIL ADD LINK
export const SOCIALMEDIA_SHOW_SALES_NAVIGATOR_MANAGE_EMAIL_ADD_URI = `${API_CONTEXT}/api/mark/v5?`;
//SOCIAL MEDIA SHOW SALES NAVIGATOR MANAGE LEAD LINK FOR ADD

//SOCIAL MEDIA SHOW SALES NAVIGATOR MANAGE LEAD LINK FOR EDIT
export const SOCIALMEDIA_SHOW_SALES_NAVIGATOR_MANAGE_LEAD_LINK_URI_FOR_EDIT = `${API_CONTEXT}/api/edit/v5?`;
//SOCIAL MEDIA SHOW SALES NAVIGATOR BULK CONTACT UPLOAD LINK
export const SOCIALMEDIA_SHOW_SALES_NAVIGATOR_BULK_CONTACT_UPLOAD_LINK = `${API_CONTEXT}/api/v5/createContact?`;
//SOCIAL MEDIA SHOW SALES NAVIGATOR BULK CONTACT UPLOAD LINK
export const SOCIALMEDIA_BULK_SHOWLEAD_LINK = `${API_CONTEXT}/v5/lead/api/bulk?`;
//SOCIAL MEDIA SHOW SALES NAVIGATOR MANAGE LEAD LINK FOR DELETE
export const SOCIALMEDIA_SHOW_SALES_NAVIGATOR_MANAGE_LEAD_LINK_URI_FOR_DELETE = `${API_CONTEXT}/api/remove/v5?`;

export const SOCIALMEDIA_SHOW_SALES_NAVIGATOR_STATS_URI = `${API_CONTEXT}/api/stats/salesNavigator?`;
//SOCIAL MEDIA JOB SEARCH TABLE LINK
export const SOCIALMEDIA_JOB_SEARCH_STATS_URI = `${API_CONTEXT}/api/stats/searchExport?`;
//SOCIAL ENGAGEMENT ENTRIES
export const ENGAGEMENT_ENTRIES_URI = `${API_CONTEXT}/api/historicalstats/v5?`;
//JOB_ACCOUNT_SEARCHES_ADD FOR ADD
export const JOB_ACCOUNT_SEARCHES_ADD = `${API_CONTEXT}/api/add/searchExport?`;
//COMPANY_NAME_SEARCHES_ADD FOR ADD
export const COMPANY_NAME_SEARCHES_ADD = `${API_CONTEXT}/api/add/companyinfo??`;
/* USER PROFILE SERVICE */
export const PROFILE_INFO_URI = (user) =>
  `${API_CONTEXT}/api/profileinfo?user=${user}`;
//TRUST PILOT API
export const TRUST_PILOT_SEARCH_STATS_URI = `${API_CONTEXT}/api/stats/v5?`;
export const SAVE_LOGIN_TOKEN = (socialMediaType, logout) =>
  `${API_CONTEXT}/api/${
    ((socialMediaType === SAVE_LOGIN_TOKEN_CHANNEL.facebook ||
      socialMediaType === SAVE_LOGIN_TOKEN_CHANNEL.facebookads) &&
      "facebook") ||
    socialMediaType
  }/${
    ((socialMediaType === SAVE_LOGIN_TOKEN_CHANNEL.linkedin ||
      socialMediaType === SAVE_LOGIN_TOKEN_CHANNEL.tiktok ||
      socialMediaType === SAVE_LOGIN_TOKEN_CHANNEL.hubspot ||
      socialMediaType === SAVE_LOGIN_TOKEN_CHANNEL.discord ||
      socialMediaType === SAVE_LOGIN_TOKEN_CHANNEL.salesforce) &&
      logout === true &&
      "logout") ||
    ((socialMediaType === SAVE_LOGIN_TOKEN_CHANNEL.facebook ||
      socialMediaType === SAVE_LOGIN_TOKEN_CHANNEL.facebookads) &&
      "login") ||
    "token"
  }`;
export const UPDATE_PROFILE_URI = `${API_CONTEXT}/api/update_profile`;

/* EXTERNAL SERVICES FOR LINKEDIN LOGIN AUTH */
export const LINKEDIN_URL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86anb2d5n3mu9n&redirect_uri=https%3A%2F%2Fhaix.app%2Fprofile&state=linkedin&scope=w_organization_social,r_organization_social,r_liteprofile,rw_organization_admin,w_member_social,r_emailaddress,r_ads,w_organization_social,r_basicprofile,r_ads_reporting`;

/* EXTERNAL SERVICES LINK FOR TIKTOK LOGIN AUTH*/
export const TIKTOK_URL = `https://www.tiktok.com/auth/authorize?client_key=aw6r3av516tecqga&response_type=code&scope=user.info.basic,video.list&redirect_uri=https%3A%2F%2Fwww.haix.app&state=tiktok`;
/* EXTERNAL SERVICES FOR HUBSPOT LOGIN AUTH */
// export const HUBSPOT_URL = `https://haix.app/profile?code=a3472342-8374-4f74-bb68-063ad5a09f8f&state=null`;
export const HUBSPOT_URL =
  "https://app-eu1.hubspot.com/oauth/authorize?client_id=c64ca10c-0d80-4732-b958-6c4b9578df74&redirect_uri=https://haix.app/profile&scope=crm.lists.read%20crm.objects.contacts.read%20crm.objects.contacts.write%20crm.objects.custom.read%20crm.objects.companies.write%20crm.schemas.contacts.read%20crm.lists.write%20crm.objects.companies.read%20crm.objects.deals.read%20crm.schemas.companies.read%20crm.schemas.companies.write%20crm.schemas.contacts.write%20crm.objects.owners.read";

/* EXTERNAL SERVICES FOR DISCORD LOGIN AUTH */
export const DISCORD_URL =
  "https://discord.com/oauth2/authorize?client_id=1077677248116699167&permissions=17180517424&redirect_uri=https://haix.app/profile&response_type=code&scope=identify%20bot%20guilds%20guilds.join";

export const SALESFORCE_URL =
  "https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id=3MVG9DREgiBqN9Wk1NB_6qYGrbINEhiCWsh9gTWwH6AFqXxVjgND_Y.iUMhWdRlrHR2kD_ZLU4pwBbgwVuusd&redirect_uri=https://haix.app/profile";
