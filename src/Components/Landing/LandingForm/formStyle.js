import { createStyles, makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) =>
  createStyles({
    "@global": {
      "*::-webkit-scrollbar": {
        width: "5px",
      },
      "*::-webkit-scrollbar-track": {
        // "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "#d9d9d9",
        borderRadius: "10px",
        outline: "0px solid slategrey",
      },
    },
    leftDiv: {
      backgroundColor: "#FFFFFF",
      height: "1160px",
      overflowX: "hidden",
      overflowY: "auto",
      scrollBehaviorehavior: "smooth",
      scrollbarWidth: "2px",
    },

    rightDiv: {
      backgroundColor: "#FFFFFF",
      color: theme.palette.text.main,
    },
    flexDiv: {
      display: "flex",
      width: "100%",
      backgroundColor: "#075c71",
    },
    flexDiv1: {
      width: "50%",
      textAlign: "center",
      fontSize: "23px",
      fontWeight: "bolder",
      fontFamily: "Open Sans",
      color: theme.palette.text.main,

      paddingBottom: "10px",
      backgroundColor: "white",
      paddingTop: "10px",

      borderTopRightRadius: "10px",
    },
    flexDiv2: {
      width: "50%",
      textAlign: "center",
      fontSize: "23px",
      fontWeight: "bolder",
      fontFamily: "Open Sans",
      color: "white",
      backgroundColor: theme.palette.text.main,
      paddingBottom: "10px",
      paddingTop: "10px",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
  })
);
