import React from "react";
import Layout from "../../Components/Layout/";
import Dashboard from "../../Components/DashboardPage";
import { Container } from "@mui/material";

const DashboardPage = () => {
  return (
    <>
      <Layout>
        <div
          style={{ backgroundColor: "#E4F0F8", padding:'2rem 0', width: "100%", height: "100%" }}
        >
          <Container>
            <Dashboard />
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default DashboardPage;
