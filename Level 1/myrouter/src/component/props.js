/*
 * @Author: Administrator
 * @Date:   2019-12-01 14:53:04
 * @Last Modified by:   Administrator
 * @Last Modified time: 2019-12-07 12:51:59
 */
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
class User extends Component {
    
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        if(this.props.match.params.id==="123456"){
            // <Redirect to="/" />
            console.log('sds')
        }
    }
    goBack(){
    	this.props.history.push("/");
    }
    render() {
        return (
             this.props.match.params.id=="1234562"?<Redirect to="/" />:
            <div className="user-wrap">
            	<p>用户{this.props.match.params.id}</p>
            	<button onClick={this.goBack.bind(this)}>GOBACK</button>
            </div>
        );
    }
}

export default User;
