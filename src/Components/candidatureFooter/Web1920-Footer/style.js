import { MarginOutlined } from "@mui/icons-material";
import { makeStyles, createStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) =>
    createStyles({
       
        root: {
            width: "100%",
            backgroundColor: '#fff',
            minHeight: '100px',
            position: "fixed",
            bottom: "0"
        },
        divider: {
            width: "45px",
            background:
                "transparent linear-gradient(90deg, #00FFBA 0%, #143D66 100%) 0% 0% no-repeat padding-box",
            height: "7px",
            borderRadius: "4px",
        },
        btnContainer: {
            width: '75%',
            minHeight: "100px",
            margin: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',


        },
        btn1: {
            borderRadius: "5px",
            width: "135px",
            height: "40px",
            background: "#143D66",
            color: '#fff',
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "Open Sans",
            border: "none",
            marginLeft: "3rem"



        },
        btn2: {
            borderRadius: "5px",
            fontFamily: "Open Sans",
            width: "175px",
            height: "40px",
            fontWeight: "bold",
            background: "#01E3A6",
            border: '0px',
            margin: "0px 2rem",
            fontSize: "18px",
            cursor: "pointer"

        },
        btn3: {
            borderRadius: "5px",
            fontFamily: "Open Sans",
            fontWeight: "bold",
            width: "135px",
            height: "40px",
            border: "2px solid #143D66",
            backgroundColor: '#fff',
            fontSize: "18px",
            border: '1px solid #143D66',
            margin: "0px 1rem",
        },
        darkContainer: {
            backgroundColor: "#01E3A6",
            width: '100%',
            minHeight: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: "fixed",
            bottom: "0",
            scrollBehavior: "smooth"


        },
        footerimg: {
            width: '30px',
            height: '30px',
            backgroundColor: '#fff',cursor : "pointer"
        }
    })
);
