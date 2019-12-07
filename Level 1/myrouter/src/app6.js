/*
* @Author: Administrator
* @Date:   2019-12-01 14:49:36
* @Last Modified by:   Administrator
* @Last Modified time: 2019-12-07 11:33:50
*/
import React from 'react';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import Index from './component/index.js';
import About from './component/about.js';
import Vip from './component/vip.js';
import User from './component/props.js'
const App = (props) => {
  return (
    <Router>
    	<ul>
    		<li><NavLink exact to="/">首页</NavLink></li>
    		<li><NavLink to="/about">关于</NavLink></li>
    		<li><NavLink to="/vip">会员服务</NavLink></li>
    		<li><NavLink to="/user/123456">我的首页</NavLink></li>
    	</ul>
    	<Route exact path="/" component={Index} />
    	<Route path="/about" component={About} />
    	<Route path="/vip" component={Vip} />
    	<Route path="/user/:id" component={User} />
    </Router>
  )
}

export default App;