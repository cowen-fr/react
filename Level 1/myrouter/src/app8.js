/*
* @Author: Administrator
* @Date:   2019-12-07 19:17:58
* @Last Modified by:   Administrator
* @Last Modified time: 2019-12-07 19:28:51
*/
import React from 'react';
import Vip from './component/vip.js';
import {BrowserRouter as Router} from 'react-router-dom';
const App = (props) => {
  return (
    <Router className="home-wrap">
    	<h1>首页</h1>
    	<Vip />	
    </Router>
  )
}

export default App;