import axios from "axios";
import { useEffect, useState } from "react";
import Articles from "./components/Articles";
import Header from "./components/Header";
import SingleArticle from "./components/SingleArticle";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  const [isHome, isSetHome] = useState(false);
  const [articles, setArticles] = useState([]);

  const handleHome = () => {
    isSetHome(!isHome);
  };

  return (
    <main className="App">
      <div>
        <Header />
        <Routes>

            <Route
              path="/articles"
              element={
                <Articles articles={articles} setArticles={setArticles} />
              }
            />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
          
         

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
