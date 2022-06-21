import React from 'react';
import { makeStyles } from '@mui/styles';
import { Tabs, Tab } from '@mui/material';


// import {history} from "../redux/configureStore";


const EditScroll = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      position:"relative",
      flexGrow: 0.6,
      width: '100%',
      fontColor: "black",
    },
  }));
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Details" />
          <Tab label="Tags" />
          <Tab label="Exif" />
          <Tab label="Setting"/>
        </Tabs>
    </div>
  );
};

export default EditScroll;

