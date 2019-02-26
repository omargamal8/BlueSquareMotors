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
                        <Typography variant="h6" color="inherit" noWrap>
                        Material-UI
                        </Typography>
                        <SearchIcon />
                        <InputBase
                            placeholder="Search…"
                        />
                    </Toolbar>
                </AppBar>
            </div>
            )
      }
  }

export default BsmMenuBar; 



