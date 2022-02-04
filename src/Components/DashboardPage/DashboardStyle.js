import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  mainContent: {
    paddingTop: "0",
    "& .CircularProgressbar-text" : {
      fontSize: "20px !important", color: "#143D66 !important", fontWeight: "bold !important"
    },
    "& .CircularProgressbar .CircularProgressbar-path" : {
      stroke: "#27f5ba !important"
    },
    "& .CircularProgressbar .CircularProgressbar-trail" : {
      stroke: "red !important"

    }
  },

  topBarData: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 6px 6px #0000001D",
    borderRadius: "5px",
    borderLeft: "5px solid #FF0202",
    height: "66px",
    display: "flex",
    alignItems: "center",
    margin: "0 0 1rem",

    "& h4": {
      font: "normal normal 600 16px/27px Open Sans",
      color: "#143D66",
      display: "flex",
      alignItems: "center",
    },
  },

  AccountWrapperText: {
    margin: "0",
    textAlign: "left",
    font: "normal normal 600 16px/22px Open Sans",
    color: "#143D66",
  },

  boxWrapOne: {
    boxShadow: "0px 6px 6px #0000001D",
    backgroundColor: "#FFF",
    borderRadius: "5px",
    width: "100%",
    height: "100%",
    marginTop: "20px",
  },

  spaceWrapper: {
    padding: "30px 10px 30px 30px",
  },

  divider: {
    background:
      "transparent linear-gradient(90deg, #00FFBA 0%, #143D66 100%) 0% 0% no-repeat padding-box",
    height: "7px",
    borderRadius: "4px",
    marginTop: "5px",
  },
  slideParaWrap: {
    fontSize: "18px",
    fontFamily: "Open Sans",
    color: "#143D66",
  },
  asideSpace: {
    display: "flex !important",
    justifyContent: "space-between",
  },
  dividerBlue: {
    background: "#143D66",
    height: "7px",
    borderRadius: "4px",
    marginTop: "10px",
  },

  accountCircle: {
    fontSize: "70px !important",
  },

  boxNameHeading: {
    fontSize: "25px",
    color: "#143D66",
    lineHeight: "34px",
    fontFamily: "Open Sans",
    fontWeight: "bold",
    margin: "0",
    paddingTop: "7px",
  },

  boxDataHeading: {
    fontSize: "22px",
    lineHeight: "30px",
    color: "#143D66",
    margin: "0",
    fontWeight: "700",
    fontFamily: "Open Sans",
  },

  boxOnePara: {
    color: "#FF0202",
    fontSize: "18px",
    lineHeight: "19px",
    fontWeight: "600",
    marginTop: "0",
    position: "relative",
    fontFamily: "Helvetica Neue",
  },

  contentWrapData: {
    paddingTop: "20px",
  },

  boxSpanPara: {
    fontSize: "16px",
    color: "#143D66",
    lineHeight: "19px",
    fontStyle: "italic",
    margin: "0",
    position: "relative",
    fontFamily: "Helvetica Neue",
  },

  boxHrefPara: {
    fontSize: "18px",
    color: "#143D66",
    textDecoration: "underline",
    fontStyle: "italic",
    margin: "0",
    fontWeight: "700",
    paddingLeft: "8px",
  },

  boxWrapThree: {
    backgroundColor: "#fff",
    boxShadow: "0px 6px 6px #0000001D",
    borderRadius: "5px",
    width: "100%",
    height: "100%",
    marginTop: "20px",
  },

  boxThreeHeading: {
    fontSize: "25px",
    lineHeight: "30px",
    color: "#143D66",
    fontWeight: "700",
    margin: "0",
  },

  boxThreeSpan: {
    color: "#143D66",
    fontSize: "20px",
    lineHeight: "27px",
    fontWeight: "700",
    margin: "0",
    marginTop: "10px",
  },

  boxThreePara: {
    fontSize: "19px",
    lineHeight: "26px",
    color: "#143D66",
    fontWeight: "400",
    margin: "0",
  },

  boxWrapFour: {
    backgroundColor: "#fff",
    boxShadow: "0px 6px 6px #0000001D",
    borderRadius: "5px",
    width: "100%",
    height: "100%",
    marginTop: "20px",
  },

  boxFourHeading: {
    fontSize: "25px",
    lineHeight: "30px",
    color: "#143D66",
    fontWeight: "700",
    margin: "0",
  },

  boxFourGroup: {
    paddingBottom: "20px",
    paddingTop: "17px",
    display: "flex !important",
    flexDirection: "row",
  },

  boxFourSpan: {
    fontSize: "22px",
    lineHeight: "30px",
    fontWeight: "600",
    color: "#143D66",
    margin: "0",
    marginRight: "18px",
  },

  // ======= Right Side ========

  //   Mes Mission right long tab css
  headingIcon: {
    font: "normal normal bold 18px/27px Open Sans",
    color: "#143D66",
    marginBottom:'0',
  },

  headingSpanText: {
    font: "normal normal bold 16px/24px Open Sans",
    color: "#04C38F",
  },

  letudeTextRow: {
    display: "flex !important",
    justifyContent: "space-between",
    borderBottom: "2px solid #01E3A6",
    alignItems:"end",
    padding:'0 0 5px',

    "& p": {
      font: "normal normal normal 18px/22px Helvetica Neue",
      color: "#143D66",
      margin: "0",
    },
  },
  letudeTextRowBlue: {
    display: "flex !important",
    justifyContent: "space-between",
    borderBottom: "2px solid #143D66",
    alignItems:"end",
    padding:'0 0 5px',

    "& p": {
      font: "normal normal normal 18px/22px Helvetica Neue",
      color: "#143D66",
      margin: "0",
    },
  },
  letudeButtonGreen: {
    background: "#01E3A6 0% 0% no-repeat padding-box",
  },
  letudeButtonBlue: {
    background: "#143D66 0% 0% no-repeat padding-box !important",
    color:'#fff !important',
  },
  //

  slideHeading: {
    display: "flex",
    justifyContent: "space-between",
  },

  slideHeadingMonEnterprise: {
    display: "flex",
    flexDirection: "row",
  },

  slideEnter: {
    fontSize: "16px",
    lineHeight: "30px",
    fontFamily: "Open Sans",
    color: "#143D66",
    fontWeight: "600",
    margin: "0",
  },

  ModifierBtn: {
    fontSize: "16px",
    lineHeight: "30px",
    fontFamily: "Open Sans",
    color: "#143D66 !important",
    border: "2px solid #143D66 !important",
    fontWeight: "600",
  },

  featuredHeading: {
    fontSize: "16px",
    fontFamily: "Open Sans",
    lineHeight: "30px",
    color: "#143D66",
    fontWeight: "700",
    margin: "0",
  },

  slideDate: {
    fontSize: "18px",
    margin: "0",
    color: "#143D66",
    fontWeight: "600",
    lineHeight: "24px",
  },

  slideParagraph: {
    fontSize: "18px",
    lineHeight: "24px",
    margin: "0",
    color: "#143D66",
    fontWeight: "400",
  },

  headingWrapper: {
    fontSize: "25px",
    fontFamily: "Open Sans",
    margin: "0",
    color: "#143D66",
    fontWeight: "700",
  },

  slideThreeWrap: {
    backgroundColor: "#fff",
    boxShadow: "0px 6px 6px #0000001D",
    borderRadius: "5px",
    position: "relative",
    width: "100%",
    height: "100%",
    marginTop: "20px",
  },

  slideThreeWrapBottomLine: {
    width: "100%",
    height: "6px",
    background:
      "transparent linear-gradient(90deg, #04C38F 0%, #143D66 100%) 0% 0% no-repeat padding-box",
    bottom: 0,
    position: "absolute",
  },

  slideTwoWrap: {
    backgroundColor: "#fff",
    boxShadow: "0px 6px 6px #0000001D",
    borderRadius: "5px",
    width: "100%",
    height: "100%",
    marginTop: "20px",
  },

  ecoleHeading: {
    fontSize: "18px",
    lineHeight: "30px",
    color: "#143D66",
    fontWeight: "600",
    margin: "0",
  },

  ecoleHeadingText: {
    fontSize: "15px",
    lineHeight: "20px",
    color: "#143D66",
    fontWeight: "300",
    margin: "0",
  },

  currentDate: {
    fontSize: "22px",
    lineHeight: "30px",
    color: "#143D66",
    fontWeight: "400",
    margin: "0",
  },

  slideFiveWrap: {
    backgroundColor: "#fff",
    boxShadow: "0px 6px 6px #0000001D",
    borderRadius: "5px",
    width: "100%",
    height: "100%",
    marginTop: "20px",
  },

  slideFourWrap: {
    backgroundColor: "#fff",
    boxShadow: "0px 6px 6px #0000001D",
    borderRadius: "5px",
    width: "100%",
    height: "100%",
    marginTop: "20px",
  },
}));
