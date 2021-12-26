import { makeStyles, createStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: "100vh",
      width: "100vw",
    },

    group: {
      paddingLeft: "5px !important",
    },

    sectionOne: {
      background:
        "transparent linear-gradient(360deg, #143D66 0%, #006E77 35%, #27F5BA 100%) 0% 0% no-repeat padding-box",
    },
    headingText: {
      fontSize: "35px",
      color: "#143D66",
      fontWeight: "bold",
      letterSpacing: "0px",
    },
    divider: {
      background:
        "transparent linear-gradient(90deg, #00FFBA 0%, #143D66 100%) 0% 0% no-repeat padding-box",
      height: "7px",
      borderRadius: "4px",
      marginTop: "25px",
      marginBottom: "25px",
    },
    bannerText: {
      fontSize: "25px",
      color: "white",
    },
    sectionTwoText: {
      fontSize: "25px",
      color: "#143D66",
      fontWeight: "bold",
    },
    greenFilledButton: {
      background: "#00FFBA 0% 0% no-repeat padding-box !important",
      height: "52px",
      width: "263px",
      color: "#143D66 !important",
      fontSize: "17px !important",
      fontWeight: "bold !important",
    },
    greenOutlinedButton: {
      // background: '#00FFBA 0% 0% no-repeat padding-box !important',
      height: "52px",
      width: "263px",
      color: "#00FFBA !important",
      fontSize: "17px !important",
      fontWeight: "bold !important",
      marginTop: "10px !important",
      border: "2px solid #00FFBA !important",
    },
    countBg: {
      background: "#00FFBA 0% 0% no-repeat padding-box",
      height: "27px",
      width: "70px",
      marginTop: "10px",
      position: "relative",
      bottom: "30px",
      right: "4px",
      zIndex: -10,
    },
    countText: {
      fontSize: "35px",
      color: "#143D66",
    },
    countBody: {
      display: "flex",
    },
    countDesc: {
      color: "#143D66",
      fontSize: "20px",
      marginTop: "10px",
    },
    innovateDiv: {
      border: `8px solid ${theme.palette.primary.main}`,
    },
    innovateTitle: {
      fontSize: "30px",
      fontWeight: "bold",
      marginLeft: "5%",
      color: theme.palette.primary.main,
    },
    desciption: {
      marginLeft: "5%",
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      paddingLeft: "2%",
      paddingRight: "4%",
    },
    innovateDiv2Mobile: {
      "@media(max-width:595px)": {
        flexDirection: "column-reverse !important",
      },
    },
    innovateDiv2: {
      color: theme.palette.text.main,
      justifyContent: "center",
    },
    title2: {
      fontWeight: "bold",
      fontSize: "30px",
    },
    stepper: {
      "& .MuiStepConnector-line": {
        borderColor: "#143D66 !important",
      },
    },
    parent: {},
    detail: {
      color: theme.palette.text.main,
      textAlign: "justify",
      maxWidth: "70% !important",
      margin: "auto",
    },
    heading: {
      fontSize: "20px",
      color: theme.palette.text.main,
      textAlign: "center",
      marginBottom: "0px important",
    },
    step1: {
      display: "flex",
      justifyContent: "center",
    },
    step2: {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
    },
    step3: {
      display: "flex",
      justifyContent: "center",
    },
    mobilestep1: {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
    },
    mobilestep2: {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
    },
    mobilestep3: {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
    },
    step3Img: {
      paddingLeft: "30px !important",
    },
    heading_stepper: {
      fontSize: "20px",
      textAlign: "center",
      marginBottom: "0px important",
      color: theme.palette.text.main,
    },
    mobileStepperdetail: {
      color: theme.palette.text.main,
      textAlign: "center",
      maxWidth: "70% !important",
      margin: "auto",
      fontWeight: "400",
    },
    stepTitle: {
      marginTop: "0px",
      marginBottom: "5px",
      paddingLeft: "10px",
      color: "#143D66",
      fontSize: "1rem",
      fontFamily: "Open Sans",
      fontWeight: "500",
    },
  })
);
