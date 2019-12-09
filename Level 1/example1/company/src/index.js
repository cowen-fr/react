import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './style/base.css';
import Header from './component/common/header.js';
import Footer from './component/common/footer.js';
import Index from './component/index.js';
import Product from './component/product.js';
import News from './component/news.js';
import Case from './component/case.js';
import About from './component/about.js';
import Detail from './component/detail.js';
import NotFound from './component/noFound.js';
const App=()=>{
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/" component={Index} />
				<Route path="/product" component={Product} />
				<Route path="/news" component={News} />
				<Route path="/case" component={Case} />
				<Route path="/about" component={About} />
				<Route path="/detail/:id" component={Detail} />
				<Route component={NotFound} />
			</Switch>
			<Footer />
		</Router>
	)
}
ReactDOM.render(<App />, document.getElementById('root'));

