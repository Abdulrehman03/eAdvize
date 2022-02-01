import React from "react";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./AnnuleTabSec.scss";

const boxWrapTwoData = [
  {
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    headingLink: "Lieu de travail",
    countryName: "paris",
    rightLink: "Mission annulée",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    headingLink: "Durée de la mission",
    countryName: "paris",
    rightLink: "Mission annulée",
  },
];

const AnnuleTabSec = () => {
  return (
    <>
      <section>  
        {/* box section */}
        {boxWrapTwoData.map((item, index) => {
          return (
            <>
              <div className="TopAnnule_sectionWrap">
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

         
      </section>
    </>
  );
};

export default AnnuleTabSec;
