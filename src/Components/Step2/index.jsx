import React from "react";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/styles";
import { useStyles } from "./Category2Style";
import Button from "@mui/material/Button";
import CategorieCard from "../../public/categorie.svg";
import TextField from "@mui/material/TextField";

const Step2 = ({ finalStep }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item md={12} className={classes.col_1}>
          <div style={{ width: "88%" }}>
            <p className={classes.category}>Mon profil BeAdvize</p>
            <div className={classes.divider} style={{ width: "56px" }}></div>
            <br />
            <div>
              <Grid container rowSpacing={1} className={classes.innerGridGroup}>
                <Grid item md={6}>
                  <div className={`${classes.innerGrid}`}>
                    <p className={classes.jobTitle}>Votre Catégorie</p>
                    <img src={CategorieCard} />
                    <p className={classes.jobTitle2}>Chef de Projet</p>
                  </div>
                </Grid>
                <Grid item md={6}>
                  <div className={classes.innerGrid}>
                    <p className={classes.jobTitle}>Votre Spécialisation</p>
                    <p className={classes.jobTitleText}>
                      Structure organisationnelle <br /> Etudes sectorielles et
                      analyse de cible
                    </p>
                  </div>
                </Grid>
              </Grid>
              <br />

              <Grid container rowSpacing={1}>
                <Grid item md={4} className={classes.innerGridGroupTextFields}>
                  <div className={classes.innerGridTextFields}>
                    <p className={classes.jobTitleTextFields}>
                      Titre de votre profil
                    </p>
                  </div>
                </Grid>
                <Grid item md={8} className={classes.innerGridGroupTextFields2}>
                  <div className={classes.textFieldGroup}>
                    <TextField
                      id="outlined-basic"
                      placeholder="Prénom"
                      variant="outlined"
                      className={classes.textField}
                    />
                  </div>
                </Grid>
              </Grid>
              <br />

              <Grid container rowSpacing={1}>
                <Grid item md={4} className={classes.innerGridGroupTextFields}>
                  <div className={classes.innerGridTextFields}>
                    <p className={classes.jobTitleTextFields}>
                      Zone Géographique
                    </p>
                  </div>
                </Grid>
                <Grid item md={8} className={classes.innerGridGroupTextFields2}>
                  <div className={classes.textFieldGroup}>
                    <TextField
                      id="outlined-basic"
                      placeholder="Prénom"
                      variant="outlined"
                      className={classes.textField}
                    />
                  </div>
                </Grid>
              </Grid>
              <br />

              <Grid container rowSpacing={1}>
                <Grid item md={4} className={classes.innerGridGroupTextFields}>
                  <div className={classes.innerGridTextFields}>
                    <p className={classes.jobTitleTextFields}>
                      `Niveau d'expérience`
                    </p>
                  </div>
                </Grid>
                <Grid
                  item
                  md={8}
                  className={classes.innerGridGroupExperienceField}
                >
                  <ul className={classes.displayExperience}>
                    <li>1-2 ans</li>
                    <li>3-5 ans</li>
                    <li>{">"}5 ans</li>
                  </ul>
                </Grid>
              </Grid>
              <br />

              <Grid container rowSpacing={1}>
                <Grid
                  item
                  md={12}
                  className={classes.innerGridGroupCompétencesTextFields}
                >
                  <div>
                    <p className={classes.jobTitleTextFields}>
                      Vos Compétences
                    </p>
                  </div>
                  <br /> <br />
                  <div className={classes.textFieldGroupCompétences}>
                    <TextField
                      id="outlined-basic"
                      placeholder=" "
                      variant="outlined"
                      className={classes.textFieldGroupCompétences}
                    />
                  </div>
                </Grid>
              </Grid>
              <br />

              <Grid container rowSpacing={1}>
                <Grid item md={4} className={classes.innerGridGroupTextFields}>
                  <div className={classes.innerGridTextFields}>
                    <p className={classes.jobTitleTextFields}>
                      Votre téléphone
                    </p>
                  </div>
                </Grid>
                <Grid item md={8} className={classes.innerGridGroupTextFields2}>
                  <div className={classes.textFieldGroup}>
                    <TextField
                      id="outlined-basic"
                      placeholder="Prénom"
                      variant="outlined"
                      className={classes.textField}
                    />
                  </div>
                </Grid>
              </Grid>
              <br />
              <Button
                variant="contained"
                disabled={true}
                className={classes.btn}
              >
                Retour aux catégories
              </Button>
              <Button
                variant="contained"
                className={classes.submitBtn}
                onClick={finalStep}
              >
                Continuer
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Step2;
