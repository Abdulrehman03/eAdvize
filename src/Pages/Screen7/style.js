import { makeStyles, createStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) =>
  createStyles({
    root: {
      position: "relative",
      backgroundColor: "#E4F0F8",
      minHeight: '80vh'
    },
    container: {
      backgroundColor: "#fff",
      margin: "auto",
      padding: "16px",
    },
    innerContainer: {
      width: "80%",
      margin: "auto",
    },
    title: {
      color: "black",
      width: "100%",
      margin: "auto",
      font: 'normal bold 25px/34px Open Sans',
    },
    inputbox: {
      margin: "10px 0px",
    },
    inputLabel: {
      color: "black",
      fontSize: "16px",
      display: "block",
      lineHeight: "15px",
      padding: "10px 0",
      font:"normal 600 25px/34px Open Sans",
    },
    input1: {
      backgroundColor: "#EAFFF9",
      border: "1px solid #01E3A6",
      borderRadius: "6px",
      width: "100%",
      lineHeight: "2rem",
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
    leftbox: {
      width: "100%",
      backgroundColor: "#143D66",
      fontWeight: "600",
      color: "#fff",
      borderTopLeftRadius: "6px",
      borderBottomLeftRadius: "6px",
      font:"normal 600 20px/27px Open Sans",
letterSpacing: "0px",
    },
    typograp:{
      padding:'0 0 0 15px',
      height:"35px",
    },
    inputs1: {
      width: "100%",
      lineHeight: "1.9rem",
      padding: "0 6px",
      border: "2px solid #01E3A6",
      borderTopRightRadius: "6px",
      borderBottomRightRadius: "6px",
      backgroundColor: "#EAFFF9 ",
    },
    inputs: {
      width: "100%",
      lineHeight: "1.9rem",
      padding: "0 6px",
      height:'33px',
      border: "1px solid black",
      borderTopRightRadius: "6px",
      borderBottomRightRadius: "6px",
    },
    tagContainer: {
      width: "100%",
      minHeight: "34px",
      border: "1px solid black",
      borderTopRightRadius: "6px",
      borderBottomRightRadius: "6px",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      padding: "2px 6px",
      justifyContent: "space-evenly",
    },
    tagContainerlast: {
      width: "100%",
      minHeight: "79px",
      border: "1px solid black",
      borderTopRightRadius: "6px",
      borderBottomRightRadius: "6px",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      padding: "2px 6px",
      justifyContent: "space-evenly",
    },
    tagbtn: {
      border: "1px solid black",
      borderRadius: "2px",
      margin: "4px 0px",
      padding: " 3px 6px",
      fontSize: "14px",
      color: "#143D66",
      backgroundColor:'#fff',
    },
    btn: {
      backgroundColor: "#01E3A6",
      color: "#143D66",
      padding: "8px 16px",
      border: "0px",
      marginTop: "8px"
    },
    divider: {
      background:
        "transparent linear-gradient(90deg, #00FFBA 0%, #143D66 100%) 0% 0% no-repeat padding-box",
      height: "7px",
      borderRadius: "4px",
    },
    formSecSetion: {
      marginTop: "2rem"
    },
    formtagbtncon: {
      display: "flex",
      alignItems: "center",
      justifyContent: " flex-start"
    },
    formtagbtn: {
      color: "#143D66",
      border: "2px solid #143D66",
      borderRadius: "2px",
      margin: "4px 0px",
      margin: "4px",
      fontSize: "14px",
    }
  })
);