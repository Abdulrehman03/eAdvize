import * as React from "react";
import { useStyles } from "./VousFreelanceStyle";
import { Container, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/styles";
import Vous_freelance from "../../../Assests/Vous_freelance1.png";
import Vous_freelance_facture from "../../../Assests/vous_freelance_facture.png";
import Vous_freelance_une_plateforme from "../../../Assests/vous_freelance_une_plateforme.png";
import Free from "../../../Assests/free.png";
import Vous_freelance_talk from "../../../Assests/vous_freelance_talk.png";
import Vous_freelance_document from "../../../Assests/vous_freelance_document.png";
import Interprice_setting from "../../../Assests/interprice_setting.png";
import People from "../../../Assests/people.png";

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "red",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#143D66",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#143D66",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      <div className="QontoStepIcon-circle" />
    </QontoStepIconRoot>
  );
}

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));
const VousFreelance = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  let countText = [
    "Créez votre profil",
    "Rencontrez un de nos consultants experts",
    "Recevez des missions sur mesure",
  ];
  const steps = [
    <div>
      <div className={classes.parent}>
        <span className={classes.heading_stepper}>
          Description projet et profil
        </span>
        <p className={classes.detail}>
          Inscrivez-vous gratuitement et soyez contacté dans les 48h par un de
          nos consultants experts.
        </p>
      </div>
    </div>,
    <div>
      <span className={classes.heading_stepper}>Sélection de 3 profils</span>
      <div className={classes.parent}>
        <p className={classes.detail}>
          BeAdvize s’occupe de la vérification légale des freelances, et gère la
          logistique contractuelle et de facturation
        </p>
      </div>
    </div>,
    <div className={classes.parent}>
      <span className={classes.heading_stepper}>Dès que ça marche !</span>
      <p className={classes.detail}>
        BeAdvize n’est pas une simple marketplace de mise en relation, mais une
        vraie structure de conseil qui vous apporte l’accompagnement nécessaire
        pour bien identifier vos besoins et vous accompagner dans votre
        recherche de mission.
      </p>
    </div>,
  ];
  return (
    <>
      <section className={classes.section_Vous_Freelance}>
        <Container>
          <Grid justifyContent="space-between" container>
            <Grid item xs={12} lg={7}>
              <h3 className={classes.headingText_Vous_Freelance}>
                Vous êtes freelance
              </h3>
              <div
                className={classes.divider_Vous_Freelance}
                style={{ width: "56px" }}
              ></div>
              <p className={classes.section_Vous_FreelanceTwoText}>
                Des missions qui matchent
              </p>
              <p className={classes.section_Vous_FreelanceThreeText}>
                Quand un client nous mandate pour sa recherche de freelance, on
                l’étudie avec soin pour proposer la mission uniquement à nos
                membres qui peuvent correspondre. Ainsi on améliore le matching
                entre le besoin de notre client et la recherche de mission des
                freelances.
              </p>
              <div>
                {countText?.map((item, index) => (
                  <div className={classes.countBody} key={index}>
                    <div style={{ textAlign: "right", marginRight: "35px" }}>
                      <h3 className={classes.countText}>0{index + 1}</h3>
                      <div className={classes.countBg}></div>
                    </div>
                    <div>
                      <p className={classes.countDesc}>{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Grid>
            <Grid xs={12} lg={5}>
              <div className={classes.Vous_freelance_img_container}>
                <img
                  src={Vous_freelance}
                  width="150"
                  className={classes.Vous_freelance_img}
                />
              </div>
            </Grid>
          </Grid>

          {/* grid */}
          <Grid>
            <Grid container mt={5}>
              <Grid item md={6} sm={12}>
                <img
                  src={Vous_freelance_facture}
                  className={classes.Vous_freelance_Grid_img}
                />
              </Grid>
              <Grid
                item
                md={6}
                sm={12}
                className={classes.Vous_freelance_innovateDiv2}
              >
                <p className={classes.Vous_freelance_titleGrid}>
                  Facture & paiment
                </p>
                <p>
                  Notre équipe est constituée de consultants experts qui
                  maîtrisent parfaitement les enjeux des projets en entreprise,
                  tout en les alignant avec les recherches et compétences des
                  consultants freelances.
                </p>
                <p>
                  Cette équipe vous accompagnera ainsi dès le début de votre
                  recherche jusqu’à la livraison.
                </p>
              </Grid>
            </Grid>

            {/* 2 */}

            <Grid container mt={5}>
              <Grid
                item
                md={6}
                sm={12}
                className={classes.Vous_freelance_innovateDiv2}
              >
                <p className={classes.Vous_freelance_titleGrid}>
                  Facture & paiment
                </p>
                <p>
                  Notre équipe est constituée de consultants experts qui
                  maîtrisent parfaitement les enjeux des projets en entreprise,
                  tout en les alignant avec les recherches et compétences des
                  consultants freelances.
                </p>
                <p>
                  Cette équipe vous accompagnera ainsi dès le début de votre
                  recherche jusqu’à la livraison.
                </p>
              </Grid>
              <Grid item md={6} sm={12}>
                <div className={classes.Vous_freelance_img_container}>
                  <img
                    src={Vous_freelance_une_plateforme}
                    className={classes.Vous_freelance_Grid_img}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>

          {/* stepper */}
          <Grid container justifyContent="center" mt={10}>
            <Grid
              item
              sx={{ display: { xs: "none", md: "flex" } }}
              md={4}
              className={classes.step1}
            >
              <div>
                <img src={Free} />
              </div>
            </Grid>
            <Grid
              item
              sx={{ display: { xs: "none", md: "flex" } }}
              md={4}
              className={classes.step2}
            >
              <div>
                <img src={Vous_freelance_document} />
              </div>
            </Grid>
            <Grid
              item
              sx={{ display: { xs: "none", md: "flex" } }}
              md={4}
              className={classes.step3}
            >
              <div>
                <img src={Vous_freelance_talk} />
              </div>
            </Grid>
          </Grid>
          <Grid item sm={12} className={classes.stepper}>
            <Stack
              sx={{ width: "100%", display: { xs: "none", md: "block" } }}
              spacing={4}
            >
              <Stepper
                alternativeLabel
                activeStep={3}
                connector={<QontoConnector />}
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel StepIconComponent={QontoStepIcon}>
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Stack>
          </Grid>

          {/* stepper mobile*/}
          <Grid container justifyContent="center" mt={10}>
            <Grid
              item
              sx={{ display: { xs: "flex", md: "none" } }}
              xs={12}
              className={classes.step1}
            >
              <div>
                <img src={Free} />
                <div className={classes.parent}>
                  <span className={classes.heading_stepper}>
                    Description projet et profil
                  </span>
                  <p className={classes.detail}>
                    Inscrivez-vous gratuitement et soyez contacté dans les 48h
                    par un de nos consultants experts.
                  </p>
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
                  <img src={Vous_freelance_document} />
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
                <img src={Vous_freelance_talk} />

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
          </Grid>
        </Container>
      </section>
      <section className={classes.section_Freelance_Interprice}>
        <Container className={classes.section_Freelance_Interprice_container}>
          <div className={classes.section_Freelance_Interprice_Align}>
            <h2 className={classes.section_Freelance_Interprice_heading}>
              FREELANCES ET ENTREPRISE
            </h2>
            <div className={classes.section_Freelance_Interprice_container}>
              <div className={classes.divider} style={{ width: "56px" }}></div>
            </div>
            <h2 className={classes.section_Freelance_Interprice_heading}>
              Lancez-votre projet dès maintenant en nous contactant !
            </h2>
            <p className={classes.section_Freelance_Interprice_text}>
              C’est gratuit, vous intégrez une communauté fédérée et vous
              bénéficiez d’un accompagnement sur-mesure
            </p>

            <div>
              <ul className={classes.section_Freelance_Interprice_list}>
                <li>
                  <img
                    src={People}
                    className={classes.section_Freelance_Interprice_Image1}
                  />
                </li>
                <li>
                  <a
                    className={`${classes.section_Freelance_Interprice_link} ${classes.section_Freelance_Interprice_linkInscription}`}
                  >
                    Nous Contacter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`${classes.section_Freelance_Interprice_link} ${classes.section_Freelance_Interprice_linkConnexion}`}
                  >
                    Déposez votre Projet
                  </a>
                </li>
                <li>
                  <span
                    className={`${classes.section_Freelance_Interprice_link} ${classes.section_Freelance_Interprice_service}`}
                  >
                    Proposez Vos Services
                  </span>
                </li>
                <li>
                  <img
                    src={Interprice_setting}
                    className={classes.section_Freelance_Interprice_ImgMob2}
                  />
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default VousFreelance;
