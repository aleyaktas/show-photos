import { ImageListItem, ImageList, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { Context } from "../App";
import SearchIcon from "@mui/icons-material/Search";
import zoomIcon from "../icons/zoom-icon.png";

const Images = () => {
  const [id, setId] = useState(-1);
  const { allData: data, chooseCol, mode } = useContext(Context);
  const matches = useMediaQuery("(min-width:600px)");

  const onClickButton = (itemId) => {
    if (id === itemId) {
      return setId(-1);
    }
    setId(itemId);
  };

  var items = data.map((item) => item);
  var item = items.sort(() => Math.random() - 0.5);

  return (
    <Box
      className="overlay"
      sx={{ backgroundColor: mode == 0 ? "#535252" : "white" }}
    >
      <ImageList
        sx={{
          margin: "0 !important",
          padding: "1%",
          alignItems: "center",
          display: "grid",
          gridTemplateColumns:
            id != -1 ? "repeat(8, 1fr) !important" : "repeat(4, 1fr)",
        }}
        cols={chooseCol == 1 ? 4 : 3}
      >
        {item.map((item) => (
          <ImageListItem
            className="listItem"
            sx={{
              alignItems: "center",
              minHeight: "-webkit-fill-available",
              gridColumn: item.id == id ? "span 8" : null,
              gridRowEnd: item.id == id ? "sp !important" : "1 span",
            }}
            key={item.url}
          >
            <img className="singleImg" src={item.url} srcSet={item.url} />

            {item.id == id ? (
              <div className="containerZoom">
                <button
                  onClick={() => onClickButton(item.id)}
                  className="imgButton"
                >
                  <img className="zoomIcon" src={zoomIcon} width="35" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => onClickButton(item.id)}
                className="imgButton"
              >
                <SearchIcon
                  sx={{
                    width: "100%",
                    margin: "3%",
                  }}
                />
              </button>
            )}
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Images;
