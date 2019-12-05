import React from 'react';
import Home from './components/home/index'
import SongList from './components/songList/index'
// import Player from './components/Player/index'
import {HashRouter as Router, Link, Route, Redirect, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Link to="/player"></Link> */}
        <Switch>
          <Route path="/songlist/:id" component={SongList}></Route>
          <Route path="/" component={Home}></Route>
          {/* <Route path="/player" component={Player}></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
