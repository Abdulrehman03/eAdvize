import { Container, FormControl, FormHelperText, Grid, Input, InputLabel, Paper } from "@mui/material";
import { useStyles } from "./compteStyle";
import React from "react";
import { useTheme } from "@mui/styles";
import TextField from '@mui/material/TextField';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Button from '@mui/material/Button';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
const Compte = () => {
    const theme = useTheme();
    const classes = useStyles(theme)
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return  <>
        <Grid container spacing={1} justifyContent={"center"} mt={4} >
            <Grid item md={5} className={classes.personalInfo}>
                <p className={classes.identite}>Identité</p>
                <div className={classes.divider} style={{ width: "56px" }}></div>
                <p className={classes.label}>Nom</p>
                <TextField style={{ width: "80%", marginLeft: '0.5rem', height: "42px" }} variant="outlined" />
                <p className={classes.label}>Prénom</p>
                <TextField style={{ width: "80%", marginLeft: '0.5rem' }} variant="outlined" />
            </Grid>
            <Grid item md={5} style={{ backgroundColor: "#143D66" }} ml={2}>
                <div>
                    <p className={classes.photo}>
                        Photo
                    </p>
                    <div className={classes.divider2} style={{ width: "56px" }}></div>
                    <div className={classes.circle}>

                    </div>
                    <div className={classes.modifier}>
                        <Button variant="outlined" >Ajouter ou Modifier</Button>
                    </div>
                </div>

            </Grid>
        </Grid>
        <br />
        <br />
        <Grid container spacing={2} justifyContent={"center"}>
            <Grid item md={10} className={classes.personalInfo}>
                <p className={classes.identite}>Adresse</p>
                <div className={classes.divider} style={{ width: "56px" }}></div>
                <p className={classes.label}>Adresse</p>
                <TextField style={{ height: "42px", marginLeft: "0.5rem" }} variant="outlined" />
                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <p className={classes.label}>Code Postal</p>
                        <TextField style={{ height: "42px", marginLeft: "0.5rem" }} variant="outlined" />
                    </Grid>
                    <Grid item md={4}>
                        <p className={classes.label}>Ville</p>
                        <TextField style={{ width: "100%", height: "42px", marginLeft: "0.5rem" }} variant="outlined" />
                    </Grid>
                    <Grid item md={3}>
                        <p className={classes.label}>Pays</p>
                        <TextField style={{ height: "42px", marginLeft: "0.5rem" }} variant="outlined" />
                    </Grid>
                </Grid>
                <div className={classes.Enregistrer}>
                    <Button variant="contained">Enregistrer</Button>
                </div>
            </Grid>

        </Grid>
        <br />
        <br />
        <Grid container spacing={2} justifyContent={"center"} mb={3}>
            <Grid item md={10} className={classes.personalInfo}>
                <p className={classes.identite}>Adresse</p>
                <div className={classes.divider} style={{ width: "56px" }}></div>
                <p className={classes.label}>Adresse</p>
                <TextField style={{ height: "42px", marginLeft: "0.5rem" }} variant="outlined" />
                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <p className={classes.label}>Code Postal</p>
                        <TextField style={{ height: "42px", marginLeft: "0.5rem" }} variant="outlined" />
                    </Grid>
                    <Grid item md={4}>
                        <p className={classes.label}>Ville</p>
                        <TextField style={{ width: "100%", height: "42px", marginLeft: "0.5rem" }} variant="outlined" />
                    </Grid>
                    <Grid item md={3}>
                        <p className={classes.label}>Pays</p>
                        <TextField style={{ height: "42px", marginLeft: "0.5rem" }} variant="outlined" />
                    </Grid>

                </Grid>
                <div className={classes.Enregistrer}>
                    <Button variant="outlined" >Enregistrer</Button>
                </div>
            </Grid>
        </Grid>
    </>

      

};

export default Compte;
