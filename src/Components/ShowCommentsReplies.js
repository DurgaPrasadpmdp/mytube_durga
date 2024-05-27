import { useEffect, useState } from "react";
import { API_KEY, GET_REPLY_CPOMMENTS } from "../Utils/Urls";
import { getDatawithToken } from "../Utils/Hepler";

const ShowCommentsReplies = ({ id }) => {
  const [repliedList, setRepliedList] = useState([]);
  useEffect(() => {
    const getRepliedComments = async () => {
      const url = GET_REPLY_CPOMMENTS + id + "&key=" + API_KEY;
      const data = await getDatawithToken(url);
      console.log(data, "repliuesComments");
      setRepliedList(data?.items);
    };
    id && getRepliedComments();
  }, []);
  return (
    id &&
    repliedList?.length > 0 && (
      <div>
        {repliedList.map((item) => (
          <CommentMessage data={item} />
        ))}
      </div>
    )
  );
};

const CommentMessage = ({ data }) => {
  const {
    authorProfileImageUrl,
    authorDisplayName,
    textOriginal,
    textDisplay,
    likeCount,
  } = data?.snippet;
  return (
    <div className="flex gap-2 mb-3">
      <div className="flex-shrink-0">
        <img className="rounded-full" src={authorProfileImageUrl} alt="IMG" />
      </div>
      <div>
        <h3>{authorDisplayName}</h3>
        <h3>{textOriginal}</h3>
        <h5 className="inline-block">
          <i className="fa-solid fa-thumbs-up"></i> {likeCount}
        </h5>
      </div>
    </div>
  );
};
export default ShowCommentsReplies;
