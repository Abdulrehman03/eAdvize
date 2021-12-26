import { makeStyles } from "@mui/styles";
import Bg from "./../../public/consultantRegBg2.png";

export const useStyles = makeStyles((theme) => ({
  eAdvizeConsultantReg_topContainer: {
    backgroundImage: `url(${Bg})`,

    minHeight: "450px",
    position: "relative",
    backgroundPosition: "60%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    "@media(max-width: 3000px) and (min-width: 1201px)": {
      backgroundImage: `url(${Bg})`,
      paddingBottom: "30%",
      minHeight: "450px",
      position: "relative",
      backgroundPosition: "30%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },

    "@media(max-width: 1200px) and (min-width: 901px)": {
      backgroundImage: `url(${Bg})`,
      paddingBottom: "45%", 
    },

    "@media(max-width: 900px) and (min-width: 600px)": {
      backgroundImage: `url(${Bg})`,
      paddingBottom: "55%", 
    },
    "@media(max-width: 595px)": {
      backgroundImage: `url(${Bg})`,
      paddingBottom: "100%", 
    },

    "&::before": {
      content: '""',
      width: "100%",
      height: "100%",
      position: "absolute",
      left: "0",
      top: "0",
      background: `-moz-linear-gradient(
              left,
              rgba(21, 26, 48, 0.82) 33%,
              rgba(255, 255, 255, 0) 52%,
              rgba(244, 244, 244, 0) 55%,
              rgba(166, 167, 175, 0) 100%
            );
            background: -webkit-linear-gradient(
              left,
              rgba(21, 26, 48, 0.82) 33%,
              rgba(255, 255, 255, 0) 52%,
              rgba(244, 244, 244, 0) 55%,
              rgba(166, 167, 175, 0) 100%
            );
            background: linear-gradient(
              to right,
              rgba(21, 26, 48, 0.82) 33%,
              rgba(255, 255, 255, 0) 52%,
              rgba(244, 244, 244, 0) 55%,
              rgba(166, 167, 175, 0) 100%
            )`,
      opacity: "0.15",
    },
  },
  eAdvizeConsultantReg_topContent: {
    display: "flex",
    webkitFlexDirection: "column",
    msFlexDirection: "column",
    flexDirection: "column",
    // webkitJustifyContent: "center",
    // justifyContent: "center",
    position: "absolute",
    top: "40px",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "120%",

    "@media(max-width: 1300px) and (min-width: 900px)": {
      width:'80%'
    },

    "@media(max-width: 900px) and (min-width: 600px)": {
      width:'100%'
    },
    "@media(max-width: 595px)": {
      width:'100%'
    },
  },

  eAdvizeConsultantReg_insideContent: {
    width: "auto",
    height: "auto",
    backgroundColor: "#fff",
    borderRadius: "15px",
    padding: "3.6rem",
    "@media(max-width: 595px)": {
      padding: "1rem 0.5rem",
    },
  },
  eAdvizeConsultantReg_insideContentFlex: {
    width: "95%",
    "@media(max-width: 595px)": {
      width: "100%",
    },
  },

  // content inside

  title: {
    fontSize: "30px !important",
    fontFamily: '"Open Sans", sans-serif',
    color: "#143D66",
    fontWeight: "bolder !important",
    "@media(max-width: 595px)": {
      fontSize: "20px !important",
    },
  },
  subHead: {
    marginTop: "1rem !important",
    color: "#143D66",
  },
  textField: {
    borderRadius: "5px 5px 5px 5px",
    width: "100%",
    height: "10px !important",
    fontFamily: '"Open Sans", sans-serif',
    marginTop: "1rem !important",
    "& input": {
      height: "10px !important",
      // border: "1px solid #143D66 ",
    },
  },
  displayCharacterSec: {
    display: "flex",
    marginTop: "3rem",
    justifyContent: "space-evenly",
    listStyle: "none",
    margin: "auto",
    font: "normal normal normal 12px/17px Open Sans",
    paddingInlineStart: "0",
    "& :first-child": {
      color: "#596571",
    },
    "& > div": {
      color: "#596571",
    },
  },
  subTextFields: {
    fontFamily: '"Open Sans", sans-serif !important',
    fontSize: "10px !important",
    lineHeight: "12px !important",
    color: "#596571",
    textAlign: "left",
    margin: "1rem 0 !important",  
  },
  button: {
    marginTop: "1.5rem !important",
    justifyContent: "space-between",
    width: "80%",
    margin: "auto",
  },
  btngroup: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem !important",
    "@media(max-width: 595px)": {
      flexDirection:'column',
      lineHeight: 2.5,
    },
  },
  textFieldGroup: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "2rem !important",
  },
  google: {
    color: "#1662AB !important",
    fontFamily: '"Open Sans", sans-serif !important',
    fontSize: "12px !important",
    lineHeight: "24px !important",
    fontWeight: "300 !important",
    backgroundColor: "white !important",
    borderRadius: "6px 6px 6px 6px",
    boxShadow: "0px 3px 8px #00000029",
  },
  Linkedin: {
    color: "#FFFFFF !important",
    fontFamily: '"Open Sans", sans-serif !important',
    fontSize: "14px !important",
    lineHeight: "24px !important",
    fontWeight: "300 !important",
    backgroundColor: "#1662AB !important",
    borderRadius: "6px 6px 6px 6px",
    boxShadow: "0px 3px 8px #00000029",
  },
}));
