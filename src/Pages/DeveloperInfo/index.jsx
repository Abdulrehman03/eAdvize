import React from "react";
import DeveloperInfoPage from "../../Components/DeveloperInfo";
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
const DeveloperInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Layout register={true}>
        <DeveloperInfoPage />
      </Layout>
    </div>
  );
};

export default DeveloperInfo;
