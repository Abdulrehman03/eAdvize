import React from "react";
import Layout from "../../Components/Layout/";
import ScreenContactComponent from "../../Components/ScreenContact/"
import { createStyles, makeStyles } from "@mui/styles";
const useStyles = makeStyles(() =>
    createStyles({
        root: {
            background: "linear-gradient(180deg, #143D66 0%, #000000 100%)"
        },
    })
);
const ScreenContact = () => {
   const classes =  useStyles()
    return (
        <div className={classes.root}>
            <Layout blueBackground ={true} >
                <br />
                <br />
                <ScreenContactComponent />
            </Layout>
        </div>
    );
};

export default ScreenContact;
