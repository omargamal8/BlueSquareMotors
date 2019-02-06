import React from 'react';
import ReactDOM from 'react-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';

class BsmHeader extends React.Component{
  constructor(props){
    super(props);
	    this.state = {
	      componentSize: {width: "50" ,height: props.height}
	    }
 	 }
	render(){
		return (
	      <AppBar position="relative" style="{">
	        <Toolbar>
	          <Typography variant="h6" color="inherit">
	            News
	          </Typography>
	        </Toolbar>
	      </AppBar>
	      )
	}
}


ReactDOM.render(<BsmHeader/>, document.getElementById("root"));
