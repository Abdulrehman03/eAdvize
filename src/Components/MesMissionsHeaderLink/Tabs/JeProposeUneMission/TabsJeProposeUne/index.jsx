import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useStyles } from "./tabsStyle";
import TextField from "@mui/material/TextField";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button"; 
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const TabsJeProposeUne = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [value, setValue] = React.useState(0);
  const [description, setDescription] = React.useState(false);
  
   
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          style={{width:'100%', justifyContent: 'center'}} 
        >
          <Tab
            label={<div className={classes.tabTitle}>Forfait</div>}
            {...a11yProps(0)}
            style={{width:'100%'}}
          />
          <Tab
            label={
              <div className={classes.tabTitle2}>Missions Enregistrées</div>
            }
            style={{width:'100%'}}
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <div className={classes.subHead}>Je connais le budget TTC alloué</div>
                <div>
                <Button variant="outlined" className={classes.ButtonOutlinedTabFortrait}>
                  Qui
                </Button>
                </div>
                <div>
                <Button variant="outlined" className={classes.ButtonOutlinedTabFortrait}>
                Pas encore
                </Button>
                </div> 
            </div>
        <FormGroup>
  <FormControlLabel className={classes.checkLabel} control={<Checkbox defaultChecked />} label="Je souhaite être contacté par l’équipe Beadvize au sujet de cette nouvelle mission" /> 
</FormGroup>
             
                <Button style={{margin:'1rem 0 0'}} variant="contained" className={classes.button}>
                  Envoyer
                </Button> 
        </div> 
      </TabPanel>
      <TabPanel value={value} index={1}> 
      </TabPanel>
    </Box>
  );
};

export default TabsJeProposeUne;
