import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  bgWrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "#143D66",
  },

  contentWrapper: {
    paddingTop: "100px",
  },

  cardBg: {
    width: "800px",
    // height: "5rem",
    backgroundColor: "#fff",
    borderRadius: "22px",
  },

  cardWrapper: {
    padding: "40px 70px 90px 70px",
  },

  btnWrapper: {
    paddingTop: "25px",
  },

  cardHeading: {
    fontSize: "30px",
    lineHeight: "47px",
    color: "#143D66",
    margin: "0",
    paddingTop: "14px",
  },

  cardTitle: {
    fontSize: "30px",
    lineHeight: "41px",
    color: "#04C38F",
    margin: "0",
    paddingTop: "5px",
  },

  btnOne: {
    "& .MuiButton-root": {
      color: "#143D66 !important",
      backgroundColor: "#01E3A6 !important",
      fontSize: "20px",
      lineHeight: "30px",
      padding: "8px 30px",
      textTransform: "inherit",
      fontWeight: "600",
    },
  },

  btnTwo: {
    "& .MuiButton-root": {
      padding: "8px 20px",
      border: "2px solid #04C38F",
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "30px",
      color: "#04C38F",
    },
  },
}));
