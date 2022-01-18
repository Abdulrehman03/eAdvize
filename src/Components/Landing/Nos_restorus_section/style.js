import { createStyles, makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: "100vh",
      width: "100vw",
    },
    cardDescription: {
      fontSize: "18px !important",
      color: `${theme.palette.text.main} !important`,
    },
    nos_retours_section_triangle: {
      position: "absolute",
      bottom: "-13%",
      left: "50%",
      transform: "translateX(-50%)",
      "@media (max-width: 995px)": {
        display: "none",
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
      "@media(max-width: 768px)": {
        flexDirection: "column",
        lineHeight: "5",
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
      width: "90%", 
    },
    section_Freelance_Interprice_Image1: {
      "@media(max-width: 595px)": {
        display: "block",
      },
    },
    // brands section

    section_les_brands: {
      padding: "2rem 0",
      margin: "0 0 0",
      position: "relative",
      background: "#143D66 0% 0% no-repeat",
    },

    section_Freelance_brands_Align: {
      textAlign: "center",
      "@media(max-width: 595px)": {
        width: "100%",
      },
    },
    section_Freelance_brands: {
      listStyle: "none",
      display: "flex",
      justifyContent: "space-evenly",
      paddingInlineStart: 0,
      margin: 0,
      alignItems: "center",
      "@media(max-width: 808px) and (min-width:600px)": {
        flexDirection: "column",
        lineHeight: "3",
      },
      "@media(max-width: 595px)": {
        flexWrap: "wrap",
        // lineHeight: "3",
      },
    },
    section_les_brands_link: {
      display: "inline-block",
      cursor: "pointer",
      fontWeight: "bold !important",
      color: "#143D66",
      textDecoration: "none",
      textTransform: "uppercase",
      backgroundSize: "220%",
      transition: "all .4s",
    },
    section_les_brands_linkInscription: {
      background: "#143D66 0% 0% no-repeat padding-box",
      font: "normal normal 600 22px/16px Open Sans",
      color: "#01E3A6 !important",
      marginRight: "10px",
      "@media(max-width: 595px)": {
        marginBottom: "15px",
      },
    },

    // ceo section

    section_Vous_Freelance: {
      padding: "5rem 0 9rem",
      margin: "0 0 0",
      position: "relative",
      background: "#143D66 0% 0% no-repeat",
    },
    Vous_ceo_sect_heading: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      "& h2": {
        font: "normal normal 40px/27px Montserrat Alternates",
        fontWeight: "bold",
        color: "#FFFFFF",
        "@media (max-width: 595px)": { 
          lineHeight: '1.6', 
        },
      },
    },
    divider_Vous_ceo_sect: {
      background: "#fff 0% 0% no-repeat padding-box",
      height: "7px",
      borderRadius: "4px",
      marginTop: "15px",
      marginBottom: "25px",
    }, 
    Vous_ceo_sect: {
      position: "relative",
      "@media (max-width: 795px)": {
        display: "flex",
        justifyContent: "center",
        flexDirection: "Column",
        alignItems: "center",
      },
      "@media (max-width: 595px)": {
        display: "flex",
        justifyContent: "center",
        flexDirection: "Column",
        alignItems: "center",  
      },
    },
    Vous_ceo_text: {
      position: "absolute",
      right: "-60px",
      top: "-40px",
      "& img": {
        "@media (max-width: 595px)": {
          width: "160px",
        },
      },
      "@media (max-width: 795px)": {
        right: "20px",
        top: "-40px",
      },
      "@media (max-width: 595px)": {
        right: "-40px",
        width: "100px",
        top: "-40px",
      },
    },
    Vous_ceo_Grid_img: {
      width: "70%",
      "@media (max-width: 795px)": {
        width: "65%",
      },
    },

    // input
    section_le_domins_input: {
      padding: "4rem 0",
      margin: "0 0 0",
      background: "#143D66 0% 0% no-repeat padding-box",
    },
    le_modele_Grid_top: {
      background: "#fff 0% 0% no-repeat padding-box",
      padding: "2.5rem 5rem",
      borderRadiusTopLeft: "6px",
      borderRadiusBottomLeft: "6px",
      "@media (max-width: 595px)": {
        padding: "5rem 2rem",
      },
    },
    le_input_Grid_2: {
      background: "#01E3A6 0% 0% no-repeat padding-box",
      padding: "5rem 3rem",
      borderRadius: "0px 6px 6px 0px",
      width: "100%",
      "@media (max-width: 1130px) and (min-width: 709px)": {
        padding: "5rem 5rem",
      },
      "@media (max-width: 595px)": {
        padding: "5rem 2rem",
      },
    },
    le_modele_Grid_title2: {
      color: theme.palette.text.main,
      fontWeight: "bold",
      fontSize: "30px",
    },
    InputTextEnvoyer: {
      display: "flex",
      marginLeft: 0,
      "&:input": {
        margin: "0",
        border: "1px solid #ccc",
        borderRadius: "3px",
        height: "40px",
        boxSizing: "border-box",
        outline: "none",
      },
    },
    inputBoxEAdvize: {
      color: "#000",
      background: "#ffffff 0% 0% no-repeat padding-box",
      fontSize: "14px !important",
      width: "330px",
      padding: "19px",
      marginTop: "1px",
      float: "left",
      margin: 0,
      border: "1px solid #ccc",
      borderRadius: "3px",
      height: "40px",
      boxSizing: "border-box",
      outline: "none",

      "@media (max-width: 1130px) and (min-width: 709px)": {
        width: "310px",
        padding: "19px !important",
      },
      "@media (max-width: 595px)": {
        width: "150px",
        padding: "19px !important",
      },
    },

    inputBoxEAdvize_subscribe: {
      width: "110px",
      height: "39.5px",
      lineHeight: "42px",
      marginTop: "1px",
      borderRadius: "3px 3px 3px 3px",
      color: "#fff",
      font: "normal normal 600 20px/38px Open Sans",
      textAlign: "center",
      background: "#143D66 0% 0% no-repeat padding-box",
      boxShadow: "0px 0px 6px #00000064",
      float: "left",
      "@media (max-width: 1130px) and (min-width: 709px)": {
        width: "80px",
        height: "40px",
        lineHeight: "40px",
        borderRadius: "0 2px 2px 0",
      },
      "@media (max-width: 595px)": {
        width: "90px",
        font: "normal normal 600 16px/38px Open Sans",
      },
    },
  })
);
