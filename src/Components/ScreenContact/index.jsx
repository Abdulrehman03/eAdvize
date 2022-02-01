import React from 'react';
import { Container, Grid, } from "@mui/material";
import { useTheme } from "@mui/styles";
import { useStyles } from "./screenStyle";
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
const index = () => {
    const theme = useTheme();
    const classes = useStyles(theme)
    return <Container>
        <Grid container spacing={2} justifyContent={"center"} alignContent={"center"} mt={4}  className={classes.parentGrid}>
            <Grid md={10} className={classes.borderDiv}>
                <p className={classes.heading}>Formulaire de contact</p>
                <div className={classes.divider} style={{ width: "56px" }}></div>
                <p className={classes.heading2}>Entrez en contact avec notre équipe en remplissant ce formulaire de contact.</p>
                <Grid container spacing={2} justifyContent={"center"} mt={3}>
                    <Grid md={5} ml={7}>
                        <p className={classes.label}>Prénom, Nom</p>
                        <TextField id="filled-basic" variant="outlined" style={{ width: "80%" }} />
                    </Grid>
                    <Grid md={5}>
                        <p className={classes.label}>Entreprise (optionnel)</p>
                        <TextField id="filled-basic" variant="outlined" style={{ width: "80%" }} />
                    </Grid>

                </Grid>
                <Grid container spacing={2} justifyContent={"center"} mt={2}>
                    <Grid md={5} ml={7}>
                        <p className={classes.label}>Adresse email</p>
                        <TextField id="filled-basic" variant="outlined" style={{ width: "80%" }} />
                    </Grid>
                    <Grid md={5}>
                        <p className={classes.label}>Téléphone (optionnel)</p>
                        <TextField id="filled-basic" variant="outlined" style={{ width: "80%" }} />
                    </Grid>

                </Grid>
                <Grid container spacing={2} justifyContent={"center"} mt={2}>
                    <Grid md={5} ml={7}>
                        <p className={classes.label}>Je suis…</p>
                        <TextField id="filled-basic" variant="outlined" style={{ width: "80%" }} />
                    </Grid>
                    <Grid md={5}>
                        <p className={classes.label}>Sujet</p>
                        <TextField id="filled-basic" variant="outlined" style={{ width: "80%" }} />
                    </Grid>

                </Grid>
                <Grid container spacing={2} justifyContent={"center"} mt={2} mb={5}>
                    <Grid md={10} ml={7}>
                        <p className={classes.label}>Message</p>
                        <TextareaAutosize
                            minRows={10}
                            style={{ width: "89%" }}
                        />
                    </Grid>


                </Grid>
            </Grid>
        </Grid>
        <br />
        <br />

        <br />

    </Container>;
};
export default index