import { createStyles, makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) =>
  createStyles({
    list: {
      color: theme.palette.text.main,
    },
    hrTag: {
      backgroundColor: theme.palette.text.main,
    },
    nestedHr: {
      backgroundColor: theme.palette.text.main,
      margin: "0px 1rem",
    },
    listItem: {
      display: "inline-block",

      fontSize: "16px",
      fontFamily: "Open Sans",
      fontWeight: "600",
    },
    listTitle: {
      margin: "0px",
      fontFamily: "Open Sans",
      fontSize: "18px",
    },
    listItem2: {
      display: "inline-block",
      paddingRight: "36px",
      fontSize: "16px",
      fontFamily: "Open Sans",
      fontWeight: "600",
    },
  })
);
