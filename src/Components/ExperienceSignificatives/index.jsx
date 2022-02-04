import React from "react";
import { useTheme } from "@mui/styles";
import { useStyles } from "./ExperienceSignificatives";
import Grid from "@mui/material/Grid";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Profile from "../../Assests/profile.png";
import CloseIcon from "@mui/icons-material/Close";
import Twitter from "../../Assests/twitter.png";
import Linkedin from "../../Assests/linkedin.png";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const index = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <>
      <div className={classes.mainContent}>
        <div className={classes.contentWrapper}>
          <Grid container spacing={2}>
            <Grid item md={4}>
              <div className={classes.contentWrapOne}>
                <div className={classes.boxWrapper}>
                  <div className={classes.boxWrapOne}>
                    <div className={classes.spaceWrapper}>
                      <img
                        src={Profile}
                        alt=""
                        className={classes.accountCircle}
                      />
                      <h2 className={classes.boxNameHeading}>Arthur Smith </h2>
                      <h3 className={classes.boxDataHeading}>Coach Agile</h3>
                      <div
                        className={classes.divider}
                        style={{ width: "56px" }}
                      ></div>
                      <div className={classes.contentWrapData}>
                        <p className={classes.boxOnePara}>
                          <span className={classes.circle}></span>
                          &nbsp; Actuellement indisponible
                        </p>
                        <span className={classes.boxSpanPara}>
                          Mettre à jour sur le
                          <a href="#" className={classes.boxHrefPara}>
                            Dasboard
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={classes.boxWrapTwo}>
                    <div className={classes.spaceOneWrapper}>
                      <p className={classes.boxTwoHeading}>
                        Profil complété à
                        <span className={classes.boxTwoSpan}> 75%</span>
                      </p>
                      <div
                        className={classes.dividerBlue}
                        style={{ width: "56px" }}
                      ></div>
                      <p className={classes.boxTwoContent}>
                        Finaliser mon profil en complétant ces informations :
                      </p>
                      <p className={classes.boxTwoColor}>
                        <CloseIcon
                          style={{
                            color: "red !important",
                            verticalAlign: "middle",
                            fontWeight: "bold",
                          }}
                        />
                        &nbsp; Expériences significatives
                      </p>
                      <p className={classes.boxTwoColor}>
                        <CloseIcon
                          style={{
                            color: "red !important",
                            verticalAlign: "middle",
                            fontWeight: "bold",
                          }}
                        />
                        &nbsp;Diplômes
                      </p>
                    </div>
                  </div>
                  <div className={classes.boxWrapThree}>
                    <div className={classes.spaceWrapper}>
                      <p className={classes.boxThreeHeading}>
                        Mes préférences de mission
                      </p>
                      <div
                        className={classes.dividerBlue}
                        style={{ width: "56px" }}
                      ></div>
                      <p className={classes.boxThreeSpan}>
                        Zone d’activite{" "}
                        <span className={classes.boxThreePara}>Paris</span>
                      </p>
                      <p className={classes.boxThreeSpan}>
                        TJM <span className={classes.boxThreePara}>450 €</span>
                      </p>
                      <h5 className={classes.boxThreeSpan}>
                        Secteur d’activite{" "}
                        <p className={classes.boxThreePara}>
                          Organisation entreprise
                        </p>
                      </h5>
                    </div>
                  </div>
                  <div className={classes.boxWrapFour}>
                    <div className={classes.spaceWrapper}>
                      <p className={classes.boxFourHeading}>Mes diplômes</p>
                      <div
                        className={classes.dividerBlue}
                        style={{ width: "56px" }}
                      ></div>
                      <div className={classes.boxFourGroup}>
                        <span className={classes.boxFourSpan}>Ecole /Uni</span>
                        <h2 className={classes.boxFourDip}>Nom du diplôme</h2>
                        <p className={classes.boxFourPara}>2016</p>
                      </div>
                      <div className={classes.boxFourGroup}>
                        <span className={classes.boxFourSpan}>Ecole /Uni</span>
                        <h2 className={classes.boxFourDip}>Nom du diplôme</h2>
                        <p className={classes.boxFourPara}>2016</p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.boxWrapFive}>
                    <div className={classes.spaceWrapper}>
                      <p className={classes.boxFiveHeading}>Réseaux Sociaux</p>
                      <div
                        className={classes.dividerBlue}
                        style={{ width: "56px" }}
                      ></div>
                      <br />
                      <div>
                        <span>
                          <img src={Twitter} />
                        </span>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <span>
                          <img src={Linkedin} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item md={8}>
              <div className={classes.contentWrapTwo}>
                <div className={classes.slideWrapper}>
                  <div className={classes.spaceWrapper}>
                    <div className={classes.slideHeading}>
                      <p className={classes.headingWrapper}>Mes compétences</p>

                      <EditOutlinedIcon />
                    </div>
                    <div
                      className={classes.divider}
                      style={{ width: "56px" }}
                    ></div>
                    <p className={classes.tag}>
                      #Agile &nbsp; #Scrum &nbsp; #Agile &nbsp; #Scrum &nbsp;
                    </p>
                    <p className={classes.tag}>
                      #Sprint &nbsp; #Formation &nbsp; #Sprint &nbsp; #Formation
                      &nbsp;
                    </p>
                  </div>
                </div>
                <div className={classes.slideTwoWrap}>
                  <div className={classes.spaceWrapper}>
                    <div className={classes.slideHeading}>
                      <p className={classes.headingWrapper}>Ma présentation</p>

                      <EditOutlinedIcon />
                    </div>
                    <div
                      className={classes.divider}
                      style={{ width: "56px" }}
                    ></div>
                    <p className={classes.slideParaWrap}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor
                    </p>
                    <p className={classes.slideParaWrap}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor
                    </p>
                  </div>
                </div>
                <div className={classes.asideForm}>
                  <div className={classes.asideGroup}>
                    <Typography variant="h2" className={classes.asideHeading}>
                      Mes expériences significatives
                    </Typography>
                    <div
                      className={classes.divider}
                      style={{ width: "56px" }}
                    ></div>
                    <div className={classes.formGroup}>
                      <p className={classes.formHeading}>
                        Ajouter / modifiier une expérience
                      </p>
                      <Grid container mb={2} mt={2}>
                        <Grid item md={2}>
                          <p className={classes.formLabel}>Entreprise</p>
                        </Grid>
                        <Grid item md={10}>
                          <TextField
                            variant="outlined"
                            style={{
                              width: "100%",
                              padding: "0px",
                              border: "1px solid #143D66",
                              borderRadius: "5px",
                              outline: "none !important",
                            }}
                            className={classes.formInput}
                          />
                        </Grid>
                      </Grid>

                      <Grid container mt={2}>
                        <Grid item md={1}>
                          <p className={classes.formLabel}>Titre</p>
                        </Grid>
                        <Grid item md={11}>
                          <TextField
                            variant="outlined"
                            style={{
                              width: "100%",
                              padding: "0px",
                              border: "1px solid #143D66",
                              borderRadius: "5px",
                              outline: "none !important",
                            }}
                            className={classes.formInput}
                          />
                        </Grid>
                      </Grid>
                      <div className={classes.checkboxGroup}>
                        <div className={classes.checkboxGroupOne}>
                          <Checkbox />
                          <label className={classes.checkboxLabelText}>
                            En tant que free-lance
                          </label>
                        </div>
                        <div
                          className={classes.checkboxGroupTwo}
                          style={{ marginTop: "-10px" }}
                        >
                          <Checkbox />
                          <label className={classes.checkboxLabelText}>
                            J’occupe actuellement ce poste
                          </label>
                        </div>
                      </div>
                      <div className={classes.inputFieldGroup}>
                        <Grid container spacing={4}>
                          <Grid item md={6} className={classes.flexTextField}>
                            <p className={classes.formLabel}>Début</p>
                            <TextField
                              variant="outlined"
                              style={{
                                width: "100%",
                                padding: "0px",
                                border: "1px solid #143D66",
                                borderRadius: "5px",
                                outline: "none",
                              }}
                              className={classes.formInput}
                            />
                          </Grid>
                          <Grid item md={6} className={classes.flexTextField}>
                            <p className={classes.formLabel}>Titre</p>
                            <TextField
                              variant="outlined"
                              style={{
                                width: "100%",
                                padding: "0px",
                                border: "1px solid #143D66",
                                borderRadius: "5px",
                                outline: "none",
                              }}
                              className={classes.formInput}
                            />
                          </Grid>
                        </Grid>
                      </div>
                      <div className={classes.textAreaWrapper}>
                        <div className={classes.textAreaFieldOne}>
                          <p className={classes.textAreaPara}>Description</p>
                          <TextareaAutosize className={classes.textAreaField} />
                        </div>
                        <div className={classes.textAreaFieldTwo}>
                          <p className={classes.textAreaPara}>
                            Compétences mises en oeuvres
                          </p>
                          <TextareaAutosize className={classes.textAreaField} />
                        </div>
                      </div>
                      <div className={classes.boxWrapper}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                          style={{ paddingTop: "20px" }}
                        >
                          <div
                            className={classes.companyData}
                            style={{ display: "flex" }}
                          >
                            <DeleteOutlineIcon style={{ color: "#143D66" }} />
                            <p className={classes.companyText}>
                              &nbsp;Supprimer
                            </p>
                          </div>
                          <div style={{ display: "flex", gap: "17px" }}>
                            <Button
                              variant="outlined"
                              className={classes.btnOne}
                            >
                              Annuler
                            </Button>
                            <Button
                              variant="contained"
                              className={classes.btnTwo}
                            >
                              Valider
                            </Button>
                          </div>
                        </Box>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.slideFourWrap}>
                  <div className={classes.spaceWrapper}>
                    <p className={classes.headingWrapper}>Diplômes</p>
                    <div
                      className={classes.divider}
                      style={{ width: "56px" }}
                    ></div>
                    <div className={classes.slideIndex}>
                      <div className={classes.slideHeading}>
                        <p
                          style={{ marginTop: "1rem" }}
                          className={classes.slideEnter}
                        >
                          Nom du diplôme / cursus
                        </p>
                        <div style={{ marginTop: "1rem" }}>
                          <EditOutlinedIcon />
                        </div>
                      </div>
                      <h2 className={classes.ecoleHeading}>Ecole /Uni</h2>
                      <p className={classes.currentDate}>2016</p>
                      <br />
                      <div
                        className={classes.objectHeading}
                        style={{ marginBottom: "2rem" }}
                      >
                        <p className={classes.headingWrapper}>Certifications</p>
                        <div
                          className={classes.divider}
                          style={{ width: "56px" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.slideFiveWrap}>
                  <div className={classes.spaceWrapper}>
                    <div className={classes.slideConnect}>
                      <p className={classes.headingWrapper}>Mes avis</p>
                      <div
                        className={classes.divider}
                        style={{ width: "56px" }}
                      ></div>
                      <div className={classes.profileWrapper}>
                        <br />
                        <img src={Profile} className={classes.accountWrapper} />
                        <p
                          style={{
                            display: "inline-block",
                            paddingLeft: "10px",
                          }}
                          className={classes.ecoleHeading}
                        >
                          Nom du client{" "}
                          <p style={{ marginTop: "0px" }}>Entreprise</p>
                        </p>
                        <p className={classes.loremParagraph}>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos Lorem ipsum dolor sit amet.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default index;
