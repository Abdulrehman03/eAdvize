import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "80% !important",
    margin: "auto",
    marginTop: "3rem",
    marginBottom: "3rem",
  },
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
  innerGridGroup: {
    background: "#143D66 0% 0% no-repeat padding-box",
    border: "2px solid #143D66",
    borderRadius: "5px",
  },
  innerGridGroupTextFields: {
    background: "#143D66 0% 0% no-repeat padding-box",
    border: "2px solid #143D66",
    borderRadius: "5px",
    height: "46px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "0px !important",
  },
  innerGridGroupCompétencesTextFields: {
    background: "#143D66 0% 0% no-repeat padding-box",
    borderRadius: "5px",
    flexDirection: "column !important",
    display: "flex",
    padding: "2rem",
  },
  innerGridGroupExperienceField: {
    border: "2px solid #143D66",
    borderRadius: "5px",
    height: "46px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "0px !important",
  },
  innerGridGroupTextFields2: {
    paddingTop: "0px !important",
  },
  innerGrid: {
    minHeight: "150px",
    textAlign: "center",
    padding: "1rem 3.6rem",
    marginRight: "10px !important",
  },
  innerGridTextFields: {
    textAlign: "center",
  },
  bgColor: {
    backgroundColor: "#143D66",
  },
  jobTitle: {
    color: "white",
    fontWeight: "600",
    fontSize: "20px",
    fontFamily: "Open Sans !important",
    lineHeight: "27px",
  },
  jobTitleTextFields: {
    color: "white",
    fontWeight: "600",
    fontSize: "20px",
    fontFamily: "Open Sans !important",
    lineHeight: 1.2,
  },
  jobTitle2: {
    color: "white",
    fontWeight: "600",
    fontSize: "14px",
    fontFamily: "Open Sans !important",
    lineHeight: "19px",
  },
  jobTitleText: {
    color: "white",
    fontWeight: "600",
    fontSize: "14px",
    fontFamily: "Open Sans !important",
    lineHeight: "19px",
    textAlign: "left",
  },
  textFieldGroup: {
    display: "flex",
    justifyContent: "center",
  },
  textFieldGroupCompétences: {
    borderRadius: "5px 5px 5px 5px",
    width: "100%",
    fontFamily: '"Open Sans", sans-serif',
    "& input": {
      border: "1px solid #143D66 !important",
      borderLeft: "0 !important",
      background: "#fff !important",
    },
  },
  textField: {
    borderRadius: "5px 5px 5px 5px",
    width: "100%",
    height: "10px !important",
    fontFamily: '"Open Sans", sans-serif',
    "& input": {
      height: "10px !important",
      border: "1px solid #143D66 !important",
      borderLeft: "0 !important",
    },
  },
  displayExperience: {
    display: "flex",
    justifyContent: "space-evenly",
    listStyle: "none",
    width: "100%",
    margin: "auto",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "17px",
    fontFamily: "Open Sans !important",
    paddingInlineStart: "0",
    "& li": {
      padding: ".2rem .5rem",
      border: "1px solid #143D66",
    },
    "& :first-child": {
      color: "#596571",
    },
    "& > div": {
      color: "#596571",
    },
  },
  submitBtn: {
    marginBottom: "4rem !important",
    marginLeft: "2rem !important",
  },
  btn: {
    backgroundColor: "#EAEAEA !important",
    marginBottom: "4rem !important",
  },
  col_1: {
    border: "1px solid #0000001D",
    boxShadow: "0px 6px 6px #0000001D",
    borderRadius: "5px 5px 5px 5px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
  },
}));
