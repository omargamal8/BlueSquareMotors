import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


class BsmMenuBar extends React.Component{
    constructor(props){
      super(props);
        }
      render(){
          return (
            <div className="menu-bar">
                <AppBar className="menubar">
                    <Toolbar>
                        <div className="options">
                            <Typography className="option" variant="button"><a href="#home">Home</a></Typography>
                            <Typography className="option" variant="button"><a href="">About us</a></Typography>
                            <Typography className="option" variant="button"><a href="">How it works</a></Typography>
                            <Typography className="option" variant="button"><a href="">stock</a></Typography>
                            <Typography className="option" variant="button"><a href="">contact us</a></Typography>
                        </div>
                        {/* <Typography variant="h6" color="inherit" noWrap>
                        Material-UI
                        </Typography> */}
                            <SearchIcon className="search-icon"/>
                    </Toolbar>
                </AppBar>
            </div>
            )
      }
  }

export default BsmMenuBar; 



