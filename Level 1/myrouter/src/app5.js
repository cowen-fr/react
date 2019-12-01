/*
* @Author: Administrator
* @Date:   2019-12-01 14:49:36
* @Last Modified by:   Administrator
* @Last Modified time: 2019-12-01 15:01:58
*/
import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Index from './component/index.js';
import About from './component/about.js';
import Vip from './component/vip.js';
import User from './component/props.js'
const App = (props) => {
  return (
    <Router>
    	<Route exact path="/" component={Index} />
    	<Route path="/about" component={About} />
    	<Route path="/vip" component={Vip} />
    	<Route path="/user/:id" component={User} />
    </Router>
  )
}

export default App;