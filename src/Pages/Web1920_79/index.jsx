import React from "react";
import Layout from "../../Components/Layout/";
import UserAccount from "../../Components/Web1920_79/"
import { createStyles, makeStyles } from "@mui/styles";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#E4F0F8"
    },
  })
);
const UserAccounts = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Layout >
      <br/>
      <br/>
      <UserAccount/>
      </Layout>
    </div>
  );
};

export default UserAccounts;
