import React from "react";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/styles";
import Typography from "@mui/material/Typography"; 
import { useStyles } from "./MesMissionsHeaderLink"; 
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import MainSideTabs from "./Tabs"

const DeveloperInfoPage = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <>
      <div>
        <div className={classes.eAdvizeMesMissions_topContainer}>
          <div className={classes.eAdvizeMesMissions_topContent}>
            <Container>
              <div>
                  <MainSideTabs />
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeveloperInfoPage;
