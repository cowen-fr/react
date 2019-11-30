import React, { Component } from 'react';

class PropsItem extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<h1>{this.props.name}</h1>
			)
	}
}
class PropsUpdate extends Component {
    
    constructor(props) {
        super(props);
        this.state={
        	name:"cowen"
        }
    }
    componentWillReceiveProps(nextProps){
    	console.log(nextProps)
    }
    handleClick(){
    	this.setState({
    		name:this.state.name+"pp" 
    	});
    }
    render() {
        return (
            <div className="props-wrap">
				<PropsItem name={this.state.name} />
				<button onClick={this.handleClick.bind(this)}>change</button>
            </div>
        );
    }
}

export default PropsUpdate;
