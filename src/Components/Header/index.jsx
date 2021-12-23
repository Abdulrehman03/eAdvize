import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import { useStyles } from './headerStyle';
import SubHeader from './subHeader/subHeader';
import { useTheme } from '@mui/styles';
import Modal from '../Modal/';
import Logo from '../../public/header_logo.png';

const Header = props => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [openModel, setModal] = useState(false);
    return (
        <>
            <div
                className={classes.header}
                style={{
                    backgroundColor: props.register && '#FFFFFF',
                    boxShadow: props.register && '0px 3px 6px #00000029',
                    borderTop: props.register && '1px solid #00000029',
                }}>
                <Container>
                    <div className={classes.subHeader}>
                        <div className={classes.navigation}>
                            <div className={classes.footerEadvizeLogo}>
                                <img className={classes.headerEadvizeLogo_img} src={Logo} alt=" welcome to eadvize logo here "></img>
                            </div>

                            <nav className={`${classes.navigation_nav} `}>
                                {props.register ? (
                                    <ul className={classes.navigation_list}>
                                        <li className={classes.navigation_item}>
                                            <Link to="/">
                                                <span className={`${classes.navigation_link} ${classes.navigation_linkConnexion}`}>Quitter</span>
                                            </Link>
                                        </li>
                                    </ul>
                                ) : (
                                    <ul className={classes.navigation_list}>
                                        <li className={classes.navigation_item}>
                                            <Link to="/concept" className={classes.navigation_link}>
                                                Concept
                                            </Link>
                                        </li>
                                        <li className={classes.navigation_item}>
                                            <Link to="#" className={classes.navigation_link}>
                                                Blog
                                            </Link>
                                        </li>
                                        <li className={classes.navigation_item}>
                                            <a href="#" className={`${classes.navigation_link} ${classes.navigation_linkDéposer}`}>
                                                Déposer un projet
                                            </a>
                                        </li>
                                        <li className={classes.navigation_item}>
                                            <Link to="/consultant-registration" className={`${classes.navigation_link} ${classes.navigation_linkInscription}`}>
                                                Inscription Consultant
                                            </Link>
                                        </li>
                                        <li className={classes.navigation_item}>
                                            <span className={`${classes.navigation_link} ${classes.navigation_linkConnexion}`} onClick={() => setModal(true)}>
                                                Connexion
                                            </span>
                                        </li>
                                    </ul>
                                )}
                            </nav>
                        </div>
                    </div>
                </Container>
            </div>
            <div className={classes.subHeaderMobile}>
                <SubHeader />
            </div>
            <Modal openModel={openModel} setModel={setModal} />
        </>
    );
};

export default Header;
