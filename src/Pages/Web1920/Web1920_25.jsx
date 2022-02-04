import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { useStyle } from "./style";
import { Box } from "@mui/system";
import { Typography, Grid, Button } from "@mui/material";

// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';



const Web1920_25 = ({ stepChange}) => {
  const theme = useTheme();
  const classes = useStyle(theme);
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
   
      <div className={classes.root}>
        <br/>
        <Box width="70%" p="4" className={classes.container}>
          <div className={classes.innerContainer}>
            <div className={classes.title}>
              <Typography variant="h4">Ma définition du projet</Typography>
               <div
                  className={classes.divider}
                  style={{ width: "56px" }}
                ></div>
               
            </div> 
            <div className={classes.quesContain}>
                <Typography variant="h5" py={2} >Vos retours sur cette mission : Interrogations, pertinence de votre profil, Intérêt professionnel</Typography>
                <Typography variant="body1" >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Typography>
            </div>
            <div className={classes.quesContain}>
                <Typography variant="h5" py={2} >Vos missions précédente en lien avec le projet du client</Typography>
                <Typography variant="body1" >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Typography>
            </div>

<div className={classes.quesContain}>
                <Typography variant="h5" py={2} >
                    Mode de facturation</Typography>
                <Typography variant="body1" >Forfait</Typography>
            </div>            <div >
                <button className={classes.tagbtn} color="#143D66">Retour au dashboard</button>
                <button className={classes.tagbtn} style={{margin:"0 8px"}} >Modifier</button>
              </div>
          </div>
        </Box>
        <br/>
        <Box width="70%" p="4" className={classes.container}>
          <div className={classes.innerContainer}>
            <div className={classes.title}>
             <div  style={{display:'flex'}}> <Typography variant="h5">Titre</Typography>
              <Typography variant="body1" mt={1} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</Typography>
              </div><div
                  className={classes.divider}
                  style={{ width: "56px" }}
                ></div>
               
            </div> 
            <div>
              <Grid container >
                <Grid md={4}>
                 <div style={{margin:'5px'}} > 
                   <Typography variant="h6">Poste proposé</Typography>
                  <Typography variant="body2">Lorem Ipsum</Typography>
                  </div>
                  <div style={{margin:'5px'}} > 
                   <Typography variant="h6">Lieu de travail</Typography>
                  <Typography variant="body2">Paris</Typography>
                  </div>
                  <div style={{margin:'5px'}} > 
                   <Typography variant="h6">Mode de facturation</Typography>
                  <Typography variant="body2">Forfait</Typography>
                  </div>
                </Grid>
                <Grid md={4}>
                <div style={{margin:'5px'}} > 
                   <Typography variant="h6">Séniorite du consultant</Typography>
                  <Typography variant="body2">3 / 5 ans</Typography>
                  </div>
                  <div style={{margin:'5px'}} > 
                   <Typography variant="h6">Début de la mission</Typography>
                  <Typography variant="body2">Des que Possible</Typography>
                  </div>
                </Grid>
                <Grid md={4}>
                <div style={{margin:'5px'}} > 
                   <Typography variant="h6">Fréquence par semaine</Typography>
                  <Typography variant="body2">Temps Plein</Typography>
                  </div>
                  <div style={{margin:'5px'}} > 
                   <Typography variant="h6">Durée de la mission</Typography>
                  <Typography variant="body2">3 a 5 mois</Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div>
              <div>
                <Typography variant="h5" mt={3}>Description</Typography>
                <div
                  className={classes.divider}
                  style={{ width: "56px" }}
                ></div>
                <di>
                  <Typography variant="body1" my={2} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</Typography>
                  <Typography variant="body1" my={2} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</Typography>
                </di>
              </div>
            </div>
            </div>
            </Box>
            <br/>
     
      </div>
 
  );
};
export default Web1920_25;
