import { ImageList, ImageListItem, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../App";
import SearchIcon from "@mui/icons-material/Search";
import zoomIcon from "../icons/zoom-icon.png";

const Category = () => {
  const [id, setId] = useState(-1);
  const matches = useMediaQuery("(min-width:600px)");

  const { allData: data, chooseCol, mode, category } = useContext(Context);
  let params = useParams();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(data.filter((item) => item.category === params.category));
    setId(-1);
  }, [params.category]);

  useEffect(() => {
    console.log("filteredData", filteredData);
    console.log("id", id);
  }, []);

  const onClickButton = (itemId) => {
    if (id === itemId) {
      return setId(-1);
    }
    setId(itemId);
  };

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
        cols={!matches ? 1 : chooseCol == 1 ? 4 : 3}
      >
        {filteredData.map((item) => (
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
            <img src={item.url} srcSet={item.url} className="singleImg" />
            {item.id == id ? (
              <button
                onClick={() => onClickButton(item.id)}
                className="imgButton"
              >
                <img src={zoomIcon} width="35" />
              </button>
            ) : (
              matches && (
                <button
                  onClick={() => onClickButton(item.id)}
                  className="imgButton"
                >
                  <SearchIcon sx={{ width: "100%", margin: "3%" }} />
                </button>
              )
            )}
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Category;
