import React from "react";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/styles";
import { useStyles } from "./categoryStyle";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
const Step1 = ({ bg, handleChange, onContinue }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item md={8} className={classes.col_1}>
            <div style={{ width: "88%" }}>
              <p className={classes.category}>Ma catégorie</p>
              <div className={classes.divider} style={{ width: "56px" }}></div>
              <p className={classes.description}>
                Choisissez jusqu’a 2 catégories professionnelles, la première
                catégorie est la principale :
              </p>
              <br />
              <div>
                <Grid container rowSpacing={1}>
                  <Grid
                    item
                    md={4}
                    onClick={() => {
                      handleChange("Expertise");
                    }}
                  >
                    <div
                      className={`${classes.innerGrid} ${
                        bg === "Expertise" ? classes.bgColor : ""
                      }`}
                    >
                      <img src={"./src/public/expertise.png"} />
                      <p
                        className={` ${
                          bg === "Expertise"
                            ? classes.jobTitle2
                            : classes.jobTitle
                        }`}
                      >
                        Expertise Conseil
                      </p>
                    </div>
                  </Grid>
                  <Grid
                    item
                    md={4}
                    onClick={() => {
                      handleChange("Gestion");
                    }}
                  >
                    <div
                      className={`${classes.innerGrid} ${
                        bg === "Gestion" ? classes.bgColor : ""
                      }`}
                    >
                      <img
                        src={
                          bg === "Gestion"
                            ? "./src/public/Gestion2.png"
                            : "./src/public/Gestion.png"
                        }
                      />
                      <p
                        className={` ${
                          bg === "Gestion"
                            ? classes.jobTitle2
                            : classes.jobTitle
                        }`}
                      >
                        Gestion de Projet
                      </p>
                    </div>
                  </Grid>
                  <Grid
                    item
                    md={4}
                    onClick={() => {
                      handleChange("IT");
                    }}
                  >
                    <div
                      className={`${classes.innerGrid} ${
                        bg === "IT" ? classes.bgColor : ""
                      }`}
                    >
                      <img src={"./src/public/IT.png"} />
                      <p
                        className={` ${
                          bg === "IT" ? classes.jobTitle2 : classes.jobTitle
                        }`}
                      >
                        Gestion de projet IT
                      </p>
                    </div>
                  </Grid>
                  <Grid
                    item
                    md={4}
                    onClick={() => {
                      handleChange("Transition");
                    }}
                  >
                    <div
                      className={`${classes.innerGrid} ${
                        bg === "Transition" ? classes.bgColor : ""
                      }`}
                    >
                      <img src={"./src/public/Transition.png"} />
                      <p
                        className={` ${
                          bg === "Transition"
                            ? classes.jobTitle2
                            : classes.jobTitle
                        }`}
                      >
                        Transition Digitale
                      </p>
                    </div>
                  </Grid>
                  <Grid
                    item
                    md={4}
                    onClick={() => {
                      handleChange("Coaching");
                    }}
                  >
                    <div
                      className={`${classes.innerGrid} ${
                        bg === "Coaching" ? classes.bgColor : ""
                      }`}
                    >
                      <img src={"./src/public/Coaching.png"} />
                      <p
                        className={` ${
                          bg === "Coaching"
                            ? classes.jobTitle2
                            : classes.jobTitle
                        }`}
                      >
                        Formation Coatching
                      </p>
                    </div>
                  </Grid>
                  <Grid
                    item
                    md={4}
                    onClick={() => {
                      handleChange("Audit");
                    }}
                  >
                    <div
                      className={`${classes.innerGrid} ${
                        bg === "Audit" ? classes.bgColor : ""
                      }`}
                    >
                      <img src={"./src/public/Audit.png"} />
                      <p
                        className={` ${
                          bg === "Audit" ? classes.jobTitle2 : classes.jobTitle
                        }`}
                      >
                        Audit RH/SIRH
                      </p>
                    </div>
                  </Grid>
                </Grid>
                <br />
                <Button
                  variant="contained"
                  disabled={bg ? false : true}
                  className={classes.submitBtn}
                  onClick={() => {
                    onContinue();
                  }}
                >
                  Continuer
                </Button>
                <Button
                  variant="contained"
                  className={classes.btn}
                  style={{ display: !bg && "none" }}
                >
                  Précédent
                </Button>
              </div>
            </div>
          </Grid>
          <Grid
            item
            md={4}
            className={`${bg ? classes.sideDiv : classes.col_2}`}
          >
            <div className={classes.sideText}>
              <p className={`${bg ? classes.hide : classes.show}`}>
                Sélectionner une catégorie pour faire apparaitre les
                spécialisations
              </p>
              <div style={{ display: bg ? "block" : "none" }}>
                <p className={classes.sideTextTerm1}>
                  Quelles Spécialisation possédez-vous ?
                </p>
                <br />
                <p className={classes.sideTextTerm2}>
                  <Checkbox {...label} className={classes.checkBox} /> Structure
                  organisationnelle
                </p>
                <p className={classes.sideTextTerm2}>
                  <Checkbox {...label} className={classes.checkBox} /> Etudes
                  sectorielles et analyse de cible
                </p>
                <p className={classes.sideTextTerm2}>
                  <Checkbox {...label} className={classes.checkBox} />{" "}
                  Optimisation de la performance & Gestion des processus
                </p>
                <p className={classes.sideTextTerm2}>
                  <Checkbox {...label} className={classes.checkBox} /> Pilotage
                  de programme ou projet et PMO …
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Step1;
