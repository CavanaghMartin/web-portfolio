import React from "react";
import {  Typography, Divider, Link, makeStyles, Grid, CardMedia, Button } from "@material-ui/core";
import theme from "../../theme/theme";
import * as styles from "../../theme/commonStyles";
import picture from "./../../images/picture.jpg";
import { motion } from "framer-motion"
import SkillsPage from "./SkillsPage";
import { useTranslation } from 'react-i18next';

  const AboutPage = () => {
  const [ t, i18n ] = useTranslation("global");
  const classes = useStyles();
  
  const scrollToContact = () => {
    const element = document.getElementById("Contact");
    element.scrollIntoView({ behavior: "smooth" });
  };
  const [lastYPos, setLastYPos] = React.useState(0);
  const [shouldShowActions, setShouldShowActions] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      if (yPos > 805 && yPos < 1573) {
        setShouldShowActions(true);
      } else {
        setShouldShowActions(false);
      }
      setLastYPos(yPos);
    }
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);
  return (
    <>
      <motion.div className={classes.AboutMe} id="AboutMe"
        initial={{ y: -150 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.3 }}
      
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center" className={classes.flexbos}
        >
          <Grid item lg={6} md={6} xs={12} className={classes.root}>
            <CardMedia
              component="img"
              src={picture}
              alt="A picture of me"
              className={classes.picture}
            />
          </Grid>
          <Grid item lg={6} md={6} xs={12} className={`${classes.columnDiv} ${classes.mainDiv}`}>
            <Typography className={`${classes.aboutText} ${classes.headerText}`}>
            {t("about.title")}
            </Typography>
            <Divider classes={{ root: classes.divider }} />
            <Typography className={classes.bodyText}>
            {t("about.body")}

              {" "}

              <Link
                onClick={scrollToContact}
                className={classes.link}
                underline="none"
              >
            {t("about.links")}
              </Link>
              .
            </Typography>
            <Button
              variant="outlined"
              className={classes.button}
              aria-label="Scroll Down"
              onClick={() => window.location.href='https://firebasestorage.googleapis.com/v0/b/react-auth-punch-it.appspot.com/o/CV_Cavanagh_%20Martin_ES.pdf?alt=media&token=250f73ed-35e5-4e96-802d-9c38df9f47bb'}
              
              >
            {t("about.btn")}
            </Button>

          </Grid>
        </Grid>
      </motion.div>
      <SkillsPage />
    </>
  );
};

export default AboutPage;

const useStyles = makeStyles({
  columnDiv: {
    ...styles.columnDiv,
  },
  mainDiv: {
    [theme.breakpoints.down("xl")]: {
      width: "45%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "50%",
    },
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
    margin: "0 auto",
  },
  headerText: {
    color:"white",
    ...styles.headerText,
    textShadow:"black"
  },
  aboutText: {
  },
  divider: {
    ...styles.divider,
  },
  bodyText: {
    fontSize: "1.1rem",
    color: "white",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "1rem",
    lineHeight: "1.6rem",
  },
  link: {
    color: "rgba(1, 81, 205, 0.87)",
    textShadow: "1px 1px #b2dfdb",
    textDecoration: "none",
    borderBottom: "1px solid #b2dfdb",
    "&:hover": {
      color: "#b2dfdb",
      cursor: "pointer",
    },
  },
  flexbos: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor:"#007cff"
  },
  picture: {
    width: "100%",
    height: "100%",
    maxHeight: "21rem",
    maxWidth: "259px",

    margin: "8rem",
    boxShadow: "8px 8px 12px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.down("xs")]: {
      margin: "0",
      maxHeight: "80vh",
      maxwidth: "80vw",



    },
  },
  root: {
    padding: "3rem",
    '&:hover': {
      cursor: "pointer"
    }

  },
  AboutMe: {
    display: "block",
  },
  button:{
    color:"white",
    boxShadow: "4px 4px 3px grey",
    '&:hover': {
      backgroundColor: '#ffffff',
      color:"purple",
      boxShadow: 'none',
    },
  }

});