import React from "react";
import { useTheme } from "@mui/styles";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useStyles } from "./myFooterStyle";
import Logo from "../../public/footer_logo.png";
const Footer = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <div className={classes.footer}>
        <Container className={classes.footerTopArea}>
          <Grid container spacing={2} style={{ margin: "auto" }}>
            <Grid
              item
              sx={{ display: { xs: "block", sm: "none", md: "block" } }}
              xs={12}
              md={2}
              lg={3}
              xl={3}
            >
              <div className={classes.footerCol1}>
                <div className="col-area">
                  <div className={classes.footerEadvizeLogo}>
                    <img
                      className={classes.footerEadvizeLogo_img}
                      src={Logo}
                      alt=" welcome to eadvize logo here "
                    ></img>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={4} sm={2} md={2} lg={2} xl={2}>
              <div className={classes.footerCol2}>
                <div className="col-area">
                  <div className={classes.footerHeading}>
                    <h4>Liens</h4>
                  </div>
                  <p className={classes.footerItems}>
                    {" "}
                    <Link to="/concept" className={classes.footerLink}>
                      Concept
                    </Link>
                  </p>
                  <p className={classes.footerItems}>
                    {" "}
                    <Link to="/" className={classes.footerLink}>
                      {" "}
                      Offres
                    </Link>
                  </p>

                  <p className={classes.footerItems}>
                    {" "}
                    <Link to="/" className={classes.footerLink}>
                      {" "}
                      Blog{" "}
                    </Link>
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={8} sm={6} md={5} lg={4} xl={4}>
              <div className={classes.footerCol3}>
                <div className="col-area">
                  <div className={classes.footerHeadingCol2}>
                    <h4>Qui sommes-nous ?</h4>
                    <h4>FAQ</h4>
                    <h4> Mentions légales</h4>
                    <h4>Newsletter</h4>
                  </div>

                  <p
                    className={`${classes.footerItems} ${classes.footerItemCol2}`}
                  >
                    Inscrivez-vous à notre newsletter pour recevoir les
                    dernières missions, et les actualités du freelancing
                  </p>

                  <p className={classes.footerItems}>
                    {" "}
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
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={3} xl={3}>
              <div className={classes.footerCol4}>
                <div className={classes.footerCol4Mobile}>
                  <div>
                    <div className={classes.footerHeadingCol3}>
                      <h4>Formulaire de</h4>
                      <h4>contact</h4>
                    </div>
                    <p className={classes.footerItems}>
                      <a className={classes.footerLink}>
                        76 Rue Blomet <br /> 75015, Paris
                      </a>
                    </p>
                    <p className={classes.footerItems}>
                      <a
                        href="mailto:contact@beadvize.fr"
                        className={classes.footerLink}
                      >
                        contact@beadvize.fr
                      </a>
                    </p>
                    <p className={classes.footerItems}>
                      {" "}
                      <a className={classes.footerLink}>
                        06 64 50 22 27 <br /> 06 62 36 56 10
                      </a>
                    </p>
                  </div>
                  <div>
                    <p
                      className={`${classes.footerItems} ${classes.footerItemsSocialIcons}`}
                    >
                      {" "}
                      <a href="#" className={classes.footerLink}>
                        <i className="fa fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                      <a href="#" className={classes.footerLink}>
                        <i className="fa fa-facebook-f" aria-hidden="true"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Footer;
