import ArticlePanel from "./ArticlePanel";
import { useEffect } from "react";
import "./Articles.css";
import * as api from "../api";

const Articles = ({ setArticles, articles, isSetHome, isHome }) => {
  useEffect(() => {
    try {
      api.fetchArticles().then((data) => {
        setArticles(data);
      });
    } catch (error) {
      return error;
    }
  }, []);

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
