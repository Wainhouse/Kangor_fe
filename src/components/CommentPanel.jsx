import Typography from "@mui/material/Typography";
import { Box, Paper } from "@mui/material";
import dayjs from "dayjs";
import BoltIcon from "@mui/icons-material/Bolt";
import { ReactComponent as Remove } from "../img/delete_icon.svg";
import { useParams } from "react-router-dom";
import { deleteCommentById } from "../api";
import { useEffect } from "react";

import "./CommentPanel.css";
const CommentPanel = ({ comment_obj, onDelete }) => {
  const handleDelete = async () => {
    try {
      await deleteCommentById(comment_obj.comment_id);
      onDelete(comment_obj.comment_id);
      console.log("deleted");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="CommentsPanel">
      <Box
        sx={{
          maxWidth: 450,
          flexGrow: 1,
          mt: 2,
          mb: 2,
          ml: 0.5,
          mr: 0.5,
        }}
      >
        <Paper elevation={1} sx={{ borderRadius: 0 }}>
          <Box>
            <Typography variant="body1" sx={{ pt: 1, mb: 1, ml: 1 }}>
              {comment_obj.author}
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1, mb: 1, pl: 1 }}>
              {comment_obj.body}
            </Typography>
          </Box>
          <Box sx={{ maxWidth: 450, flexGrow: 1, ml: 1, mr: 1 }}>
            <Typography variant="body2" sx={{ mt: 0.3 }}>
              <BoltIcon className="bolt" />
              {comment_obj.votes}
            </Typography>
            <Box>
              <Typography variant="body2" sx={{ pb: 1, mt: 1 }}>
                Posted:{" "}
                {dayjs(comment_obj.created_at).format("h:mm A - MMM, DD, YYYY")}
                <Remove className="remove_icon" onClick={handleDelete} />
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default CommentPanel;
