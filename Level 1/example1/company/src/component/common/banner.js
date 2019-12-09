/*
* @Author: Administrator
* @Date:   2019-12-08 19:24:57
* @Last Modified by:   Administrator
* @Last Modified time: 2019-12-08 20:47:40
*/
import React from 'react';
import {withRouter} from 'react-router';
const Banner = (props) => {
  const pathname=props.location.pathname.replace("/","");
  return (
    <div className={`banner ${pathname}`}>
	    <div className="title active">
	      <p>{props.ctitle}</p>
	      <p className="en">{props.etitle}</p>
	    </div>
	</div>
  )
}

export default withRouter(Banner);