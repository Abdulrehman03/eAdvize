import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { useStyle } from "./style";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import { Typography, Grid, Button } from "@mui/material";

const Web1920_17 = ({ stepChange}) => {
  const theme = useTheme();
  const classes = useStyle(theme);
  const steps = [
    'Appel à candidature',
    'Déliberation',
    'Projet affecté',
    'Projet Terminé'
  ];
  return (
   
      <div className={classes.root}>
        <Container>
          <br />
          <br />
        
          <Box width="70%" p="4" className={classes.container}>
            <div className={classes.innerContainer}>
              <div className={classes.title}>
                <Typography variant="h4" sx={{ display: 'inline' }} >Titre &nbsp;</Typography>
                <Typography variant="h5" sx={{ display: 'inline' }}>Lorem ipsum dolor sit amet, consetetur</Typography>
                <div
                  className={classes.divider}
                ></div>

              </div>
              <div>
                <Grid container width="100%">
                  <Grid sm={12} md={4}  >
                    <div className={classes.title}>
                      <Typography variant="h6" >Poste proposé</Typography>
                      <Typography variant="body2" >Lorem Ipsum</Typography>
                    </div>
                    <div className={classes.title}>
                      <Typography variant="h6" >Lieu de travail</Typography>
                      <Typography variant="body2" >Paris</Typography>
                    </div>
                    <div className={classes.title}>
                      <Typography variant="h6" >Mode de facturation</Typography>
                      <Typography variant="body2" >Forfait</Typography>
                    </div>
                  </Grid>
                  <Grid sm={12} md={4}  >
                    <div className={classes.title}>
                      <Typography variant="h6" >Séniorité du consultant</Typography>
                      <Typography variant="body2" >3 / 5 ans</Typography>
                    </div>
                    <div className={classes.title}>
                      <Typography variant="h6" >Début de la mission</Typography>
                      <Typography variant="body2" >Des que Possible</Typography>
                    </div>
                  </Grid>
                  <Grid sm={12} md={4}  >
                    <div className={classes.title}>
                      <Typography variant="h6" >Fréquence par semaine</Typography>
                      <Typography variant="body2" >Temps Plein</Typography>
                    </div>
                    <div className={classes.title}>
                      <Typography variant="h6" >Durée de la mission</Typography>
                      <Typography variant="body2" >3 a 5 mois</Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>

              {/* Descraption */}
              <div className={classes.title}  >
                <Typography variant="h5">Description</Typography>
                <div
                  className={classes.divider}
                ></div>
                <div style={{ marginTop: "8px" }} >
                  <Typography variant="body2" >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                  </Typography>
                </div>

              </div>
            </div>
          </Box>
          
          <br />
          <br />
          <br />
        </Container>     
      </div>
 
  );
};
export default Web1920_17;