import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";
import { postNewComment } from "../api";
import { useParams } from "react-router-dom";

const NewCommentForm = ({ comments, setComments }) => {
  const { article_id } = useParams();
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await postNewComment(article_id, name, body);
      setComments((prevComments) => {
        return [
          { author: name, body: body, votes: 0, created_at: "Just now" },
          ...prevComments,
        ];
      });
      setName("");
      setBody("");
    } catch (error) {
      console.error(error);
      alert("Sorry, that username does not exist.");
    }
  };

  return (
    <Paper
      elevation={1}
      sx={{
        ml: 4,
        maxWidth: 300,
        borderRadius: 0,
        p: 1,
        pt: 0,
      }}
    >
      <box
        sx={{
          flexGrow: 1,
          mt: 2,
          mb: 2,
          ml: 0.5,
          mr: 0.5,
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            required
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            size="small"
            fullWidth
          />
          <TextField
            required
            label="Comment"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            margin="normal"
            size="small"
            fullWidth
            multiline
            rows={4}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </box>
    </Paper>
  );
};

export default NewCommentForm;
