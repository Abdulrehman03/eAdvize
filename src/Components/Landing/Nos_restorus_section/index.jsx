import * as React from "react";
import { useStyles } from "./style";
import { Container, Grid } from "@mui/material";
import { useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Vous_freelance_facture from "../../../Assests/vous_freelance_facture.png";
import Vous_freelance_une_plateforme from "../../../Assests/vous_freelance_une_plateforme.png";
import Polygon from "../../../Assests/landing/Polygon.png";
import Interprice_setting from "../../../Assests/interprice_setting.png";
import People from "../../../Assests/people.png";
import Ibm from "../../../Assests/landing/ibm.png";
import Sncf from "../../../Assests/landing/sncf.png";
import Windows from "../../../Assests/landing/windows.png";
import Edf from "../../../Assests/landing/edf.png";
import Yahoo from "../../../Assests/landing/yahoo.png";
import Person_img from "../../../Assests/landing/person_img.png";
import Person_text from "../../../Assests/landing/Person_text.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

const Nos_restorus_section = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const matches = useMediaQuery("(max-width:768px)");
  let cards = [
    {
      desciption: "Pourquoi devenir freelance va devenir une obligation ?",
      img: "c1",
    },
    {
      desciption: "Freelance : Comment se démarquer de la concurrence ?",
      img: "c2",
    },
    {
      desciption: "Devenir consultant freelance : le guide de démarrage",
      img: "c3",
    },
    {
      desciption: "Devenir consultant freelance : le guide de démarrage",
      img: "c3",
    },
  ];

  return (
    <>
      <div>
        <section className={classes.section_Vous_Freelance}>
          <div className={classes.nos_retours_section_triangle}>
            <img src={Polygon} />
          </div>
          <Container>
            <div className={classes.Vous_ceo_sect_heading}>
              <h2>Nos Retours d’Expérience</h2>
              <div
                className={classes.divider_Vous_ceo_sect}
                style={{ width: "56px" }}
              ></div>
            </div>
            {/* grid */}
            <Grid>
              <Grid container mt={5} spacing={10}>
                <Grid item md={4} sm={12}>
                  <div className={classes.Vous_ceo_sect}>
                    <img
                      src={Person_img}
                      className={classes.Vous_ceo_Grid_img}
                    />
                    <h3 style={{ color: "#fff" }}>
                      Grégoire <br /> Lavendier CEO
                    </h3>
                    <div className={classes.Vous_ceo_text}>
                      <img src={Person_text} />
                    </div>
                  </div>
                </Grid>

                <Grid item md={4} sm={12} justifyContent="center">
                  <div className={classes.Vous_ceo_sect}>
                    <img
                      src={Person_img}
                      className={classes.Vous_ceo_Grid_img}
                    />
                    <h3 style={{ color: "#fff" }}>
                      Grégoire <br /> Lavendier CEO
                    </h3>
                    <div className={classes.Vous_ceo_text}>
                      <img src={Person_text} />
                    </div>
                  </div>
                </Grid>

                <Grid item md={4} sm={12}>
                  <div className={classes.Vous_ceo_sect}>
                    <img
                      src={Person_img}
                      className={classes.Vous_ceo_Grid_img}
                    />
                    <h3 style={{ color: "#fff" }}>
                      Grégoire <br /> Lavendier CEO
                    </h3>
                    <div className={classes.Vous_ceo_text}>
                      <img src={Person_text} />
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </section>
      </div>
      <section className={classes.section_Freelance_Interprice}>
        <Container className={classes.section_Freelance_Interprice_container}>
          <div className={classes.section_Freelance_Interprice_Align}>
            <h2 className={classes.section_Freelance_Interprice_heading}>
              Lancez votre projet dès maintenant en nous contactant!
            </h2>
            <div className={classes.section_Freelance_Interprice_container}>
              <div className={classes.divider} style={{ width: "56px" }}></div>
            </div>
            <p className={classes.section_Freelance_Interprice_text}>
              Rencontrez les top profils freelances pour vous accompagner
            </p>

            <div>
              <ul className={classes.section_Freelance_Interprice_list}>
                <li>
                  <img
                    src={Interprice_setting}
                    className={classes.section_Freelance_Interprice_ImgMob2}
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
                    src={People}
                    className={classes.section_Freelance_Interprice_Image1}
                  />
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* brands */}
      <section className={classes.section_les_brands}>
        <Container>
          <div className={classes.section_Freelance_brands_Align}>
            <div>
              <ul className={classes.section_Freelance_brands}>
                <li>
                  <a
                    className={`${classes.section_les_brands_link} ${classes.section_les_brands_linkInscription}`}
                  >
                    Ils ont choisi BeAdvize
                  </a>
                </li>
                <li>
                  <img
                    src={Yahoo}
                    className={classes.section_Freelance_Interprice_ImgMob2}
                  />
                </li>
                <li>
                  <img
                    src={Windows}
                    className={classes.section_Freelance_Interprice_ImgMob2}
                  />
                </li>
                <li>
                  <img
                    src={Edf}
                    className={classes.section_Freelance_Interprice_Image1}
                  />
                </li>
                <li>
                  <img
                    src={Ibm}
                    className={classes.section_Freelance_Interprice_Image1}
                  />
                </li>
                <li>
                  <img
                    src={Sncf}
                    className={classes.section_Freelance_Interprice_Image1}
                  />
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <br />
          <br />

          <Swiper
            slidesPerView={matches ? 1 : 3}
            spaceBetween={30}
            slidesPerGroup={matches ? 1 : 3}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
          >
            {cards.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={`./src/public/${item.img}.png`}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          className={classes.cardDescription}
                        >
                          {item.desciption}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
      </section>
      {/* les dominas input */}
      <section className={classes.section_le_domins_input}>
        <Container>
          {/* input box */}
          <Grid container mt={5}>
            <Grid item container mb={5}>
              <Grid item md={6} sm={12} className={classes.le_modele_Grid_top}>
                <h3 className={classes.le_modele_Grid_title2}>
                  Recevez nos dernières offres
                </h3>
                <p style={{ color: "#143D66" }}>
                  Inscrivez-vous à notre newsletter pour recevoir les dernières
                  missions, et les actualités du freelancing
                </p>
              </Grid>
              <Grid item md={6} sm={12} className={classes.le_input_Grid_2}>
                <div className={`${classes.InputTextEnvoyer}`}>
                  <div>
                    <input
                      type="text"
                      name="email_Envoyer"
                      className={classes.inputBoxEAdvize}
                      placeholder="monmail@gmail.com"
                    />
                    <a
                      id="Envoyer"
                      className={classes.inputBoxEAdvize_subscribe}
                      data-track-event="Email Envoyer|Newsletter Envoyer"
                      data-gatag="Main Page|Envoyer"
                    >
                      Envoyer
                    </a>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Nos_restorus_section;
