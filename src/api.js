import axios from "axios";

const kangorNews = axios.create({
  baseURL: `https://kangor.onrender.com/api/`,
});

export const fetchArticleById = async (article_id) => {
  const response = await kangorNews.get(`/articles/${article_id}`);
  return response.data;
};

export const fetchArticles = async () => {
  const response = await kangorNews.get(`/articles`);
  return response.data;
};

export const fetchArticleComments = async (article_id) => {
  const response = await kangorNews.get(`/articles/${article_id}/comments`);
  return response.data;
};

export const updateVoteArticle = async (article_id, vote) => {
  const newArticle = {
    inc_votes: vote,
  };
  const response = await kangorNews.patch(`articles/${article_id}`, newArticle);
  return response.data;
};
