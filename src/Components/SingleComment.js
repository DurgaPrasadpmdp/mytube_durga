import { useState } from "react";
import ShowCommentsReplies from "./ShowCommentsReplies";

const SingleComment = ({ comments }) => {
  //console.log(id);
  const [showRep, setShowRep] = useState(false);
  const { snippet, id } = comments;
  const { topLevelComment, totalReplyCount } = snippet;
  const { snippet: commentSnippet } = topLevelComment;
  const {
    authorProfileImageUrl,
    authorDisplayName,
    textOriginal,
    textDisplay,
    likeCount,
  } = commentSnippet;

  const showReplies = () => {
    setShowRep(!showRep);
  };
  return (
    <div className="flex gap-2 mb-3">
      <div className="flex-shrink-0">
        <img
          className="rounded-full"
          src={authorProfileImageUrl}
          alt="profileIMG"
        />
      </div>
      <div>
        <h3>{authorDisplayName}</h3>
        <h3>{textOriginal}</h3>
        <h5 className="inline-block">
          <i className="fa-solid fa-thumbs-up"></i> {likeCount}
        </h5>
        {totalReplyCount > 0 && (
          <h5 onClick={showReplies} className="text-blue-500 cursor-pointer">
            {totalReplyCount} Replies
          </h5>
        )}
        {showRep && (
          <div>
            <ShowCommentsReplies id={id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleComment;
