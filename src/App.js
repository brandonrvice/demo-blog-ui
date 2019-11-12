import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./NavBar";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Container>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/article/:id" component={ArticlePage} exact />
              <Route path="/articles" component={ArticlesListPage} exact />
              <Route path="/about" component={AboutPage} exact />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Container>
    </Router>
  );
}

export default App;
