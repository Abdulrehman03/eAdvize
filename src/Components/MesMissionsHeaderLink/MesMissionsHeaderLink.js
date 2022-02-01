import { makeStyles } from "@mui/styles"; 

export const useStyles = makeStyles((theme) => ({
  eAdvizeMesMissions_topContainer: { 
    position: "relative", 
    background:'#e5e5e5',
    padding:'1.5rem 0 3rem'
    
  },
  eAdvizeMesMissions_topContent: {
    display: "flex",
    webkitFlexDirection: "column",
    msFlexDirection: "column",
    flexDirection: "column",
    // webkitJustifyContent: "center",
    // justifyContent: "center",  
    fontSize: "120%", 

  },    
}));
