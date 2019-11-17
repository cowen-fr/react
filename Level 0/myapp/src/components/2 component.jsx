import React, { Component } from 'react';

class Title extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h2>{this.props.name} <span>{this.props.age}</span></h2>
        );
    }
}
export default Title;
