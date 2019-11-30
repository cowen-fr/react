import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import About from './component/about.js';
import Vip from './component/vip.js';
const App = (props) => {
  return (
    <Router>
      <Route exact path="/" component={Vip} />
      <Route path="/about" component={About} />
      <Route path="/about/new" component={Vip} />
      <Route path="/vip" component={Vip} />
    </Router>
  )
}

export default App;