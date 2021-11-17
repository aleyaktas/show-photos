import { Button, Container } from '@mui/material'
import React, { useContext, useState } from 'react'
import columnFour from '../icons/four-columns.png'
import columnThree from '../icons/three-columns.png'
import data from '../img/data'
import Images from './Images'
import modeIcon from '../icons/mode.png'
import { Context } from '../App'

const Home = () => {
  const [chooseCol, setChooseCol] = useState(0);
  const {mode, setMode} = useContext(Context);

  return (
    <>
      <Container
        sx={{
          borderRight: 0.2,
          borderLeft:0.2, 
          borderColor:"grey.500", 
          borderRadius:1, 
          padding: "0 !important",
          backgroundColor: mode==0 ? "black" : "white"
        }}
      >
      <div style={{paddingTop:'1%', textAlign: 'end', height:'10%', display:"flex", justifyContent:"space-between"}}>
        <Button onClick={() => setMode(!mode)} sx={{
            width: "3%",
            borderRadius: "50%",
            borderColor:"black !important",
            border:1,
            marginLeft:"1%"
          }}>
          <img class="round" src={modeIcon} alt="user" width="50%" height="25"/>
        </Button>
        <div>
          <Button onClick={() => setChooseCol(0)} size="small" sx={{
            border:1,
            borderColor:"black",
            marginRight: 1
          }}>
            <img class="round" src={columnThree} alt="user" width="90%" height="25"/>
          </Button >
          
          <Button onClick={() => setChooseCol(1)} size="small" sx={{
            border:1,
            borderColor:"black"
          }}>
            <img class="round" src={columnFour} alt="user" width="100%" height="25"/>
          </Button>
        </div> 
      </div>
      <div style={{paddingTop: "1%"}}>
      <Images data={data} chooseCol={chooseCol}/>
      </div>
      </Container>
    </>
  )
}

export default Home
