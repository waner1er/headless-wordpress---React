import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Nouvelles from './components/Nouvelles';
import React, { Component, Fragment } from 'react';
import NouvellePage from './components/NouvellePage';

class App extends Component {
  render(){
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={Nouvelles} />
          <Route exact path="/nouvelle/:id" component={NouvellePage} />
        </Fragment>
      </Router>
    )
  }
}


export default App;
