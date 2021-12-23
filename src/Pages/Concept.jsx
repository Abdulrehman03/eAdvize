import * as React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { Container, Grid, Button } from '@mui/material';

import Layout from '../Components/Layout/index';

import ConceptMainImg from '../Assests/conceptMain.png';
import ConceptLadyImg from '../Assests/conceptLady.png';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            height: '100vh',
            width: '100%',
        },
        sectionOne: {
            background: 'transparent linear-gradient(360deg, #143D66 0%, #006E77 35%, #27F5BA 100%) 0% 0% no-repeat padding-box',
        },
        headingText: {
            fontSize: '35px',
            color: '#143D66',
            fontWeight: 'bold',
            letterSpacing: '0px',
        },
        divider: {
            background: 'transparent linear-gradient(90deg, #00FFBA 0%, #143D66 100%) 0% 0% no-repeat padding-box',
            height: '7px',
            borderRadius: '4px',
            marginTop: '25px',
            marginBottom: '25px',
        },
        bannerText: {
            fontSize: '25px',
            color: 'white',
        },
        sectionTwoText: {
            fontSize: '25px',
            color: '#143D66',
            fontWeight: 'bold',
        },
        greenFilledButton: {
            background: '#00FFBA 0% 0% no-repeat padding-box !important',
            height: '52px',
            width: '263px',
            color: '#143D66 !important',
            fontSize: '17px !important',
            fontWeight: 'bold !important',
        },
        greenOutlinedButton: {
            // background: '#00FFBA 0% 0% no-repeat padding-box !important',
            height: '52px',
            width: '263px',
            color: '#00FFBA !important',
            fontSize: '17px !important',
            fontWeight: 'bold !important',
            marginTop: '10px !important',
            border: '2px solid #00FFBA !important',
        },
        countBg: {
            background: '#00FFBA 0% 0% no-repeat padding-box',
            height: '27px',
            width: '70px',
            marginTop: '10px',
            position: 'relative',
            bottom: '30px',
            right: '4px',
            zIndex: -10,
        },
        countText: {
            fontSize: '35px',
            color: '#143D66',
        },
        countBody: {
            display: 'flex',
        },
        countDesc: {
            color: '#143D66',
            fontSize: '20px',
            marginTop: '10px',
        },
    }),
);
const Concept = () => {
    const classes = useStyles();
    let countText = [
        'Examen du profil (Nous examinons le CV, le niveau d’expérience ainsi que les projets effectués)',
        'Entretien individuel (les candidats sélectionnés sont invités à des entretiens par nos consultants experts qui vont les aider pour leurs recherches et durant leurs missions)',
        'Identification des hard et soft skills (on fait le bilan des compétences et expériences du candidat ainsi que de sa personnalité et méthode de travail)',
        'Évaluation en fin de mission (tous les consultants sont évalués en fin de projet par le client pour nous aider à améliorer ses prochaines interventions)',
    ];
    return (
        <Layout>
            <section className={classes.sectionOne}>
                <Container>
                    <Grid pt={10} pb={20} container>
                        <Grid item xs={12} lg={6}>
                            <h3 className={classes.headingText}>Travailler avec les freelances, c’est faire appel aux compétences de la plus grande communauté d’experts.</h3>
                            <div className={classes.divider} style={{ width: '56px' }}></div>
                            <p className={classes.bannerText}>
                                BeAdvize est la première place de marché avec une vision 360° du projet, qui facilite les synergies entre entreprises et consultants indépendants
                            </p>
                            <Button className={classes.greenFilledButton}>Je suis Consultant</Button>
                            <br />
                            <Button className={classes.greenOutlinedButton}>Je suis Client</Button>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img src={ConceptMainImg} width="100%" />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <Container>
                <Grid pt={10} pb={20} justifyContent="space-between" container>
                    <Grid item xs={12} lg={8}>
                        <h3 className={classes.headingText}>Vous êtes une entreprise cliente</h3>
                        <div className={classes.divider} style={{ width: '56px' }}></div>
                        <p className={classes.sectionTwoText}>Une procédure de sélection rigoureuse pour travailler avec les meilleurs consultants</p>
                        <div>
                            {countText?.map((item, index) => (
                                <div className={classes.countBody}>
                                    <div style={{ textAlign: 'right', marginRight: '35px' }}>
                                        <h3 className={classes.countText}>0{index + 1}</h3>
                                        <div className={classes.countBg}></div>
                                    </div>
                                    <div>
                                        <p className={classes.countDesc}>{item}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <img src={ConceptLadyImg} width="150" />
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default Concept;
