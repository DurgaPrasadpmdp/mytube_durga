export const API_KEY = "AIzaSyConx9thWedBpeV2hL5K8G2frEdpUYGaw0";
//export const API_KEY = "AIzaSyBm281in4PNTN9CcX0vhgm8dZmcfRZjX_A";

export const CLIENT_ID =
  "774755833617-pjeskprouncefb5h65n9a27898pq7nm0.apps.googleusercontent.com";
export const Y_VEDIOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics,topicDetails,localizations,player,status,recordingDetails,id,liveStreamingDetails&chart=mostPopular&regionCode=IN&maxResults=20&key=";

export const SUGGESTIONS_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=videos&q=";

export const CHANNEL_DETAILS =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const VEDIO_DETAILS =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const SUBSCRIPTION_API =
  "https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&forChannelId=";

export const GET_SUBS_LIST =
  "https://content-youtube.googleapis.com/youtube/v3/subscriptions?mine=true&maxResults=20&part=snippet%2CcontentDetails&key=" +
  API_KEY;

export const GET_COMMENTS =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=20&order=relevance&textFormat=plainText&videoId=";

export const GET_REPLY_CPOMMENTS =
  "https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=";
