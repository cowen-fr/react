/*
* @Author: Administrator
* @Date:   2019-11-30 21:13:17
* @Last Modified by:   Administrator
* @Last Modified time: 2019-12-07 20:21:55
*/
import React from 'react';
import {Link,NavLink,Prompt} from 'react-router-dom';
const Index=(props)=>(
	<div>
		<Prompt message="您确定离开？" />
		<h1>这里是首页</h1>
	</div>
);
export default Index;