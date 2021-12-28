import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  title: {
    fontSize: "30px !important",
    fontFamily: '"Open Sans", sans-serif',
    color: "#143D66",
    fontWeight: "bolder !important",
  },
  subHead: {
    marginTop: "1rem !important",
    color: "#143D66",
  },
  divider: {
    background:
      "transparent linear-gradient(90deg, #00FFBA 0%, #143D66 100%) 0% 0% no-repeat padding-box",
    height: "7px",
    margin: "auto",
    borderRadius: "4px",
    marginTop: "10px",
    marginBottom: "25px",
  },
  emailField: {
    borderRadius: "5px 5px 5px 5px",
    width: "80%",
    height: "10px !important",
    fontFamily: '"Open Sans", sans-serif',
    marginTop: "1rem !important",
    "& input": {
      height: "10px !important",
      // border: "1px solid #143D66 ",
    },
  },
  password: {
    borderRadius: "5px 5px 5px 5px",
    width: "80%",
    height: "10px !important",
    fontFamily: '"Open Sans", sans-serif',
    marginTop: "1.5rem !important",
    "& input": {
      height: "10px !important",
      // border: "1px solid #143D66 ",
    },
  },
  displayFlex: {
    display: "flex",
    marginTop: "1rem",
    justifyContent: "space-evenly",
    maxWidth: "80%",
    margin: "auto",
    fontSize: "15px",
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: "900 !important",
    "& :first-child": {
      color: "#143D66",
    },
    "& > div": {
      color: "#FF0202",
    },
  },
  button: {
    marginTop: "1.5rem !important",
    justifyContent: "space-between",
    width: "80%",
    margin: "auto",
  },
  btngroup: {
    display: "flex",
    justifyContent: "center",
    width: "550px",
    marginTop: "1rem !important",
  },
  google: {
    width: "220px",
    color: "#1662AB !important",
    fontSize: "12px !important",
    backgroundColor: "white !important",
    borderRadius: "6px 6px 6px 6px",
    boxShadow: "0px 3px 8px #00000029",
  },
  Linkedin: {
    width: "220px",
    color: "#FFFFFF !important",
    fontSize: "12px !important",
    backgroundColor: "#1662AB !important",
    borderRadius: "6px 6px 6px 6px",
    boxShadow: "0px 3px 8px #00000029",
  },
}));
