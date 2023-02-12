import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { Context } from "../App";

// const drawerWidth = 240;
const navItems = ["LIFE STYLE", "BLACK & WHITE", "TRAVEL"];
const navItemsLink = ["lifestyle", "blackwhite", "travel"];

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { setCategory, mode } = useContext(Context);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();
  const onClickCategory = async (categoryName) => {
    await setCategory(`${categoryName}`);
    navigate(`/${categoryName}`);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontStyle: "italic" }}>
        SHOW PHOTOS
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() =>
                onClickCategory(navItemsLink[navItems.indexOf(item)])
              }
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    // <Box sx={{ display: "flex" }}>
    <Box
      sx={{
        display: "flex",
        borderBottom: 0.1,
        borderColor: mode == 1 ? "grey.500" : "white",
        borderRadius: 1,
        // padding: "0 !important",
      }}
    >
      <CssBaseline />
      {/* <AppBar component="nav" sx={{ backgroundColor: "white" }}> */}
      <AppBar
        position="static"
        elevation={0}
        color="inherit"
        sx={{ backgroundColor: mode == 0 ? "#535252 !important" : "white" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontStyle: "italic",
              color: mode ? "#000" : "#fff",
            }}
          >
            SHOW PHOTOS
          </Typography>
          <Box
            sx={{ display: { xs: "none", sm: "block", marginRight: "5px" } }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ marginRight: "5px", color: mode == 1 ? "#000" : "#fff" }}
                onClick={() =>
                  onClickCategory(navItemsLink[navItems.indexOf(item)])
                }
                variant="text"
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
