import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import BookSearchPage from './pages/BookSearchPage';
import BookshelfPage from './pages/BookshelfPage';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={BookSearchPage} />
      <Route path="/bookshelf" component={BookshelfPage} />
    </Switch>
  </Router>
);

export default App;
