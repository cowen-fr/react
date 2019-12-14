/*
* @Author: Administrator
* @Date:   2019-12-08 10:15:11
* @Last Modified by:   Administrator
* @Last Modified time: 2019-12-14 20:56:53
*/
import React,{Component}from 'react';
import Banner from './common/banner.js';
class About extends Component{
	constructor(){
		super()
		this.state={
			index:0
		}
	}
	tabChangeHandle(index){
		this.setState({
			index:index 
		});
	}
	render(){
		return(
			<div className="about-page">
		    	<Banner ctitle="关于我们" etitle="About Us" />
				<div className="main-about">
				    <div className="layui-container">
				      <div className="layui-row">
				        <ul className="aboutab">
				          <li className={this.state.index===0?"layui-this":""} onClick={this.tabChangeHandle.bind(this,0)}>公司简介</li>
				          <li className={this.state.index===1?"layui-this":""} onClick={this.tabChangeHandle.bind(this,1)}>招贤纳士</li>
				          <li className={this.state.index===2?"layui-this":""} onClick={this.tabChangeHandle.bind(this,2)}>发展历程</li>
				        </ul>
				        <div className={`tabIntro ${this.state.index===0?"active":""}`}>
				          <div className="content">
				            <div className="layui-inline img"><img src="https://s2.ax1x.com/2019/12/14/QRLvo6.jpg" /></div><div className="layui-inline panel">
				              <p>身处在前端社区的繁荣之下，我们都在有意或无意地追逐。而 layui 偏偏回望当初，奔赴在返璞归真的漫漫征途，自信并勇敢着，追寻于原生态的书写指令，试图以最简单的方式诠释高效。</p>
				            </div>
				          </div>
				          <div className="content">
				            <div className="layui-inline panel p_block">
				              <p>如果眼下还是一团零星之火，那运筹帷幄之后，迎面东风，就是一场烈焰燎原吧，那必定会是一番尽情的燃烧。待，秋风萧瑟时，散作满天星辰，你看那四季轮回，正是Layui不灭的执念。</p>
				            </div><div className="layui-inline img"><img src="https://s2.ax1x.com/2019/12/14/QRLLLR.jpg" /></div>
				              <p className="p_hidden">如果眼下还是一团零星之火，那运筹帷幄之后，迎面东风，就是一场烈焰燎原吧，那必定会是一番尽情的燃烧。待，秋风萧瑟时，散作满天星辰，你看那四季轮回，正是Layui不灭的执念。</p>
				          </div>
				          <div className="content">
				            <div className="layui-inline img"><img src="https://s2.ax1x.com/2019/12/14/QRLjdx.jpg" /></div><div className="layui-inline panel">
				              <p>拥有双面的不仅是人生，还有Layui。一面极简，一面丰盈。极简是视觉所见的外在，是开发所念的简易。丰盈是倾情雕琢的内在，是信手拈来的承诺。一切本应如此，简而全，双重体验。</p>
				            </div>
				          </div>         
				        </div>
				        <div className={`tabJob ${this.state.index===1?"active":""}`}>
				          <div className="content">
				            <p className="title">前端开发工程师</p>
				            <p>> 职位描述</p>
				            <ol>
				              <li>前端开发及维护工作；</li>
				              <li>有良好的技术基础，熟悉 Web 标准，熟练掌握多种 Web 前端技术；</li>
				              <li>掌握行业内流行的类库，Vue.js， React 等主流框架；</li>
				              <li>参与公司前端工程的设计、研发；</li>
				              <li>了解不同浏览器之间的差异，移动设备之间的差异。</li>
				            </ol>
				          </div>
				          <div className="content">
				            <p className="title">IOS 开发工程师</p>
				            <p>> 职位描述</p>
				            <ol>
				              <li>前端开发及维护工作；</li>
				              <li>有良好的技术基础，熟悉 Web 标准，熟练掌握多种 Web 前端技术；</li>
				              <li>掌握行业内流行的类库，Vue.js， React 等主流框架；</li>
				              <li>参与公司前端工程的设计、研发；</li>
				              <li>了解不同浏览器之间的差异，移动设备之间的差异。</li>
				            </ol>
				          </div>
				          <div className="content">
				            <p className="title">JAVA 工程师</p>
				            <p>> 职位描述</p>
				            <ol>
				              <li>前端开发及维护工作；</li>
				              <li>有良好的技术基础，熟悉 Web 标准，熟练掌握多种 Web 前端技术；</li>
				              <li>掌握行业内流行的类库，Vue.js， React 等主流框架；</li>
				              <li>参与公司前端工程的设计、研发；</li>
				              <li>了解不同浏览器之间的差异，移动设备之间的差异。</li>
				            </ol>
				          </div>
				        </div>
				        <div className={`tabCour ${this.state.index===2?"active":""}`}>
				          <p className="title">我们的蜕变</p>
				          <ul className="timeline">
				            <li className="odd">
				              <div className="cour-img"><img src="https://s2.ax1x.com/2019/12/14/QWSO3V.png" /></div>
				              <div className="cour-panel layui-col-sm4 layui-col-lg5">
				                <p className="label">2017 年 6 月</p>
				                <p>我们成立了，来到了杭州西湖这个美丽的地方。</p>
				              </div>
				            </li>
				            <li>
				              <div className="cour-img"><img src="https://s2.ax1x.com/2019/12/14/QWSjjU.png" /></div>
				              <div className="cour-panel layui-col-sm4 layui-col-sm-offset8 layui-col-lg5 layui-col-lg-offset7">
				                <p className="label">2017 年 6 月</p>
				                <p>我们成立了，来到了杭州西湖这个美丽的地方。</p>
				              </div>
				            </li>
				            <li className="odd">
				              <div className="cour-img"><img src="https://s2.ax1x.com/2019/12/14/QWSbhq.png" /></div>
				              <div className="cour-panel layui-col-sm4 layui-col-lg5">
				                <p className="label">2017 年 6 月</p>
				                <p>我们成立了，来到了杭州西湖这个美丽的地方。</p>
				              </div>
				            </li>
				            <li>
				              <div className="cour-img"><img src="https://s2.ax1x.com/2019/12/14/QWSHNn.png" /></div>
				              <div className="cour-panel layui-col-sm4 layui-col-sm-offset8 layui-col-lg5 layui-col-lg-offset7">
				                <p className="label">2017 年 6 月</p>
				                <p>我们成立了，来到了杭州西湖这个美丽的地方。</p>
				              </div>
				            </li>
				            <li className="odd">
				              <div className="cour-img"><img src="https://s2.ax1x.com/2019/12/14/QWSIBQ.png" /></div>
				            </li>
				          </ul>
				        </div>
				      </div>
				    </div>
				</div>
		    </div>
		)
	}
}

export default About;