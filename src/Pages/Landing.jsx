import * as React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import Layout from "../Components/Layout/index";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "100vh",
      width: "100%",
    },
  })
);

const Landing = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Layout></Layout>
    </div>
  );
};

export default Landing;
