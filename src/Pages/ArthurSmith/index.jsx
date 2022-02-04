import React from "react";
import Layout from "../../Components/Layout/";
import Arthur from "../../Components/ArthurSmith/";
import { Container } from "@mui/material";

const index = () => {
  return (
    <>
      <Layout>
        <div
          style={{ backgroundColor: "#E4F0F8", width: "100%", height: "100%" }}
        >
          <Container>
            <Arthur />
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default index;
