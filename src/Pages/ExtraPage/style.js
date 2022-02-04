import { makeStyles, createStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) =>
  createStyles({
    root: {
      position: "relative",
      backgroundColor: "#E4F0F8",
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
    },
    titleimg: {
      width: "25px",
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
      padding: "8px",
      fontWeight: "600",
      color: "#fff",
      borderTopLeftRadius: "6px",
      borderBottomLeftRadius: "6px",
    },
    inputs: {
      width: "100%",
      lineHeight: "1.9rem",
      padding: "0 6px",
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
      justifyContent: "space-evenly",
    },
    tagbtn: {
      border: "1px solid black",
      borderRadius: "6px",
      margin: "4px 0px",
      padding: " 3px 6px",
      fontSize: "14px",
    },
    btn: {
      backgroundColor: "#01E3A6",
      color: "#000",
      padding: "8px 16px",
      border: "0px",
    },
  })
);
