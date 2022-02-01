import React from "react";
import MesMissionsHeaderLink from "../../Components/MesMissionsHeaderLink";
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
const MesMissionsHeaderLinkPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Layout register={true}>
        <MesMissionsHeaderLink />
      </Layout>
    </div>
  );
};

export default MesMissionsHeaderLinkPage;
