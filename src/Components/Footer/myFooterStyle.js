import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  footer: {
    color: "#e5e5e8",
    // bottom: 0,
    // position: 'absolute',
    backgroundColor: theme.palette.background.footer,
  },
  footerTopArea: {
    margin: "auto",
    backgroundColor: theme.palette.background.footer,
    "@media (max-width: 7000px) and (min-width: 595px)": {
      padding: "10px 50px 10px 11px",
    },
    "@media (max-width: 595px)": {
      padding: "10px 0px 10px 0px",
    },
  },
  footerCol1: {
    width: "150px",
    backgroundColor: "inherit",
    paddingTop: "30px",
  },
  footerCol2: {
    width: "120px",
    backgroundColor: "inherit",
    paddingTop: "30px",
  },
  footerCol3: {
    width: "380px",
    backgroundColor: "inherit",
    paddingTop: "30px",
    "@media (max-width: 595px)": {
      width: "auto",
    },
  },
  footerCol4: {
    width: "200px",
    backgroundColor: "inherit",
    paddingTop: "30px",
    "@media (max-width: 595px)": {
      paddingTop: "0",
      width: "250px",
    },
  },
  footerEadvizeLogo_img: {
    width: "140px",
    textAlign: "center",
    marginLeft: "10px",
    "@media (max-width: 595px)": {
      marginLeft: "0",
    },
  },

  footerHeading: {
    "& h4": {
      textAlign: "left",
      fontSize: "24px",
      lineHeight: "29px",
      fontWeight: "bold",
      fontFamily: '"Open Sans", sans-serif',
      letterSpacing: "0px",
      margin: "0",
      color: "#ffffff",
      "@media (max-width: 595px)": {
        fontSize: "18px",
      },
    },
  },

  InputTextEnvoyer: {
    display: "flex",
    marginLeft: 0,
    "&:input": {
      margin: "0",
      border: "1px solid #ccc",
      borderRadius: "3px",
      height: "40px",
      boxSizing: "border-box",
      outline: "none",
    },
    "@media (max-width: 595px)": {
      display: "none",
    },
  },
  inputBoxEAdvize: {
    color: "#000",
    background: "#ffffff 0% 0% no-repeat padding-box",
    fontSize: "14px !important",
    width: "230px",
    padding: "19px",
    marginTop: "1px",
    float: "left",
    margin: 0,
    border: "1px solid #ccc",
    borderRadius: "3px",
    height: "40px",
    boxSizing: "border-box",
    outline: "none",

    "@media (max-width: 1130px) and (min-width: 709px)": {
      width: "210px",
      padding: "19px !important",
    },
  },

  inputBoxEAdvize_subscribe: {
    width: "110px",
    height: "39.5px",
    lineHeight: "42px",
    marginTop: "1px",
    borderRadius: "3px 3px 3px 3px",
    color: "#143D66",
    font: "normal normal 600 20px/38px Open Sans",
    textAlign: "center",
    background: "#00ffba 0% 0% no-repeat padding-box",
    boxShadow: "0px 0px 6px #00000064",
    float: "left",
    "@media (max-width: 1130px) and (min-width: 709px)": {
      width: "80px",
      height: "40px",
      lineHeight: "40px",
      borderRadius: "0 2px 2px 0",
    },
  },

  footerHeadingCol2: {
    "& h4": {
      textAlign: "left",
      fontSize: "22px",
      lineHeight: "29px",
      fontWeight: "bold",
      fontFamily: '"Open Sans", sans-serif',
      letterSpacing: "0px",
      marginTop: "0",
      marginBottom: "5px",
      color: "#ffffff",

      "@media (max-width: 595px)": {
        fontSize: "18px",
        lineHeight: "32px",
      },
    },
  },
  footerHeadingCol3: {
    "& h4": {
      textAlign: "left",
      fontSize: "22px",
      lineHeight: "29px",
      fontWeight: "bold",
      fontFamily: '"Open Sans", sans-serif',
      letterSpacing: "0px",
      marginTop: "0",
      marginBottom: "5px",
      color: "#ffffff",

      "@media (max-width: 595px)": {
        fontSize: "18px",
        lineHeight: "32px",

        "&:nth-child(1)": {
          display: "none",
        },
      },
    },
  },
  footerCol4Mobile: {
    "@media (max-width: 595px)": {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  footerItems: {
    marginTop: "20px",
    color: "white",
    lineHeight: "15px",
    fontSize: "14px",
    "& hover": {
      color: "#e5e5e8",
      cursor: "pointer",
    },
  },
  footerItemsSocialIcons: {
    "@media (max-width: 595px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  footerItemCol2: {
    marginBottom: 0,
    marginTop: 0,
    width: "350px",
    textDecoration: "none",
    textAlign: "left",
    fontSize: "18px",
    lineHeight: "18px",
    fontWeight: "normal",
    fontFamily: "Helvetica Neue",
    letterSpacing: "0px",
    color: "#ffffff",
    visibility: "visible !important",
    "@media (max-width: 595px)": {
      display: "none",
    },
  },
  footerLink: {
    textDecoration: "none",
    textAlign: "left",
    fontSize: "14px",
    lineHeight: "12px",
    fontWeight: "normal",
    fontFamily: '"Open Sans", sans-serif',
    letterSpacing: "0px",
    color: "#ffffff",
    visibility: "visible !important",
    "& :hover": {
      color: "rgb(221, 231, 240)",
      textDecoration: "none",
    },
    "& i": {
      fontSize: "24px",
      "@media (max-width: 595px)": {
        fontSize: "44px !important",
      },
    },
    "& i:nth-child(1)": {
      marginRight: "10px",
      "@media (max-width: 595px)": {
        marginBottom: "10px",
      },
    },
  },
}));
