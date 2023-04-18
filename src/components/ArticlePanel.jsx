import * as React from "react";
import { Box, Paper } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./ArticlePanel.css";
import Comments from "./Comments";
import Button from "@mui/material/Button";
const ArticlePanel = ({
  key,
  article_id,
  title,
  author,
  topic,
  article_img_url,
  votes,
  created_at,
}) => {
  return (
    <Link to={`/articles/${article_id}`} style={{ textDecoration: "none" }}>
      <div className="article">
        <Box sx={{ maxWidth: 300, flexGrow: 1 }}>
          <Paper elevation={20}>
            <CardMedia
              sx={{
                height: 100,
              }}
              image={article_img_url}
              title="img_url"
            />
            <Typography variant="h6" sx={{ mb: 1, pl: 1, pt: 1 }}>
              {title}
            </Typography>
            <Box sx={{ mb: 1, pl: 1 }}>
              <Typography variant="subtitle2" color="text.secondary">
                {author}
              </Typography>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1, pl: 1 }}
                >
                  {topic}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mb: 0.6, mx: 1, mt: 5 }}
                >
                  {created_at}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mr: 2,
                  pb: 1,
                }}
              >
                <Typography variant="caption" color="text.secondary">
                  Votes:{votes}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </div>
    </Link>
  );
};

// {"article":
// {"article_id":1,
// "title":"Running a Node App",
// "topic":"coding",
// "author":"jessjelly",
// "body":"This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.",
// "created_at":"2020-11-07T06:03:00.000Z",
// "votes":0,
// "article_img_url":"https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700",
// "comment_count":8}}

export default ArticlePanel;
