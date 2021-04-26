import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import ShowAllArticles from './components/ShowAllArticles';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowAllArticles} />
        </div>
      </Router>
    );
  }
}

export default App;