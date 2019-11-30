import React, { Component } from 'react';

class Mount extends Component {

    constructor(props) {
        super(props);
    }
    componentWillMount(){
    	console.log("组件即将渲染")
    }
    componentDidMount(){
    	console.log("组件已经渲染")
    }
    render() {
    	console.log("组件render")
        return (
            <div className="mount-wrap">
            	组件渲染
            </div>
        );
    }
}

export default Mount;
