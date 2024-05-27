import SearchDisplayPage from "./SearchDisplayPage";
import VideosPage from "./VideosPage";

const WatchPageSuggestions = () => {
  return (
    <div className="pt-[80px] md:pt-0">
      <VideosPage showSearcard={true} />
      {/* {<SearchDisplayPage showSearcard={true} />} */}
    </div>
  );
};

export default WatchPageSuggestions;
