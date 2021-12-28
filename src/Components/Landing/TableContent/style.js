import { makeStyles, createStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    TableContent: {
      // position: "absolute",
      // top: "10%",
      // left: "14.5%",
      marginTop: "-270px",
      marginBottom: "100px",
    },
    section2: {
      fontSize: "33px",
      fontFamily: "Montserrat Alternates",
      fontWeight: "bolder",
      color: "white",
      margin: "0px",
    },
    sectionTwoText: {
      fontSize: "33px",
      color: "white",
      fontFamily: "Montserrat Alternates",
      fontWeight: "bolder",
      margin: "10px 0px",
    },
    subtile: {
      color: theme.palette.text.main,
      backgroundColor: theme.palette.primary.main,
      fontSize: "25px !important",
      fontFamily: "Montserrat Alternates",
      padding: "0.3rem 0.5rem",
    },
    heading2: {
      color: theme.palette.text.main,
      fontSize: "35px",
      justifyContent: "space-between",
      marginTop: "2rem",
      marginLeft: "10px",
      marginBottom: "0px",
      fontWeight: "bolder",
      "@media(max-width:595px)": {
        fontSize: "30px",
      },
    },
    divider2: {
      background: "#143D66 0% 0% no-repeat padding-box",
      height: "7px",
      borderRadius: "4px",
      marginTop: "10px",
      marginLeft: "1rem",

      marginBottom: "25px",
    },
    greenOutlinedButton2: {
      width: "90%",
      padding: "5px 30px",
      marginTop: "2.5rem !important",
      color: `${theme.palette.text.main} !important`,
      fontSize: "16px !important",
      backgroundColor: "white !important",
    },

    //  coment da march mobile
    Comment_marche_section: {
      "@media(min-width:595px)": {
        display: "none",
      },
      "@media(max-width:595px)": {
        background: "#FFFFFF",
        margin: "1rem 0",
      },
    },
    Comment_marche_heading_mobile_top: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      "@media(min-width:595px)": {
        display: "none",
      },
      "@media(max-width:595px)": {
        display: "flex",
      },
    },
    step1: {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
    },
    step2: {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
    },
    step3: {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
    },
    heading_stepper: {
      fontSize: "20px",
      color: "#04C38F",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "0px important",
    },
    heading_stepper2: {
      fontSize: "20px",
      color: "#143D66",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "0px important",
    },
    detail: {
      color: "#143D66",
      textAlign: "center",
      maxWidth: "70% !important",
      margin: "auto",
    },
    greenFilledButton: {
      background: "#00FFBA  0% 0% no-repeat padding-box !important",
      // height: "42px",
      width: "100%",
      margin: "3rem 0 1rem !important",
      fontFamily: "Open Sans Bold",
      color: "white !important",
      fontSize: "17px !important",
      // marginRight: "15px !important",
    },
  })
);
