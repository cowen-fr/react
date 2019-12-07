/*
* @Author: Administrator
* @Date:   2019-11-30 21:52:32
* @Last Modified by:   Administrator
* @Last Modified time: 2019-12-07 11:04:35
*/
import React from 'react';
import {BrowserRouter as Router,Switch,Route,NavLink} from 'react-router-dom';
import Index from './component/index.js';
import About from './component/about.js';
import Vip from './component/vip.js';
const App=(props)=>(
	<Router>
		<div className="wrap">
			<ul>
				<li><NavLink exact to="/">首页</NavLink></li>
				<li><NavLink to="/about">关于</NavLink></li>
				<li><NavLink to="/vip">VIP</NavLink></li>
			</ul>	
		</div>
		<Switch>
			<Route path="/about" component={About} />
			<Route path="/vip" component={Vip} />
			<Route path="/" component={Index} />
		</Switch>
	</Router>
);
export default App;