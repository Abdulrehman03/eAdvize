import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    parentGrid: {
        marginTop: "2rem",
        background: "#FFFFFF",
        boxShadow: "0px 6px 6px #00000029",
        borderRadius: "5px",
        "& .MuiOutlinedInput-root" : {
            height : "40px",
            // border: "1px solid #707070 !important",
        },
        "& .MuiTextField-root" : {
            width : "100% !important",

        }

    },
    childGrid: {
        background: "#FFFFFF",
        border: "1px solid #143D66"
    },
    heading: {
        fontFamily: "Open Sans",
        fontWeight: "600",
        color: "#143D66",
        fontSize: "23px",
        marginBottom : "3px"


    },
    divider: {
        background:
            "#143D66",
        height: "7px",
       
        borderRadius: "4px",
        marginTop: "7px",
        marginBottom: "25px",
    },
    label2: {
        color: "#143D66",
        fontSize: "22px",
        fontFamily: "Open Sans",
        fontWeight: "500",
        paddingLeft : "2rem",
        marginBottom: "3px"
    },
    Modifier: {
        marginRight : "1.5rem",
        marginTop: "1rem",
        marginBottom: "2rem",
        marginLeft: "2rem",

        "& .MuiButton-root": {
            backgroundColor: "#143D66 !important",
            color: "white !important",
            padding: "5px 25px !important"

        }

    },
    register: {
        marginRight: "1.5rem",
        marginTop: "2rem",
        marginBottom: "2rem",
        marginLeft: "2rem",

        "& .MuiButton-root": {
            backgroundColor: "#143D66 !important",
            color: "white !important",
            padding: "5px 25px !important"

        }

    },
    fileName : {
        marginTop : "1rem",
        borderTop: "1px solid #707070",
        width : "85%",
        margin : "auto",
        color: "#143D66",
        fontFamily: "Open Sans",
        fontSize : "18px"
    },
    label : {
        color: "#143D66",
        fontSize: "22px",
        fontFamily: "Open Sans",
        fontWeight : "500",
        marginBottom : "3px"
    },
    fileUploaderDiv : {
    background: "#FFFFFF",
    border: "1px solid #707070",
    borderRadius: "5px",

    }
}));
