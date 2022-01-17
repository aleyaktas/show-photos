import React, { useContext, useState } from 'react'
import Button from '@mui/material/Button';
import { AppBar, Container, CssBaseline, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Context } from '../App';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';

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
  const navigate = useNavigate();

  const {setCategory, mode} = useContext(Context);
  const classes = useStyles();

  const onClickCategory = (categoryName) => {
    setCategory(`${categoryName}`)
    navigate(`/${categoryName}`)
  }

  return (
    <>
      <CssBaseline/>
      <Box 
        sx={{
          borderTop: 0.1,
          borderBottom:0.1,
          borderColor:mode==1 ? "grey.500" : "white", 
          borderRadius:1, 
          padding: "0 !important",
        }}>
        <AppBar position="static" elevation={0} color="inherit" sx={{backgroundColor: mode== 0 ? "#535252 !important" : "white"}}>
          <Toolbar>
            <div style={{width: "25%"}}>
              <Button 
                className="navbarButton"
                onClick={() => navigate('/')}>
                <a className={classes.link} style={{color: mode==1 ? "black" : "white"}}>Show Photos</a>
              </Button>
            </div>
            <div style={{width: '75%'}}>
              <div className={classes.allCategory}>
                <Button 
                  className="navbarButton"
                  onClick={() => onClickCategory("lifestyle")}
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
                  className="navbarButton"
                  onClick={() => onClickCategory("blackwhite")}
                    sx={{
                      backgroundColor:"white", color:"black",
                      '&:hover': {
                        color: 'white',backgroundColor: '#4d4d4f'
                      }
                    }} 
                    variant="contained">
                  Black & White</Button>
                <Button 
                  className="navbarButton"
                  onClick={() => onClickCategory("travel")}
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
      </Box>
    </>
  )
}

export default Navbar
