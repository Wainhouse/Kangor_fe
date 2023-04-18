import axios from "axios";

const kangorNews = axios.create({
  baseURL: `https://kangor.onrender.com/api/`,
});

export const fetchArticleById = async (article_id) => {
  try {
    const response = await kangorNews.get(`/articles/${article_id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchArticles = async () => {
  try {
    const response = await kangorNews.get(`/articles`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchArticleComments = async (article_id) => {
  try {
    const response = await kangorNews.get(`/articles/${article_id}/comments`);
    return response.data;
  } catch (error) {
    return error;
  }
};
