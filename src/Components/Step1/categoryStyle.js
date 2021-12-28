import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "90%",
    margin: "auto",
    marginTop: "3rem",
    marginBottom: "3rem",
  },
  // gridItem1: {
  //   border: `2px solid ${theme.palette.primary.main}`,
  //   padding: "5px !important",
  //   boxSizing: "border-box",
  // // },
  // gridItem2: {
  //   // border: `2px solid ${theme.palette.primary.main}`,
  //   backgroundColor: "#B9FFEC",
  //   padding: "5px !important",
  //   maxWidth: "32% !important",
  //   marginLeft: "0.6% !important",
  //   marginRight: "0.7% !important",
  // },
  // gridItem3: {
  //   backgroundColor: "#B9FFEC",
  //   padding: "5px !important",
  // },
  // gridItemfill: {
  //   padding: "5px !important",
  //   backgroundColor: theme.palette.primary.main,
  // },
  // gridItemfill2: {
  //   // backgroundColor: theme.palette.primary.main,
  //   border: `2px solid ${theme.palette.primary.main}`,
  //   boxSizing: "border-box",
  //   padding: "5px !important",
  //   maxWidth: "32% !important",
  //   marginLeft: "0.6% !important",
  //   marginRight: "0.7% !important",
  // },
  // gridItem2: {
  //   backgroundColor: theme.palette.primary.main,
  //   height: "3px !important",
  // },
  // gridItem3: {
  //   backgroundColor: theme.palette.primary.main,
  //   height: "20px",
  // },
  category: {
    color: "#143D66",
    fontWeight: "900",
    fontSize: "25px",
    fontFamily: "Open Sans !important",
    marginBottom: "8px !important",
  },
  divider: {
    background:
      "transparent linear-gradient(90deg, #00FFBA 0%, #143D66 100%) 0% 0% no-repeat padding-box",
    height: "7px",
    borderRadius: "4px",
    marginBottom: "25px",
  },
  description: {
    color: "#143D66",
    fontWeight: "500",
    fontSize: "18px",
    fontFamily: "Open Sans !important",
  },
  innerGrid: {
    border: "2px solid #143D66",
    borderRadius: "5px 5px 5px 5px",
    height: "150px",
    textAlign: "center",
    paddingTop: "1rem",
    marginRight: "10px !important",
  },
  bgColor: {
    backgroundColor: "#143D66",
  },
  jobTitle2: {
    color: "white",
    fontSize: "20px",
  },
  jobTitle: {
    color: "#143D66",
    fontSize: "20px",
  },
  submitBtn: {
    marginBottom: "4rem !important",
  },
  btn: {
    color: "#143D66 !important",
    backgroundColor: "#EAEAEA !important",
    marginBottom: "4rem !important",
    marginLeft: "2rem !important",
    border: "2px solid #143D66 !important",
  },
  col_1: {
    border: "1px solid #0000001D",
    boxShadow: "0px 6px 6px #0000001D",
    borderRadius: "5px 5px 5px 5px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
  },
  col_2: {
    borderRadius: "5px 5px 5px 5px",
    backgroundColor: "#D3D3D3",
    display: "flex",
    justifyContent: "center",

    "& p": {
      color: "#143D66",
      fontFamily: "Open Sans !important",
      fontSize: "18px",
    },
  },
  sideText: {
    marginTop: "42%",
    width: "90%",
  },
  sideTextTerm1: {
    color: "#FFFFFF !important",
    fontSize: "18px !important",
    fontFamily: "Open Sans !important",
  },
  sideDiv: {
    borderRadius: "5px 5px 5px 5px",
    display: "flex",
    justifyContent: "center",

    "& p": {
      color: "#143D66",
      fontFamily: "Open Sans !important",
      fontSize: "18px",
    },
    backgroundColor: "#143D66 !important",
  },
  sideTextTerm2: {
    color: "#FFFFFF !important",
    fontSize: "14px !important",
    fontFamily: "Open Sans !important",
  },
  hide: {
    display: "none",
  },
  show: {
    display: "block",
  },
  checkBox: {
    borderColor: "white !important",
    "& svg": {
      fill: "white !important",
    },
  },
}));
