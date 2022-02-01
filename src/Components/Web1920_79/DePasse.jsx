import { Container, FormControl, FormHelperText, Grid, Input, InputLabel, Paper } from "@mui/material";
import { useStyles } from "./compteStyle";
import React from "react";
import { useTheme } from "@mui/styles";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const DePasse = () => {
    const theme = useTheme();
    const classes = useStyles(theme)


    return <>
        <Grid container spacing={1}  mt={4} >
            <Grid item md={6} className={classes.personalInfo} ml={4} mb={20}>
                <p className={classes.identite}>Changement de mot de passe</p>
                <div className={classes.divider} style={{ width: "56px" }}></div>
                <p className={classes.label}>Mot de passe actuel</p>
                <TextField style={{ width: "80%", marginLeft: '0.5rem', height: "42px" }} variant="outlined" />
                <p className={classes.label}>Nouveau mot de passe</p>
                <TextField style={{ width: "80%", marginLeft: '0.5rem' }} variant="outlined" />
                <p className={classes.label}>Confirmer mot de passe</p>
                <TextField style={{ width: "80%", marginLeft: '0.5rem' }} variant="outlined" />
                <div className={classes.Enregistrer}>
                    <Button variant="outlined" >Enregistrer</Button>
                </div>
            </Grid>
            
        </Grid>

    </>



}

export default DePasse;
