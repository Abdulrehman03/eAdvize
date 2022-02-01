import { makeStyles } from "@mui/styles"; 

export const useStyles = makeStyles((theme) => ({ 
  divider: {
    background:
      "transparent linear-gradient(90deg, #00FFBA 0%, #143D66 100%) 0% 0% no-repeat padding-box",
    height: "7px", 
    borderRadius: "4px",
    marginTop: "10px",
    marginBottom: "25px",
  },
  eAdvizeJeProposeUneMission_insideContent: {
    width: "100%",
    height: "auto", 
    "@media(max-width: 595px)": {
      padding: "1rem 0.5rem",
    },
  },
  eAdvizeJeProposeUneMission_insideContentFlex: {
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
    textAlign:'left',
    "@media(max-width: 595px)": {
      fontSize: "20px !important",
    },
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
  textArea: {
    borderRadius: "5px 5px 5px 5px",
    width: "96.5% !important", 
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    border: '1px solid #143D66 !important',
    fontFamily: '"Open Sans", sans-serif',
    marginTop: "1rem !important",
    padding: '16.5px 14px',
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
  subHead: {
    font: 'normal normal 600 25px/34px Open Sans !important',
    color: '#143D66', 
    textAlign: "left",
    margin: "1rem 0 !important",
  },
  button: {
    marginTop: "1.5rem !important",
    justifyContent: "space-between",
    width: "80%",
    margin: "auto",
  }, 
  textFieldGroup: {
    display: "flex",
    justifyContent: "center",
    flexDirection:'column',
    marginBottom: "2rem !important",
  }, 
  labelText:{
    font: "normal normal 600 22px/34px Open Sans !important",
    color: '#143D66 !important',
    textAlign:'left',
    marginBottom: -10,
    marginTop: 15,
  },
}));
