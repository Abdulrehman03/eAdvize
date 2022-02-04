import { makeStyles, createStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) =>
  createStyles({
    root: {
      position: "relative",
      backgroundColor: "#E4F0F8",
      "& .MuiStepper-root" : {
        width : "100% !important"
      },
      "& .MuiStepIcon-root.Mui-active" : {
        color: `${theme.palette.text.main} !important`
      },
      "& .Mui-completed":{
        color: "#143D66 !important"
      },
      "& .MuiStepIcon-text" : {
        fill : "white !important"
      }
      // minHeight: "90vh",
      //  display:"flex",
      //  alignItems:"center",
      //  justifyContent:'center'
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
      width: "80%",
      margin: "auto",
    },
    title: {
      marginTop: "12px",
      color: "#143D66",
      width: "100%",
      margin: "auto",
    },
    divider: {
      width: "45px",
      background:
        "transparent linear-gradient(90deg, #00FFBA 0%, #143D66 100%) 0% 0% no-repeat padding-box",
      height: "7px",
      borderRadius: "4px",
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
    },
    input1: {
      backgroundColor: "#EAFFF9",
      border: "1px solid #01E3A6",
      borderRadius: "6px",
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
      backgroundColor: "#01E3A6",
      fontFamily:"Open Sans",
      color: "#143D66",
      padding : "5px 15px",
      fontSize : "22px",
      border : "none" , 
      borderRadius : "5px"
     
    },
    tagbtn: {
      border: "1px solid black",
      borderRadius: "2px",
      margin: "4px 0px",
      padding: "6px",
      fontSize: "14px",
      color: "#143D66",
      backgroundColor: "#fff",
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
      margin: "16px 0px",
    },
    textbox: {
      padding: "8px",
      border: "2px solid #000",
      borderRadius: "8px",
    },
    textbox1: {
      padding: "8px",
      border: "2px solid #01E3A6",
      backgroundColor: "#EAFFF9",
      borderRadius: "8px",
    },
  })
);
