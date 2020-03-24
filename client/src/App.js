import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './pages/Home';
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
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path='/saved'>
            <Saved />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
