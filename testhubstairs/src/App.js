import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'

// import Music from './components/music/Music';
// import Prime from './components/prime/Prime';
// import Graph from './components/graph/Graph';

class App extends Component {
  render() {
    return (
      <div className="App container">
       <div className="row">
        <div className="col-4">
          <Link to='/music'>
            Music
          </Link>
        </div>
        <div className="col-4">
          <Link to='/prime'>
            Prime
          </Link>
        </div>
        <div className="col-4">
          <Link to='/graph'>
            graph
          </Link>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
