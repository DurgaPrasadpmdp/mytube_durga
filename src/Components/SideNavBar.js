import { useContext } from "react";
import MenuContext from "../Utils/Context/MenuContext";
import { Link } from "react-router-dom";

const SideNavBar = () => {
  const { menuOpened } = useContext(MenuContext);

  return menuOpened ? (
    <div className="flex-shrink-1">
      <ul>
        <Link to={"/"}>
          <li className="hover:bg-[#f2f2f2] pl-[10px] ml-[5px] rounded-md cursor-pointer text-[1.4rem] p-1">
            <i class="fa-solid fa-house pr-[0.9rem] inline-block"></i>{" "}
            <div className="inline-block">Home</div>
          </li>
        </Link>
        <li className="hover:bg-[#f2f2f2] pl-[10px] ml-[5px] rounded-md cursor-pointer text-[1.4rem] p-1">
          <i class="fa-brands fa-google-play pr-[0.9rem] inline-block"></i>
          <div className="inline-block ">subscriptions </div>
        </li>
      </ul>
    </div>
  ) : (
    <div className="flex-shrink-0">
      <ul>
        <Link to={"/"}>
          <li className="hover:bg-[#f2f2f2] ml-[5px] rounded-md cursor-pointer text-[1.4rem] p-1 text-center">
            <i class="fa-solid fa-house text-sm sm:text-xl "></i>{" "}
            <div className="text-[10px] sm:text-[12px]">Home</div>
          </li>
        </Link>
        <li className="hover:bg-[#f2f2f2] ml-[5px] rounded-md cursor-pointer text-[1.4rem] p-1 text-center">
          <i class="fa-brands fa-google-play text-sm sm:text-xl"></i>
          <div className="text-[10px] sm:text-[12px]">Subscriptions </div>
        </li>
      </ul>
    </div>
  );
};

export default SideNavBar;
