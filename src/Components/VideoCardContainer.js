import { useState, useEffect } from "react";
import { convertCounttoShort, convertPlayTime, getData } from "../Utils/Hepler";
import { API_KEY, CHANNEL_DETAILS } from "../Utils/Urls";
import { useNavigate } from "react-router-dom";

const VideoCardContainer = (props) => {
  const { snippet, statistics, contentDetails, id } = props?.cardDetails;
  const { thumbnails } = snippet;
  const [channelThumbnail, setChannelThumbnail] = useState("");
  const channelId = snippet.channelId;
  const [isEllipseMenu, setisEllipseMenu] = useState(false);

  async function getChannelDetails() {
    const URL = CHANNEL_DETAILS + channelId + "&key=" + API_KEY;
    const channelData = await getData(URL);
    const thumbnail = channelData?.items[0]?.snippet.thumbnails?.default?.url;
    setChannelThumbnail(thumbnail);
  }
  const navigate = useNavigate();
  const gotoWatchPage = () => {
    navigate("/watch?v=" + id);
  };
  useEffect(() => {
    getChannelDetails();
  }, []);
  return (
    <div
      className="cursor-pointer w-[400px]   flex-shrink-0"
      onMouseEnter={() => {
        setisEllipseMenu(true);
      }}
      onMouseLeave={() => {
        setisEllipseMenu(false);
      }}
    >
      <div className="relative w-[100%]" onClick={gotoWatchPage}>
        <img
          className=" rounded-[12px] hover:rounded-none w-[100%] "
          src={thumbnails?.medium?.url}
          alt="thumb"
        ></img>
        <div className="absolute text-[#fff] bottom-2 right-2">
          {contentDetails?.duration &&
            convertPlayTime(contentDetails?.duration)}
        </div>
      </div>

      <div className="flex mt-[15px] relative ">
        <div className="flex-shrink-0">
          <img
            width="50px"
            height="50px"
            className="h-[50px] rounded-full "
            alt="profile"
            src={channelThumbnail}
          ></img>
        </div>
        <div className="pl-[20px] pt-[5px]">
          <div className="text-twolines"> {snippet?.title}</div>
          {isEllipseMenu && (
            <span className="absolute top-[2px] right-[10px]">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </span>
          )}
          <div>
            <span>{convertCounttoShort(statistics?.viewCount)} views</span>

            {/* <span>3 months ago</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCardContainer;
