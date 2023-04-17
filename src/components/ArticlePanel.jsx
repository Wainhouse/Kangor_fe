import * as React from "react";
import { useEffect, useState } from "react";

import { Box, Paper, Typography, Avatar } from "@mui/material";

import "./ArticlePanel.css";
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
    <div className="article">
      <Box sx={{ maxWidth: 350 }}>
        <Paper elevation={3}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 1, ml: 1 }}>
              {title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Avatar
                sx={{ width: 60, height: 50, mr: 1, mb: 0.6 }}
                alt="Author"
                src={
                  "https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                }
              />
              <Typography variant="subtitle2" color="text.secondary">
                {author}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", mb: 1 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 0.5, mx: 2 }}
              >
                {topic}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mb: 0.6, mx: 2, mb: 2 }}
              >
                {created_at}
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", mr: 2, mb: 4 }}
            >
              <Typography variant="caption" color="text.secondary">
                Votes:{votes}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </div>
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
