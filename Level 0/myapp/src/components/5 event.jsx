import React, { Component } from 'react';

class EventHandle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toString()
        }
    }
    getTime = () => {
        this.setState({
            time: new Date().toString()
        });
    }
    render() {
        return (
            <div className="event-wrap">
            	<h1>{this.state.time}</h1>
            	<button onClick={this.getTime}>获取时间</button>
            </div>
        );
    }
}

export default EventHandle;