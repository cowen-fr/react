/*
* @Author: Administrator
* @Date:   2019-12-08 10:19:35
* @Last Modified by:   Administrator
* @Last Modified time: 2019-12-14 21:37:31
*/
import React from 'react';

const Detail = (props) => {
  return (
    <div className="detail-page">
		<div className="main-newsdate">
		    <div className="layui-container">
		      <p className="news"><a href="news.html">实时新闻</a> > 新闻详情</p>
		      <h1>这家引爆ins的奶茶店终于空降南昌，开放加盟啦！</h1>
		      <p className="pushtime">发布时间：<span>2018-06-06</span></p>
		      <p className="introTop">TA家的珍珠是用黑糖熬制的，要熬整整四个小时才行，每熬一锅黑糖只能做出40杯奶茶，好味，是值得等待的。</p>
		      <div><img src="https://s2.ax1x.com/2019/12/14/QWFxu6.jpg" alt="新闻详情图" /></div>
		      <p className="introBott">北极光的制作，需要300g葡萄来完成，要选用最新鲜的葡萄，才能做出最灿烂的北极光。满满一瓶葡萄，看着就让人倍感满足。喝之前，要先摇9下，才能喝出最好的果味。晨曦的寓意是，清晨的阳光。要用到一整颗百香果的晨曦，喝起来酸酸甜甜，果味浓郁。晨曦喝起来果味极浓，不仅仅有百香果，还有芒果、橙汁...的味道，十分清新，彷佛夏日的一抹凉风！</p>
		    </div> 
		</div>
    </div>
  )
}

export default Detail;