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
      <br/>
      <div className={classes.root} style={{backgroundColor:"#143D66", display:"flex",
    alignItems:"center", justifyContent:"center" }} >
        <Box width="70%" p="4" className={classes.container}style={{minWidth:"320px", borderRadius:" 22px" }} >
          <div className={classes.innerContainer}>
            <div className={classes.title}>
              <Typography variant="h3">Merci pour vos informations !</Typography>
               <div
                  className={classes.divider}
                  style={{ width: "56px" }}
                ></div>
               
            </div>
            <div>
                <Typography variant="h3" color="#04C38F" my={2} >
Nous étudions votre projet et revenons vers vous très rapidement
                </Typography>
            </div>
            
            <div >
                <button className={classes.btn} color="#143D66">Accéder a la plateforme</button>
                <button className={classes.tagbtn} style={{color:"#04C38F",padding:"6px 12px", margin:"0 6px", border:"1px solid #04C38F"}} >Quitter</button>
              </div>
          </div>
        </Box>
      </div>
    </Layout>
  );
};
export default Screen9;
