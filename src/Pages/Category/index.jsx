import * as React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import Layout from "../../Components/Layout/index";
import Category from "../../Components/Category/";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "100vh",
      width: "100%",
    },
  })
);

const CategoryPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Layout register={true}>
        <Category />
      </Layout>
    </div>
  );
};

export default CategoryPage;
