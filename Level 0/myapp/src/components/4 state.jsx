import React, { Component } from 'react';

class StateStatus extends Component {

    constructor(props) {
        super(props);
        this.state={
        	time:new Date().toString()
        }
    }
    changeTime(){
    	var _this=this;
    	setInterval(function(){
			_this.setState({
	    		time:new Date().toString() 
	    	});
    	},1000);
    }
    render() {
    	this.changeTime();
        return (
            <h1>{this.state.time}</h1>
        );
    }
}

export default StateStatus;
