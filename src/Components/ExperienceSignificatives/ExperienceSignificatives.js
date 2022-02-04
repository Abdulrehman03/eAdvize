import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  mainContent: {
    paddingTop: "20px",
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

  spaceOneWrapper: {
    padding: "23px 10px 40px 30px",
  },

  divider: {
    background: "#143D66",
    height: "7px",
    borderRadius: "4px",
    marginTop: "5px",
  },
  tag: {
    fontSize: "22px",
    fontFamily: "Open Sans",
    color: "#143D66",
    fontWeight: "600",
  },
  slideParaWrap: {
    fontSize: "18px",
    fontFamily: "Open Sans",
    color: "#143D66",
  },
  asideSpace: {
    dispaly: "flex !important",
    justifyContent: "space-between",
  },
  dividerBlue: {
    background: "#143D66",
    height: "7px",
    borderRadius: "4px",
    marginTop: "10px",
  },

  accountCircle: {
    fontSize: "50px",
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
    margin: "0",
    position: "relative",
    fontFamily: "Helvetica Neue",

    "&:after": {
      content: "sami",
      // position: "absolute",
      width: "20px",
      height: "20px",
      display: "inline-block",
      // left: "0",
      backgroundColor: "red",
    },
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

  boxWrapTwo: {
    backgroundColor: "#fff",
    boxShadow: "0px 6px 6px #0000001D",
    borderRadius: "5px",
    width: "100%",
    height: "100%",
    marginTop: "20px",
  },

  boxTwoHeading: {
    fontSize: "25px",
    lineHeight: "30px",
    color: "#143D66",
    fontWeight: "700",
    margin: "0",
    fontFamily: "Open Sans",
  },

  boxTwoSpan: {
    fontSize: "25px",
    lineHeight: "30px",
    color: "#FF0202",
    fontWeight: "700",
    margin: "0",
  },

  boxTwoContent: {
    fontSize: "18px",
    lineHeight: "23px",
    color: "#143D66",
    fontWeight: "600",
    margin: "0",
    paddingTop: "20px",
    fontFamily: "Helvetica Neue",
  },

  boxTwoColor: {
    fontSize: "19px",
    lineHeight: "23px",
    color: "#FF0202",
    fontWeight: "500",
    margin: "0",
    paddingTop: "5px",
    paddingBottom: "5px",
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
  },

  boxFourSpan: {
    fontSize: "22px",
    lineHeight: "30px",
    fontWeight: "600",
    color: "#143D66",
    margin: "0",
  },

  boxFourDip: {
    fontSize: "22px",
    lineHeight: "30px",
    fontWeight: "700",
    color: "#143D66",
    margin: "0",
  },

  boxFourPara: {
    fontSize: "22px",
    lineHeight: "30px",
    fontWeight: "400",
    color: "#143D66",
    margin: "0",
  },

  boxWrapFive: {
    backgroundColor: "#fff",
    boxShadow: "0px 6px 6px #0000001D",
    borderRadius: "5px",
    width: "100%",
    height: "100%",
    marginTop: "20px",
  },

  boxFiveHeading: {
    fontSize: "25px",
    lineHeight: "30px",
    color: "#143D66",
    fontWeight: "700",
    margin: "0",
  },

  // ======= Two Side ========

  slideWrapper: {
    backgroundColor: "#fff",
    boxShadow: "0px 6px 6px #0000001D",
    borderRadius: "5px",
    width: "100%",
    height: "100%",
    marginTop: "20px",
  },

  slideHeading: {
    display: "flex",
    justifyContent: "space-between",
  },

  slideEnter: {
    fontSize: "22px",
    lineHeight: "30px",
    color: "#143D66",
    fontWeight: "600",
    margin: "0",
  },

  featuredHeading: {
    fontSize: "22px",
    lineHeight: "30px",
    color: "#143D66",
    fontWeight: "600",
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
    // padding: "30px 30px 0 30px",
    width: "100%",
    height: "100%",
    marginTop: "20px",
  },

  slideTwoWrap: {
    backgroundColor: "#fff",
    boxShadow: "0px 6px 6px #0000001D",
    borderRadius: "5px",
    width: "100%",
    height: "100%",
    marginTop: "20px",
  },

  // Form Group
  asideForm: {
    backgroundColor: "#fff",
    boxShadow: "0px 6px 6px #0000001D",
    borderRadius: "5px",
    width: "100%",
    height: "100%",
    marginTop: "20px",
  },

  asideGroup: {
    padding: "15px 40px 40px 20px",
  },

  asideHeading: {
    fontSize: "25px !important",
    lineHeight: "34px !important",
    color: "#143D66 !important",
    fontWeight: "700 !important",
  },

  formGroup: {
    marginTop: "10px",
  },

  formHeading: {
    fontSize: "18px",
    lineHeight: "24px",
    color: "#143D66",
    fontWeight: "700",
    margin: "0",
  },

  formLabel: {
    margin: "0",
    fontSize: "18px",
    lineHeight: "24px",
    color: "#143D66",
    fontWeight: "600",
    paddingTop: "8px",
  },

  checkboxGroup: {
    paddingTop: "5px",
  },

  checkboxLabelText: {
    fontSize: "18px",
    lineHeight: "24px",
    color: "#143D66",
    fontWeight: "600",
    margin: "10px 0 0 0",
  },

  inputFieldGroup: {
    paddingTop: "8px",
  },

  flexTextField: {
    display: "flex",
    gap: "12px",
  },

  textAreaWrapper: {
    paddingTop: "10px",
  },

  textAreaPara: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#143D66",
    lineHeight: "24px",
    margin: "0",
    paddingTop: "10px",
    paddingBottom: "8px",
  },

  textAreaField: {
    width: "100%",
    height: "77px !important",
    border: "1px solid #143D66",
    borderRadius: "5px",
    outline: "none",
  },

  companyText: {
    fontSize: "18px",
    lineHeight: "24px",
    color: "#143D66",
    fontWeight: "600",
    margin: "0",
  },

  btnOne: {
    fontSize: "18px !important",
    lineHeight: "24px !important",
    color: "#143D66 !important",
    fontWeight: "600 !important",
    borderRadius: "5px !important",
    padding: "8px 15px !important",
    border: "1px solid #143D66 !important",
  },

  btnTwo: {
    fontSize: "18px !important",
    lineHeight: "24px !important",
    fontWeight: "600 !important",
    borderRadius: "5px !important",
    padding: "8px 23px !important",
    border: "1px solid #143D66 !important",
    backgroundColor: "#143D66 !important",
    color: "#ffffff !important",
  },

  currentDate: {
    fontSize: "22px",
    lineHeight: "30px",
    color: "#143D66",
    fontWeight: "400",
    margin: "0",
  },

  circle: {
    display: "inline-block",
    borderRadius: "50%",
    width: "10px",
    height: "10px",
    backgroundColor: "red",
  },

  loremParagraph: {
    fontSize: "18px",
    margin: "0",
    fontFamily: "Open Sans",
    color: "#143D66",
  },
  accountWrapper: {
    verticalAlign: "top",
  },

  slideFiveWrap: {
    backgroundColor: "#fff",
    boxShadow: "0px 6px 6px #0000001D",
    borderRadius: "5px",
    width: "100%",
    height: "100%",
    marginTop: "20px",
  },
  ecoleHeading: {
    fontSize: "22px",
    color: "#143D66",
    fontWeight: "600",
    margin: "0",
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
