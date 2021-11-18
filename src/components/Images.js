import { ImageListItem, ImageList } from '@mui/material'
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../App';

const Images = () => {
  const {allData: data,chooseCol, mode} = useContext(Context)

  // const {category} = useContext(Context);
  // const [dataForCategory, setDataForCategory] = useState([]);
  var items = data.map((item) => item)
  var item = items.sort(() => Math.random() - 0.5)

  // useEffect(() => {
  //   setDataForCategory(category ? data=(data.filter((item) => item.category===category)) : item)
  //   console.log(dataForCategory)
  // }, [category])

  return (
    <Box sx={{backgroundColor: mode==0 ? "black" : "white",}}>
      <ImageList sx={{margin:"0 !important", padding:"1%"}} cols={chooseCol==1 ? 4 : 3} >
      {item.map((item) => (<ImageListItem sx={{alignItems:"center",minHeight: "-webkit-fill-available"}} key={item.url}>
        <img
          src={item.url}
          srcSet={item.url}
          style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px", objectFit: "fill", width:"85%", marginBottom:"5%"}}
        />
      </ImageListItem>)
      )}
     </ImageList>
    </Box>
  )
}

export default Images
