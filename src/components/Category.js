import { ImageList, ImageListItem } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Context } from '../App';

const Category = () => {
  const {allData:data,chooseCol,mode} = useContext(Context)
  let params = useParams()
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    setFilteredData(data.filter((item) => item.category===params.category))
  },[params.category])



  return (
    <Box sx={{backgroundColor: mode==0 ? "black" : "white",}}>
      <ImageList sx={{margin:"0 !important", padding:"1%", alignItems:"center"}} cols={chooseCol==1 ? 4 : 3} >
      {filteredData.map((item) => (<ImageListItem sx={{alignItems:"center",minHeight: "-webkit-fill-available"}} key={item.url}>
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

export default Category
