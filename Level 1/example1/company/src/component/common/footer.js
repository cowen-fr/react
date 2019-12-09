/*
* @Author: Administrator
* @Date:   2019-12-08 10:23:15
* @Last Modified by:   Administrator
* @Last Modified time: 2019-12-09 21:55:06
*/
import React from 'react';

const Footer = (props) => {
  return (
		<div className="footer">
		    <div className="layui-container">
		      <p className="footer-web">
		        <a href="https://www.baidu.com/">合作伙伴</a>
		        <a href="https://www.baidu.com/">企业画报</a>
		        <a href="https://www.baidu.com/">JS网</a>
		        <a href="https://www.baidu.com/">千图网</a>
		        <a href="https://www.baidu.com/">昵图网</a>
		        <a href="https://www.baidu.com/">素材网</a>
		        <a href="https://www.baidu.com/">花瓣网</a>
		      </p>
		      <div className="layui-row footer-contact">
		        <div className="layui-col-sm2 layui-col-lg1">
		        	<img src="https://s2.ax1x.com/2019/12/09/Q0JNRA.jpg" alt="二维码" />
		        </div>
		        <div className="layui-col-sm10 layui-col-lg11">
		          <div className="layui-row">
		            <div className="layui-col-sm6 layui-col-md8 layui-col-lg9">
		              <p className="contact-top">
		              	<i className="layui-icon layui-icon-cellphone"></i>
		              		&nbsp;400-8888888&nbsp;&nbsp;(9:00-18:00)
		              </p>
		              <p className="contact-bottom">
		              	<i className="layui-icon layui-icon-home"></i>&nbsp;88888888@163.com
		              </p>
		            </div>
		            <div className="layui-col-sm6 layui-col-md4 layui-col-lg3">
		              <p className="contact-top">
		              	<span className="right">
		              		该模板版权归 
		              		<a href="https://www.layui.com/">layui.com</a> 
		              		所有</span>
		              </p>
		              <p className="contact-bottom">
		              	<span className="right">Copyright&nbsp;©&nbsp;2016-2018&nbsp;&nbsp;ICP&nbsp;备888888号</span>
		              </p>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		</div>
  )
}

export default Footer;