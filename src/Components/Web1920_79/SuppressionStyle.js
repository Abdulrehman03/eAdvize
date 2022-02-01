import { ImportantDevices } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { borderRadius, fontSize, textAlign } from "@mui/system";

export const useStyles = makeStyles(() => ({

    // *****************************************************

    identite: {
        margin: "0px",
        padding: "0px",
        paddingLeft: "0.5rem",
        fontFamily: "Open Sans, Bold",
        fontSize: "25px",
        color: "#143D66",
        fontWeight: "bold"

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
         padding: "40px !important",
        
        "& input": {
            padding: "5px 5px !important"
        },
        "& .Mui-checked": {
            color: "#143D66 !important"
        },
        "& .MuiTypography-root": {
            color: "#143D66 !important",
            fontFamily: "Open Sans,Semibold !important",
            fontSize: "18px !important",
            fontWeight: "bold"


        }
    },
    Pourriez: {
        color: "#143D66",
        fontFamily: "Open Sans,Semibold",
        fontSize: "18px",
        marginTop: "5px",
        marginBottom: "5px",
        fontWeight: "bold"


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
