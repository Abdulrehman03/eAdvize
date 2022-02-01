import { ImportantDevices } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { borderRadius, fontSize, textAlign } from "@mui/system";

export const useStyles = makeStyles(() => ({
  
    // *****************************************************
    btnWrapper: {
        "& .MuiButton-root": {
            backgroundColor: "#143D66 !important",
            color: "white !important",
            marginLeft: "2rem !important",
            padding: "7px 20px !important"

        }
    },
    dateWrapper: {
        "& .MuiOutlinedInput-input": {
            borderColor: "#143D66 !important",
            padding: "5px 20px !important"

        },

        "& input": {
            border: "2px solid #143D66 !important",
        },
        "& .MuiOutlinedInput-root": {
            color: "#143D66 !important",
            fontWeight: "500"
        }
    },
    identite: {
        margin: "0px",
        padding: "0px",
        paddingLeft: "0.5rem",
        fontFamily: "Open Sans, Bold",
        fontSize: "25px",
        color: "#143D66",
        fontWeight: "bold"

    },
    label: {
        margin: "0px",
        padding: "0px",
        paddingLeft: "0.5rem",
        fontFamily: "Open Sans",
        fontSize: "20px",
        color: "#143D66",

    },
    navBar: {
        background: "white",
        boxShadow: "0px 6px 6px #00000029",
        borderRadius: "5px",

    },
    divider: {
        background: "#143D66",
        height: "7px",
        borderRadius: "4px",
        marginTop: "8px",
        marginLeft: "0.5rem",
        marginBottom: "25px",
    },
    personalInfo: {
        border: "1px solid #143D66",
        borderRadius: '5px',

        "& input": {
            padding: "5px 5px !important"
        }
    },
    photo: {
        textAlign: "center",
        fontSize: "25px",
        margin: "0",
        color: "white"
    },
    divider2: {
        background: "white",
        margin: "auto",
        height: "7px",
        borderRadius: "4px",
        marginTop: "10px",
        marginBottom: "25px",
    },
    modifier: {
        marginLeft: "6.5%",
        marginTop: "2rem",
        marginBottom: "2rem",

        "& .MuiButton-root": {
            borderColor: "white !important",
            color: "white !important",
            marginLeft: "2rem !important",
            padding: "5px 25px !important"

        }
    },
    circle: {
        width: "170px",
        margin: "auto",
        height: "170px",
        borderRadius: "50%",
        background: "#FFFFFF",
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
        marginTop: '1rem'

    },
    Enregistrer: {
        marginTop: "1rem",
        marginBottom: "2rem",
        marginLeft: "0.5rem",

        "& .MuiButton-root": {
            backgroundColor: "#143D66 !important",
            color: "white !important",
            padding: "5px 25px !important"

        }

    },
    // **********************************************************
    
}));
