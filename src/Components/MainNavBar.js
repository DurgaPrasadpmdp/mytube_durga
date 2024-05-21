import { useContext, useEffect, useState } from "react";
import Y_LOGO from "../../src/assets/images/Y_Logo.png";
import MenuContext from "../Utils/Context/MenuContext";
import { getData } from "../Utils/Hepler";
import { SUGGESTIONS_API } from "../Utils/Urls";
import { Link, useNavigate } from "react-router-dom";

const MainNavBar = () => {
  const { menuOpened, setMenuOpened } = useContext(MenuContext);
  const [searchText, SetSearchText] = useState("");
  const [suggestions, SetSuggestions] = useState([]);
  const [issearchFocus, setSearchFocus] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    let timeout = setTimeout(() => {
      console.log(searchText);
      getSuggestions();
    }, 300);

    return () => {
      console.log("cleared");
      clearTimeout(timeout);
    };
  }, [searchText]);

  async function getSuggestions() {
    if (searchText.length === 0) return [];
    const suggestionData = await getData(SUGGESTIONS_API + searchText);
    SetSuggestions(suggestionData[1]);
  }
  return (
    <>
      <div className="flex mb-2 items-center mt-2">
        <div
          className="cursor-pointer flex-shrink-0 text-[1.4rem] text-sm sm:text-xl"
          onClick={() => {
            setMenuOpened(!menuOpened);
          }}
        >
          <div>
            <i className="fa-solid fa-bars inline-block pr-2 sm:pr-8  pl-[10px] ml-[5px]"></i>
          </div>
        </div>
        <div className="inline-block flex-shrink-0">
          <img className="sm:w-[100px] w-[50px]" src={Y_LOGO} alt="logo" />
        </div>
        <div className="flex-grow-[1] flex-shrink-0  self-center flex justify-center ">
          <div className="w-[180px] sm:w-[200px] md:w-[300px] lg:w-[500px] flex-grow-0 flex-shrink-1 ml-[20px]  ">
            <input
              type="search"
              placeholder="Search"
              className="border border-solid border-[#000] pl-[13px] focus-visible:outline-none rounded-tl-[24px] rounded-bl-[24px] sm:h-[40px] h-[24px] inline-block w-[100%] placeholder:text-xl focus:border-[#1c62b9] shadow-inner before:fa-magnifying-glass"
              onChange={(e) => {
                SetSearchText(e.target.value);
              }}
              onFocus={() => {
                setSearchFocus(true);
              }}
              onBlur={() => {
                setSearchFocus(false);
              }}
            />
            {suggestions.length > 0 &&
              issearchFocus &&
              displaySuggestions(
                suggestions,
                SetSearchText,
                navigate,
                searchText
              )}
          </div>
          <button
            className="border border-solid border-[#000] border-l-0 rounded-tr-[24px] rounded-br-[24px] pl-[10px] pr-[10px] sm:pl-[20px] sm:pr-[20px] sm:h-[40px] h-[24px] inline-block flex-shrink-0 mr-[5px] sm:mr-[10px]"
            onClick={() => {
              navigate("/results?search_query=" + searchText);
            }}
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <div className="flex-shrink-0 text-[10px] sm:text-[20px] md:text-[30px] mr-[30px]">
          <span>
            <i class="fa-regular fa-user"></i>
          </span>
        </div>
      </div>
    </>
  );
};

function displaySuggestions(suggestions, SetSearchText, navigate, searchText) {
  return (
    <div className="absolute bg-[#fff] z-10 rounded-[12px] shadow-2xl mt-1 pt-[10px] pb-[20px] pl-0 pr-0 w-inherit text-sm sm:text-xl">
      <ul>
        {suggestions.map((value) => {
          return (
            <Link to={"/results?search_query=" + value}>
              <li
                className="cursor-pointer hover:bg-gray-300 leading-[30px]   "
                key={value}
                onClick={() => {
                  SetSearchText(value);
                  navigate("/results?search_query=" + searchText);
                }}
              >
                <span className="pl-[20px]">{value}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
export default MainNavBar;
