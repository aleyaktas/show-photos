import { Button } from '@mui/material'
import React, { useContext } from 'react'
import columnFour from '../icons/four-columns.png'
import columnThree from '../icons/three-columns.png'
import columnFourLight from '../icons/four-columns-light.png'
import columnThreeLight from '../icons/three-columns-light.png'
import {WbIncandescentOutlined} from '@mui/icons-material';
import {WbIncandescent} from '@mui/icons-material';
import { Context } from '../App'
import { Box } from '@mui/system'

const Home = () => {
  const {mode, setMode, setChooseCol} = useContext(Context);
  return (
    <>
      <Box
        sx={{
          padding: "0 !important",
          backgroundColor: mode==0 ? "#535252" : "white",
        }}
      >
      <div style={{paddingTop:'1%', textAlign: 'end', height:'10%', display:"flex", justifyContent:"space-between"}}>
        <Button onClick={async () => await setMode(!mode)} sx={{
            width: "0.4%",
            marginLeft:"1%",
            backgroundColor: mode==1 ? "white !important" : "#535252 !important"
          }}>
            {mode == 1 ? <WbIncandescent sx={{color:"black"}}/> : <WbIncandescentOutlined sx={{color:"white"}}/>}
        </Button>
        <div>
          <Button onClick={() => setChooseCol(0)} size="small" sx={{
            marginRight: 1
          }}>
            {mode==1? 
            <img class="round" src={columnThree} alt="user" width="70%" height="25"/> 
            :
            <img class="round" src={columnThreeLight} style={{backgroundColor:"white"}} alt="user" width="70%" height="25"/> }
          </Button >
          <Button onClick={() => setChooseCol(1)} size="small" sx={{
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
