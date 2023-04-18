import axios from "axios";

export const fetchArticle = async (article_id) => {
  try {
    const response = await axios.get(
      `https://kangor.onrender.com/api/articles/${article_id}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchArticles = async () => {
  try {
    const response = await axios.get(
      `https://kangor.onrender.com/api/articles`
    );
    const artcleData = response.data;
    return artcleData;
  } catch (error) {
    return error;
  }
};
