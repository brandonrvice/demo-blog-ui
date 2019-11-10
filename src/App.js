import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Route path="/" component={HomePage} exact />
          <Route path="/article/:name" component={ArticlePage} exact />
          <Route path="/articles" component={ArticlesListPage} exact />
          <Route path="/about" component={AboutPage} exact />
        </div>
      </div>
    </Router>
  );
}

export default App;
