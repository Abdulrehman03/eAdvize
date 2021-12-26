import { createStyles, makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: "100vh",
      width: "100vw",
    },
    section_Vous_Freelance: {
      padding: "10rem 0",
      margin: "10rem 0 0",
      background: "#143D66 0% 0% no-repeat padding-box",
      border: "1px solid #143D66",
      transform: "skewY(-7deg)",
      "& > *": {
        transform: "skewY(7deg)",
      },
    },
    headingText_Vous_Freelance: {
      fontSize: "35px",
      color: "#fff",
      fontWeight: "bold",
      letterSpacing: "0px",
      marginBlockStart: 0,
      marginBlockEnd: 0,
    },
    divider_Vous_Freelance: {
      background: "#fff",
      height: "7px",
      borderRadius: "4px",
      marginTop: "25px",
      marginBottom: "25px",
    },
    divider: {
      background:
        "transparent linear-gradient(90deg, #00FFBA 0%, #143D66 100%) 0% 0% no-repeat padding-box",
      height: "7px",
      borderRadius: "4px",
      marginTop: "25px",
      marginBottom: "25px",
    },
    section_Vous_FreelanceTwoText: {
      fontSize: "25px",
      color: "#fff",
      fontWeight: "bold",
      marginBlockStart: 0,
      marginBlockEnd: 0,
    },
    section_Vous_FreelanceThreeText: {
      font: "normal normal 16px/20px Open Sans",
      color: "#00FFBA",
      fontWeight: "500",
    },
    Vous_freelance_img_container: {
      display: "flex",
      justifyContent: "center",
    },
    section_Freelance_Interprice_container: {
      display: "flex !important",
      justifyContent: "center",
    },
    Vous_freelance_img: {
      width: "70%",
      height: "auto",
    },
    Vous_freelance_Grid_img: {
      width: "80%",
    },

    countBg: {
      background: "#00FFBA 0% 0% no-repeat padding-box",
      height: "27px",
      width: "70px",
      marginTop: "10px",
      position: "relative",
      bottom: "50px",
      right: "4px",
      zIndex: -10,
    },
    countText: {
      fontSize: "35px",
      color: "#fff",
    },
    countBody: {
      display: "flex",
      alignItems: "center",
      height: "110px",
    },
    countDesc: {
      color: "#fff",
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
    Vous_freelance_innovateDiv2: {
      color: "#fff",
      justifyContent: "center",
      padding: "1rem 2rem",
    },
    Vous_freelance_titleGrid: {
      fontWeight: "bold",
      fontSize: "30px",
    },
    stepper: {
      "& .MuiStepConnector-line": {
        borderColor: "#fff !important",
      },
    },
    detail: {
      color: "#fff",
      textAlign: "center",
      maxWidth: "70% !important",
      margin: "auto",
    },
    freelance: {
      paddingLeft: "30px !important",
    },
    heading_stepper: {
      fontSize: "20px",
      color: "#fff",
      textAlign: "center",
      marginBottom: "0px important",
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

    //   last portion buttons

    section_Freelance_Interprice: {
      padding: "15rem 0 5rem",
      margin: "-6rem 0 0",
      background: "#01E3A6 0% 0% no-repeat padding-box",
      border: "1px solid #01E3A6",
    },
    section_Freelance_Interprice_Align: {
      textAlign: "center",
      "@media(max-width: 595px)": {
        width: "100%",
      },
    },
    section_Freelance_Interprice_heading: {
      fontSize: "35px",
      color: "#143D66",
      fontWeight: "bold",
      marginBlockStart: 0,
      marginBlockEnd: 0,
      "@media(max-width: 595px)": {
        fontSize: "24px",
      },
    },
    section_Freelance_Interprice_text: {
      font: "normal normal 25px/34px Open Sans",
      color: "#143D66",
      fontWeight: "500",
      padding: "0 7rem",
      marginBlockStart: "0.5em",
      "@media(max-width: 595px)": {
        padding: "0 0",
      },
    },

    section_Freelance_Interprice_list: {
      listStyle: "none",
      display: "flex",
      justifyContent: "space-evenly",
      paddingInlineStart: 0,
      margin: 0,
      alignItems: "center",
      "@media(max-width: 595px)": {
        flexDirection: "column",
      },
    },

    section_Freelance_Interprice_link: {
      display: "inline-block",
      cursor: "pointer",
      font: "normal normal 14px/12px Open Sans",
      fontWeight: "bold !important",
      color: "#143D66",
      textDecoration: "none",
      textTransform: "uppercase",
      backgroundSize: "220%",
      transition: "all .4s",

      "&:visited": {
        fontSize: "14px",
        fontWeight: "300",
        padding: ".6rem 2rem",
        color: "#143D66",
        textDecoration: "none",
        textTransform: "upper-case",
        backgroundImage:
          "linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%)",
        backgroundSize: "220%",
        transition: "all .4s",
      },
    },
    section_Freelance_Interprice_linkInscription: {
      background: "#143D66 0% 0% no-repeat padding-box",
      font: "normal normal 600 14px/16px Open Sans",
      padding: "1rem 4rem",
      color: "#fff !important",
      marginRight: "10px",
      "@media(max-width: 595px)": {
        marginBottom: "15px",
      },
    },
    section_Freelance_Interprice_linkConnexion: {
      border: "2px solid #143D66",
      font: "normal normal 600 14px/16px Open Sans",
      padding: ".8rem 3rem",
      marginRight: "10px",
      "@media(max-width: 595px)": {
        marginBottom: "15px",
      },
    },
    section_Freelance_Interprice_service: {
      border: "2px solid #143D66",
      font: "normal normal 600 14px/16px Open Sans",
      padding: ".8rem 2.8rem",
      marginRight: "10px",
      "@media(max-width: 595px)": {
        marginBottom: "15px",
      },
    },
    section_Freelance_Interprice_ImgMob2: {
      "@media(max-width: 595px)": {
        display: "none",
      },
    },
    section_Freelance_Interprice_Image1: {
      "@media(max-width: 595px)": {
        display: "block",
      },
    },
  })
);
