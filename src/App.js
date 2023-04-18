import axios from "axios";
import { useEffect, useState } from "react";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <main className="App">
      <div>
        <Routes>
          {/* <Route
            path="/"
            element={<Articles articles={articles} setArticles={setArticles} />}
          /> */}
          <Route
            path="/articles"
            element={<Articles articles={articles} setArticles={setArticles} />}
          />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
