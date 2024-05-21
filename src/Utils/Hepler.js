export async function getData(url, corsO = true) {
  const nocors = {
    mode: "no-cors",
  };

  const cors = {
    mode: "cors",
  };
  const streamingData = await fetch(url, corsO ? cors : nocors);
  const jsonResponse = await streamingData.json();

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
