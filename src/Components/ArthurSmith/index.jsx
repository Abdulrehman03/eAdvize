import React from 'react';
import { useTheme } from '@mui/styles';
import { useStyles } from './arthurStyled';
import Grid from '@mui/material/Grid';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Profile from '../../Assests/profile.png';
import Twitter from '../../Assests/twitter.png';
import Linkedin from '../../Assests/linkedin.png';
import Building from '../../Assests/building.png';
import CloseIcon from '@mui/icons-material/Close';

const index = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <>
            <div className={classes.mainContent}>
                <div className={classes.contentWrapper}>
                    <Grid container spacing={2}>
                        <Grid item md={4}>
                            <div className={classes.contentWrapOne}>
                                <div className={classes.boxWrapper}>
                                    <div className={classes.boxWrapOne}>
                                        <div className={classes.spaceWrapper}>
                                            <img src={Profile} className={classes.accountCircle} />
                                            <h2 className={classes.boxNameHeading}>Arthur Smith </h2>
                                            <h3 className={classes.boxDataHeading}>Coach Agile</h3>
                                            <div className={classes.divider} style={{ width: '56px' }}></div>
                                            <div className={classes.contentWrapData}>
                                                <p className={classes.boxOnePara}>
                                                    <span className={classes.circle}></span>
                                                    &nbsp; Actuellement indisponible
                                                </p>
                                                <span className={classes.boxSpanPara}>
                                                    Mettre à jour sur le
                                                    <a href="#" className={classes.boxHrefPara}>
                                                        Dasboard
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.boxWrapTwo}>
                                        <div className={classes.spaceOneWrapper}>
                                            <p className={classes.boxTwoHeading}>
                                                Profil complété à<span className={classes.boxTwoSpan}> 75%</span>
                                            </p>
                                            <div className={classes.dividerBlue} style={{ width: '56px' }}></div>
                                            <p className={classes.boxTwoContent}>Finaliser mon profil en complétant ces informations :</p>
                                            <p className={classes.boxTwoColor}>
                                                <CloseIcon
                                                    style={{
                                                        color: 'red !important',
                                                        verticalAlign: 'middle',
                                                        fontWeight: 'bold',
                                                    }}
                                                />
                                                &nbsp; Expériences significatives
                                            </p>
                                            <p className={classes.boxTwoColor}>
                                                <CloseIcon
                                                    style={{
                                                        color: 'red !important',
                                                        verticalAlign: 'middle',
                                                        fontWeight: 'bold',
                                                    }}
                                                />
                                                &nbsp; Diplômes
                                            </p>
                                        </div>
                                    </div>
                                    <div className={classes.boxWrapThree}>
                                        <div className={classes.spaceWrapper}>
                                            <p className={classes.boxThreeHeading}>Mes préférences de mission</p>
                                            <div className={classes.dividerBlue} style={{ width: '56px' }}></div>
                                            <p className={classes.boxThreeSpan}>
                                                Zone d’activite <span className={classes.boxThreePara}>Paris</span>
                                            </p>
                                            <p className={classes.boxThreeSpan}>
                                                TJM <span className={classes.boxThreePara}>450 €</span>
                                            </p>
                                            <h5 className={classes.boxThreeSpan}>
                                                Secteur d’activite <p className={classes.boxThreePara}>Organisation entreprise</p>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className={classes.boxWrapFour}>
                                        <div className={classes.spaceWrapper}>
                                            <p className={classes.boxFourHeading}>Mes diplômes</p>
                                            <div className={classes.dividerBlue} style={{ width: '56px' }}></div>
                                            <div className={classes.boxFourGroup}>
                                                <span className={classes.boxFourSpan}>Ecole /Uni</span>
                                                <h2 className={classes.boxFourDip}>Nom du diplôme</h2>
                                                <p className={classes.boxFourPara}>2016</p>
                                            </div>
                                            <div className={classes.boxFourGroup}>
                                                <span className={classes.boxFourSpan}>Ecole /Uni</span>
                                                <h2 className={classes.boxFourDip}>Nom du diplôme</h2>
                                                <p className={classes.boxFourPara}>2016</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.boxWrapFive}>
                                        <div className={classes.spaceWrapper}>
                                            <p className={classes.boxFiveHeading}>Réseaux Sociaux</p>
                                            <div className={classes.dividerBlue} style={{ width: '56px' }}></div>
                                            <br />
                                            <div>
                                                <span>
                                                    <img src={Twitter} />
                                                </span>
                                                &nbsp; &nbsp;
                                                <span>
                                                    <img src={Linkedin} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={8}>
                            <div className={classes.contentWrapTwo}>
                                <div className={classes.slideWrapper}>
                                    <div className={classes.spaceWrapper}>
                                        <div className={classes.slideHeading}>
                                            <p className={classes.headingWrapper}>Mes compétences</p>

                                            <EditOutlinedIcon />
                                        </div>
                                        <div className={classes.divider} style={{ width: '56px' }}></div>
                                        <p className={classes.tag}>#Agile &nbsp; #Scrum &nbsp; #Agile &nbsp; #Scrum &nbsp;</p>
                                        <p className={classes.tag}>#Sprint &nbsp; #Formation &nbsp; #Sprint &nbsp; #Formation &nbsp;</p>
                                    </div>
                                </div>
                                <div className={classes.slideTwoWrap}>
                                    <div className={classes.spaceWrapper}>
                                        <div className={classes.slideHeading}>
                                            <p className={classes.headingWrapper}>Ma présentation</p>

                                            <EditOutlinedIcon />
                                        </div>
                                        <div className={classes.divider} style={{ width: '56px' }}></div>
                                        <p className={classes.slideParaWrap}>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                                            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                        </p>
                                        <p className={classes.slideParaWrap}>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                                            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                        </p>
                                    </div>
                                </div>
                                <div className={classes.slideThreeWrap}>
                                    <div className={classes.spaceWrapper}>
                                        <p className={classes.headingWrapper}>Mes expériences significatives</p>
                                        <div className={classes.divider} style={{ width: '56px' }}></div>
                                        <div classsName={classes.asideWrapper}>
                                            <div className={classes.asideOneWrap}>
                                                <div className={classes.slideHeading}>
                                                    <h2 className={classes.slideEnter}>
                                                        <span>
                                                            <img src={Building} />
                                                        </span>
                                                        Entreprise
                                                    </h2>
                                                    <EditOutlinedIcon />
                                                </div>
                                                <Grid container spacing={12}>
                                                    <Grid item={4}>
                                                        <div className={classes.featuredHeading}>Rôle dans l’entrepr</div>
                                                    </Grid>
                                                    <Grid item={4}>
                                                        <div className={classes.featuredHeading}>Freelance</div>
                                                    </Grid>
                                                    <Grid item={4}>
                                                        <div className={classes.slideDate}>02.2018 à 06.2020</div>
                                                    </Grid>
                                                </Grid>

                                                <p className={classes.slideParagraph}>
                                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                                    aliquyam erat, sed diam voluptua. At vero eos Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                                                </p>
                                            </div>
                                            <br />
                                            <div className={classes.asideTwoWrap}>
                                                <div className={classes.slideHeading}>
                                                    <h2 className={classes.slideEnter}>
                                                        <span>
                                                            <img src={Building} />
                                                        </span>
                                                        Entreprise
                                                    </h2>
                                                    <EditOutlinedIcon />
                                                </div>
                                                <Grid container spacing={12}>
                                                    <Grid item={4}>
                                                        <div className={classes.featuredHeading}>Rôle dans l’entrepr</div>
                                                    </Grid>
                                                    <Grid item={4}>
                                                        <div className={classes.featuredHeading}>Freelance</div>
                                                    </Grid>
                                                    <Grid item={4}>
                                                        <div className={classes.slideDate}>02.2018 à 06.2020</div>
                                                    </Grid>
                                                </Grid>

                                                <p className={classes.slideParagraph}>
                                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                                    aliquyam erat, sed diam voluptua. At vero eos Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.slideFourWrap}>
                                    <div className={classes.spaceWrapper}>
                                        <p className={classes.headingWrapper}>Diplômes</p>
                                        <div className={classes.divider} style={{ width: '56px' }}></div>
                                        <div className={classes.slideIndex}>
                                            <div className={classes.slideHeading}>
                                                <p style={{ marginTop: '1rem' }} className={classes.slideEnter}>
                                                    Nom du diplôme / cursus
                                                </p>
                                                <div style={{ marginTop: '1rem' }}>
                                                    <EditOutlinedIcon />
                                                </div>
                                            </div>
                                            <h2 className={classes.ecoleHeading}>Ecole /Uni</h2>
                                            <p className={classes.currentDate}>2016</p>
                                            <br />
                                            <div className={classes.objectHeading} style={{ marginBottom: '2rem' }}>
                                                <p className={classes.headingWrapper}>Certifications</p>
                                                <div className={classes.divider} style={{ width: '56px' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.slideFiveWrap}>
                                    <div className={classes.spaceWrapper}>
                                        <div className={classes.slideConnect}>
                                            <p className={classes.headingWrapper}>Mes avis</p>
                                            <div className={classes.divider} style={{ width: '56px' }}></div>
                                            <div className={classes.profileWrapper}>
                                                <div className={classes.boxWrap}>
                                                    <img src={Profile} className={classes.accountWrapper} />
                                                    <p
                                                        style={{
                                                            display: 'inline-block',
                                                            paddingLeft: '10px',
                                                        }}
                                                        className={classes.ecoleHeading}>
                                                        Nom du client <p style={{ marginTop: '0px' }}>Entreprise</p>
                                                    </p>
                                                </div>
                                                <p className={classes.loremParagraph}>
                                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                                    aliquyam erat, sed diam voluptua. At vero eos Lorem ipsum dolor sit amet.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </>
    );
};

export default index;
