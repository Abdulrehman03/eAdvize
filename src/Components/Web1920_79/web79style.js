import { ImportantDevices } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { borderRadius, fontSize, padding, textAlign } from "@mui/system";

export const useStyles = makeStyles(() => ({
 


  // *****************************************************
  parentDiv : {
    "& .MuiGrid-item" :{
    paddingLeft: "0px !important"
  }
  },
  navBar: {
    background: "white",
    boxShadow: "0px 6px 6px #00000029",
    borderRadius: "5px",
    
  },
 
  column: {
    display: "flex",
    marginTop: "1rem",
    flexDirection: "column"

  },
  listItem: {
    fontSize: "Open Sans, Semibold",
    color: "#143D66",
    fontSize: "19px",
    fontWeight: "450",
    paddingLeft: "1rem",
    marginTop: '1rem',
    paddingTop : "6px",
    paddingBottom: "6px"


  },
  activeClass : {
    fontSize: "Open Sans, Semibold",
    color: "white",
    background: "#143D66",
    fontSize: "19px",
    fontWeight: "450",
    paddingLeft: "1rem",
    marginTop: '1rem'

  }
  
  // **********************************************************
  
}));
