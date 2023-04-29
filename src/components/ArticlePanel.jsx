import * as React from "react";
import { Box, Paper } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

import { ReactComponent as Chat } from "../img/chat-bubble.svg";

import "./ArticlePanel.css";
import { useState, useEffect } from "react";
import VoteCounter from "../components/VoteCounter";
import BoltIcon from "@mui/icons-material/Bolt";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import { useLocation } from "react-router-dom";

const ArticlePanel = ({ article, article_id, topics }) => {
  let location = useLocation();
  const [voter, setVoter] = useState(article.votes);
  useEffect(() => {
    setVoter(article.votes + 0);
  }, [location]);
  return (
    <div className="article">
      <Box sx={{ maxWidth: 300, flexGrow: 1 }}>
        <Paper elevation={2}>
          <VoteCounter
            article={article}
            topics={topics}
            key={article.article_id}
            article_id={article.article_id}
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
                  image={article.article_img_url}
                  title="img_url"
                />
                <Typography variant="h6" sx={{ mb: 1, pl: 1, pt: 1 }}>
                  {article.title}
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
                    {article.author}
                  </Typography>
                </Box>
                <Box sx={{ mb: 1 }}>
                  <Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 0.1, ml: 1.5 }}
                    >
                      {article.topics}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ mb: 0.6, mx: 1, mt: 0.2, ml: 1.5 }}
                    >
                      <Chat /> {article.comment_count}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      className="createdAt_votes_box"
                      variant="caption"
                      color="text.secondary"
                      sx={{ mb: 0, mx: 1, mt: 0.2, ml: 1.5 }}
                    >
                      {dayjs(article.created_at).format(
                        "h:mm A - MMM, DD, YYYY"
                      )}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      <BoltIcon className="bolt" />
                      {voter}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      mr: 2,
                      pb: 1,
                    }}
                  ></Box>
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
