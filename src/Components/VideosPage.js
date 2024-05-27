import { useEffect, useState } from "react";
import VideoCardContainer from "./VideoCardContainer";
import { getData } from "../Utils/Hepler";
import { API_KEY, Y_VEDIOS_API } from "../Utils/Urls";
import VedioShimmer from "../Utils/Shimmers/VedioShimmer";
import SearchCard from "./SearchCard";
const VideosPage = ({ showSearcard }) => {
  const [vedioList, setVedioList] = useState([]);
  const [nextPageToken, setnextPageToken] = useState("");

  async function fetchVedios() {
    let Vedio_Url = Y_VEDIOS_API;
    if (nextPageToken) {
      Vedio_Url = `${Vedio_Url} + ${API_KEY}&pageToken=${nextPageToken}`;
    } else {
      Vedio_Url = Vedio_Url + API_KEY;
    }
    const vedioData = await getData(Vedio_Url);
    // console.log(vedioData);
    setVedioList(vedioList.concat(vedioData.items));
    setnextPageToken(vedioData.nextPageToken);
  }

  useEffect(() => {
    fetchVedios();
  }, []);

  useEffect(() => {
    function fetchMoreVedios(event) {
      // console.log({
      //   currentHeight: window.innerHeight + document.documentElement.scrollTop,
      //   TotalHeight: document.documentElement.offsetHeight,
      // });
      if (
        window.innerHeight + document.documentElement.scrollTop >
        document.documentElement.offsetHeight - 1
      ) {
        // console.log("scroll");
        // console.log(nextPageToken);
        fetchVedios();
      }
    }

    window.addEventListener("scroll", fetchMoreVedios);

    return () => {
      window.removeEventListener("scroll", fetchMoreVedios);
    };
  }, [nextPageToken]);

  return !showSearcard ? (
    <>
      {vedioList.length > 0 && (
        <div className="flex flex-wrap gap-y-10 gap-x-4 mr-[30px] ">
          {vedioList.length > 0 &&
            vedioList.map((Vd) => {
              return (
                <>
                  <VideoCardContainer Key={Vd?.id} cardDetails={Vd} />
                </>
              );
            })}
        </div>
      )}
      {vedioList?.length === 0 && <VedioShimmer />}
    </>
  ) : (
    vedioList.length > 0 &&
      vedioList.map((vedios) => {
        return (
          <SearchCard
            Key={vedios.id}
            cardDetails={vedios}
            watchPage={showSearcard}
          />
        );
      })
  );
};

export default VideosPage;
