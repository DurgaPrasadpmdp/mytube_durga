import { Outlet } from "react-router-dom";
import "./App.css";
import SideNavBar from "./Components/SideNavBar";
import MainNavBar from "./Components/MainNavBar";
import { useEffect, useState } from "react";
import MenuContext from "./Utils/Context/MenuContext";

function App() {
  const [menuOpened, setMenuOpened] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1300) {
        setMenuOpened(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <MenuContext.Provider value={{ menuOpened, setMenuOpened }}>
      <div>
        <div>
          <MainNavBar />
        </div>
        <div className="flex gap-[10px]">
          <SideNavBar />
          <div className="flex-shrink-1 flex-grow-0">
            <Outlet />
          </div>
        </div>
      </div>
    </MenuContext.Provider>
  );
}

export default App;
