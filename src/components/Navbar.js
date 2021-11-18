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

  const onClickLifeStyle = () => {
    setCategory("lifestyle")
    navigate('/lifestyle')
  }
  const onClickCategory = (categoryName) => {
    setCategory(`${categoryName}`)
    navigate(`/${categoryName}`)
  }

  return (
    <>
      <CssBaseline/>
      <Box 
        sx={{
          border:0.1, 
          borderColor:mode==1 ? "grey.500" : "white", 
          borderRadius:1, 
          padding: "0 !important",
        }}>
        <AppBar position="static" elevation={0} color="inherit" sx={{backgroundColor: mode== 0 ? "black !important" : "white"}}>
          <Toolbar>
            <div style={{width: "25%"}}>
              <Button onClick={() => navigate('/')}>
                <a className={classes.link} style={{color: mode==1 ? "black" : "white"}}>Show Photos</a>
              </Button>
            </div>
            <div style={{width: '75%'}}>
              <div className={classes.allCategory}>
                <Button 
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
                  onClick={() => onClickCategory("blackwhite")}
                    sx={{
                      backgroundColor:"#4d4d4f", 
                      '&:hover': {
                        color: 'black',backgroundColor: 'white'
                      }
                    }} 
                    variant="contained">
                  Black & White</Button>
                <Button 
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
