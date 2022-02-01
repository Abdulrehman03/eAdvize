import { Container, FormControl, FormHelperText, Grid, Input, InputLabel, Paper } from "@mui/material";
import { useStyles } from "./web79style";
import React, { useState } from "react";
import { useTheme } from "@mui/styles";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Button from '@mui/material/Button';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Compte from "./Compte";
import DePasse from "./DePasse";
import Suppression from "./Suppression"
const UserAccount = () => {

  const theme = useTheme();
  const classes = useStyles(theme)
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const menu = [{
    name: "Compte",

  },
  {
    name: "Mot de Passe"

  }, {
    name: "Suppression"

  }]
  const [select, setSeleItem] = useState("Compte")
  return <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Container >
      <Grid container mb={3} >
        <Grid item md={2} className={classes.navBar}>
          <div className={classes.column}>
            {
              menu.map((item, index) => {
                return <div key={index} className={`${classes.listItem} ${select === item.name && classes.activeClass}`} onClick={() => setSeleItem(item.name)}>
                  {item.name}
                </div>
              })
            }
          </div>
        </Grid>
        <Grid item md={10} style={{
          backgroundColor: "white", boxShadow: "0px 6px 6px #00000029",
          borderRadius: " 5px",
          opacity: "1"
        }}>
          {select === "Compte" ? <Compte /> : select === "Mot de Passe" ? <DePasse/> : <Suppression/>}
         
        </Grid>

      </Grid>
    </Container>
  </LocalizationProvider>;
};

export default UserAccount;
