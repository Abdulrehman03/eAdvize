import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/styles";
import { useStyles } from "./categoryStyle";
import Step1 from "../Step1/";
import Step2 from "../Step2";
import Step3 from "../Step3/";

const Category = () => {
  useEffect(() => {
    window.scrollTo(2, 2);
  }, []);
  const theme = useTheme();
  const classes = useStyles(theme);
  let [bg, setBg] = useState("");
  let [next, setNext] = useState(false);
  let [finalStage, setFinalStage] = useState(false);

  const handleChange = (name) => {
    setBg(name);
  };
  const onContinue = () => {
    setNext(!next);
    window.scrollTo(2, 2);
  };
  const finalStep = () => {
    setFinalStage(true);
    window.scrollTo(2, 2);
  };
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={4}
          className={`${bg ? classes.gridItemfill : classes.gridItem1}`}
        ></Grid>
        <Grid
          item
          xs={4}
          className={`${
            next
              ? finalStage
                ? classes.gridItemfill3
                : classes.gridItemfill2
              : classes.gridItem2
          }`}
        ></Grid>
        <Grid
          item
          xs={4}
          className={`${finalStage ? classes.gridItemfill : classes.gridItem3}`}
        ></Grid>
      </Grid>
      {next ? (
        finalStage ? (
          <Step3 />
        ) : (
          <Step2 finalStep={finalStep} />
        )
      ) : (
        <Step1 bg={bg} handleChange={handleChange} onContinue={onContinue} />
      )}
    </div>
  );
};

export default Category;
