import React from 'react';
import ReactDOM from 'react-dom';
import {Jsx} from './components/0 jsx.jsx';
import Header from './components/1 component.jsx';
import Title from './components/2 component.jsx';
import Props from './components/3 props.jsx';
import StateStatus from './components/4 state.jsx';
import EventHandle from './components/5 event.jsx';
import Mount from './components/6 mount.jsx';
import Update from './components/7 update.jsx';
import PropsUpdate from './components/8 receiveProps.jsx'
let obj={
	name:"cowen",
	age:32
}
ReactDOM.render(<PropsUpdate />, document.getElementById('root'));
