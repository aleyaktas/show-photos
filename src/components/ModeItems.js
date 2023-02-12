import { Button, Grid, useMediaQuery } from "@mui/material";
import React, { useContext } from "react";
import { WbIncandescentOutlined } from "@mui/icons-material";
import { WbIncandescent } from "@mui/icons-material";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import { Context } from "../App";

const ModeItems = () => {
  const { mode, setMode, setChooseCol } = useContext(Context);
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Grid
      sx={{
        padding: "0 !important",
        backgroundColor: mode == 0 ? "#535252" : "white",
      }}
    >
      <div
        style={{
          paddingTop: "1%",
          textAlign: "end",
          height: "10%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          onClick={async () => await setMode(!mode)}
          sx={{
            width: "0.4%",
            marginLeft: "20px",
            backgroundColor:
              mode == 1 ? "white !important" : "#535252 !important",
          }}
        >
          {matches && mode == 1 ? (
            <WbIncandescent sx={{ color: "black" }} />
          ) : matches && mode == 0 ? (
            <WbIncandescentOutlined sx={{ color: "white" }} />
          ) : null}
        </Button>
        <div>
          <Button
            className="columnButton"
            onClick={() => setChooseCol(0)}
            size="small"
            sx={{
              marginRight: "10px",
            }}
          >
            {mode == 1 ? (
              <CalendarViewMonthIcon
                sx={{ color: "black", fontSize: "40px" }}
              />
            ) : (
              <CalendarViewMonthIcon
                sx={{ color: "white", fontSize: "40px" }}
              />
            )}
          </Button>
          <Button
            className="columnButton"
            onClick={() => setChooseCol(1)}
            size="small"
            sx={{ marginRight: "20px" }}
          >
            {mode == 1 ? (
              <CalendarViewWeekIcon sx={{ color: "black", fontSize: "40px" }} />
            ) : (
              <CalendarViewWeekIcon sx={{ color: "white", fontSize: "40px" }} />
            )}
          </Button>
        </div>
      </div>
    </Grid>
  );
};

export default ModeItems;
