import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { useStyle } from "./style";
import { Box } from "@mui/system";
import { Typography, Grid, Button } from "@mui/material";
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

const Web1920_18 = ({ stepChange }) => {
  const theme = useTheme();
  const classes = useStyle(theme);
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Box>
        <br />
        <Box>
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
                      <p className={classes.subtitle}>
                        Séniorité du consultant
                      </p>
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
        </Box>
        <br />
        <Box width="75%" p="4" className={classes.container}>
          <div className={classes.innerContainer}>
            <div className={classes.title}>
              <p className={classes.title}>Ma définition du projet</p>
              <div className={classes.divider} style={{ width: "56px" }}></div>
            </div>
            <form>
              <div className={classes.inputbox}>
                <label className={classes.inputLabel}>
                  Vos retours sur cette mission : Interrogations, pertinence de
                  votre profil, Intérêt professionnel
                </label>
                <textarea
                  type="text"
                  rows="8"
                  display="inline-block"
                  placeholder="Lorem Ipsum"
                  className={classes.input1}
                />
              </div>
              <div className={classes.inputbox}>
                <label className={classes.inputLabel}>
                  Vos missions précédentes en lien avec le projet du client{" "}
                </label>
                <textarea
                  placeholder="Lorem Ipsum"
                  type="text"
                  rows="8"
                  display="inline-block"
                  className={classes.textarea}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <p
                  style={{
                    margin: "0px",
                    font: "normal normal bold 20px/27px Open Sans",
                    color: "#143D66",
                  }}
                >
                  Ajouter un document &nbsp;
                </p>
                <button className={classes.tagbtn} style={{ width: "99px" }}>
                  joinder
                </button>
              </div>
              <div>
                <p
                  style={{
                    margin: "10px 0px",
                    font: "normal normal bold 20px/27px Open Sans",
                    color: "#143D66",
                  }}
                >
                  A quelle moment pouvez-vous commencer cette mission ?
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <button
                  className={classes.tagbtn}
                  style={{
                    transform: " matrix(1, 0, 0, 1, 0, 0)",
                    border: "2px solid #143D66",
                    width: "191px",
                  }}
                >
                  Immédiatement
                </button>

                <div>
                  {/* <DesktopDatePicker
                    label="For desktop"
                    value={value}
                    minDate={new Date("2017-01-01")}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  /> */}
                </div>
              </div>
              <div className={classes.btnContainer}>
                <button
                  className={classes.btn}
                  color="#143D66"
                  onClick={() => {
                    stepChange(1);
                  }}
                >
                  Envoyer
                </button>
                <button
                  className={classes.tagbtn}
                  style={{
                    margin: "0 16px",
                    width: "320px",
                    font: "normal normal 600 20px/27px Open Sans",
                  }}
                >
                  Enregistrer et Quitter
                </button>
              </div>
            </form>
          </div>
        </Box>
        <br />
      </Box>
    </div>
  );
};
export default Web1920_18;
