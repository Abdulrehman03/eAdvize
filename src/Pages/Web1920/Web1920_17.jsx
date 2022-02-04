import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { useStyle } from "./style";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import { Typography, Grid, Button } from "@mui/material";

const Web1920_17 = ({ stepChange }) => {
  const theme = useTheme();
  const classes = useStyle(theme);
  const steps = [
    "Appel à candidature",
    "Déliberation",
    "Projet affecté",
    "Projet Terminé",
  ];
  return (
    <div className={classes.root}>
      <Container>
        <br />
        <Box width="75%" p="4" className={classes.container}>
          <div className={classes.innerContainer}>
            <div className={classes.titlecontainer}>
              <p className={classes.title} sx={{ display: "inline" }}>
                Titre &emsp;
              </p>
              <Typography
                style={{
                  textAlign: "left",
                  font: "normal normal normal 22px/30px Open Sans",
                  letterSpacing: "0px",
                  color: "#143D66",
                  opacity: "1",
                }}
                sx={{ display: "inline" }}
              >
                Lorem ipsum dolor sit amet, consetetur
              </Typography>
            </div>
            <div className={classes.divider}></div>
            <div>
              <Grid container width="100%">
                <Grid sm={12} md={4} pr={1}>
                  <Box py={2}>
                    <p className={classes.subtitle}>Poste proposé</p>
                    <p className={classes.description}>Lorem Ipsum</p>
                  </Box>
                  <Box py={2}>
                    <p className={classes.subtitle}>Lieu de travail</p>
                    <p className={classes.description}>Paris</p>
                  </Box>
                  <Box py={2}>
                    <p className={classes.subtitle}>Mode de facturation</p>
                    <p className={classes.description}>Forfait</p>
                  </Box>
                </Grid>
                <Grid sm={12} md={4} pr={1}>
                  <Box py={2}>
                    <p className={classes.subtitle}>Séniorité du consultant</p>
                    <p className={classes.description}>3 / 5 ans</p>
                  </Box>
                  <Box py={2}>
                    <p className={classes.subtitle}>Début de la mission</p>
                    <p className={classes.description}>Des que Possible</p>
                  </Box>
                </Grid>
                <Grid sm={12} md={4} pr={1}>
                  <Box py={2}>
                    <p className={classes.subtitle}>Fréquence par semaine</p>
                    <p className={classes.description}>Temps Plein</p>
                  </Box>
                  <Box py={2}>
                    <p className={classes.subtitle}>Durée de la mission</p>
                    <p className={classes.description}>3 a 5 mois</p>
                  </Box>
                </Grid>
              </Grid>
            </div>

            {/* Descraption */}
            <div className={classes.title}>
              <p className={classes.subtitle}>Description</p>
              <div className={classes.divider}></div>
              <div style={{ marginTop: "8px" }}>
                <p className={classes.description}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
          <br />
        </Box>
        <br />
      </Container>
    </div>
  );
};
export default Web1920_17;
