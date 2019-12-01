/*
* @Author: Administrator
* @Date:   2019-11-30 21:08:27
* @Last Modified by:   Administrator
* @Last Modified time: 2019-11-30 21:19:51
*/
import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Index from './component/index.js';
import Vip from './component/vip.js';
import About from './component/about.js';
const App=(props)=>(
	<BrowserRouter>
		<Route path="/" component={Index} />
		<Route path="/about" component={About} />
		<Route path="/vip" component={Vip} />
	</BrowserRouter>
)
export default App;