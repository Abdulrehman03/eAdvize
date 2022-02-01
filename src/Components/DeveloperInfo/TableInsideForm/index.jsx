import React from "react";
import { Container, Grid, Button } from "@mui/material"; 
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; 
import { useTheme } from "@mui/styles";
import { useStyles } from "./TableInsideForm";
import useMediaQuery from "@mui/material/useMediaQuery";
import LandingFormDeveloper from "../LandingForm/";
export const TableInsideForm = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const matches = useMediaQuery("(max-width:768px)");
  const match = useMediaQuery("(max-width:900px)");

  return (
    <div>
      <Container
        className={classes.TableContent}
        style={{
          display: match ? "none" : "block",
          marginBottom: matches ? "30px !important" : "100px",
        }}
      > 
        <div>
          <LandingFormDeveloper /> 
        </div>
      </Container> 
    </div>
  );
};
export default TableInsideForm;
