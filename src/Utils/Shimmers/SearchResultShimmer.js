const SearchResultShimmer = () => {
  return (
    <div className="flex gap-3">
      <div className="w-[200px] sm:w-[450px] lg:w-[500px] h-[200px]  bg-[#e5e5e5] rounded-lg"></div>
      <div>
        <div className="w-[300px] sm:w-[350px] lg:w-[450px] h-[20px] bg-[#e5e5e5] rounded-md mb-2 mt-2"></div>
        <div className="w-[100px] sm:w-[150px] lg:w-[200px] h-[20px] bg-[#e5e5e5] rounded-md mb-3"></div>
        <div className="w-[280px] sm:w-[330px] lg:w-[430px] h-[15px] bg-[#e5e5e5] rounded-md"></div>
      </div>
    </div>
  );
};

export default SearchResultShimmer;
