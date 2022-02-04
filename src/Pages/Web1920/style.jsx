import { makeStyles, createStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) =>
  createStyles({
    root: {
      position: "relative",
      backgroundColor: "#E4F0F8",
      "& .MuiStepper-root": {
        width: "100% !important",
      },
      "& .MuiStepIcon-root.Mui-active": {
        color: `${theme.palette.text.main} !important`,
      },
      "& .Mui-completed": {
        color: "#143D66 !important",
      },
      "& .MuiStepIcon-text": {
        fill: "white !important",
      },
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    spacecontain: {
      margin: "2rem auto",
    },
    container: {
      backgroundColor: "#fff",
      margin: "auto ",
      padding: "16px",
      borderRadius: "8px",
      border: "5px solid #01E3A6",
    },
    innerContainer: {
      width: "90%",
      margin: "auto",
    },
    title: {
      textAlign: "left",
      font: "normal normal bold 25px/34px Open Sans",
      letterSpacing: "0px",
      color: "#143D66",
      opacity: "1",
      margin: "0px",
    },
    titlecontainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      marginTop: "2rem",
    },
    subtitle: {
      textAlign: "left",
      font: "normal normal bold 22px/30px Open Sans",
      letterSpacing: "0px",
      color: "#143D66",
      margin: "0px",
    },
    divider: {
      width: "45px",
      background:
        "transparent linear-gradient(90deg, #00FFBA 0%, #143D66 100%) 0% 0% no-repeat padding-box",
      height: "7px",
      borderRadius: "4px",
    },
    description: {
      textAlign: "left",
      font: "normal normal normal 22px/30px Open Sans",
      letterSpacing: "0px",
      color: "#143D66",
      margin: "8px 0px",
    },

    inputbox: {
      margin: "10px 0px",
    },
    inputLabel: {
      color: "#143D66",
      fontSize: "16px",
      display: "block",
      lineHeight: "15px",
      padding: "10px 0",
      font: "normal 600 25px/34px Open Sans",
    },
    input1: {
      backgroundColor: "#EAFFF9",
      border: "1px solid #01E3A6",
      borderRadius: "6px",
      color: "#C7C7C7",
      width: "100%",
      padding: "0 6px",
    },
    textarea: {
      width: "100%",
      padding: "6px",
      borderRadius: "6px",
    },
    rowscontain: {
      margin: "auto",
      padding: "10px 0px",
    },
    btn: {
      width: "151px",
      height: "47px",
      font: "normal normal 600 22px/30px Open Sans",
      letterSpacing: "0px",
      backgroundColor: "#01E3A6",
      color: "#143D66",
      padding: "8px 16px",
      border: "0px",
    },
    tagbtn: {
      borderRadius: "2px",
      margin: "4px 0px",
      padding: " 3px 6px",
      fontSize: "14px",
      color: "#143D66",
      backgroundColor: "#fff",
      width: "169px",
      height: "47px",
      border: "2px solid #143D66",
      opacity: "1",
    },
    btnContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      marginTop: "2rem",
    },
    simplebtn: {
      color: "#000",
      fontSize: "12px",
      border: "1px solid #000",
      padding: "8px",
      margin: "8px 0",
      backgroundColor: "#fff",
    },
    quesContain: {
      margin: "3rem 0px",
    },
    textbox: {
      padding: "8px",
      marginTop: "8px",
      border: "1px solid #143D66",
      borderRadius: "8px",
    },
    textbox1: {
      padding: "8px",
      marginTop: "8px",
      border: "1px solid #01E3A6",
      backgroundColor: "#EAFFF9",
      borderRadius: "8px",
    },
  })
);
