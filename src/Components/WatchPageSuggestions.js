import SearchDisplayPage from "./SearchDisplayPage";
import VideosPage from "./VideosPage";

const WatchPageSuggestions = () => {
  return (
    <div>
      <VideosPage showSearcard={true} />
      {/* {<SearchDisplayPage showSearcard={true} />} */}
    </div>
  );
};

export default WatchPageSuggestions;
