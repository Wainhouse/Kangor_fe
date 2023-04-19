import * as React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import BoltIcon from "@mui/icons-material/Bolt";
import { useEffect } from "react";

import "./VoteCounter.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { addVoteArticle, takeVoteArticle } from "../api";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#7cbb3c",
      darker: "#dddddd",
    },
    darker: {
      main: "#5ca373",
    },
    neutral: {
      main: "#b46544",
      contrastText: "#fff",
    },
  },
});

export default function VoteCounter({ voter, setVoter, article_id }) {
  const handleAddVote = () => {
    addVoteArticle(article_id, 1).then((data) => {
      const votesNum = data.article.votes;
      setVoter(votesNum);
    });
  };
  const handleTakeVote = () => {
    takeVoteArticle(article_id, 1).then((data) => {
      const votesNum = data.article.votes;
      setVoter(votesNum);
    });
  };
  useEffect(() => {}, [voter]);
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: 0,
          ml: 1,
          pt: 0,
          display: "flex",
          flexDirection: "column",
          "& > *": {
            marginBottom: 2,
          },
          "& .MuiBadge-root": {
            marginRight: 0,
          },
        }}
      >
        <div className="voter">
          <Badge color="darker" badgeContent={voter}>
            <BoltIcon className="bolt" color="neutral" />
          </Badge>
          <ButtonGroup>
            <Button
              size="small"
              variant="contained"
              color="primary"
              aria-label="reduce"
              onClick={handleTakeVote}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
              size="small"
              variant="contained"
              color="primary"
              aria-label="increase"
              onClick={handleAddVote}
            >
              <AddIcon height="0.2" fontSize="small" />
            </Button>
          </ButtonGroup>
        </div>
      </Box>
    </ThemeProvider>
  );
}
