import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import { useStyles } from "./subHeaderStyle";
import Container from "@mui/material/Container";
import Logo from "../../../public/header_logo.png";
import "./subheader.scss";

const SubHeader = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <div className={classes.subHeader}>
        <Container>
        <div>
          <div className={classes.footerEadvizeLogo}>
            <img
              className={classes.footerEadvizeLogo_img}
              src={Logo}
              alt=" welcome to eadvize logo here "
            ></img>
          </div>
        </div>
        <div className={classes.navigation}>
          <input
            type="checkbox"
            className={`${classes.checkbox_navigation} checkbox_navigation`}
            id="navi-toggle"
          />
          <label
            htmlFor="navi-toggle"
            className={`${classes.navigation_button} navigation_button`}
          >
            <span className={`${classes.navigation_icon} navigation_icon`}>
              &nbsp;
            </span>
          </label>
          <div
            className={`${classes.navigation_background} navigation_background`}
          >
            &nbsp;
          </div>

          <nav className={`${classes.navigation_nav} navigation_nav`}>
            <ul className={classes.navigation_list}>
              <li className={classes.navigation_item}>
                <Link to="#" className={classes.navigation_link}>
                  Acceuil
                </Link>
              </li>
              <li className={classes.navigation_item}>
                <Link to="#" className={classes.navigation_link}>
                  Concept
                </Link>
              </li>
              <li className={classes.navigation_item}>
                <Link to="#" className={classes.navigation_link}>
                  Blog
                </Link>
              </li>
              <li className={classes.navigation_item}>
                <a
                  href="#"
                  className={`${classes.navigation_link} ${classes.navigation_linkDéposer}`}
                >
                  Déposer un projet
                </a>
              </li>
              <li className={classes.navigation_item}>
                <a
                  href="#"
                  className={`${classes.navigation_link} ${classes.navigation_linkInscription}`}
                >
                  Inscription Consultant
                </a>
              </li>
              <li className={classes.navigation_item}>
                <a
                  href="#"
                  className={`${classes.navigation_link} ${classes.navigation_linkConnexion}`}
                >
                  Connexion
                </a>
              </li>
            </ul>
          </nav>
        </div>
        </Container>
      </div>
    </>
  );
};

export default SubHeader;
