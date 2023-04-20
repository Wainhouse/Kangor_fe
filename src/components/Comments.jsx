import CommentPanel from "./CommentPanel";
import { useParams } from "react-router-dom";
import * as api from "../api";
import { useEffect, useState } from "react";
import { ReactComponent as Add } from "../img/add_icon.svg";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [newCommentShow, setNewCommentShow] = useState(true);

  useEffect(() => {
    try {
      api.fetchArticleComments(article_id).then((data) => {
        setComments(data.comments);
      });
    } catch (error) {
      return error;
    }
  }, [article_id]);

  return (
    <div className="all_comments">
      <IconButton
        sx={{ ml: 4 }}
        color="primary"
        component="label"
        onClick={() => {
          setNewCommentShow(!newCommentShow);
        }}
      >
        <Add />
      </IconButton>
      {!newCommentShow ? (
        <NewCommentForm setComments={setComments} comments={comments} />
      ) : (
        <></>
      )}
      {comments.map((comment) => {
        return <CommentPanel comment_obj={comment} key={comment.comment_id} />;
      })}
    </div>
  );
};

export default Comments;

//comment_id, body, article_id, author, votes, created_at
