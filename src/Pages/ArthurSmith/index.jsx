import React from "react";
import Layout from "../../Components/Layout/";
import Arthur from "../../Components/ArthurSmith/";
import { Container } from "@mui/material";

const index = () => {
  return (
    <>
      <Layout>
        <Container>
          <Arthur />
        </Container>
      </Layout>
    </>
  );
};

export default index;
