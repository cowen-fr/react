import React from 'react';
import ReactDOM from 'react-dom';
import {Jsx} from './components/0 jsx.jsx';
import Header from './components/1 component.jsx';
import Title from './components/2 component.jsx';
let obj={
	name:"cowen",
	age:32
}
ReactDOM.render(<Title {...obj} />, document.getElementById('root'));
