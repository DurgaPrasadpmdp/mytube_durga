import { useEffect, useState } from "react";
import { checkLogin, getDatawithToken } from "../Utils/Hepler";
import { GET_SUBS_LIST } from "../Utils/Urls";
import SubscriptionCard from "./SubscriptionCard";
import { Link } from "react-router-dom";

const Subscriptions = () => {
  const [subList, setSubList] = useState([]);
  const userLogin = checkLogin();

  useEffect(() => {
    const getList = async () => {
      const list = await getDatawithToken(GET_SUBS_LIST);
      console.log(list);
      setSubList(list?.items);
    };

    userLogin && getList();
  }, []);
  return userLogin ? (
    <div className="">
      {subList?.length > 0 &&
        subList.map((item) => (
          <SubscriptionCard key={item?.snippet?.id} cardDetails={item} />
        ))}
    </div>
  ) : (
    <div>
      <Link className="text-blue-600 underline text-3xl" to={"/login"}>
        Sign In
      </Link>
      <span className="text-2xl">to see Subscriptions</span>
    </div>
  );
};

export default Subscriptions;
