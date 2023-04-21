import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "./SingleArticle.css";
import dayjs from "dayjs";
import BoltIcon from "@mui/icons-material/Bolt";

import { ReactComponent as Chat } from "../img/chat-bubble.svg";

import * as api from "../api";
import Comments from "./Comments";
import VoteCounter from "./VoteCounter";

const ArticlePage = ({ isLoading, setIsLoading }) => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isComments, setIsComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [voter, setVoter] = useState(article.votes);

  useEffect(() => {
    setIsLoading(true);
    try {
      api.fetchArticleById(article_id).then((data) => {
        setArticle(data.article);
      });
    } catch (error) {
      return error;
    }
    setIsLoading(false);
  }, [article_id]);
  useEffect(() => {}, [article]);
  if (isLoading) {
    return <h4>is loading...</h4>;
  } else
    return (
      <div className="single_article">
        <Box sx={{ maxWidth: 450, flexGrow: 1 }}>
          <Typography variant="h4" sx={{ mt: 1, ml: 0.5 }}>
            {article.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1, mb: 2, ml: 0.5 }}>
            {article.topic}
          </Typography>
          <VoteCounter
            article_id={article.article_id}
            voter={voter}
            setVoter={setVoter}
          />
          <CardMedia
            sx={{
              height: 200,
            }}
            image={article.article_img_url}
            title="img_url"
          />
        </Box>
        <Box sx={{ maxWidth: 450, flexGrow: 1, ml: 1, mr: 1 }}>
          <Typography variant="body1" sx={{ mt: 1 }}>
            {article.body}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            <BoltIcon className="bolt"/> {voter ? voter : article.votes}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            {article.author}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            {dayjs(article.created_at).format("h:mm A - MMM, DD, YYYY")}
          </Typography>
          <Button
            className="commentBtn"
            sx={{ ml: 0, mt: 2, maxWidth: 1.2 }}
            color="inherit"
            size="small"
            variant="text"
            onClick={() => {
              setIsComments(!isComments);
            }}
          >
            <Chat />
          </Button>

          {isComments ? (
            <Comments setComments={setComments} comments={comments} />
          ) : (
            <></>
          )}
        </Box>
      </div>
    );
};

export default ArticlePage;
// {
//     "article": {
//         "article_id": 2,
//         "title": "The Rise Of Thinking Machines: How IBM's Watson Takes On The World",
//         "topic": "coding",
//         "author": "jessjelly",
//         "body": "Many people know Watson as the IBM-developed cognitive super computer that won the Jeopardy! gameshow in 2011. In truth, Watson is not actually a computer but a set of algorithms and APIs, and since winning TV fame (and a $1 million prize) IBM has put it to use tackling tough problems in every industry from healthcare to finance. Most recently, IBM has announced several new partnerships which aim to take things even further, and put its cognitive capabilities to use solving a whole new range of problems around the world.",
//         "created_at": "2020-05-14T01:02:00.000Z",
//         "votes": 0,
//         "article_img_url": "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?w=700&h=700",
//         "comment_count": 6
//     }
// }
