/*
* @Author: Administrator
* @Date:   2019-12-08 10:10:15
* @Last Modified by:   Administrator
* @Last Modified time: 2019-12-09 21:51:23
*/
import React from 'react';
import icon1 from '../static/Big_icon1.png';
import icon2 from '../static/Big_icon2.png';
import icon3 from '../static/Big_icon3.png';
import icon4 from '../static/Big_icon4.png';
const Index = (props) => {
  return (
  	<div className="index-page">
	  <div className="banner-wrap">
    	<div className="panel">
            <p className="title">网络公司</p>
            <p>完美前端体验</p>
        </div>
	  </div>
	  <div className="main-product">
	    <div className="layui-container">
	      <p className="title">专为前端而研制的<span>核心产品</span></p>
	      <div className="layui-row layui-col-space25">
	        <div className="layui-col-sm6 layui-col-md3">
	          <div className="content">
	            <div><img src={icon1} /></div>
	            <div>
	              <p className="label">JS基础库</p>
	              <p>从小屏逐步扩展到大屏，最终实现所有屏幕适配，适应移动互联潮流。</p>
	            </div>
	            <a href="http://www.baidu.com">查看产品 ></a>
	          </div>
	        </div>
	        <div className="layui-col-sm6 layui-col-md3 ">
	          <div className="content">
	            <div><img src={icon2} /></div>
	            <div>
	              <p className="label">CSS处理</p>
	              <p>从小屏逐步扩展到大屏，最终实现所有屏幕适配，适应移动互联潮流。</p>
	            </div>
	            <a href="http://www.baidu.com">查看产品 ></a>
	          </div>
	        </div>
	        <div className="layui-col-sm6 layui-col-md3 ">
	          <div className="content">
	            <div><img src={icon3} /></div>
	            <div>
	              <p className="label">兼容性</p>
	              <p>从小屏逐步扩展到大屏，最终实现所有屏幕适配，适应移动互联潮流。</p>
	            </div>
	            <a href="http://www.baidu.com">查看产品 ></a>
	          </div>
	        </div>
	        <div className="layui-col-sm6 layui-col-md3 ">
	          <div className="content">
	            <div><img src={icon4} /></div>
	            <div>
	              <p className="label">响应式</p>
	              <p>从小屏逐步扩展到大屏，最终实现所有屏幕适配，适应移动互联潮流。</p>
	            </div>
	            <a href="http://www.baidu.com">查看产品 ></a>
	          </div>
	        </div>
	      </div>
	    </div>
	  </div>
	  <div className="main-service">
	    <div className="layui-container">Name
	      <p className="title">为客户打造完美的<span>专业服务</span></p>
	      <div className="layui-row layui-col-space25 layui-col-space80">
	        <div className="layui-col-sm6">
	          <div className="content">
	            <div className="content-left"><img src="https://s2.ax1x.com/2019/12/09/Q0Gv5Q.jpg" /></div>
	            <div className="content-right">
	              <p className="label">1 对 1 前端指导</p>
	              <span></span>
	              <p>更有多个包含不同主题的Web组件，可快速构建界面出色、体验优秀的跨屏页面，大幅提升开发效率。</p>
	            </div>
	          </div>
	        </div>
	        <div className="layui-col-sm6">
	          <div className="content">
	            <div className="content-left"><img src="https://s2.ax1x.com/2019/12/09/Q0GzCj.jpg" /></div>
	            <div className="content-right">
	              <p className="label">1 对 1 前端指导</p>
	              <span></span>
	              <p>更有多个包含不同主题的Web组件，可快速构建界面出色、体验优秀的跨屏页面，大幅提升开发效率。</p>
	            </div>
	          </div>
	        </div>
	        <div className="layui-col-sm6">
	          <div className="content">
	            <div className="content-left"><img src="https://s2.ax1x.com/2019/12/09/Q0GjUg.jpg" /></div>
	            <div className="content-right">
	              <p className="label">1 对 1 前端指导</p>
	              <span></span>
	              <p>更有多个包含不同主题的Web组件，可快速构建界面出色、体验优秀的跨屏页面，大幅提升开发效率。</p>
	            </div>
	          </div>
	        </div>
	        <div className="layui-col-sm6">
	          <div className="content">
	            <div className="content-left"><img src="https://s2.ax1x.com/2019/12/09/Q0GXVS.jpg" /></div>
	            <div className="content-right">
	              <p className="label">1 对 1 前端指导</p>
	              <span></span>
	              <p>更有多个包含不同主题的Web组件，可快速构建界面出色、体验优秀的跨屏页面，大幅提升开发效率。</p>
	            </div>
	          </div>
	        </div>
	      </div>
	      <div className="service-more"><a href="http://www.baidu.com">查看更多</a></div>
	    </div>
	  </div>
    </div>
  )
}

export default Index;