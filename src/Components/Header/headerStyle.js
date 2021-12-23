import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  header: {
    color: "#143D66",
    backgroundColor: theme.palette.primary.main,
    marginTop: "0px",
    padding: "1rem 0 0",
    display: "block",
    "@media(max-width:768px)": {
      display: "none",
      marginBottom: "65px !important",
    },
  },
  subHeaderMobile: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    display: "none",
    "@media(max-width:768px)": {
      display: "block",
    },
  },
  headerEadvizeLogo_img: {
    width: "120px",
    textAlign: "center",
    marginLeft: "15px",
  },

  navigation: {
    display: "flex",
    justifyContent: "space-between",
  },

  navigation_nav: {},

  navigation_list: {
    listStyle: "none",
    display: "flex",
    paddingInlineStart: 0,
    margin: 0,
    alignItems: "center",
  },

  navigation_item: {
    margin: "0 0 15px",
  },

  navigation_link: {
    display: "inline-block",
    font: "normal normal 14px/12px Open Sans",
    fontWeight: "bold !important",
    padding: ".6rem 2rem",
    color: "#143D66",
    textDecoration: "none",
    textTransform: "uppercase",
    backgroundSize: "220%",
    transition: "all .4s",

    "&:visited": {
      fontSize: "14px",
      fontWeight: "300",
      padding: ".6rem 2rem",
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
    font: "normal normal 600 14px/16px Open Sans",
    marginRight: "10px",
  },
  navigation_linkInscription: {
    background: "#143D66 0% 0% no-repeat padding-box",
    font: "normal normal 600 14px/16px Open Sans",
    color: "#fff !important",
    marginRight: "10px",
  },
  navigation_linkConnexion: {
    border: "2px solid #143D66",
    font: "normal normal 600 14px/16px Open Sans",
  },
}));
