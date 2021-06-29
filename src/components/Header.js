import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Dashboard from '../pages/DashBoard';
import Upload from '../pages/UploadPage';
import CoBranding from '../pages/CoBranding';
import Profile from '../pages/Profile';
import {useEffect} from 'react';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  appbar_color:{
    backgroundColor: '#fff',
    color: '#000',
    borderBottom:' 2px solid #808080',
  },
  customStyleOnTab:{
    fontSize: '20px',
    color:'#707070'
  },
  activeTab:{
    fontSize:'20px',
    fontWeight:'600',
    color:'#000'
  }

}));

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  useEffect(()=>{
    console.log('In Header.js');
  },[])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar_color} elevation={0}>
        <Tabs 
            value={value}
            onChange={handleChange} 
            aria-label="simple tabs example" 
            TabIndicatorProps={{style: {backgroundColor: "white" , fontFamily : 'Poppins'}}}
            classes={{indicator: classes.customStyleOnActiveTab}}>
          <Tab label={<span className={ value === 0 ? classes.activeTab : classes.customStyleOnTab}>Dashboard</span>}  {...a11yProps(0)} />
          <Tab label={<span className={ value === 1 ? classes.activeTab : classes.customStyleOnTab}>Upload</span>}  {...a11yProps(1)} />
          <Tab label={<span className={ value === 2 ? classes.activeTab : classes.customStyleOnTab}>Co-Branding</span>} {...a11yProps(2)} />
          <Tab label={<span className={ value === 3 ? classes.activeTab : classes.customStyleOnTab}>Profile</span>} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Dashboard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Upload/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CoBranding/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Profile/>
      </TabPanel>
    </div>
    // <div className={classes.root}>
    //   <AppBar position="static">
    //     <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
    //       <Tab label="Item One" {...a11yProps(0)} />
    //       <Tab label="Item Two" {...a11yProps(1)} />
    //       <Tab label="Item Three" {...a11yProps(2)} />
    //     </Tabs>
    //   </AppBar>
    //   <TabPanel value={value} index={0}>
    //       <Dashboard />
    //   </TabPanel>
    //   <TabPanel value={value} index={1}>
    //        <Upload/>
    //   </TabPanel>
    //   <TabPanel value={value} index={2}>
    //        <CoBranding/>
    //   </TabPanel>
    //    <TabPanel value={value} index={3}>
    //          <Profile/>
    //    </TabPanel>
    // </div>
  );
}
