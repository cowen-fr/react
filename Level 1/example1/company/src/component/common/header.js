/*
 * @Author: Administrator
 * @Date:   2019-12-07 21:57:08
 * @Last Modified by:   Administrator
 * @Last Modified time: 2019-12-08 10:09:00
 */
import React from 'react';
import logo from '../../static/logo.png';
import {Link,withRouter} from 'react-router-dom';
const linkConfig=[
	{
		linkName:"产品",
		pathName:"/product"
	},
	{
		linkName:"动态",
		pathName:"/news"
	},
	{
		linkName:"案例",
		pathName:"/case"
	},
	{
		linkName:"关于",
		pathName:"/about"
	}
];
const Header = (props) => {
	let pathname=props.location.pathname,
		linkList=linkConfig.map((link)=>{
		let Name=(link.pathName===pathname)?'layui-this':'';
		return (
			<li key={link.pathName} className={`layui-nav-item ${Name}`}><Link to={link.pathName}>{link.linkName}</Link></li>
		)
	})
    return (
		<header className={`nav ${pathname==='/'?'index':''}`}>
		    <div className="layui-container">
		      <div className="nav-logo">
		        <Link to="/">
		          <img src={logo} alt="网络公司" />
		        </Link>
		      </div>
		      <div className="nav-list">
		        <ul className="layui-nav">
		        	{linkList}
		        </ul>
		      </div>
		    </div>
		</header>
    )
}

export default withRouter(Header);