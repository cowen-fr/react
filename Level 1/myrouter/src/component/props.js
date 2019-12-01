/*
* @Author: Administrator
* @Date:   2019-12-01 14:53:04
* @Last Modified by:   Administrator
* @Last Modified time: 2019-12-01 15:08:43
*/
import React, { Component } from 'react';

class User extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <div className="user-wrap">
            	用户界面
            </div>
        );
    }
}

export default User;
