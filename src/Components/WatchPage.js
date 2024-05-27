import { useEffect, useState } from "react";
import WatchPageSuggestions from "./WatchPageSuggestions";
import { API_KEY, SUBSCRIPTION_API, VEDIO_DETAILS } from "../Utils/Urls";
import { checkLogin, getData, getDatawithToken } from "../Utils/Hepler";
import CommentsPage from "./CommentsPage";

const WatchPage = () => {
  const urlparams = new URLSearchParams(window.location.search);
  const vedioId = urlparams.get("v");
  console.log(vedioId);

  return (
    <div className="flex  flex-wrap md:flex-nowrap ml-[20px] md:ml-[50px] gap-6 ">
      <div className=" w-[85%]  sm:w-[410px] md:w-[500px] lg:w-[600px] h-[200px] sm:h-[250px] md:h-[280px] lg:h-[350px] rounded-lg flex-shrink-0">
        <div className="min-h-[250px] h-[100%] rounded-lg">
          <iframe
            width="100%"
            height="100%"
            src={"https://www.youtube.com/embed/" + vedioId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div> {DisplayVedioDetails(vedioId)}</div>
      </div>
      <div className="d-none sm:block">
        <WatchPageSuggestions />
      </div>
    </div>
  );
};

const DisplayVedioDetails = (vedioId) => {
  const [vedioDetails, setVedioDetails] = useState([]);
  const [subscription, setSubscription] = useState([]);
  useEffect(() => {
    getDataVedios();
  }, []);

  async function getDataVedios() {
    const URL = VEDIO_DETAILS + vedioId + "&key=" + API_KEY;
    const result = await getData(URL);
    console.log(result);
    setVedioDetails(result.items[0]);
    checkLogin() && checkSubScription(result.items[0]?.snippet?.channelId);
  }

  async function checkSubScription(channelId) {
    try {
      const subURL = SUBSCRIPTION_API + channelId + "&key=" + API_KEY;
      const subRes = await getDatawithToken(subURL);
      setSubscription(subRes?.items);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    vedioDetails && (
      <div>
        <h2 className="text-xl font-bold">{vedioDetails?.snippet?.title}</h2>
        <div>
          <h4 className="inline-block mr-[20px] mt-[20px] mb-[20px]">
            {vedioDetails?.snippet?.channelTitle}
          </h4>
          <button className="bg-black text-white pl-[10px] pr-[10px] rounded-2xl h-[32px] inline-block mr-[20px]">
            {subscription?.length > 0 ? "Subscribe" : "Subscribed"}
          </button>
          <h5 className="inline-block mr-[20px]">
            {vedioDetails?.statistics?.viewCount} Views
          </h5>
          <h5 className="inline-block">
            <i className="fa-solid fa-thumbs-up"></i>{" "}
            {vedioDetails?.statistics?.likeCount}
          </h5>
        </div>
        <div className="font-bold text-xl">
          {vedioDetails?.statistics?.commentCount} Comments
        </div>
        <div>
          <CommentsPage vedioId={vedioId} />
        </div>
      </div>
    )
  );
};

export default WatchPage;
