import React from "react";
import Layout from "../../Components/Layout/";
import Qui from "../../Components/QueSommes/index";
import { Container } from "@mui/material";

const index = () => {
  return (
    <>
      <Layout>
        <Container>
          <Qui />
        </Container>
      </Layout>
    </>
  );
};

export default index;
