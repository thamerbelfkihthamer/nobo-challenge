import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../../img/logo-popup-250x150.png';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes  from './Routes';
  
export default function header (){
    return (
        <div>
            <CssBaseline />
            <AppBar position="relative" color="inherit">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        <Avatar alt="Nobo" src={logo} />    
                    </Typography>
                    
                    <Routes />
                </Toolbar>
            </AppBar>
        </div>
    )
}