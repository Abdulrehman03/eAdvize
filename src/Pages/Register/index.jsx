import React from "react";
import ConsultantRegister from "../../Components/ConsultantRegistration/";
import Layout from "../../Components/Layout/";
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
      <Layout register={true}>
        <ConsultantRegister />
      </Layout>
    </div>
  );
};

export default ConsultantRegisteration;
