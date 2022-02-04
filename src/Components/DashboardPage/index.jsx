import React from "react";
import { useTheme } from "@mui/styles";
import { useStyles } from "./DashboardStyle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Grid from "@mui/material/Grid";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Container, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Linear_graph from "../../Assests/dashboard/linear_graph.png";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

let barData = [
  {
    description: "Disponibilité à confirmer",
  },
  {
    description: "Nouvelle Proposition de mission reçue",
  },
  {
    description:
      "Votre profil est rempli à 75%, complétez votre profil pour améliorer vos chances de sélection",
  },
];

const Dashboard = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <>
      {/* top bar data */}
      {barData.map((item) => {
        return (
          <>
            <section className={classes.topBarData}>
              <Container>
                <div>
                  <h4>
                    {item.description} &nbsp; <ErrorOutlineIcon />
                  </h4>
                </div>
              </Container>
            </section>
          </>
        );
      })}
      {/*  */}
      <div className={classes.mainContent}>
        <div className={classes.contentWrapper}>
          <Grid container spacing={2}>
            <Grid item md={4}>
              <div className={classes.contentWrapOne}>
                <div className={classes.boxWrapper}>
                  <div className={classes.boxWrapOne}>
                    <div className={classes.spaceWrapper}>
                      <Grid container spacing={1}>
                        <Grid item md={3}>
                          <AccountCircleIcon
                            className={classes.accountCircle}
                          />
                        </Grid>
                        <Grid item md={5}>
                          <p className={classes.AccountWrapperText}>
                            Profil rempli à
                          </p>
                          <Button
                            variant="contained"
                            className={classes.AccountWrapperButton}
                          >
                            Compléter
                          </Button>
                        </Grid>
                        <Grid item md={4}>

                          <div style={{ width: 60, height: 60  , marginLeft : "1rem"}}>
                            <CircularProgressbar value={66} text={`45%`} strokeWidth={12} />
                          </div>
                        </Grid>
                      </Grid>
                      <h2 className={classes.boxNameHeading}>Arthur Smith </h2>
                      <h3 className={classes.boxDataHeading}>Coach Agile</h3>
                      <div
                        className={classes.divider}
                        style={{ width: "56px" }}
                      ></div>
                      <div style={{ border: '2px solid #143D66', marginTop: '10px', padding: '10px 0', textAlign: 'center' }} className={classes.contentWrapData}>
                        <p className={classes.boxOnePara}>
                          Actuellement indisponible
                        </p>
                        <Button variant="contained">
                          Mettre à jour
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className={classes.boxWrapThree}>
                    <div className={classes.spaceWrapper}>
                      <div className={classes.slideHeading}>
                        <p className={classes.boxThreeHeading}>
                          Mes préférences de mission
                        </p>
                        <EditOutlinedIcon />
                      </div>
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
                      <p className={classes.boxFourHeading}>Mes compétences</p>
                      <div
                        className={classes.dividerBlue}
                        style={{ width: "56px" }}
                      ></div>
                      <div className={classes.boxFourGroup}>
                        <p className={classes.boxFourSpan}>#Agile</p>
                        <p className={classes.boxFourSpan}>#Scrum</p>
                      </div>
                      <div className={classes.boxFourGroup}>
                        <p className={classes.boxFourSpan}>#Sprint</p>
                        <p className={classes.boxFourSpan}>#Formation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            {/* right area */}
            <Grid item md={8}>
              <div className={classes.contentWrapTwo}>
                <div className={classes.slideTwoWrap}>
                  <div className={classes.spaceWrapper}>
                    <div className={classes.slideHeading}>
                      <p className={classes.headingWrapper}>Mes Missions</p>
                    </div>
                    <div
                      className={classes.dividerBlue}
                      style={{ width: "56px" }}
                    ></div>
                    <div style={{ marginTop: "1.5rem" }}>
                      <p className={classes.headingWrapper}>
                        {" "}
                        <AccountTreeIcon /> À L’ÉTUDE
                      </p>
                    </div>
                    <div>
                      <h4 className={classes.headingIcon}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17.743"
                          height="15.82"
                          viewBox="0 0 17.743 15.82"
                        >
                          <path
                            id="Path_19282"
                            data-name="Path 19282"
                            d="M5805.514,3231.891a5.041,5.041,0,0,0-1.954-3.264,5.3,5.3,0,0,0-3.414-1.1c-1.363.03-5.116.015-10.239,0a2,2,0,0,0-.209.005,2.07,2.07,0,0,0-.99.353,1.856,1.856,0,0,0-.7.834,1.672,1.672,0,0,0-.11.638v13.986l6.376-4.8h6.224a5.811,5.811,0,0,0,1.755-.409,5.642,5.642,0,0,0,1.9-1.252,5.547,5.547,0,0,0,1.357-2.574A5.725,5.725,0,0,0,5805.514,3231.891Zm-2.708,1.269a2.594,2.594,0,0,1-1.28,2.147,3.077,3.077,0,0,1-1.457.462h-6.815l-2.58,2.024q.01-3.784.018-7.567h9.523a2.312,2.312,0,0,1,1.89.746,2.548,2.548,0,0,1,.526.912A3.075,3.075,0,0,1,5802.806,3233.161Z"
                            transform="translate(-5787.896 -3227.525)"
                            fill="#143d66"
                          />
                        </svg>{" "}
                        Les propositions que j’ai reçu :{" "}
                        <span className={classes.headingSpanText}>
                          À traiter {" "} <NotificationsActiveIcon style={{ color: 'red' }} />
                        </span>
                      </h4>
                      <div className={classes.letudeTextRow}>
                        <p>Lorem ipsum dolor sit amet, consetetur</p>
                        <p>Forfait</p>
                        <p>3 a 5 mois</p>
                        <Button
                          variant="contained"
                          className={classes.letudeButtonGreen}
                        >
                          Voir mission
                        </Button>
                      </div>
                    </div>
                    {/* 2nd line */}
                    <div>
                      <h4 className={classes.headingIcon}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17.743"
                          height="15.82"
                          viewBox="0 0 17.743 15.82"
                        >
                          <path
                            id="Path_19282"
                            data-name="Path 19282"
                            d="M5805.514,3231.891a5.041,5.041,0,0,0-1.954-3.264,5.3,5.3,0,0,0-3.414-1.1c-1.363.03-5.116.015-10.239,0a2,2,0,0,0-.209.005,2.07,2.07,0,0,0-.99.353,1.856,1.856,0,0,0-.7.834,1.672,1.672,0,0,0-.11.638v13.986l6.376-4.8h6.224a5.811,5.811,0,0,0,1.755-.409,5.642,5.642,0,0,0,1.9-1.252,5.547,5.547,0,0,0,1.357-2.574A5.725,5.725,0,0,0,5805.514,3231.891Zm-2.708,1.269a2.594,2.594,0,0,1-1.28,2.147,3.077,3.077,0,0,1-1.457.462h-6.815l-2.58,2.024q.01-3.784.018-7.567h9.523a2.312,2.312,0,0,1,1.89.746,2.548,2.548,0,0,1,.526.912A3.075,3.075,0,0,1,5802.806,3233.161Z"
                            transform="translate(-5787.896 -3227.525)"
                            fill="#143d66"
                          />
                        </svg>{" "}
                        Les candidatures que j’ai envoyé : en délibération
                      </h4>
                      <div className={classes.letudeTextRowBlue}>
                        <p>Lorem ipsum dolor sit amet, consetetur</p>
                        <p>Forfait</p>
                        <p>3 a 5 mois</p>
                        <Button
                          variant="contained"
                          className={classes.letudeButtonBlue}
                        >
                          Voir mission
                        </Button>
                      </div>
                      {/* 2nd text row line */}
                      <div style={{ margin: '5px 0 0' }} className={classes.letudeTextRowBlue}>
                        <p>Lorem ipsum dolor sit amet, consetetur</p>
                        <p>Forfait</p>
                        <p>3 a 5 mois</p>
                        <Button
                          variant="contained"
                          className={classes.letudeButtonBlue}
                        >
                          Voir mission
                        </Button>
                      </div>
                    </div>
                    {/* 3rd line */}
                    <div>
                      <h4 className={classes.headingIcon}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17.743"
                          height="15.82"
                          viewBox="0 0 17.743 15.82"
                        >
                          <path
                            id="Path_19282"
                            data-name="Path 19282"
                            d="M5805.514,3231.891a5.041,5.041,0,0,0-1.954-3.264,5.3,5.3,0,0,0-3.414-1.1c-1.363.03-5.116.015-10.239,0a2,2,0,0,0-.209.005,2.07,2.07,0,0,0-.99.353,1.856,1.856,0,0,0-.7.834,1.672,1.672,0,0,0-.11.638v13.986l6.376-4.8h6.224a5.811,5.811,0,0,0,1.755-.409,5.642,5.642,0,0,0,1.9-1.252,5.547,5.547,0,0,0,1.357-2.574A5.725,5.725,0,0,0,5805.514,3231.891Zm-2.708,1.269a2.594,2.594,0,0,1-1.28,2.147,3.077,3.077,0,0,1-1.457.462h-6.815l-2.58,2.024q.01-3.784.018-7.567h9.523a2.312,2.312,0,0,1,1.89.746,2.548,2.548,0,0,1,.526.912A3.075,3.075,0,0,1,5802.806,3233.161Z"
                            transform="translate(-5787.896 -3227.525)"
                            fill="#143d66"
                          />
                        </svg>{" "}
                        Les missions que j’ai proposé : validation en cours
                      </h4>
                      <div className={classes.letudeTextRowBlue}>
                        <p>Lorem ipsum dolor sit amet, consetetur</p>
                        <p>Forfait</p>
                        <p>3 a 5 mois</p>
                        <Button
                          variant="contained"
                          className={classes.letudeButtonBlue}
                        >
                          Voir mission
                        </Button>
                      </div>
                    </div>
                    <br />

                    {/* En cours line */}
                    <div style={{ marginTop: "1.5rem" }}>
                      <p className={classes.headingWrapper}>
                        {" "}
                        <AccountTreeIcon /> EN COURS
                      </p>
                    </div>
                    <div>
                      <div className={classes.letudeTextRowBlue}>
                        <p>Lorem ipsum dolor sit amet, consetetur</p>
                        <p>Forfait</p>
                        <p>3 a 5 mois</p>
                        <Button
                          variant="contained"
                          className={classes.letudeButtonBlue}
                        >
                          Voir mission
                        </Button>
                      </div>
                      {/* 2nd */}
                      <div style={{ margin: '5px 0 0' }} className={classes.letudeTextRowBlue}>
                        <p>Lorem ipsum dolor sit amet, consetetur</p>
                        <p>Forfait</p>
                        <p>3 a 5 mois</p>
                        <Button
                          variant="contained"
                          className={classes.letudeButtonBlue}
                        >
                          Voir mission
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.slideThreeWrap}>
                  <div className={classes.slideThreeWrapBottomLine}></div>
                  <div className={classes.spaceWrapper}>
                    <div classsName={classes.asideWrapper}>
                      <div className={classes.asideOneWrap}>
                        <Grid container>
                          <Grid item md={6}>
                            <div className={classes.featuredHeading}>
                              Je souhaite utiliser BeAdvize avec mes clients
                            </div>
                          </Grid>
                          <Grid item md={3}>
                            <Button variant="outlined">Les avantages</Button>
                          </Grid>
                          <Grid item md={3}>
                            <Button variant="outlined">
                              Créer une mission
                            </Button>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </div>
                </div>
                <Grid container spacing={1}>
                  <Grid item md={4}>
                    <div className={classes.slideFourWrap}>
                      <div className={classes.spaceWrapper}>
                        <p className={classes.headingWrapper}>Mon entreprise</p>
                        <div
                          className={classes.dividerBlue}
                          style={{ width: "56px" }}
                        ></div>
                        <div className={classes.slideIndex}>
                          <div className={classes.slideHeadingMonEnterprise}>
                            <p
                              style={{ marginTop: "1rem" }}
                              className={classes.slideEnter}
                            >
                              Nom
                            </p>
                            <div style={{ marginTop: "1rem" }}>
                              <DoneIcon style={{ color: "#04C38F" }} />
                            </div>
                          </div>
                          <div className={classes.slideHeadingMonEnterprise}>
                            <p
                              style={{ marginTop: "0.5rem" }}
                              className={classes.slideEnter}
                            >
                              Forme juridique
                            </p>
                            <div style={{ marginTop: "0.5rem" }}>
                              <DoneIcon style={{ color: "#04C38F" }} />
                            </div>
                          </div>
                          <div className={classes.slideHeadingMonEnterprise}>
                            <p
                              style={{ marginTop: "1rem" }}
                              className={classes.slideEnter}
                            >
                              Coordonnées bancaires
                            </p>
                            <div style={{ marginTop: "1rem" }}>
                              <ClearIcon style={{ color: "#FF0202" }} />
                            </div>
                          </div>
                          <div
                            style={{ marginTop: "1rem" }}
                            className={classes.slideHeadingMonEnterprise}
                          >
                            <Button
                              variant="outlined"
                              className={classes.ModifierBtn}
                            >
                              Modifier / Ajouter
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={8}>
                    <div className={classes.slideFiveWrap}>
                      <div className={classes.spaceWrapper}>
                        <div className={classes.slideConnect}>
                          <p className={classes.headingWrapper}>
                            Mon Chiffre d’affaires
                          </p>
                          <div
                            className={classes.dividerBlue}
                            style={{ width: "56px" }}
                          ></div>
                          <div className={classes.profileWrapper}>
                            <p
                              style={{
                                display: "inline-block",
                                marginTop: "1rem",
                              }}
                              className={classes.ecoleHeading}
                            >
                              Mission en cours{" "}
                              <p
                                style={{ marginTop: "0px" }}
                                className={classes.ecoleHeadingText}
                              >
                                19 450,00 €
                              </p>
                            </p>
                          </div>
                          {/* 2nd */}
                          <div className={classes.profileWrapper}>
                            <p
                              style={{
                                display: "inline-block",
                                marginTop: "1rem",
                              }}
                              className={classes.ecoleHeading}
                            >
                              Mission en cours{" "}
                              <p
                                style={{ marginTop: "0px" }}
                                className={classes.ecoleHeadingText}
                              >
                                19 450,00 €
                              </p>
                            </p>
                            <img src={Linear_graph} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
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

export default Dashboard;
