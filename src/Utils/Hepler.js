import Cookies from "js-cookie";

export async function getData(url, includeToken) {
  const streamingData = await fetch(url);
  const jsonResponse = await streamingData.json();
  if (!streamingData.ok) {
    throw new Error(jsonResponse.error.message);
  }
  return jsonResponse;
}

export async function getDatawithToken(url) {
  // getData(url, true);
  const options = {
    headers: {
      Authorization: "Bearer " + Cookies.get("authCookie"),
    },
  };
  const streamingData = await fetch(url, options);
  const jsonResponse = await streamingData.json();
  if (!streamingData.ok) {
    throw new Error(jsonResponse.error.message);
  }
  return jsonResponse;
}

export const convertCounttoShort = (number) => {
  const suffixes = ["", "K", "M", "B", "T"];
  const suffixNum = Math.floor(("" + number).length / 3);
  let shortNumber = parseFloat(
    (suffixNum !== 0 ? number / Math.pow(1000, suffixNum) : number).toPrecision(
      2
    )
  );
  if (shortNumber % 1 !== 0) {
    shortNumber = shortNumber.toFixed(1);
  }
  return shortNumber + suffixes[suffixNum];
};

export function convertPlayTime(playString) {
  //PT19M27S
  //   const time = playString.split("PT");
  //   const min = time[1].split("M")[0];
  //   const sec = time[1].split("M")[1];
  //   return `${min}:${sec.split("S")[0]}`;
}

export function checkLogin() {
  const userLoginString = localStorage.getItem("login") || false;
  const userLogin = userLoginString === "false" ? false : true;
  return userLogin;
}

export function add(x, y) {
  return x + y;
}
