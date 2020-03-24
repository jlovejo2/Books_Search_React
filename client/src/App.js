import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/">
            <Home />
            <Route exact path='/saved'>
              <Saved />
            </Route>
            <Route exact path='/search' component={Search}>
            </Route>
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
