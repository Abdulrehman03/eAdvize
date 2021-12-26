import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  subHeader: {
    color: "#143D66",
    backgroundColor: `${theme.palette.primary.main} !important`,
    marginTop: "0px",
    "@media screen and (max-width: 767px)": {  
      width: "100%",
      height: "100px",
    },
  },
  footerEadvizeLogo_img: {
    width: "120px",
    textAlign: "center",
    marginLeft: "15px",
    marginTop: "30px",
  },
  navigation: {},

  checkbox_navigation: {
    opacity: "0",
  },

  navigation_button: {
    background: "rgb(39, 245, 186)",
    height: "5rem",
    width: "5rem",
    borderRadius: "50%",
    position: "absolute",
    top: "0.5rem",
    right: "1rem",
    zIndex: "2000",
    textAlign: "center",
    cursor: "pointer",
  },

  navigation_background: {
    height: "5rem",
    width: "5rem",
    borderRadius: "50%",
    position: "absolute",
    top: "0.5rem",
    right: "1rem",
    backgroundImage: "radial-gradient(#01E3A6, #01E3A6)",
    zIndex: "1000",
    transition: "transform .8s cubic-bezier(0.86, 0, 0.07, 1)",
  },

  navigation_nav: {
    height: "100vh",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "1500",
    backgroundColor: "#01E3A6",
    display:'none',
    opacity: "0",
    width: "100%",
    transition: "all 2s",
  },

  navigation_list: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    transform: "translate(-50%,-50%)",
    listStyle: "none",
    textAlign: "center",
    paddingInlineStart: 0,
    margin: 0,
  },

  navigation_item: {
    margin: "0 0 15px",
  },

  navigation_link: {
    display: "inline-block",
    font: "normal normal 1rem/22px Open Sans",
    fontWeight: "bold",
    padding: "1rem 2rem",
    color: "#143D66",
    textDecoration: "none",
    textTransform: "uppercase",
    backgroundSize: "220%",
    transition: "all .4s",

    "&:visited": {
      fontSize: "1rem",
      fontWeight: "300",
      padding: "1rem 2rem",
      color: "#143D66",
      textDecoration: "none",
      textTransform: "upper-case",
      backgroundImage:
        "linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%)",
      backgroundSize: "220%",
      transition: "all .4s",
    },
  },
  navigation_linkDéposer: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    width: "220px",
  },
  navigation_linkInscription: {
    background: "#143D66 0% 0% no-repeat padding-box",
    width: "220px",
    color: "#fff !important",
  },
  navigation_linkConnexion: {
    border: "2px solid #143D66",
    width: "215px",
  },

  navigation_icon: {
    position: "relative",
    top: "2.3rem",
    "&, &::before, &::after": {
      width: "2.5rem",
      height: "3px",
      backgroundColor: "#143D66",
      display: "inline-block",
    },
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      left: "0",
      transition: "all .2s",
    },
    "&::before": {
      top: "-0.8rem",
    },
    "&::after": {
      top: ".8rem",
    },
  },
}));
