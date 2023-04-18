import axios from "axios";
import { useEffect, useState } from "react";
import Articles from "./components/Articles";
import Header from "./components/Header";
import SingleArticle from "./components/SingleArticle";
import Comments from "./components/Comments";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <main className="App">
      <div>
        <Header />
        <Routes>
          <Route
            path="/articles"
            element={<Articles articles={articles} setArticles={setArticles} />}
          />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/articles/:article_id/comments" element={<Comments />} />
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
