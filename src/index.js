import React from 'react';
import ReactDOM from 'react-dom';

import Toolbar from '@material-ui/core/Toolbar';
import BsmLogo  from "./logo";
import BsmMenuBar from './menubar';
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
			<html>
				<div className="head">
					<div className="topbar">
								<Toolbar  className="toolbar">
									<div className="text-box">
										<p>
											Deals that are fair & Square !
										</p>
									</div>
								</Toolbar>
								<BsmLogo/>
						</div>
				</div>
				<body>
					<BsmMenuBar/>			
				</body>
			</html>

	      )
	}
}


ReactDOM.render(<BsmHeader/>, document.getElementById("root"));

