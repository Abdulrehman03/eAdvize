import { makeStyles, createStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    TableContent: { 
      marginTop: "0",
      marginBottom: "100px",
    },    
    greenOutlinedButton2: {
      width: "90%",
      padding: "5px 30px",
      marginTop: "2.5rem !important",
      color: `${theme.palette.text.main} !important`,
      fontSize: "16px !important",
      backgroundColor: "white !important",
    }, 
  })
);
