import ArticlePanel from "./ArticlePanel";
import axios from "axios";
import { useEffect, useState } from "react";

const Articles = ({ setArticles, articles }) => {
  async function fetchArticles() {
    const response = await axios.get(
      `https://kangor.onrender.com/api/articles`
    );
    const artcleData = response.data;
    return artcleData;
  }
  useEffect(() => {
    fetchArticles().then((data) => {
      setArticles(data);
    });
  }, []);
  console.log(articles);
  return (
    <div className="all_item_articles">
      {articles.map((article) => (
        <ArticlePanel
          key={article.item_id}
          article_id={article.article_id}
          title={article.title}
          author={article.author}
          topic={article.topic}
          created_at={article.created_at}
          article_img_url={article.article_img_url}
          votes={article.votes}
          comment_count={article.comment_count}
        />
      ))}
    </div>
  );
};

export default Articles;
