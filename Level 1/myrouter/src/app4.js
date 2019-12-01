/*
* @Author: Administrator
* @Date:   2019-12-01 11:53:16
* @Last Modified by:   Administrator
* @Last Modified time: 2019-12-01 13:15:32
*/
import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Index from './component/index.js';
import About from './component/about.js';
import Vip from './component/vip.js';
import NotFound from './component/error.js';
const APP = (props) => {
  return (
    <Router>
    	<Switch>
	    	<Route exact={true} path="/" component={Index} />
	    	<Route path="/about" component={About} />
	    	<Route path="/vip" component={Vip} />
	    	<Route path="/news" render={()=>(<Index />)} />
	    	<Route component={NotFound} />
    	</Switch>
    </Router>
  )
}
export default APP;