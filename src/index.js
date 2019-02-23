import React from 'react';
import ReactDOM from 'react-dom';

import Toolbar from '@material-ui/core/Toolbar';
import BsmLogo  from "./logo";

import "./index.css"
class BsmHeader extends React.Component{
  constructor(props){
    super(props);
	    this.state = {
	      // componentSize: {width: "10" ,height: "1"}
	    }
 	 }
	render(){
		return (
			<div className="topbar">
			      <Toolbar  className="toolbar">
							<div className="text-box">
								<p1>
									Deals that are fair & Square !
								</p1>
							</div>
			      </Toolbar>
						<BsmLogo/>
	      </div>
	      )
	}
}


ReactDOM.render(<BsmHeader/>, document.getElementById("root"));
