import { ImageListItem, ImageList } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../App';

const Images = ({data, chooseCol}) => {
  const {category} = useContext(Context);
  const [dataForCategory, setDataForCategory] = useState([]);
  var items = data.map((item) => item)
  var item = items.sort(() => Math.random() - 0.5)

  useEffect(() => {
    setDataForCategory(category ? (data.filter((item) => item.category===category)) : item)
    console.log(dataForCategory)
  }, [category])

  return (
    <>
      <ImageList sx={{paddingLeft:"2%"}} cols={chooseCol==1 ? 4 : 3} >
      {dataForCategory.map((item) => (<ImageListItem key={item.url}>
        <img
          src={item.url}
          srcSet={item.url}
          style={{width:"85%"}}
        />
      </ImageListItem>)
      )}
     </ImageList>
    </>
  )
}

export default Images
