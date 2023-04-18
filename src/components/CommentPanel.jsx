import Typography from "@mui/material/Typography";
import { Box, Paper } from "@mui/material";
import "./CommentPanel.css";
const CommentPanel = ({ comment_obj }) => {
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
              Votes: {comment_obj.votes}
            </Typography>
            <Typography variant="body2" sx={{ pb: 1, mt: 1 }}>
              created at :{comment_obj.created_at}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default CommentPanel;
