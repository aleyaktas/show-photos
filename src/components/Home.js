import { Button, Container } from '@mui/material'
import React, { useContext, useState } from 'react'
import columnFour from '../icons/four-columns.png'
import columnThree from '../icons/three-columns.png'
import columnFourLight from '../icons/four-columns-light.png'
import columnThreeLight from '../icons/three-columns-light.png'
import data from '../img/data'
import Images from './Images'
import {WbIncandescentOutlined} from '@mui/icons-material';
import {WbIncandescent} from '@mui/icons-material';
import { Context } from '../App'
import Category from './Category'
import { Box } from '@mui/system'

const Home = () => {
  const {mode, setMode, chooseCol, setChooseCol} = useContext(Context);
  return (
    <>
      <Box
        sx={{
          // borderRight: 0.2,
          // borderLeft:0.2, 
          // borderColor:"grey.500", 
          // borderRadius:1, 
          padding: "0 !important",
          backgroundColor: mode==0 ? "black" : "white",
        }}
      >
      <div style={{paddingTop:'1%', textAlign: 'end', height:'10%', display:"flex", justifyContent:"space-between"}}>
        <Button onClick={async () => await setMode(!mode)} sx={{
            width: "0.4%",
            // borderRadius: "2%",
            // borderColor: mode== 1 ? "black !important" : "white !important",
            // border:1,
            marginLeft:"1%",
            backgroundColor: mode==1 ? "white !important" : "black !important"
          }}>
            {mode == 1 ? <WbIncandescent sx={{color:"black"}}/> : <WbIncandescentOutlined sx={{color:"white"}}/>}
        </Button>
        <div>
          <Button onClick={() => setChooseCol(0)} size="small" sx={{
            // border:1,
            // borderColor:"black",
            marginRight: 1
          }}>
            {mode==1? 
            <img class="round" src={columnThree} alt="user" width="70%" height="25"/> 
            :
            <img class="round" src={columnThreeLight} style={{backgroundColor:"white"}} alt="user" width="70%" height="25"/> }
          </Button >
          <Button onClick={() => setChooseCol(1)} size="small" sx={{
            // border:1,
            // borderColor:"black"
          }}>
            {mode==1?
            <img class="round" src={columnFour} alt="user" width="80%" height="25"/>
            :
            <img class="round" src={columnFourLight} style={{backgroundColor:"white"}} alt="user" width="80%" height="25"/>
            }
          </Button>
        </div> 
      </div>

      
      </Box>
    </>
  )
}

export default Home
