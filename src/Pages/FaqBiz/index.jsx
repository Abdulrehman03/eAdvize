import React from "react";
import Layout from "../../Components/Layout/";
import FaqBiz from "../../Components/Faq/"
import { createStyles, makeStyles } from "@mui/styles";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "100vh",
      width: "100%",
    },
  })
);
const ConsultantRegisteration = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Layout >
        <FaqBiz />
      </Layout>
    </div>
  );
};

export default ConsultantRegisteration;
