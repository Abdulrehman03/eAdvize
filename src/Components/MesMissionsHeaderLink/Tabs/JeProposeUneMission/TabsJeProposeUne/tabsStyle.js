import { createStyles, makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) =>
  createStyles({
    tabTitle: {
      color: theme.palette.text.main,
      fontSize: "15px",
      fontWeight: "bold",
      fontFamily: "Open Sans",
    },
    checkLabel: {
      color: "#143D66",
      fontSize: 22,
      lineHeight: "22px",
      fontWeight: 600,
      fontFamily: "Open Sans",
    },
    tabTitle2: {
      color: theme.palette.text.main,
      fontSize: "15px",
      fontWeight: "bold",
      fontFamily: "Open Sans",
      marginLeft: "20px",
    },
    ButtonOutlinedTabFortrait: {
      background: "#FFFFFF 0% 0% no-repeat padding-box",
      border: "1px solid #143D66 !important",
      borderRadius: "4px !important",
      color:'#143d66 !important'
    },
    subHead: {
      font: "normal normal 600 20px/34px Open Sans !important",
      color: "#143D66",
      textAlign: "left",
      margin: "1rem 0 !important",
    },
    flex: {
      marginTop: "1rem",
      display: "flex",
      justifyContent: "space-between",
    },
    flexDiv: {
      marginTop: "3rem",
      display: "flex",
      justifyContent: "space-between",
    },
    flexDiv1: {
      maxWidth: "80%",
    },
    flexDiv2: {
      maxWidth: "20%",
      maxHeight: "95%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
    classer: {
      marginRight: "10px",
      paddingTop: "5px",
      fontSize: "16px",
      color: theme.palette.text.main,
    },
    developer: {
      color: theme.palette.text.main,
      fontSize: "22px",
      fontFamily: "Open Sans",
      fontWeight: "bold",
      margin: "0px",
    },
    descriptionHeadingDeveloper: {
      color: theme.palette.text.main,
      fontSize: "22px",
      fontFamily: "Open Sans",
      fontWeight: "bold",
      margin: "0px",
    },
    type: {
      color: theme.palette.primary.main,
      fontSize: "18px",
      fontFamily: "Open Sans",
      fontWeight: "bold",
      margin: "0px",
    },
    timing: {
      color: theme.palette.text.main,
      fontSize: "14px",
      fontFamily: "Open Sans",
    },
    heart: {
      color: theme.palette.primary.main,
    },
    btn: {
      borderRadius: "50px",
      border: "1.5px solid",
      marginTop: "1rem",
      fontSize: "18px",
      fontWeight: "bold",
      fontFamily: "Open Sans",
    },
    moreTags: {
      "& .css-1g6drv1-MuiChip-root": {
        backgroundColor: "white !important",
        color: theme.palette.text.main,
        fontSize: "15px",
        fontFamily: "Open Sans",
      },
    },
    chip: {
      // marginTop: "10px",
    },
    tags: {
      "& .css-1g6drv1-MuiChip-root": {
        backgroundColor: "#DFF4EE",
        color: theme.palette.text.main,
        fontSize: "13px",
        fontWeight: "bold",
        fontFamily: "Open Sans",
      },
    },
    searchDiv: {
      "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
        padding: "6px",
        // maxWidth: "70%",
      },
    },
  })
);
