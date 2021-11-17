import React, { useContext, useState } from 'react'
import Button from '@mui/material/Button';
import { AppBar, Container, CssBaseline, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Context } from '../App';


const useStyles = makeStyles(theme => ({

  allCategory: {
    display:"flex", justifyContent:"space-around"
  },
  link :{
    color: "gray",
    textDecoration: "none",
    fontStyle: "italic",
  },
  
}));

const Navbar = () => {

  const {setCategory, mode} = useContext(Context);
  const classes = useStyles();
  return (
    <>
      <CssBaseline/>
      <Container 
        sx={{
          border:0.2, 
          borderColor:"grey.500", 
          borderRadius:1, 
          padding: "0 !important",
          
        }}>
        <AppBar position="static" elevation={0} color="inherit" sx={{backgroundColor: mode== 0 ? "black !important" : "white"}}>
          <Toolbar>
            <div style={{width: "25%"}}>
              <Typography variant="h6" color="gray" className={classes.title}>
                <a className={classes.link} href="https://ngf">Show Photos</a>
              </Typography>
            </div>
            <div style={{width: '75%'}}>
              <div className={classes.allCategory}>
                <Button 
                  onClick={() => setCategory("lifestyle")}
                  variant="contained"
                  color="secondary" 
                  sx={{
                    backgroundColor:"#dd87dd",
                    '&:hover': {
                      color: '#9c27b0',backgroundColor: 'white'
                      }
                  }}>
                Life Style</Button>
                <Button
                onClick={() => setCategory("blackwhite")}
                  sx={{
                    backgroundColor:"#4d4d4f", 
                    '&:hover': {
                      color: 'black',backgroundColor: 'white'
                    }
                  }} 
                  variant="contained">
                  Black & White</Button>
                <Button 
                  onClick={() => setCategory("travel")}
                  variant="contained" 
                  color="success" 
                  sx={{
                    backgroundColor:"#a4c160",
                    '&:hover': {
                      color: '#2e7d32',backgroundColor: 'white'
                    }
                  }}>
                  Travel</Button>
              </div>
            </div>
          </Toolbar>
        </AppBar>   
      </Container>
    </>
  )
}

export default Navbar
