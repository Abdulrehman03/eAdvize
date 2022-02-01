import { Container, FormControl, FormHelperText, Grid, Input, InputLabel, Paper } from "@mui/material";
import { useStyles } from "./SuppressionStyle";
import React from "react";
import { useTheme } from "@mui/styles";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const DePasse = () => {
    const theme = useTheme();
    const classes = useStyles(theme)


    return <>
        <Grid container spacing={1} mt={4} >
            <Grid item md={10} className={classes.personalInfo} ml={4} mb={20}>
                <div> <p className={classes.identite}>Supprimer mon compte</p>
                    <div className={classes.divider} style={{ width: "56px" }}></div>
                    <p className={classes.identite}>Oups ! Dommage… pourquoi souhaitez-vous partir ?</p>
                    <FormGroup style={{ marginLeft: '10px' }}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Je ne travaille plus en tant que free-lance / entreprise" />
                    </FormGroup>
                    <FormGroup style={{ marginLeft: '10px' }}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Je ne suis pas satisfait par les services proposés par BeAdvize" />
                    </FormGroup>
                    <div style={{   marginLeft: '40px' }}>
                        <p className={classes.Pourriez}>Pourriez-vous nous en dire plus ?</p>
                        <TextField id="outlined-basic" variant="outlined" />
                    </div>

                    <FormGroup style={{ marginLeft: '10px' }}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Je suis trop souvent sollicité pour des missions non pertinentes" />
                    </FormGroup>
                    <FormGroup style={{ marginLeft: '10px' }}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Je privilégie une autre solution" />
                    </FormGroup>
                    <FormGroup style={{ marginLeft: '10px' }}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Les services de beAdvize ne sont pas pertinent pour ma situation professionnelle" />
                    </FormGroup>
                    <Grid container spacing={1}>
                        <Grid md={2} mt={1} ml={1}>
                            <FormGroup style={{ marginLeft: '10px' }}>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Autre" />
                            </FormGroup>
                        </Grid>
                        <Grid md={3} style={{ marginTop: "12px" }}>
                            <TextField id="outlined-basic" variant="outlined" />
                        </Grid>
                    </Grid>


                    <div className={classes.Enregistrer}>
                        <Button variant="outlined" >Enregistrer</Button>
                    </div></div>

            </Grid>

        </Grid>

    </>



}

export default DePasse;
