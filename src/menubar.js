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
      this.state = {...this.state,
                    selected:"Home"};
        }
      render(){
          return (
            <div className="menu-bar">
                <AppBar className="menubar">
                    <Toolbar>
                        <div className="options">
                            {["Home", "About us", "How it works", "Stock", "Contact us"].map((name,i)=>{
                             return <Typography className={"option option--"+name} variant="button" style={name==this.state.selected?{color:"#0073be"}:null}><a href="#"><center>{name}</center></a></Typography>                                
                            })}
                        </div>
                        {/* <Typography variant="h6" color="inherit" noWrap>
                        Material-UI
                        </Typography> */}
                        {/* <SearchIcon className="search-icon"/> */}
                        {/* <Typography className="test" variant="button"><a href="#home">right</a></Typography>                         */}
                    </Toolbar>
                    <div className="background-img" >hello</div>
                </AppBar>
            </div>
            )
      }

  }
export default BsmMenuBar; 



