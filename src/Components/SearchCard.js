import { useEffect, useState } from "react";
import { getData } from "../Utils/Hepler";
import { API_KEY, CHANNEL_DETAILS } from "../Utils/Urls";

const SearchCard = (props) => {
  const { snippet } = props?.cardDetails;
  const [channelThumbnail, setChannelThumbnail] = useState("");
  const channelId = snippet.channelId;
  async function getChannelDetails() {
    const URL = CHANNEL_DETAILS + channelId + "&key=" + API_KEY;
    const channelData = await getData(URL);
    const thumbnail = channelData?.items[0]?.snippet.thumbnails?.default?.url;
    setChannelThumbnail(thumbnail);
  }

  useEffect(() => {
    //getChannelDetails();
  }, []);

  return (
    <div
      className="flex  mb-4 gap-2 sm:gap-3 md:gap-4"
      key={snippet?.channelId}
    >
      <div className="min-w-[500px]">
        <img
          className="rounded-lg w-[500px]  lg:w-[500px] sm:w-[600px] md:w-[550px] h-[100%]"
          src={snippet?.thumbnails?.medium?.url}
          alt="Text"
        />
      </div>
      <div className="flex-grow-0 flex-shrink-[1] ">
        <div className="font-[500] sm:text-[18px] text-[12px] text-twolines">
          {snippet?.title}
        </div>
        <div className="flex items-center">
          <span>
            <img
              className="rounded-full w-[40px] h-[40px]"
              src={channelThumbnail}
              alt="thumb"
            />
          </span>
          <div className="sm:text-[18px] text-[12px] inline-block ml-2">
            {snippet?.channelTitle}
          </div>
        </div>
        <div className="text-[9px] sm:text-[14px] text-oneline">
          {snippet?.description}
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
