import React from 'react';
import ReactDOM from 'react-dom';
import {Jsx} from './components/0 jsx.jsx';
import Header from './components/1 component.jsx';
import Title from './components/2 component.jsx';
import Props from './components/3 props.jsx';
import StateStatus from './components/4 state.jsx';
import EventHandle from './components/5 event.jsx'
let obj={
	name:"cowen",
	age:32
}
ReactDOM.render(<EventHandle />, document.getElementById('root'));
