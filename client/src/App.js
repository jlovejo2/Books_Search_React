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
          {/* The outer Route is a path "/" so that the inner routes can be rendered into when the navbar is clicked
              The outer route will render the Home page. The home has to be written as <Home /> and not component={Home} syntax
              the inner routes can be written as either syntax */}
          <Route path="/">
              <Home />
            <Route exact path='/saved' component={Saved}/>
            <Route exact path='/search' component={Search}/>
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
