import React, { Component } from 'react';

class Update extends Component {
   
    constructor(props) {
        super(props);
        this.state={
        	counts:0
        }
    }
    shouldComponentUpdate(nextProps,nextState){
    	console.log(nextProps,nextState)
    	return true;
   	}
   	componentWillUpdate(nextProps,nextState){
   		console.log(nextProps,nextState);
   	}
   	componentDidUpdate(prevProps,prevState){
   		console.log(prevProps,prevState);
   	}
   	handleClick(){
   		this.setState({
   			counts:parseInt(this.state.counts)+1
   		})
   	}
    render() {
        return (
            <div className="wrap">
            	<label>{this.state.counts}</label><br/>
            	<button onClick={this.handleClick.bind(this)}>Add</button>
            </div>
        );
    }
}

export default Update;
