import { useEffect, useState } from "react";
import { getData } from "../Utils/Hepler";
import { API_KEY, SEARCH_API } from "../Utils/Urls";
import SearchCard from "./SearchCard";
import SearchResultShimmer from "../Utils/Shimmers/SearchResultShimmer";

const SearchDisplayPage = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const query = searchParams.get("search_query");
  const [searchedResult, setSearchedResult] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");

  useEffect(() => {
    getSearchVedios();

    return () => {
      setSearchedResult([]);
    };
  }, [query]);

  const handleScroll = () => {
    //console.log(window.innerHeight + document.documentElement.scrollTop);

    if (
      window.innerHeight + document.documentElement.scrollTop >
      document.documentElement.offsetHeight - 1
    ) {
      console.log({
        scrolled: document.documentElement.scrollTop,

        totalHeight: window.innerHeight,

        documentHeight: document.documentElement.offsetHeight,
      });
      console.log(nextPageToken);
      getSearchVedios();
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nextPageToken]);

  async function getSearchVedios() {
    let URL = SEARCH_API;
    if (nextPageToken) {
      URL = URL + query + "&pageToken=" + nextPageToken + "&key=" + API_KEY;
    } else {
      URL = URL + query + "&key=" + API_KEY;
    }

    const searchedResult1 = await getData(URL);
    console.log(searchedResult1);
    setSearchedResult(searchedResult.concat(searchedResult1?.items));
    setNextPageToken(searchedResult1?.nextPageToken);
  }
  return (
    <div>
      {searchedResult.length > 0 ? (
        searchedResult.map((value) => {
          return <SearchCard cardDetails={value} />;
        })
      ) : (
        <SearchResultShimmer />
      )}
    </div>
  );
};

export default SearchDisplayPage;
