import React from "react";
import { useTheme } from "@mui/styles";
import { useStyles } from "./arthurStyled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Grid } from "@mui/material";

const index = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <>
      <div className={classes.mainContent}>
        <div className={classes.contentWrapper}>
          <Grid Container>
            <Grid className={classes.contentWrapOne} md={4}>
              <div className={classes.boxWrapper}>
                <div className={classes.boxWrapOne}>
                  <AccountCircleIcon className={classes.accountCircle} />
                  <h2>Arthur Smith </h2>
                  <h3>Coach Agile</h3>
                  <div className={classes.contentWrapData}>
                    <p>Actuellement indisponible</p>
                    <span>
                      Actuellement indisponible Mettre à jour sur le{" "}
                      <a href="#">Dasboard</a>
                    </span>
                  </div>
                </div>
                <div className={classes.boxWrapOne}></div>
                <div className={classes.boxWrapOne}></div>
                <div className={classes.boxWrapOne}></div>
              </div>
            </Grid>
            <Grid className={classes.contentWrapTwo} md={8}></Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default index;
