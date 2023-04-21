import { useState } from "react";
import Articles from "./components/Articles";
import Header from "./components/Header";
import SingleArticle from "./components/SingleArticle";
import NewCommentForm from "./components/NewCommentForm";
import Comments from "./components/Comments";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="App">
      <div id="header">
        <Header />
      </div>
      <div id="content">
        <Routes>
          <Route
            path="/articles"
            element={
              <Articles
                articles={articles}
                setArticles={setArticles}
                setIsLoading={setIsLoading}
              />
            }
          />
          <Route
            path={`/articles/topic/:topic`}
            element={
              <Articles
                articles={articles}
                setArticles={setArticles}
                setIsLoading={setIsLoading}
              />
            }
          />
          <Route
            path="/"
            element={
              <Articles
                articles={articles}
                setArticles={setArticles}
                setIsLoading={setIsLoading}
              />
            }
          />
          <Route path="/" element={<NewCommentForm />} />
          <Route
            path="/api/articles/:articleId/newcomments"
            element={<NewCommentForm />}
          />
          <Route
            path="/articles/:article_id"
            element={
              <SingleArticle
                setIsLoading={setIsLoading}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/articles/:article_id/comments"
            element={
              <Comments setIsLoading={setIsLoading} isLoading={isLoading} />
            }
          />
          {/* <Route
            path="/"
            element={<Articles articles={articles} setArticles={setArticles} />}
          /> */}
        </Routes>
      </div>
    </main>
  );
}

export default App;
