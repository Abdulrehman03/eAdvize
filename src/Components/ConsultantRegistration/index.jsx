import React from "react";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { useStyles } from "./consultantRegistrationStyle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ConsultantRegistration = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <>
      <div>
        <div className={classes.eAdvizeConsultantReg_topContainer}>
          <div className={classes.eAdvizeConsultantReg_topContent}>
            <Container>
              <div style={{ textAlign: "center" }}>
                <div className={classes.eAdvizeConsultantReg_insideContent}>
                  <div
                    className={classes.eAdvizeConsultantReg_insideContentFlex}
                  >
                    {/*  */}
                    <Typography variant="h5" className={classes.title}>
                      Je crée mon compte BeAdvize
                    </Typography>
                    <Typography variant="body2" className={classes.subHead}>
                      Déjà inscrit ? <strong>Connectez-vous</strong>
                    </Typography>
                    <div className={classes.btngroup}>
                      <div style={{ marginRight: "0.5rem" }}>
                        <Button
                          variant="contained"
                          className={classes.google}
                          startIcon={<GoogleIcon />}
                        >
                          Connexion avec Google
                        </Button>
                      </div>
                      <div>
                        <Button
                          variant="contained"
                          className={classes.Linkedin}
                          startIcon={<LinkedInIcon />}
                        >
                          Connexion avec Linkedin
                        </Button>
                      </div>
                    </div>

                    <div className={classes.textFieldGroup}>
                      <TextField
                        id="outlined-basic"
                        placeholder="Prénom"
                        variant="outlined"
                        className={classes.textField}
                      />
                    </div>
                    <div className={classes.textFieldGroup}>
                      <TextField
                        id="outlined-basic"
                        placeholder="Nom"
                        variant="outlined"
                        className={classes.textField}
                      />
                    </div>
                    <div className={classes.textFieldGroup}>
                      <TextField
                        id="outlined-basic"
                        placeholder="E-mail professionnel"
                        variant="outlined"
                        type="email"
                        className={classes.textField}
                      />
                    </div>
                    <div className={classes.textFieldGroup}>
                      <TextField
                        id="outlined-basic"
                        placeholder="Téléphone (optionnel)"
                        variant="outlined"
                        type="number"
                        className={classes.textField}
                      />
                    </div>
                    <div className={classes.textFieldGroup}>
                      <TextField
                        id="outlined-basic"
                        placeholder="Mot de passe"
                        variant="outlined"
                        className={classes.textField}
                      />
                    </div>

                    <ul className={classes.displayCharacterSec}>
                      <li>{">"} 8 caracteres</li>
                      <li>1 majuscule</li>
                      <li>1 caractère special</li>
                    </ul>

                    <Typography
                      variant="body2"
                      className={classes.subTextFields}
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt
                    </Typography>

                    <Typography
                      variant="body2"
                      className={classes.subTextFields}
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr
                    </Typography>

                    <Link to="/category">
                      <Button variant="contained" className={classes.button}>
                        S’inscrire sur BeAdvize
                      </Button>
                    </Link>
                  </div>
                  {/*  */}
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultantRegistration;
