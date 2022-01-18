import * as React from "react";
import { Container, Grid, Button } from "@mui/material";
import { useTheme } from "@mui/styles";
import Layout from "../../Components/Layout/index";
import Chat from "../../Assests/landing/chat.png";
import Pc from "../../Assests/landing/pc.png";
import Group_talk from "../../Assests/landing/group_talk.png";
import Doc from "../../Assests/landing/doc.png";
import Devices from "../../Assests/landing/devices.png";
import Card from "../../Assests/landing/card.png";
import Grid_chat from "../../Assests/landing/grid_chat.png";
import Grid_shake from "../../Assests/landing/grid_shake.png";
import Grid_group from "../../Assests/landing/grid_group.png";
import landing from "../../Assests/landing/landing.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import TableContent from "../../Components/Landing/TableContent/";
import Nos_restorus_section from "../../Components/Landing/Nos_restorus_section/";
import { useStyles } from "./style";

const Landing = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const matches = useMediaQuery("(min-width:768px)");

  return (
    <Layout>
      <div className={classes.root}>
        <section
          className={classes.sectionOne}
          style={{
            paddingBottom: matches ? "18rem " : "30px",
          }}
        >
          <Container>
            <Grid
              pt={10}
              pb={10}
              container
              className={`${matches && classes.mobilePadding}`}
            >
              <Grid item xs={12} lg={6} order={{ xs: 2, md: 1 }}>
                <h3 className={classes.headingText}>
                  L’accompagnement idéal de la communauté freelances pour la
                  réussite de vos projets
                </h3>
                <div
                  className={classes.divider}
                  style={{ width: "56px" }}
                ></div>
                <p className={classes.bannerText}>
                  Nous accompagnons les freelances dans leurs recherches de
                  missions, tout en apportant l’expertise nécessaire aux
                  entreprises
                </p>
                <Button className={classes.greenFilledButton}>
                  Je suis Freelance
                </Button>
                <Button className={classes.greenOutlinedButton}>
                  Je recherche un Freelance
                </Button>
              </Grid>
              <Grid item xs={12} lg={6} order={{ xs: 1, md: 2 }}>
                <div pr={20}>
                  <img
                    src={landing}
                    style={{ paddingLeft: "20px", width: "90%" }}
                  />
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
        <TableContent />
        <section className={classes.section_les_dominas_expertise}>
          <Container>
            <div className={classes.les_dominas_expertise_heading}>
              <h2>Les domaines d’expertise</h2>
              <div
                className={classes.divider_les_dominas_expertise}
                style={{ width: "56px" }}
              ></div>
            </div>
            {/* features box */}
            <Grid container mt={5} spacing={4}>
              <Grid
                item
                spacing={4}
                md={4}
                sm={12}
                className={classes.innovateDiv2}
              >
                <div className={classes.les_dominas_featuresBox}>
                  <img
                    src={Chat}
                    alt=""
                    className={classes.les_dominas_iconImg_featuresBox}
                  />
                  <h3 className={classes.les_dominas_heading_featuresBox}>
                    Expertise & Conseil
                  </h3>
                  <p className={classes.les_dominas_text_featuresBox}>
                    Stratégie et Business Plan Etudes sectorielles et analyse de
                    cible Audit et Etudes d’opportunité Aide au choix et Cadrage
                    ..
                  </p>
                </div>
              </Grid>
              <Grid item md={4} sm={12} className={classes.innovateDiv2}>
                <div className={classes.les_dominas_featuresBox}>
                  <img
                    src={Card}
                    alt=""
                    className={classes.les_dominas_iconImg_featuresBox}
                  />
                  <h3 className={classes.les_dominas_heading_featuresBox}>
                    Expertise & Conseil
                  </h3>
                  <p className={classes.les_dominas_text_featuresBox}>
                    Stratégie et Business Plan Etudes sectorielles et analyse de
                    cible Audit et Etudes d’opportunité Aide au choix et Cadrage
                    ..
                  </p>
                </div>
              </Grid>
              <Grid item md={4} sm={12} className={classes.innovateDiv2}>
                <div className={classes.les_dominas_featuresBox}>
                  <img
                    src={Pc}
                    alt=""
                    className={classes.les_dominas_iconImg_featuresBox}
                  />
                  <h3 className={classes.les_dominas_heading_featuresBox}>
                    Expertise & Conseil
                  </h3>
                  <p className={classes.les_dominas_text_featuresBox}>
                    Stratégie et Business Plan Etudes sectorielles et analyse de
                    cible Audit et Etudes d’opportunité Aide au choix et Cadrage
                    ..
                  </p>
                </div>
              </Grid>
              <Grid item md={4} sm={12} className={classes.innovateDiv2}>
                <div className={classes.les_dominas_featuresBox}>
                  <img
                    src={Devices}
                    alt=""
                    className={classes.les_dominas_iconImg_featuresBox}
                  />
                  <h3 className={classes.les_dominas_heading_featuresBox}>
                    Expertise & Conseil
                  </h3>
                  <p className={classes.les_dominas_text_featuresBox}>
                    Stratégie et Business Plan Etudes sectorielles et analyse de
                    cible Audit et Etudes d’opportunité Aide au choix et Cadrage
                    ..
                  </p>
                </div>
              </Grid>
              <Grid item md={4} sm={12} className={classes.innovateDiv2}>
                <div className={classes.les_dominas_featuresBox}>
                  <img
                    src={Group_talk}
                    alt=""
                    className={classes.les_dominas_iconImg_featuresBox}
                  />
                  <h3 className={classes.les_dominas_heading_featuresBox}>
                    Expertise & Conseil
                  </h3>
                  <p className={classes.les_dominas_text_featuresBox}>
                    Stratégie et Business Plan Etudes sectorielles et analyse de
                    cible Audit et Etudes d’opportunité Aide au choix et Cadrage
                    ..
                  </p>
                </div>
              </Grid>
              <Grid item md={4} sm={12} className={classes.innovateDiv2}>
                <div className={classes.les_dominas_featuresBox}>
                  <img
                    src={Doc}
                    alt=""
                    className={classes.les_dominas_iconImg_featuresBox}
                  />
                  <h3 className={classes.les_dominas_heading_featuresBox}>
                    Expertise & Conseil
                  </h3>
                  <p className={classes.les_dominas_text_featuresBox}>
                    Stratégie et Business Plan Etudes sectorielles et analyse de
                    cible Audit et Etudes d’opportunité Aide au choix et Cadrage
                    ..
                  </p>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
        {/* le modele section */}
        <section className={classes.section_le_modele}>
          <Container>
            <div className={classes.le_modele_heading}>
              <h2>Les domaines d’expertise</h2>
              <div
                className={classes.divider_les_modele}
                style={{ width: "56px" }}
              ></div>
            </div>
            {/* features box */}
            <Grid container mt={5}>
              <Grid item container mb={5}>
                <Grid
                  item
                  md={6}
                  sm={12}
                  className={classes.le_modele_Grid_top}
                >
                  <h3 className={classes.le_modele_Grid_title2}>
                    Un modèle agile pour des projets sur mesure
                  </h3>
                  <p style={{ fontWeight: "bold" }}>
                    PME ou grand groupe, vos besoins sont différents et uniques.
                    Notre modèle agile peut s’adapter à vos enjeux et
                    contraintes
                  </p>
                  <p>
                    : En sélectionnant parmi notre communauté de consultants le
                    ou les talents avec le savoir-faire que vous recherchez.
                  </p>
                  <p>
                    En vous accompagnant aussi bien lors de la construction de
                    votre projet que pendant sa mise en place.
                  </p>
                </Grid>
                <Grid
                  item
                  md={6}
                  sm={12}
                  className={`${matches && classes.le_modele_img_top} `}
                >
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={Grid_chat}
                  />
                </Grid>
              </Grid>
              {/* 2 */}
              <Grid item container mb={5}>
                <Grid
                  item
                  md={6}
                  sm={12}
                  className={`${matches && classes.le_modele_img_top} `}
                >
                  <div>
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={Grid_shake}
                    />
                  </div>
                </Grid>
                <Grid
                  item
                  md={6}
                  sm={12}
                  className={classes.le_modele_Grid_top}
                >
                  <h3 className={classes.le_modele_Grid_title2}>
                    Un modèle agile pour des projets sur mesure
                  </h3>
                  <p style={{ fontWeight: "bold" }}>
                    PME ou grand groupe, vos besoins sont différents et uniques.
                    Notre modèle agile peut s’adapter à vos enjeux et
                    contraintes
                  </p>
                  <p>
                    : En sélectionnant parmi notre communauté de consultants le
                    ou les talents avec le savoir-faire que vous recherchez.
                  </p>
                  <p>
                    En vous accompagnant aussi bien lors de la construction de
                    votre projet que pendant sa mise en place.
                  </p>
                </Grid>
              </Grid>
              {/* 3 */}
              <Grid item container mb={5}>
                <Grid
                  item
                  md={6}
                  sm={12}
                  className={classes.le_modele_Grid_top}
                >
                  <h3 className={classes.le_modele_Grid_title2}>
                    Un modèle agile pour des projets sur mesure
                  </h3>
                  <p style={{ fontWeight: "bold" }}>
                    PME ou grand groupe, vos besoins sont différents et uniques.
                    Notre modèle agile peut s’adapter à vos enjeux et
                    contraintes
                  </p>
                  <p>
                    : En sélectionnant parmi notre communauté de consultants le
                    ou les talents avec le savoir-faire que vous recherchez.
                  </p>
                  <p>
                    En vous accompagnant aussi bien lors de la construction de
                    votre projet que pendant sa mise en place.
                  </p>
                </Grid>
                <Grid
                  item
                  md={6}
                  sm={12}
                  className={`${matches && classes.le_modele_img_top} `}
                >
                  <div>
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={Grid_group}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </section>
        <Nos_restorus_section />
      </div>
    </Layout>
  );
};

export default Landing;
