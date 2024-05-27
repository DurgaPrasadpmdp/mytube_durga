import { Outlet } from "react-router-dom";
import "./App.css";
import SideNavBar from "./Components/SideNavBar";
import MainNavBar from "./Components/MainNavBar";
import { useEffect, useState } from "react";
import MenuContext from "./Utils/Context/MenuContext";
import AuthTokenContext from "./Utils/Context/AuthTokenContext";
import Cookies from "js-cookie";

function App() {
  const [menuOpened, setMenuOpened] = useState(true);
  const [token, setToken] = useState("");

  const loginCookie = Cookies.get("authCookie");
  localStorage.setItem("login", loginCookie?.length ? true : false);

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
    <AuthTokenContext.Provider value={{ token, setToken }}>
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
    </AuthTokenContext.Provider>
  );
}

export default App;
