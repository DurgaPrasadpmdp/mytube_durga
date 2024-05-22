import { useEffect, useState } from "react";
import WatchPageSuggestions from "./WatchPageSuggestions";
import { API_KEY, VEDIO_DETAILS } from "../Utils/Urls";
import { getData } from "../Utils/Hepler";

const WatchPage = () => {
  const urlparams = new URLSearchParams(window.location.search);
  const vedioId = urlparams.get("v");
  console.log(vedioId);

  return (
    <div className="flex  flex-wrap md:flex-nowrap ml-[20px] md:ml-[50px] gap-6 ">
      <div className=" w-[85%]  sm:w-[410px] md:w-[500px] lg:w-[600px] h-[200px] sm:h-[250px] md:h-[280px] lg:h-[350px] rounded-lg flex-shrink-0">
        <iframe
          className="rounded-lg"
          width="100%"
          height="100%"
          src={"https://www.youtube.com/embed/" + vedioId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        {DisplayVedioDetails(vedioId)}
      </div>
      <div>
        <WatchPageSuggestions />
      </div>
    </div>
  );
};

const DisplayVedioDetails = (vedioId) => {
  const [vedioDetails, setVedioDetails] = useState([]);
  useEffect(() => {
    getDataVedios();
  }, []);

  async function getDataVedios() {
    const URL = VEDIO_DETAILS + vedioId + "&key=" + API_KEY;
    const result = await getData(URL);
    console.log(result);
    setVedioDetails(result.items[0]);
  }
  return (
    vedioDetails && (
      <div>
        <h2 className="text-xl font-bold">{vedioDetails?.snippet?.title}</h2>
        <div>
          <h4>{vedioDetails?.snippet?.channelTitle}</h4>
        </div>
        {/* <div>{vedioDetails?.snippet?.localized?.description}</div> */}
      </div>
    )
  );
};

export default WatchPage;
