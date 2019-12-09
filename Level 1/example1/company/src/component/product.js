/*
* @Author: Administrator
* @Date:   2019-12-08 10:12:19
* @Last Modified by:   Administrator
* @Last Modified time: 2019-12-09 21:58:35
*/
import React from 'react';
import Banner from './common/banner.js';
const Product = (props) => {
  return (
    <div className="product-page">
	    <Banner ctitle="产品展示" etitle="Product Display" />
		<div className="main product">
		    <div className="layui-container">
		      <div className="content layui-row">
		        <div className="layui-col-xs12 layui-col-sm6 layui-col-md7 layui-col-lg6 content-img"><img src="https://s2.ax1x.com/2019/12/09/Q0JooF.jpg" /></div>
		        <div className="layui-col-xs12 layui-col-sm6 layui-col-md5 layui-col-lg6 right">
		          <p className="label">JS基础库</p>
		          <p className="detail">从小屏逐步扩展到大屏，最终实现所有屏幕适配，最终实现所有屏幕适配，适应移动互联潮流。最终实现所有屏幕适配，适应移动互联潮流。最终实现所有屏幕适配，适应移动互联潮流。</p>
		          <div><a href="http://www.baidu.com">查看产品 ></a></div>
		        </div>
		      </div>
		      <div className="content layui-row">
		        <div className="layui-col-xs12 layui-col-sm6 layui-col-md7 layui-col-lg6 content-img"><img src="https://s2.ax1x.com/2019/12/09/Q0JIdU.jpg" /></div>
		        <div className="layui-col-xs12 layui-col-sm6 layui-col-md5 layui-col-lg6 right">
		          <p className="label">CSS处理</p>
		          <p className="detail">从小屏逐步扩展到大屏，最终实现所有屏幕适配，最终实现所有屏幕适配，适应移动互联潮流。最终实现所有屏幕适配，适应移动互联潮流。最终实现所有屏幕适配，适应移动互联潮流。</p>
		          <div><a href="http://www.baidu.com">查看产品 ></a></div>
		        </div>
		      </div>
		      <div className="content layui-row">
		        <div className="layui-col-xs12 layui-col-sm6 layui-col-md7 layui-col-lg6 content-img"><img src="https://s2.ax1x.com/2019/12/09/Q0J5ZT.jpg" /></div>
		        <div className="layui-col-xs12 layui-col-sm6 layui-col-md5 layui-col-lg6 right">
		          <p className="label">兼容性</p>
		          <p className="detail">从小屏逐步扩展到大屏，最终实现所有屏幕适配，最终实现所有屏幕适配，适应移动互联潮流。最终实现所有屏幕适配，适应移动互联潮流。最终实现所有屏幕适配，适应移动互联潮流。</p>
		          <div><a href="http://www.baidu.com">查看产品 ></a></div>
		        </div>
		      </div>
		      <div className="content layui-row">
		        <div className="layui-col-xs12 layui-col-sm6 layui-col-md7 layui-col-lg6 content-img"><img src="https://s2.ax1x.com/2019/12/09/Q0Jfs0.jpg" /></div>
		        <div className="layui-col-xs12 layui-col-sm6 layui-col-md5 layui-col-lg6 right">
		          <p className="label">响应式</p>
		          <p className="detail">从小屏逐步扩展到大屏，最终实现所有屏幕适配，最终实现所有屏幕适配，适应移动互联潮流。最终实现所有屏幕适配，适应移动互联潮流。最终实现所有屏幕适配，适应移动互联潮流。</p>
		          <div><a href="http://www.baidu.com">查看产品 ></a></div>
		        </div>
		      </div>      
		    </div>
		</div>
    </div>
  )
}

export default Product;