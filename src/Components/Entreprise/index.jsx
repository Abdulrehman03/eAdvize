import React from "react";
import { useTheme } from "@mui/styles";
import { useStyles } from "./EntrepriseStyle.js";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const index = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return <Container className={classes.parentGrid}>
        <Grid container spacing={2} justifyContent="center" mt={4}>
            <Grid item md={11} className={classes.childGrid}>
                <div style={{ width: "90%", margin: "auto" }}>
                    <p className={classes.heading}>Mon entreprise</p>
                    <div className={classes.divider} style={{ width: "56px" }}></div>
                    <div>
                        <p className={classes.label}>Forme Juridique</p>
                        <TextField variant="outlined"/>
                    </div>
                    <div>
                        <p className={classes.label}>Représentant Légal</p>
                        <TextField variant="outlined" />
                    </div>
                    <div>
                        <p className={classes.label}>Adresse</p>
                        <TextField variant="outlined" />
                    </div>
                     <Grid container spacing={2}>
                        <Grid item md={4}>
                            <p className={classes.label}>Code Postal</p>
                            <TextField style={{ height: "42px" }} variant="outlined" />
                        </Grid>
                        <Grid item md={4}>
                            <p className={classes.label}>Ville</p>
                            <TextField style={{ width: "100%", height: "42px" }} variant="outlined" />
                        </Grid>
                        <Grid item md={4}>
                            <p className={classes.label}>Pays</p>
                            <TextField style={{ height: "42px"}} variant="outlined" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} mt={4}>
                        <Grid item md={6}>
                            <div className={classes.fileUploaderDiv} >
                                <p className={classes.label2}>
                                    Pièce d’identité (recto / verso)
                               </p>
                               <div className={classes.fileName}>
                                    <p>Lorem Ipsum.pdf</p>
                               </div>
                                <div className={classes.Modifier}>
                                    <Button variant="contained">Ajouter / Modifier</Button>
                                </div>

                        </div>
                        </Grid>
                        <Grid item md={6} >
                            
                            <div className={classes.fileUploaderDiv} >
                                <p className={classes.label2}>Numéro Kbis</p>
                                <div className={classes.fileName}>
                                    <p>Lorem Ipsum.pdf</p>
                                </div>
                                <div className={classes.Modifier}>
                                    <Button variant="contained">Ajouter / Modifier</Button>
                                </div>
                            </div>

                        </Grid>
                       
                    </Grid>
                 
                    <Grid container spacing={2} mt={4}>
                        <Grid item md={6}>
                            <div className={classes.fileUploaderDiv} >
                                <p className={classes.label2}>
                                    Pièce d’identité (recto / verso)
                                </p>
                                <div className={classes.fileName}>
                                    <p>Lorem Ipsum.pdf</p>
                                </div>
                                <div className={classes.Modifier}>
                                    <Button variant="contained">Ajouter / Modifier</Button>
                                </div>

                            </div>
                        </Grid>
                        <Grid item md={6} >

                            <div className={classes.fileUploaderDiv} >
                                <p className={classes.label2}>Numéro Kbis</p>
                                <div className={classes.fileName}>
                                    <p>Lorem Ipsum.pdf</p>
                                </div>
                                <div className={classes.Modifier}>
                                    <Button variant="contained">Ajouter / Modifier</Button>
                                </div>
                            </div>

                        </Grid>

                    </Grid>
                    <div className={classes.register}>
                        <Button variant="contained">Enregistrer</Button>
                    </div>
                </div>
            </Grid>

        </Grid>
        <br/>
        <br />

    </Container>;
};

export default index;
