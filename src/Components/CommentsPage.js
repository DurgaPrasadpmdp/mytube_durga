import { useEffect, useState } from "react";
import { checkLogin, getDatawithToken } from "../Utils/Hepler";
import { API_KEY, GET_COMMENTS } from "../Utils/Urls";
import SingleComment from "./SingleComment";
const CommentsPage = ({ vedioId }) => {
  const [commentList, setCommentList] = useState([]);
  useEffect(() => {
    const URLCOMMENTS = GET_COMMENTS + vedioId + "&key=" + API_KEY;
    const getComments = async () => {
      const commentData = await getDatawithToken(URLCOMMENTS);
      console.log(commentData, "comments");
      setCommentList(commentData?.items);
    };

    checkLogin() && vedioId && getComments();
  }, []);

  return checkLogin() ? (
    <div>
      {commentList.length &&
        commentList.map((item) => <SingleComment comments={item} />)}
    </div>
  ) : (
    <div>sign in to show Comments</div>
  );
};

// const SingleComment = ({ comments }) => {
//   const { snippet } = comments;
//   const { topLevelComment, totalReplyCount } = snippet;
//   const { snippet: commentSnippet } = topLevelComment;
//   const {
//     authorProfileImageUrl,
//     authorDisplayName,
//     textOriginal,
//     textDisplay,
//     likeCount,
//   } = commentSnippet;
//   return (
//     <div className="flex gap-2 mb-3">
//       <div>
//         <img
//           className="rounded-full"
//           src={authorProfileImageUrl}
//           alt="profileIMG"
//         />
//       </div>
//       <div>
//         <h3>{authorDisplayName}</h3>
//         <h3>{textOriginal}</h3>
//         <h5 className="inline-block">
//           <i className="fa-solid fa-thumbs-up"></i> {likeCount}
//         </h5>
//         {totalReplyCount > 0 && (
//           <h5 className="text-blue-500">{totalReplyCount} Replies</h5>
//         )}
//       </div>
//     </div>
//   );
// };
export default CommentsPage;
