const SubscriptionCard = ({ cardDetails }) => {
  const { snippet } = cardDetails;
  console.log(cardDetails);
  return (
    <div className="flex justify-center items-center gap-3 flex-wrap mb-4 p-4 sm:p-0 border border-solid border-black sm:border-none ">
      <div>
        <img
          className="rounded-[50%]"
          src={snippet?.thumbnails?.medium?.url}
          alt="profileIMG"
        />
      </div>
      <div className="w-[95%] text-center sm:w-[38%] sm:text-left">
        <h2>{snippet?.title}</h2>
        <p>{snippet?.description}</p>
      </div>
    </div>
  );
};

export default SubscriptionCard;
