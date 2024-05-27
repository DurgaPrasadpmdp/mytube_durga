const VedioShimmer = () => {
  const shimArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
  return (
    <div className="flex flex-wrap ">
      {shimArr.map((it) => {
        return <Shimmer key={it} />;
      })}
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="w-[400px]">
      <div className="w-[360px] m-[10px] h-[200px] border-solid border rounded-[12px] bg-[#e5e5e5]"></div>

      <div className="flex">
        <div className="w-[50px] h-[50px] rounded-full border border-solid bg-[#f2f2f2]"></div>
        <div className="">
          <div className="w-[250px] m-[10px] h-[25px] border-solid border rounded-[12px] bg-[#f2f2f2]"></div>
          <div className="w-[150px] m-[10px] h-[25px] border-solid border rounded-[12px] bg-[#f2f2f2]"></div>
        </div>
      </div>
    </div>
  );
};

export default VedioShimmer;
