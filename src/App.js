import axios from "axios";
import { useEffect, useState } from "react";
import Articles from "./components/Articles";

import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <main className="App">
      <div>
        <Articles articles={articles} setArticles={setArticles} />
      </div>
    </main>
  );
}

export default App;
