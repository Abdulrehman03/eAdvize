import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { useStyle } from "./style";
import { Box } from "@mui/system";
import { Typography, Grid, Button } from "@mui/material";

// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

const Web1920_25 = ({ stepChange }) => {
  const theme = useTheme();
  const classes = useStyle(theme);
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <div>
        <br />
        <Box
          width="75%"
          p="4"
          className={classes.container}
          style={{ border: "5px solid #D3D3D3" }}
        >
          <div className={classes.innerContainer}>
            <div>
              <p className={classes.title}>Ma définition du projet</p>
              <div className={classes.divider} style={{ width: "56px" }}></div>
            </div>
            <div className={classes.quesContain}>
              <p className={classes.subtitle} py={2}>
                Vos retours sur cette mission : Interrogations, pertinence de
                votre profil, Intérêt professionnel
              </p>
              <p className={classes.description} py={2}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className={classes.quesContain}>
              <p className={classes.subtitle} py={2}>
                Vos missions précédente en lien avec le projet du client
              </p>
              <p className={classes.description} py={1}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className={classes.quesContain}>
              <p className={classes.subtitle} py={2}>
                Mode de facturation
              </p>
              <p className={classes.description} py={1}>
                Forfait
              </p>
            </div>
            <div>
              <button className={classes.tagbtn} color="#143D66">
                Retour au dashboard
              </button>
              <button className={classes.tagbtn} style={{ margin: "0 2rem" }}>
                Modifier
              </button>
            </div>
          </div>
        </Box>
        <br />

        <Box>
          <br />
          <Box
            width="75%"
            p="4"
            className={classes.container}
            style={{ border: "5px solid #D3D3D3" }}
          >
            <div className={classes.innerContainer}>
              <div className={classes.titlecontainer}>
                <p className={classes.title} sx={{ display: "inline" }}>
                  Titre &emsp;
                </p>
                <p
                  style={{
                    textAlign: "left",
                    font: "normal normal normal 22px/30px Open Sans",
                    letterSpacing: "0px",
                    color: "#143D66",
                    opacity: "1",
                    margin: "0px",
                  }}
                  sx={{ display: "inline" }}
                >
                  Lorem ipsum dolor sit amet, consetetur
                </p>
              </div>
              <div className={classes.divider}></div>
              <div>
                <Grid container width="100%" mt={2}>
                  <Grid sm={12} md={4} pr={1}>
                    <Box py={1}>
                      <p className={classes.subtitle}>Poste proposé</p>
                      <p className={classes.description}>Lorem Ipsum</p>
                    </Box>
                    <Box py={1}>
                      <p className={classes.subtitle}>Lieu de travail</p>
                      <p className={classes.description}>Paris</p>
                    </Box>
                    <Box py={1}>
                      <p className={classes.subtitle}>Mode de facturation</p>
                      <p className={classes.description}>Forfait</p>
                    </Box>
                  </Grid>
                  <Grid sm={12} md={4} pr={1}>
                    <Box py={1}>
                      <p className={classes.subtitle}>
                        Séniorité du consultant
                      </p>
                      <p className={classes.description}>3 / 5 ans</p>
                    </Box>
                    <Box py={1}>
                      <p className={classes.subtitle}>Début de la mission</p>
                      <p className={classes.description}>Des que Possible</p>
                    </Box>
                  </Grid>
                  <Grid sm={12} md={4} pr={1}>
                    <Box py={1}>
                      <p className={classes.subtitle}>Fréquence par semaine</p>
                      <p className={classes.description}>Temps Plein</p>
                    </Box>
                    <Box py={1}>
                      <p className={classes.subtitle}>Durée de la mission</p>
                      <p className={classes.description}>3 a 5 mois</p>
                    </Box>
                  </Grid>
                </Grid>
              </div>

              {/* Descraption */}
              <div className={classes.title} style={{ marginTop: "2rem" }}>
                <p className={classes.subtitle}>Description</p>
                <div className={classes.divider}></div>
                <div style={{ marginTop: "1rems" }}>
                  <p className={classes.description}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet
                  </p>
                </div>
                <div style={{ marginTop: "1rem" }}>
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
        </Box>

        <br />
      </div>
    </div>
  );
};
export default Web1920_25;
