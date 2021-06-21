import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import companyLogo from '../images/companyLogo.png'
import {NavLink} from 'react-router-dom';
import {useState} from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'100%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkStyle:{
    textDecoration:'none',
    color:'black'
  },
  font:{
    [theme.breakpoints.down("sm")]: {
      fontSize:'15px',
      marginLeft:'1000px'
    },
    
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    console.log(event.currentTarget)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    console.log('close clicked')
    setAnchorEl(null);
  };

  const [name,setName]=useState('ADMIN');
  const [ARN,setARN]=useState(123456);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <img src={companyLogo} alt="companyLogo" className="img-fluid" height="200px" width="200px"/>
          </Typography>
          {auth && (
            <div style={{display:"flex"}}>
              <div style={{marginRight:'50px',padding:'10px',marginLeft:'30px'}} className={classes.font}>
                  <p>{name}</p>
                  <p>ARN:{ARN}</p>
              </div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle style={{fontSize:"45px"}}/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <NavLink to='/profile' className={classes.linkStyle} activeStyle={{color:'blue'}}>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </NavLink>
                <NavLink to='/dashboard' className={classes.linkStyle} activeStyle={{color:'blue'}}>
                    <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                </NavLink>
                <NavLink to='/cobranding' className={classes.linkStyle}  activeStyle={{color:'blue'}}>
                    <MenuItem onClick={handleClose}>Cobranding</MenuItem>
                </NavLink>
                <NavLink to='/upload' className={classes.linkStyle}  activeStyle={{color:'blue'}}>
                    <MenuItem onClick={handleClose}>Upload</MenuItem>
                </NavLink>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
