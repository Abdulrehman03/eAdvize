import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { useStyle } from "./style";
import Layout from "../../Components/Layout/index";
import { Box } from "@mui/system";
import { Typography, Grid, Button } from "@mui/material";
import Free from "../../Assests/free.png";

const Screen7 = () => {
  const theme = useTheme();
  const classes = useStyle(theme);
  const { paris, setParis } = useState();
  return (
    <Layout>
      <div className={classes.root}>
        <Box width="50%" p="4" className={classes.container}>
          <div className={classes.innerContainer}>
            <div className={classes.title}>
              <Typography varieant="h3">Ma définition du projet</Typography>
              <img src={Free} className={classes.titleimg} />
            </div>
            <form className={classes.form}>
              <div className={classes.inputbox}>
                <label className={classes.inputLabel}>Titre</label>
                <input
                  type="text"
                  display="inline-block"
                  className={classes.input1}
                />
              </div>
              <div className={classes.inputbox}>
                <label className={classes.inputLabel}>Description</label>
                <textarea
                  type="text"
                  rows="8"
                  display="inline-block"
                  placeholder="Lorem Ipsum"
                  className={classes.textarea}
                />
              </div>
              <div className={classes.inputbox}>
                <label className={classes.inputLabel}>
                  Quelles compétences je recherche ?
                </label>
                <textarea
                  placeholder="Lorem Ipsum"
                  type="text"
                  rows="8"
                  display="inline-block"
                  className={classes.textarea}
                />
              </div>
              <div className={classes.rowscontain}>
                <Grid container width="100%">
                  <Grid md={4}>
                    <div className={classes.leftbox}> Zone Géographique</div>
                  </Grid>
                  <Grid md={6} xl={6}>
                    <input
                      type="text"
                      className={classes.inputs}
                      name="Paris"
                      value={paris}
                      placeholder="Ex : Paris"
                    />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.rowscontain}>
                <Grid container width="100%">
                  <Grid md={12} lg={4}>
                    <div className={classes.leftbox}> Lieu de la mission</div>
                  </Grid>
                  <Grid sm={12} md={6}>
                    <div
                      className={classes.tagContainer}
                      style={{ border: "0" }}
                    >
                      <div className={classes.tagbtn}>Teletravail</div>
                      <div className={classes.tagbtn}>Dans nos locaux</div>
                      <div className={classes.tagbtn}>Les deux</div>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.rowscontain}>
                <Grid container width="100%">
                  <Grid md={4}>
                    <div className={classes.leftbox}> Durée du projet </div>
                  </Grid>
                  <Grid md={6} xl={6}>
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
              <div className={classes.rowscontain}>
                <Grid container width="100%">
                  <Grid md={12} lg={4}>
                    <div
                      className={classes.leftbox}
                      style={{ minHeight: "85px" }}
                    >
                      Lieu de la mission
                    </div>
                  </Grid>
                  <Grid sm={12} md={6}>
                    <div className={classes.tagContainer}>
                      <div className={classes.tagbtn}>Des que possible</div>
                      <div className={classes.tagbtn}>La semaine prochaine</div>
                      <div className={classes.tagbtn}>Dans 2/3 semaines</div>
                      <div className={classes.tagbtn}>Le mois prochain</div>
                      <div className={classes.tagbtn}>Dans plusieurs mois</div>
                      <div className={classes.tagbtn}>Je ne sais pas</div>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div>
                <button className={classes.btn}>Continuer</button>
              </div>
            </form>
          </div>
        </Box>
      </div>
    </Layout>
  );
};
export default Screen7;
