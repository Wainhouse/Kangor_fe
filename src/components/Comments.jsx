import CommentPanel from "./CommentPanel";
import { useParams } from "react-router-dom";
import * as api from "../api";
import { useEffect, useState } from "react";

const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api.fetchArticleComments(article_id).then((data) => {
      console.log(data.comments);
      setComments(data.comments);
    });
    console.log(comments);
  }, [article_id]);
  return (
    <div className="all_comments">
      {comments.map((comment) => {
        return <CommentPanel comment_obj={comment} key={comment.comment_id} />;
      })}
    </div>
  );
};

export default Comments;

//comment_id, body, article_id, author, votes, created_at
