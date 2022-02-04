import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { useStyle } from "./style";
import Layout from "../../Components/Layout/index";
import { Box } from "@mui/system";
import { Typography, Grid, Button } from "@mui/material";

const Screen8 = () => {
  const theme = useTheme();
  const classes = useStyle(theme);
  const { paris, setParis } = useState();
  return (
    <Layout>
      <div className={classes.root}>
        <br/>
        <Box width="70%" p="4" className={classes.container}>
          <div className={classes.innerContainer}>
            <div className={classes.title}>
              <Typography variant="h3">Mes infos d’entreprise et de contact</Typography>
               <div
                  className={classes.divider}
                  style={{ width: "56px" }}
                ></div>
               
            </div>
            <form className={classes.form}>
              <div className={classes.formSecSetion}  >
              <div>
                  <Typography variant="body1" style={{color:"#143D66"}} >Votre entreprise</Typography>
              </div>
              <div className={classes.rowscontain}>
                <Grid container width="100%">
                  <Grid  md={4} lg={3} >
                    <div className={classes.leftbox}> 
                    <Typography variant="h6" className={classes.typograp} >
                  Nom
                  </Typography>
                  </div>
                  </Grid>
                  <Grid  md={8} lg={9}>
                    <input
                      type="text"
                      className={classes.inputs1}
                      name="Paris"
                      value={paris}
                      placeholder="Ex : Consultant études sectorielles"
                    />
                  </Grid>
                </Grid>
              </div>
               <div className={classes.rowscontain}>
                <Grid container width="100%">
                  <Grid  md={4} lg={3}>
                    <div className={classes.leftbox}> 
                    <Typography variant="h6" className={classes.typograp} >
                     Telephone
                     </Typography>
                      </div>
                  </Grid>
                  <Grid md={8} lg={9}>
                    <input
                      type="text"
                      className={classes.inputs}
                      name="Paris"
                      value={paris}
                      placeholder="Ex : Consultant études sectorielles "
                    />
                  </Grid>
                </Grid>
              </div>
              </div>
              <div className={classes.formSecSetion}  >
              <div>
                  <Typography variant="body1" style={{color:"#143D66"}} >Vos coordonnées</Typography>
              </div>
              <div className={classes.rowscontain}>
                <Grid container width="100%">
                  <Grid  md={4} lg={3} >
                    <div className={classes.leftbox}> 
                    <Typography variant="h6" className={classes.typograp} >
                  E-mail
                  </Typography>
                  </div>
                  </Grid>
                  <Grid  md={8} lg={9}>
                    <input
                      type="text"
                      className={classes.inputs}
                      name="Paris"
                      value={paris}
                      placeholder="Ex : Consultant études sectorielles"
                    />
                  </Grid>
                </Grid>
              </div>
               <div className={classes.rowscontain}>
                <Grid container width="100%">
                  <Grid  md={4} lg={3}>
                    <div className={classes.leftbox}> 
                    <Typography variant="h6" className={classes.typograp} >
                  
                     Telephone 
                     </Typography></div>
                  </Grid>
                  <Grid md={8} lg={9}>
                    <input
                      type="text"
                      className={classes.inputs}
                      name="Paris"
                      value={paris}
                      placeholder="Ex : Consultant études sectorielles "
                    />
                  </Grid>
                </Grid>
              </div>
              </div>
                  <div className={classes.formSecSetion}>
                      <div>
                  <Typography variant="body1" style={{color:"#143D66"}} >Comment souhaitez-vous que nous vous contactions ?</Typography>
              </div>
              <div className={classes.formtagbtncon} >
                  <button className={classes.tagbtn}>Par Email</button>
                      <button className={classes.tagbtn} style={{margin:'0 16px'}} >Par Téléphone</button>
                      
              </div>
                  </div>
              <div >

                <button className={classes.btn}>Valider mon profil client</button>
              </div>
            </form>
          </div>
        </Box>
      </div>
    </Layout>
  );
};
export default Screen8;
