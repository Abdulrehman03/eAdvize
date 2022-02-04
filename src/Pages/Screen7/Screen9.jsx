import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { useStyle } from "./style";
import Layout from "../../Components/Layout/index";
import { Box } from "@mui/system";
import { Typography, Grid, Button } from "@mui/material";

const Screen9 = () => {
  const theme = useTheme();
  const classes = useStyle(theme);
  const { paris, setParis } = useState();
  return (
    <Layout>
      <div
        className={classes.root}
        style={{
          backgroundColor: "#143D66",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          width="70%"
          p="4"
          className={classes.container}
          style={{ minWidth: "320px", borderRadius: " 22px" }}
        >
          <div className={classes.innerContainer}>
            <div className={classes.title}>
              <Typography
                style={{
                  textAlign: "left",
                  font: " normal normal bold 35px/47px Open Sans",
                  letterSpacing: "0px",
                  color: "#143D66",
                }}
              >
                Merci pour vos informations !
              </Typography>
              <div className={classes.divider}></div>
            </div>
            <div>
              <Typography
                color="#04C38F"
                style={{
                  font: "normal normal bold 30px/41px Open Sans",
                  letterSpacing: "0px",
                  color: "#04C38F",
                }}
                my={2}
              >
                Nous étudions votre projet et revenons vers vous très rapidement
              </Typography>
            </div>

            <div>
              <button className={classes.btnsrc9} color="#143D66">
                Accéder a la plateforme
              </button>
              <button
                className={classes.tagbtn}
                style={{
                  width: "137px",
                  height: "47px",
                  border: " 2px solid #04C38F",
                  font: "normal normal 600 22px/30px Open Sans",
                  letterSpacing: "0px",
                  color: "#04C38F",
                  margin: "0px 3rem",
                }}
              >
                Quitter
              </button>
            </div>
          </div>
        </Box>
      </div>
    </Layout>
  );
};
export default Screen9;
