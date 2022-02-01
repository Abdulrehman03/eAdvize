import { makeStyles } from "@mui/styles";
import Bg from "./../../public/consultantRegBg2.png";

export const useStyles = makeStyles((theme) => ({
  eAdvizeDeveoperInfo_topContainer: { 
    position: "relative", 
    background:'#e5e5e5',
    padding:'1.5rem 0 3rem'
    
  },
  eAdvizeDeveoperInfo_topContent: {
    display: "flex",
    webkitFlexDirection: "column",
    msFlexDirection: "column",
    flexDirection: "column",
    // webkitJustifyContent: "center",
    // justifyContent: "center",  
    fontSize: "120%", 

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
      flexDirection: "column",
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
