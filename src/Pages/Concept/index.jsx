import * as React from "react";
import { Container, Grid, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import VousFreelance from "./VousFreelanceSection";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/styles";
import Layout from "../../Components/Layout/index";
import ConceptMainImg from "../../Assests/conceptMain.png";
import ConceptLadyImg from "../../Assests/conceptLady.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useStyles } from "./style";
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
const Concept = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const matches = useMediaQuery("(max-width:768px)");
  let countText = [
    "Examen du profil (Nous examinons le CV, le niveau d’expérience ainsi que les projets effectués)",
    "Entretien individuel (les candidats sélectionnés sont invités à des entretiens par nos consultants experts qui vont les aider pour leurs recherches et durant leurs missions)",
    "Identification des hard et soft skills (on fait le bilan des compétences et expériences du candidat ainsi que de sa personnalité et méthode de travail)",
    "Évaluation en fin de mission (tous les consultants sont évalués en fin de projet par le client pour nous aider à améliorer ses prochaines interventions)",
  ];
  const steps = [
    <div>
      <span className={classes.heading}>Description projet et profil</span>
      <div className={classes.parent}>
        <p className={classes.detail}>
          Un consultant expert vous contacte dans les 24h pour afficher votre
          recherche
        </p>
      </div>
    </div>,
    <div>
      <span className={classes.heading}>Sélection de 3 profils</span>
      <div className={classes.parent}>
        <p className={classes.detail}>
          Sélection de 3 profils (on vous présente uniquement les profils qui
          correspondent, qui sont disponibles et motivés par votre mission)
        </p>
      </div>
    </div>,
    <div className={classes.parent}>
      <span className={classes.heading}>Dès que ça marche !</span>
      <div className={classes.parent}>
        <p className={classes.detail}>
          On s’occupe de la partie contractuelle, et on vous accompagne jusqu’à
          la fin du projet
        </p>
      </div>
    </div>,
  ];
  return (
    <Layout>
      <section className={classes.sectionOne}>
        <Container>
          <Grid pt={10} pb={10} container>
            <Grid item xs={12} lg={6}>
              <h3 className={classes.headingText}>
                Travailler avec les freelances, c’est faire appel aux
                compétences de la plus grande communauté d’experts.
              </h3>
              <div className={classes.divider} style={{ width: "56px" }}></div>
              <p className={classes.bannerText}>
                BeAdvize est la première place de marché avec une vision 360° du
                projet, qui facilite les synergies entre entreprises et
                consultants indépendants
              </p>
              <Button className={classes.greenFilledButton}>
                Je suis Consultant
              </Button>
              <br />
              <Button className={classes.greenOutlinedButton}>
                Je suis Client
              </Button>
            </Grid>
            <Grid item xs={12} lg={6}>
              <img src={ConceptMainImg} width="100%" />
            </Grid>
          </Grid>
        </Container>
      </section>
      <Container>
        <Grid
          pt={10}
          pb={10}
          justifyContent="space-between"
          container
          alignItems="center"
        >
          <Grid item xs={12} lg={8}>
            <h3 className={classes.headingText}>
              Vous êtes une entreprise cliente
            </h3>
            <div className={classes.divider} style={{ width: "56px" }}></div>
            <p className={classes.sectionTwoText}>
              Une procédure de sélection rigoureuse pour travailler avec les
              meilleurs consultants
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
          <Grid item lg={3} sx={{ display: { xs: "none", md: "flex" } }}>
            <img src={ConceptLadyImg} width="150" />
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item sm={12} md={6} className={classes.innovateDiv}>
            <p className={classes.innovateTitle}>Simplicité et innovation</p>

            <div className={classes.desciption}>
              <p>
                Dans un processus classique, trouver un consultant c’est plus de
                50 CVs reçus pour un appel d’offres, des recherches
                interminables sur les joboards, et des heures perdues à trier le
                bon du mauvais.
              </p>
              <p>
                Notre longue expérience du consulting nous a permis de
                construire des processus et outils de match-making robustes qui
                nous permettent de vous proposer directement les 3 meilleurs
                profils qui correspondent parfaitement à votre recherche. Vous
                n’avez plus qu’à choisir !
              </p>
            </div>
            <br />
            <br />
          </Grid>
        </Grid>
        <Grid container></Grid>
        <Grid
          container
          justifyContent="center"
          mt={10}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Grid item md={4} className={classes.step1}>
            <div>
              <img src="./src/public/search.png" width="90%" />
            </div>
          </Grid>
          <Grid item md={4} className={classes.step2}>
            <div>
              <img src="./src/public/step2.png" width="70%" />
              <div>
                <p className={classes.stepTitle}>Sourcing réalisé</p>
                <Button variant="contained" className={classes.button}>
                  Sélectionner
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item md={4} className={classes.step3}>
            <div>
              <img src="./src/public/laststep.png" width="90%" />
            </div>
          </Grid>
        </Grid>
        <Grid
          item
          sm={12}
          className={classes.stepper}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Stack sx={{ width: "100%" }} spacing={4}>
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
        {/* //small screen stepper */}

        <Grid
          container
          justifyContent="center"
          mt={10}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <Grid item xs={12} className={classes.mobilestep1}>
            <div>
              <img src="./src/public/search.png" />
              <div className={classes.parent}>
                <span className={classes.heading_stepper}>
                  Description projet et profil
                </span>
                <p className={classes.mobileStepperdetail}>
                  Un consultant expert vous contacte dans les 24h pour afficher
                  votre recherche
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} mt={5} className={classes.mobilestep2}>
            <div>
              <div className={classes.freelance}>
                <img src="./src/public/step2.png" />
              </div>

              <div className={classes.parent}>
                <span className={classes.heading_stepper}>
                  Sélection de 3 profils
                </span>
                <p className={classes.mobileStepperdetail}>
                  Sélection de 3 profils (on vous présente uniquement les
                  profils qui correspondent, qui sont disponibles et motivés par
                  votre mission)
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} mt={5} className={classes.mobilestep3}>
            <div>
              <div className={classes.step3Img}>
                <img src="./src/public/laststep.png" />
              </div>

              <div className={classes.parent}>
                <span className={classes.heading_stepper}>
                  Dès que ça marche !
                </span>
                <p className={classes.mobileStepperdetail}>
                  On s’occupe de la partie contractuelle, et on vous accompagne
                  jusqu’à la fin du projet
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid>
          <Grid container mt={5} className={classes.innovateDiv2Mobile}>
            <Grid item md={6} sm={12} className={classes.innovateDiv2}>
              <p className={classes.title2}>
                Une équipe d’experts avec une vision 360° du projet
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
            <Grid
              item
              md={6}
              sm={12}
              pl={12}
              className={`${matches && classes.group} `}
            >
              <img style={{ width: "100%" }} src="./src/public/people.png" />
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <VousFreelance />
    </Layout>
  );
};

export default Concept;
