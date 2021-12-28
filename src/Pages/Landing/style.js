import { makeStyles, createStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      position: "relative",
    },

    sectionOne: {
      background:
        "transparent linear-gradient(360deg, #143D66 0%, #006E77 35%, #27F5BA 100%) 0% 0% no-repeat padding-box",
      paddingBottom: "18rem",
    },
    headingText: {
      fontFamily: "Montserrat Alternates",
      fontSize: "32px",
      color: "#143D66",
      fontWeight: "bold",
      letterSpacing: "0px",
      paddingRight: "1rem",
    },
    divider: {
      background: "#143D66 0% 0% no-repeat padding-box",
      height: "7px",
      borderRadius: "4px",
      marginTop: "25px",
      marginBottom: "25px",
    },
    bannerText: {
      paddingRight: "3rem",
      fontSize: "22px",
      fontFamily: "Montserrat Alternates",
      color: theme.palette.text.main,
    },
    greenFilledButton: {
      background: "#143D66 0% 0% no-repeat padding-box !important",
      height: "52px",
      width: "243px",
      fontFamily: "Open Sans Bold",
      color: "white !important",
      fontSize: "17px !important",
      marginRight: "15px !important",
    },
    greenOutlinedButton: {
      height: "52px",
      width: "283px",
      fontFamily: "Open Sans Bold",
      color: "white !important",
      fontSize: "17px !important",
      fontWeight: "bold !important",
      border: "2px solid white !important",
    },

    Table: {
      width: "100vw",
      height: "950px",
      backgroundColor: "#E7EEF2 !important",
    },
    mobilePadding: {
      paddingTop: "0px !important",
    },

    // section les dominas expertise
    section_les_dominas_expertise: {
      padding: "6rem 0",
      margin: "0 0 0",
      background: "#143D66 0% 0% no-repeat padding-box",
      border: "1px solid #143D66",
      "@media (max-width: 595px)": {
        border: "0",
        background:
          "transparent linear-gradient(94deg, #18AD91 0%, #139794 20%, #0D7E97 43%, #0C5E83 74%, #13436C 100%) 0% 0% no-repeat padding-box",
      },
    },
    les_dominas_expertise_heading: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      "& h2": {
        fontFamily: "normal normal 35px/27px Montserrat Alternates",
        fontWeight: "bold",
        color: "#FFFFFF",
      },
    },
    divider_les_dominas_expertise: {
      background: "#fff 0% 0% no-repeat padding-box",
      height: "7px",
      borderRadius: "4px",
      marginTop: "25px",
      marginBottom: "25px",
    },
    les_dominas_featuresBox: {
      fontSize: "8rem",
      padding: "0.5rem 2.5rem 2.5rem",
      textAlign: "center",
      borderRadius: "3px",
      transition: "transition .3s",
    },
    les_dominas_heading_featuresBox: {
      font: "normal normal bold 25px/34px sans-serif",
      textAlign: "left",
      color: "#FFFFFF",
    },
    les_dominas_iconImg_featuresBox: {
      fontSize: "5rem",
      width: "auto",
    },
    les_dominas_text_featuresBox: {
      textAlign: "justify",
      font: "normal normal normal 18px/24px sans-serif",
      color: "#FFFFFF",
    },

    // le modele section
    section_le_modele: {
      padding: "4rem 0",
      margin: "0 0 0",
      background: "#E7EEF2 0% 0% no-repeat padding-box",
    },
    le_modele_heading: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      "& h2": {
        font: "normal normal 35px/27px Montserrat Alternates",
        fontWeight: "bold",
        color: "#134F76",
      },
    },
    divider_les_modele: {
      background:
        "transparent linear-gradient(90deg, #00FFBA 0%, #143D66 100%) 0% 0% no-repeat padding-box",
      height: "7px",
      borderRadius: "4px",
      marginBottom: "25px",
    },
    le_modele_Grid_top: {
      background: "#fff 0% 0% no-repeat padding-box",
      padding: "2.5rem 5rem",
      "@media (max-width: 595px)": {
        padding: "5rem 2rem",
      },
    },
    le_modele_img_top: {
      background: "5px !important",
    },
    innovateDiv2: {
      color: theme.palette.text.main,
      justifyContent: "center",
    },
    le_modele_Grid_title2: {
      color: theme.palette.text.main,
      fontWeight: "bold",
      fontSize: "30px",
    },
  })
);
