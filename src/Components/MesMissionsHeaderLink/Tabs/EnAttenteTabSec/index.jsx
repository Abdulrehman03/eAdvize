import React from "react";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./EnAttenteTabSec.scss";

const boxWrapTwoData = [
  {
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    headingLink: "Lieu de travail",
    countryName: "paris",
    rightLink: "En attente de délibération",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    headingLink: "Lieu de travail",
    countryName: "paris",
    rightLink: "En attente de délibération",
  },
];

const EnAttenteTabSec = () => {
  return (
    <>
      <section>
        <div className="TopEnAttente_sectionWrap">
          <Grid>
            <Grid container>
              <Grid item md={8} sm={12} className="gridLeft">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="textLeft_box"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod
                </Typography>
                <div className="gridLeft_flexSectionInside">
                  <div>
                    <h3 className="headingLink">Lieu de travail</h3>
                    <p>Paris</p>
                  </div>
                  <div>
                    <h3 className="headingLink">Lieu de travail</h3>
                    <p>Paris</p>
                  </div>
                  <div>
                    <h3 className="headingLink">Lieu de travail</h3>
                    <p>Paris</p>
                  </div>
                </div>
              </Grid>

              <Grid item md={4} sm={12} className="gridRight">
                <a className="gridRight_link">Répondre</a>
              </Grid>
            </Grid>
          </Grid>
        </div>

        {/* border line */}
        <div className="borderLine_insideWrapperBox"></div>

        {/* box section 2 */}
        {boxWrapTwoData.map((item, index) => {
          return (
            <>
              <div className="TopEnAttente_sectionWrapTwo">
                <Grid>
                  <Grid container>
                    <Grid item md={8} sm={12} className="gridLeft">
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="textLeft_box"
                      >
                        {item.description}
                      </Typography>
                      <div className="gridLeft_flexSectionInside">
                        <div>
                          <h3 className="headingLink">{item.headingLink}</h3>
                          <p>{item.countryName}</p>
                        </div>
                        <div>
                          <h3 className="headingLink">{item.headingLink}</h3>
                          <p>{item.countryName}</p>
                        </div>
                        <div>
                          <h3 className="headingLink">{item.headingLink}</h3>
                          <p>{item.countryName}</p>
                        </div>
                      </div>
                    </Grid>

                    <Grid item md={4} sm={12} className="gridRight">
                      <a className="gridRight_link">{item.rightLink}</a>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </>
          );
        })}

        {/* border line */}
        <div className="borderLine_insideWrapperBox"></div>

        <div className="TopEnAttente_sectionWrapThree">
          <Grid>
            <Grid container>
              <Grid item md={8} sm={12} className="gridLeft">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="textLeft_box"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod
                </Typography>
                <div className="gridLeft_flexSectionInside">
                  <div>
                    <h3 className="headingLink">Lieu de travail</h3>
                    <p>Paris</p>
                  </div>
                  <div>
                    <h3 className="headingLink">Début de la mission</h3>
                    <p>3 a 5 mois</p>
                  </div>
                  <div>
                    <h3 className="headingLink">Durée de la mission</h3>
                    <p>Dès que Possible</p>
                  </div>
                </div>
              </Grid>

              <Grid item md={4} sm={12} className="gridRight">
                <a className="gridRight_link">Validation en cours</a>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </section>
    </>
  );
};

export default EnAttenteTabSec;
