import React from "react";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/styles";
import Typography from "@mui/material/Typography";
import TableInsideForm from "./TableInsideForm";
import { useStyles } from "./DeveloperInfo";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const DeveloperInfoPage = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <>
      <div>
        <div className={classes.eAdvizeDeveoperInfo_topContainer}>
          <div className={classes.eAdvizeDeveoperInfo_topContent}>
            <Container>
              <div>
                <TableInsideForm />
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeveloperInfoPage;
