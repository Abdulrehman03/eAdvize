import React from "react";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { useStyles } from "./CategoryRegComplete";
import Button from "@mui/material/Button";
const Step3 = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <>
      <div>
        <div className={classes.eAdvizeConsultantReg_topContainer}>
          <div className={classes.eAdvizeConsultantReg_topContent}>
            <Container>
              <div>
                <div className={classes.eAdvizeConsultantReg_insideContent}>
                  <div
                    className={classes.eAdvizeConsultantReg_insideContentFlex}
                  >
                    {/*  */}
                    <Typography variant="h5" className={classes.title}>
                      Merci pour vos informations !
                    </Typography>
                    <Typography variant="body2" className={classes.subHead}>
                      Démarrons ensemble dès aujourd’hui.
                    </Typography>

                    <div className={classes.TypographyGroup}>
                      <Typography
                        variant="body2"
                        className={classes.subTextFields}
                      >
                        Afin que nos équipes puissent définir votre profil dès
                        aujourd’hui et vous proposer une mission en accord avec
                        ce que vous recherchez
                        <span className={classes.subTextFields2}>
                          {" "}
                          Finalisez le processus avec les essentiels de votre
                          profil
                        </span>
                      </Typography>
                    </div>

                    <div className={classes.btnGroup}>
                      <Button variant="contained" className={classes.button}>
                        Finaliser mon enregistrement
                      </Button>
                      <Button
                        variant="outlined"
                        className={classes.button_outlined}
                      >
                        Plus tard
                      </Button>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step3;
