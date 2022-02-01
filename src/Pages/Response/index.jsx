import React from "react";
import Layout from "../../Components/Layout/";
import Response from "../../Components/Response/";

const index = () => {
  return (
    <>
      <Layout register={true}>
        <div
          style={{
            backgroundColor: "#143D66",
            width: "100vw",
            height: "100vh",
          }}
        >
          <Response />
        </div>
      </Layout>
    </>
  );
};

export default index;
