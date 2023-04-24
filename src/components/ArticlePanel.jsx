import * as React from "react";
import { Box, Paper } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./ArticlePanel.css";
import { useState, useEffect } from "react";
import VoteCounter from "../components/VoteCounter";
import BoltIcon from "@mui/icons-material/Bolt";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import { useLocation } from "react-router-dom";

const ArticlePanel = ({
  article,
  article_id,
  topics,
  title,
  author,
  article_img_url,
  votes,
  created_at,
}) => {
  let location = useLocation();
  const [voter, setVoter] = useState(votes);
  useEffect(() => {
    setVoter(votes + 0);
  }, [location]);
  return (
    <div className="article">
      <Box sx={{ maxWidth: 300, flexGrow: 1 }}>
        <Paper elevation={2}>
          <VoteCounter
            article={article}
            topics={topics}
            key={article_id}
            article_id={article_id}
            votes={voter}
            setVoter={setVoter}
            voter={voter}
          />
          <Link
            to={`/articles/${article_id}`}
            style={{ textDecoration: "none" }}
          >
            <Box>
              <Paper elevation={2}>
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
                <Box
                  sx={{
                    mb: 1,
                    pl: 1,
                    display: "flex",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      mr: 0.2,
                      display: "flex",
                    }}
                    color="text.secondary"
                  >
                    <AccountBoxOutlinedIcon
                      sx={{
                        maxHeight: 15,
                      }}
                    />
                  </Typography>
                  <Typography
                    sx={{
                      mt: 0.1,
                      display: "flex",
                    }}
                    variant="subtitle2"
                    color="text.secondary"
                  >
                    {author}
                  </Typography>
                </Box>
                <Box sx={{ mb: 1 }}>
                  <Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 0.1, ml: 1.5 }}
                    >
                      {topics}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ mb: 0.6, mx: 1, mt: 0.2, ml: 1.5 }}
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
                      <BoltIcon className="bolt" />
                      {voter}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Link>
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
