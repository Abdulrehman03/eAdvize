import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { useStyle } from "./style";


const Footer1920_18 = () => {
    const theme = useTheme();
    const classes = useStyle(theme);
    const scrollDown = () => {
        window.scrollTo(0, 700);
    }
    return (
        <div className={classes.darkContainer}>
            <div className={classes.footerimg} onClick={scrollDown}></div>
        </div>


    );
};
export default Footer1920_18;