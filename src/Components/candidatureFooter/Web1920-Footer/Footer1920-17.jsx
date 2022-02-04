import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { useStyle } from "./style";
import Container from "@mui/material/Container";


const FooterOne = ({ stepChange,value}) => {
    console.log(stepChange,value,"propsssssss")
    const theme = useTheme();
    const classes = useStyle(theme);
    return (
            <div className={classes.root}>
            <div
                className={classes.divider}
                style={{ width: "100%" }}
            ></div>
            <Container >
                <div className={classes.btnContainer}>
                <button className={classes.btn1} >Discuter</button>
                    <button className={classes.btn2} onClick={() => stepChange(0)}>Candidater</button>
                <button className={classes.btn3}>Décliner</button>
                </div>
            </Container>
            </div>
    );
};
export default FooterOne;