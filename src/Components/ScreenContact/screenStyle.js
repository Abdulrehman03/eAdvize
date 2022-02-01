import React from "react";
import { makeStyles } from "@mui/styles";
import { color } from "@mui/system";


export const useStyles = makeStyles(() => ({
    parentGrid : {
   "& .MuiOutlinedInput-root" : {
       background : "white !important"
   }
    },

    borderDiv: {
     
        background: "#E4F0F8",
        boxShadow: "0px 3px 6px #00000029",
        borderRadius: "14px",
        opacity: 1,
    },
    heading : {
        fontFamily: "Open Sans, Bold",
        fontWeight : "bold",
        fontSize : "28px",
        color: "#143D66",
        textAlign : "center",
        marginBottom : "10px"


    },
    divider: {
        background:
            "transparent linear-gradient(90deg, #00FFBA 0%, #143D66 100%) 0% 0% no-repeat padding-box",
        height: "7px",
        margin: "auto",
        borderRadius: "4px",
        marginBottom: "25px",
    },
    heading2 : {
        fontFamily: "Open Sans, Bold",
        fontWeight: "bold",
        fontSize: "22px",
        color: "#143D66",
        textAlign : "center"
    },
    label : {
        color: "#143D66",
        fontSize : "20px",
        margin : "0px",
        marginBottom : "5px",
        fontFamily: "Open Sans",
        fontWeight : "bold"

    }
}));
