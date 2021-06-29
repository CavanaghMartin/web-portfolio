import React, { useState } from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
  makeStyles,
} from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const NavBar = () => {
  const useStyles = makeStyles({
    div: {
      display: "flex",

      justifyContent: "space-between",
    },
    appBar: {
      background: "primary",
      color: "blue",
    },
    drawerPaper: {
      width: "60%",
      backgroundColor: "#eeeeee",
      color: "black",
    },
    button: {
      background: "inherit",
      borderRadius: 3,
      color: "white",
      height: 40,
      padding: "0 1rem",
      margin: "0 0.5rem",
      fontSize: "0.9rem",
    },
    text: {
      fontSize: "1.2rem",
    },
    span: {
      textShadow: "1px 1px rgba(0, 0, 0, 0.3)",
    },
    listItemText: {
      fontSize: "0.9rem",
      fontWeight: "500",
    },
  });
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const getLink = (input) => {
    let words = input.split(" ");
    let linkWords = [];
    words.forEach((element) => {
      linkWords.push(
        element[0].toUpperCase() +
        element.slice(1, element.length).toLowerCase()
      );
    });
    return linkWords.join("");
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const appBarButtons = (
    <Grid className={classes.div}>
      <Button className={classes.button} onClick={() => scrollTo("AboutMe")}>
        Acerca de mi
      </Button>
      <Button className={classes.button} onClick={() => scrollTo("Projects")}>
        Proyectos
      </Button>
      <Button className={classes.button} onClick={() => scrollTo("Contact")}>
        Contacto
      </Button>
    </Grid>
  );

  const sideDrawer = (
    <Box className={classes.div}>
      <Drawer
        variant="temporary"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <List onClick={handleDrawerToggle}>
          {["ABOUT ME", "PROJECTS", "CONTACT"].map((text, index) => (
            <ListItem
              button
              component="a"
              key={text}
              href={"#" + getLink(text)}
            >
              <ListItemText
                primary={text}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={handleDrawerToggle}>
        <MenuRoundedIcon />
      </IconButton>
    </Box>
  );

  return (
    <AppBar position="relative" className={classes.appBar} id="navBar">
      <Toolbar>
        <Hidden xsDown>{appBarButtons}</Hidden>
        <Hidden smUp>{sideDrawer}</Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
