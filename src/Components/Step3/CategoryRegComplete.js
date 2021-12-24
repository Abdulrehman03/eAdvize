import { makeStyles } from "@mui/styles";
// import Bg from "./../../public/consultantRegBg2.png";

export const useStyles = makeStyles((theme) => ({
  eAdvizeConsultantReg_topContainer: {
    backgroundColor: `#143D66`,
  },

  eAdvizeConsultantReg_topContent: {
    display: "flex",
    webkitFlexDirection: "column",
    msFlexDirection: "column",
    flexDirection: "column",
    "@media(min-width:1300px)": {
      padding: "10% 20%",
    },
    "@media(max-width:1300px) and (min-width:700px)": {
      padding: "10% 5%",
    },
    "@media(max-width:700px)": {
      padding: "5% 0%",
    },
  },

  eAdvizeConsultantReg_insideContent: {
    width: "auto",
    backgroundColor: "#fff",
    // borderRadius: "15px",
    padding: "3.6rem",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #0000003E",
    borderRadius: "22px",
  },
  eAdvizeConsultantReg_insideContentFlex: {
    width: "95%",
  },

  // content inside

  title: {
    fontSize: "30px !important",
    fontFamily: '"Open Sans", sans-serif',
    color: "#143D66",
    fontWeight: "bold !important",
    lineHeight: "41px",
  },
  subHead: {
    marginTop: "1rem !important",
    fontSize: "25px !important",
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: "bold !important",
    lineHeight: "34px",
    color: "#04C38F",
  },
  subTextFields: {
    fontFamily: '"Open Sans", sans-serif !important',
    fontSize: "calc(1.3vh + 1.3vw - 1vmin) !important",
    lineHeight: "34px !important",
    color: "#143D66",
    margin: "1rem 0 !important",
  },
  subTextFields2: {
    fontFamily: '"Open Sans", sans-serif !important',
    fontSize: "calc(1.3vh + 1.3vw - 1vmin) !important",
    lineHeight: "34px !important",
    color: "#143D66",
    fontWeight: 800,
    margin: "1rem 0 !important",
  },
  button: {
    marginRight: "1.5rem !important",
    fontFamily: '"Open Sans", sans-serif !important',
    fontSize: "20px !important",
    lineHeight: "30px !important",
    color: "#143D66",
    fontWeight: 600,
    paddingRight: "1.5rem !important",
    paddingLeft: "1.5rem !important",
  },
  button_outlined: {
    width: "auto",
    padding: "0.5rem 1rem !important",
    margin: "2px 0 0 !important",
  },
  btnGroup: {
    display: "inline-block",
  },
}));
