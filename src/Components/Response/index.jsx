import React from "react";
import { useTheme } from "@mui/styles";
import { useStyles } from "./responseStyle";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";

const Response = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Container>
      <div className={classes.contentWrapper}>
        <Grid container>
          <Grid className={classes.cardBg}>
            <div className={classes.cardWrapper}>
              <h2 className={classes.cardHeading}>
                Merci pour vos informations !
              </h2>
              <h5 className={classes.cardTitle}>
                Nous étudions votre projet et revenons vers vous très rapidement
              </h5>
              <div className={classes.btnWrapper}>
                <Grid container>
                  <Grid item md={6}>
                    <div className={classes.btnOne}>
                      <Button variant="contained">
                        Accéder a la plateforme
                      </Button>
                    </div>
                  </Grid>
                  <Grid item md={6}>
                    <div className={classes.btnTwo}>
                      <Button variant="outlined">Quitter</Button>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
export default Response;
