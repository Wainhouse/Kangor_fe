import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { postNewComment } from "../api";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingButton from "@mui/lab/LoadingButton";

const NewCommentForm = ({ comments, setComments }) => {
  const { article_id } = useParams();
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      await postNewComment(article_id, name, body);
      setLoading(false);
      setComments((prevComments) => {
        return [
          { author: name, body: body, votes: 0, created_at: "Just now" },
          ...prevComments,
        ];
      });
      setName("");
      setBody("");
    } catch (error) {
      toast.error("Please Input the correct Username and a Body", {
        position: toast.POSITION.TOP_CENTER,
      });

      setLoading(false);
    }
    setLoading(false);
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
            onChange={(e) => {
              setName(e.target.value);
            }}
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
          <Box sx={{ "& > button": { m: 1 } }}>
            <LoadingButton
              size="medium"
              color="primary"
              loading={loading}
              variant="contained"
              type="submit"
            >
              <span>Submit</span>
            </LoadingButton>
          </Box>
        </form>
      </box>
      <ToastContainer />
    </Paper>
  );
};

export default NewCommentForm;
