import React, { Component } from 'react';

class Props extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>{this.props.name}</h1>
        );
    }
}
Props.defaultProps={
	name:"cowen"
}
export default Props;
