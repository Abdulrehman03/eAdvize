import React from "react";
import { Container, Grid, Button } from "@mui/material";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import structure from "../../../Assests/landing/structure.png";
import Man from "../../../Assests/landing/man.png";
import Search from "../../../Assests/landing/search.png";
import Reload from "../../../Assests/landing/reload.png";
import Group from "../../../Assests/landing/group.png";
import GroupB from "../../../Assests/landing/groupB.png";
import RocketG from "../../../Assests/landing/rocketg.png";
import Rocket from "../../../Assests/landing/rocket.png";
import Women from "../../../Assests/landing/women.png";
import Bulb from "../../../Assests/landing/bulb.png";
import Target from "../../../Assests/landing/target.png";
import { useTheme } from "@mui/styles";
import { useStyles } from "./style";
import useMediaQuery from "@mui/material/useMediaQuery";

import landingTable from "../../../Assests/landing/landingTable.png";
export const TableContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const matches = useMediaQuery("(max-width:768px)");
  return (
    <div>
      <Container
        className={classes.TableContent}
        style={{
          display: matches ? "none" : "block",
          marginBottom: matches ? "30px !important" : "100px",
        }}
      >
        <p className={classes.section2}>
          <span className={classes.subtile}>
            Exclu ESN
            <BoltOutlinedIcon />
            Freelances
          </span>
          &nbsp; Grace à notre bourse d’intercontrats
        </p>
        <p className={classes.sectionTwoText}>
          Nous faisons matcher vous besoins avec les offres du marché !
        </p>
        <br />
        <div>
          <img src={landingTable} width="100%" />
        </div>
      </Container>
      <section style={{ backgroundColor: "#00ffba" }}>
        <Container>
          <Grid container sx={{ display: { xs: "none", md: "block" } }}>
            <div>
              <Grid item md={12}>
                <Grid container>
                  <Grid item md={8}>
                    <h1 className={classes.heading2}>Comment ça marche ? </h1>
                    <div
                      className={classes.divider2}
                      style={{ width: "56px" }}
                    ></div>
                  </Grid>
                  <Grid item md={4}>
                    <Button
                      className={classes.greenOutlinedButton2}
                      endIcon={<ArrowForwardIcon />}
                    >
                      Je recherche un Freelance
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <img src={structure} width="100%" />
            </div>
          </Grid>
        </Container>
      </section>
      {/* Comment ça marche ? mobile */}
      <section className={classes.Comment_marche_section}>
        <Container>
          <div className={classes.Comment_marche_heading_mobile_top}>
            <h1 className={classes.heading2} style={{ textAlign: "center" }}>
              Comment ça marche ?{" "}
            </h1>
            <div className={classes.divider2} style={{ width: "56px" }}></div>
          </div>
          <Grid container justifyContent="center" mt={10}>
            <Grid
              item
              sx={{ display: { xs: "flex", md: "none" } }}
              xs={12}
              className={classes.step1}
            >
              <div>
                <img src={Man} />
                <div className={classes.parent}>
                  <span className={classes.heading_stepper}>
                    Description projet et profil
                  </span>
                </div>
              </div>
            </Grid>
            <Grid
              item
              sx={{ display: { xs: "flex", md: "none" } }}
              xs={12}
              mt={5}
              className={classes.step2}
            >
              <div>
                <div className={classes.freelance}>
                  <img src={Search} />
                </div>

                <div className={classes.parent}>
                  <span className={classes.heading_stepper}>
                    Sélection de 3 profils
                  </span>
                  <p className={classes.detail}>
                    BeAdvize s’occupe de la vérification légale des freelances,
                    et gère la logistique contractuelle et de facturation
                  </p>
                </div>
              </div>
            </Grid>
            <Grid
              item
              sx={{ display: { xs: "flex", md: "none" } }}
              xs={12}
              mt={5}
              className={classes.step3}
            >
              <div>
                <img src={Group} />

                <div className={classes.parent}>
                  <span className={classes.heading_stepper}>
                    Dès que ça marche !
                  </span>
                  <p className={classes.detail}>
                    BeAdvize n’est pas une simple marketplace de mise en
                    relation, mais une vraie structure de conseil qui vous
                    apporte l’accompagnement nécessaire pour bien identifier vos
                    besoins et vous accompagner dans votre recherche de mission.
                  </p>
                </div>
              </div>
            </Grid>
            {/* 4 */}
            <Grid
              item
              sx={{ display: { xs: "flex", md: "none" } }}
              xs={12}
              mt={5}
              className={classes.step3}
            >
              <div>
                <img src={Reload} />

                <div className={classes.parent}>
                  <span className={classes.heading_stepper}>
                    Dès que ça marche !
                  </span>
                  <p className={classes.detail}>
                    BeAdvize n’est pas une simple marketplace de mise en
                    relation, mais une vraie structure de conseil qui vous
                    apporte l’accompagnement nécessaire pour bien identifier vos
                    besoins et vous accompagner dans votre recherche de mission.
                  </p>
                </div>
              </div>
            </Grid>
            {/* 5 */}
            <Grid
              item
              sx={{ display: { xs: "flex", md: "none" } }}
              xs={12}
              mt={5}
              className={classes.step3}
            >
              <div>
                <img src={RocketG} />

                <div className={classes.parent}>
                  <span className={classes.heading_stepper}>
                    Dès que ça marche !
                  </span>
                  <p className={classes.detail}>
                    BeAdvize n’est pas une simple marketplace de mise en
                    relation, mais une vraie structure de conseil qui vous
                    apporte l’accompagnement nécessaire pour bien identifier vos
                    besoins et vous accompagner dans votre recherche de mission.
                  </p>
                </div>
              </div>
            </Grid>
            {/* 6 */}
            <Grid
              item
              sx={{ display: { xs: "flex", md: "none" } }}
              xs={12}
              mt={5}
              className={classes.step3}
            >
              <div>
                <img src={Women} />

                <div className={classes.parent}>
                  <span className={classes.heading_stepper2}>
                    Dès que ça marche !
                  </span>
                  <p className={classes.detail}>
                    BeAdvize n’est pas une simple marketplace de mise en
                    relation, mais une vraie structure de conseil qui vous
                    apporte l’accompagnement nécessaire pour bien identifier vos
                    besoins et vous accompagner dans votre recherche de mission.
                  </p>
                </div>
              </div>
            </Grid>
            {/* 7 */}
            <Grid
              item
              sx={{ display: { xs: "flex", md: "none" } }}
              xs={12}
              mt={5}
              className={classes.step3}
            >
              <div>
                <img src={Bulb} />

                <div className={classes.parent}>
                  <span className={classes.heading_stepper2}>
                    Dès que ça marche !
                  </span>
                  <p className={classes.detail}>
                    BeAdvize n’est pas une simple marketplace de mise en
                    relation, mais une vraie structure de conseil qui vous
                    apporte l’accompagnement nécessaire pour bien identifier vos
                    besoins et vous accompagner dans votre recherche de mission.
                  </p>
                </div>
              </div>
            </Grid>
            {/* 8 */}
            <Grid
              item
              sx={{ display: { xs: "flex", md: "none" } }}
              xs={12}
              mt={5}
              className={classes.step3}
            >
              <div>
                <img src={GroupB} />

                <div className={classes.parent}>
                  <span className={classes.heading_stepper2}>
                    Dès que ça marche !
                  </span>
                  <p className={classes.detail}>
                    BeAdvize n’est pas une simple marketplace de mise en
                    relation, mais une vraie structure de conseil qui vous
                    apporte l’accompagnement nécessaire pour bien identifier vos
                    besoins et vous accompagner dans votre recherche de mission.
                  </p>
                </div>
              </div>
            </Grid>
            {/* 9 */}
            <Grid
              item
              sx={{ display: { xs: "flex", md: "none" } }}
              xs={12}
              mt={5}
              className={classes.step3}
            >
              <div>
                <img src={Target} />

                <div className={classes.parent}>
                  <span className={classes.heading_stepper2}>
                    Dès que ça marche !
                  </span>
                  <p className={classes.detail}>
                    BeAdvize n’est pas une simple marketplace de mise en
                    relation, mais une vraie structure de conseil qui vous
                    apporte l’accompagnement nécessaire pour bien identifier vos
                    besoins et vous accompagner dans votre recherche de mission.
                  </p>
                </div>
              </div>
            </Grid>
            {/* 10 */}
            <Grid
              item
              sx={{ display: { xs: "flex", md: "none" } }}
              xs={12}
              mt={5}
              className={classes.step3}
            >
              <div>
                <img src={Rocket} />

                <div className={classes.parent}>
                  <span className={classes.heading_stepper2}>
                    Dès que ça marche !
                  </span>
                </div>
              </div>
            </Grid>

            {/* 10 */}
            <Grid
              item
              sx={{ display: { xs: "flex", md: "none" } }}
              xs={12}
              mt={5}
              className={classes.step3}
            >
              <Button className={classes.greenFilledButton}>
                Je suis Freelance
              </Button>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
};
export default TableContent;
