import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { useStyle } from "./style";
import Layout from "../../Components/Layout/index";
import { Box } from "@mui/system";
import { Typography, Grid, Button } from "@mui/material";

const Screen7 = () => {
  const theme = useTheme();
  const classes = useStyle(theme);
  const { paris, setParis } = useState();

  return (
    <Layout>
      <div className={classes.root}>
        <br />
        <Box width="70%" p="4" className={classes.container}>
          <div className={classes.innerContainer}>
            <div>
              <p className={classes.title}>
                Ma définition du projet
              </p>
              <div className={classes.divider}></div>
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
                  <Grid item sm={12} md={6} lg={4}>
                    <div className={classes.leftbox}>
                      <Typography className={classes.typograp}>
                        {" "}
                        Zone Géographique
                      </Typography>{" "}
                    </div>
                  </Grid>
                  <Grid item sm={12} md={6} lg={8}>
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
                  <Grid sm={12} md={6} lg={4}>
                    <div className={classes.leftbox}>
                      <Typography className={classes.typograp}>
                        {" "}
                        Lieu de la mission
                      </Typography>
                    </div>
                  </Grid>
                  <Grid sm={12} md={6} lg={8}>
                    <div
                      className={classes.tagContainer}
                      style={{ border: "0" }}
                    >
                      <button className={classes.tagbtnsrc7}>
                        Teletravail
                      </button>
                      <button className={classes.tagbtnsrc7}>
                        Dans nos locaux
                      </button>
                      <button className={classes.tagbtnsrc7}>Les deux</button>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.rowscontain}>
                <Grid container width="100%">
                  <Grid sm={12} md={6} lg={4}>
                    <div className={classes.leftbox}>
                      <Typography className={classes.typograp}>
                        Durée du projet
                      </Typography>
                    </div>
                  </Grid>
                  <Grid sm={12} md={6} lg={8}>
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
                  <Grid sm={12} md={6} lg={4}>
                    <div className={classes.leftbox}>
                      <Typography style={{ padding: "17px", height: "46px" }}>
                        Depart du projet
                      </Typography>
                    </div>
                  </Grid>
                  <Grid sm={12} md={6} lg={8}>
                    <div className={classes.tagContainerlast}>
                      <button className={classes.tagbtnsrc7}>
                        Des que possible
                      </button>
                      <button className={classes.tagbtnsrc7}>
                        La semaine prochaine
                      </button>
                      <button className={classes.tagbtnsrc7}>
                        Dans 2/3 semaines
                      </button>
                      <button className={classes.tagbtnsrc7}>
                        Le mois prochain
                      </button>
                      <button className={classes.tagbtnsrc7}>
                        Dans plusieurs mois
                      </button>
                      <button className={classes.tagbtnsrc7}>
                        Je ne sais pas
                      </button>
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
