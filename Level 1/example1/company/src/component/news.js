/*
* @Author: Administrator
* @Date:   2019-12-08 10:13:48
* @Last Modified by:   Administrator
* @Last Modified time: 2019-12-14 21:29:56
*/
import React from 'react';
import Banner from './common/banner.js';
import {Link} from 'react-router-dom';
const News = (props) => {
  return (
    <div className="news-page">
    	<Banner ctitle="实时新闻" etitle="Real-time News" />
		<div className="main-news">
		    <div className="layui-container">
		      <div className="layui-row layui-col-space20">
		        <div className="layui-col-lg6 content">
		          <div>
		            <div className="news-img">
		              <Link to="/detail/1001">
		              	<img src="https://s2.ax1x.com/2019/12/08/QdCkBF.jpg" />
		              </Link>
		            </div>
		            <div className="news-panel">
		              <strong>
		              	<Link to="/newsDetail/1001">一直在你身边对你好，你却没有发现。</Link>
		              </strong>
		              <p className="detail"><span>找老婆要找爱发脾气的女人。永远不会发脾气的女人就如同一杯白开水，解渴，却无味。而发脾气的女人正如烈酒般，刺激而令人无法忘怀。</span><Link to="/detail/1001">[详细]</Link></p>
		              <p className="read-push">阅读 <span>120</span>&nbsp;&nbsp;&nbsp;&nbsp;发布时间：<span>2018-06-21</span></p>
		            </div>
		          </div>
		        </div>
		        <div className="layui-col-lg6 content">
		          <div>
		            <div className="news-img">
		             <Link to="/detail/1001">
		             	<img src="https://s2.ax1x.com/2019/12/08/QdCkBF.jpg" />
		             </Link>
		             </div>
		             <div className="news-panel">
		              <strong>
		              	<Link to="/detail/1001">写经验交流材料的技巧全在这了！</Link>
		              </strong>
		              <p className="detail"><span>看不到您的原稿，这样对空发议论，估计对您的指导性是不大的。建议您将原稿贴出来，好让老师们针对指导。这里简单给出意见：</span><Link to="/detail/1001">[详细]</Link></p>
		              <p className="read-push">阅读 <span>835</span>&nbsp;&nbsp;&nbsp;&nbsp;发布时间：<span>2018-06-21</span></p>
		            </div>
		          </div>
		        </div>
		        <div className="layui-col-lg6 content">
		          <div>
		            <div className="news-img">
		            	<Link to="/detail/1001">
		            		<img src="https://s2.ax1x.com/2019/12/08/QdCkBF.jpg" />
		            	</Link>
		            </div>
		            <div className="news-panel">
		              <strong>
		              	<Link to="/detail/1001">经验分享：我是如何做好每日计划的</Link>
		              </strong>
		              <p className="detail"><span>在日常的工作中，不知道大家有没有遇到以下这些问题：面对这样的问题，我养成了一个习惯就是每天写工作计划。想在此与大家分享，希望对你们有所帮助，同时欢迎指正及共同探讨。</span><Link to="/detail/1001">[详细]</Link></p>
		              <p className="read-push">阅读 <span>112</span>&nbsp;&nbsp;&nbsp;&nbsp;发布时间：<span>2018-06-21</span></p>
		            </div>
		          </div>
		        </div>
		        <div className="layui-col-lg6 content">
		          <div>
		            <div className="news-img">
		            	<Link to="/detail/1001">
		            		<img src="https://s2.ax1x.com/2019/12/08/QdCkBF.jpg" />
		            	</Link>
		            </div>
		            <div className="news-panel">
		              <strong>
		              	<Link to="/detail/1001">女人过了三十岁，一定要明白的12个道理！</Link>
		              </strong>
		              <p className="detail"><span>有些人再好，如果他不属于你，就什么用也没有。别再为一个得不到的人辗转难眠，你熬夜到天亮，对他来说也无关痛痒。</span><Link to="/detail/1001">[详细]</Link></p>
		              <p className="read-push">阅读 <span>3131</span>&nbsp;&nbsp;&nbsp;&nbsp;发布时间：<span>2018-06-20</span></p>
		            </div>
		          </div>
		        </div>
		        <div className="layui-col-lg6 content">
		          <div>
		            <div className="news-img">
		            	<Link to="/detail/1001">
		            		<img src="https://s2.ax1x.com/2019/12/08/QdCkBF.jpg" />
		            	</Link>
		            </div>
		            <div className="news-panel">
		              <strong><Link to="/detail/1001">脾气不好的妈妈好好读读这篇文章，真的是细思极恐</Link></strong>
		              <p className="detail"><span>一个母亲要是控制不了自己的情绪，会发生多可怕的事情？去年一个9岁的男孩，因为弄丢了手机，遭受了亲妈捆绑殴打一整晚，第二天再也没能睁开眼睛。</span><Link to="/detail/1001">[详细]</Link></p>
		              <p className="read-push">阅读 <span>112</span>&nbsp;&nbsp;&nbsp;&nbsp;发布时间：<span>2018-06-21</span></p>
		            </div>
		          </div>
		        </div>
		        <div className="layui-col-lg6 content">
		          <div>
		            <div className="news-img">
		            	<Link to="/detail/1001">
		            		<img src="https://s2.ax1x.com/2019/12/08/QdCkBF.jpg" />
		            	</Link>
		            </div>
		            <div className="news-panel">
		              <strong>
		              	<Link to="/detail/1001">睡前千万不要给孩子吃这6种食物，不仅会影响睡眠。</Link>
		              </strong>
		              <p className="detail"><span>孩子正处于长身体的重要阶段，对于营养的需求自然不小。很多家长怕孩子半夜饿，喜欢在睡前补充一些食物。但是，以下6种食物，孩子如果在睡前吃，不仅会危害身体健康，还会导致孩子睡不好觉，影响长个。</span><Link to="/detail/1001">[详细]</Link></p>
		              <p className="read-push">阅读 <span>3874</span>&nbsp;&nbsp;&nbsp;&nbsp;发布时间：<span>2018-06-20</span></p>
		            </div>
		          </div>
		        </div>
		        <div className="layui-col-lg6 content">
		          <div>
		            <div className="news-img">
		            	<Link to="/detail/1001">
		            		<img src="https://s2.ax1x.com/2019/12/08/QdCkBF.jpg" />
		            	</Link>
		            </div>
		            <div className="news-panel">
		              <strong>
		              	<Link to="/detail/1001">养女儿，一定要让她漂亮！</Link>
		              </strong>
		              <p className="detail"><span>闹市街头，一位爸爸领着一对双胞胎女儿吸引住了我的目光。两个女儿五六岁，长得像天使一般动人。让人遗憾的是，家长给他们穿的衣服---大妈们买菜或做饭时穿的长袍式的家居服，看上去十分滑稽可笑。</span><Link to="/detail/1001">[详细]</Link></p>
		              <p className="read-push">阅读 <span>3393</span>&nbsp;&nbsp;&nbsp;&nbsp;发布时间：<span>2018-06-20</span></p>
		            </div>
		          </div>
		        </div>
		        <div className="layui-col-lg6 content">
		          <div>
		            <div className="news-img">
		            	<Link to="/detail/1001">
		            		<img src="https://s2.ax1x.com/2019/12/08/QdCkBF.jpg" />
		            	</Link>
		            </div>
		            <div className="news-panel">
		              <strong>
		              	<Link to="/detail/1001">见好友在同一趟高铁 粗心男子“串门”聊天</Link>
		              </strong>
		              <p className="detail"><span>出门在外若发现好友在同一趟高铁邂逅，你会如何做？近日，一男子上高铁后，打电话给一位久未联系好友，竟然得知出行乘坐同一趟车。于是，该男子兴奋地“串门”。</span><Link to="/detail/1001">[详细]</Link></p>
		              <p className="read-push">阅读 <span>4087</span>&nbsp;&nbsp;&nbsp;&nbsp;发布时间：<span>2018-06-20</span></p>
		            </div>
		          </div>
		        </div>
		        <div className="layui-col-lg6 content">
		          <div>
		            <div className="news-img">
		            	<Link to="/detail/1001">
		            		<img src="https://s2.ax1x.com/2019/12/08/QdCkBF.jpg" />
		            	</Link>
		            </div>
		            <div className="news-panel">
		              <strong>
		              	<Link to="/detail/1001">一直在你身边对你好，你却没有发现。</Link>
		              </strong>
		              <p className="detail"><span>找老婆要找爱发脾气的女人。永远不会发脾气的女人就如同一杯白开水，解渴，却无味。而发脾气的女人正如烈酒般，刺激而令人无法忘怀。</span><Link to="/detail/1001">[详细]</Link></p>
		              <p className="read-push">阅读 <span>120</span>&nbsp;&nbsp;&nbsp;&nbsp;发布时间：<span>2018-06-21</span></p>
		            </div>
		          </div>
		        </div>
		      </div>
		      <div id="newsPage"></div>
		    </div>
		</div>
    </div>
  )
}

export default News;