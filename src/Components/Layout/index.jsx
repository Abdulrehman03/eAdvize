import React from "react";
import Header from "../Header";
import Footer from "../Footer";
const Layout = (props) => {
  return (
    <div>
      <Header register={props.register} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
