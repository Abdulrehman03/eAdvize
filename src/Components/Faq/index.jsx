import * as React from 'react';
import PropTypes from 'prop-types';
import{ Box, Tab, Tabs, Typography, Container, DialogContent} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStyles } from "./faqStyle";
import { useTheme } from "@mui/styles";
import Tab1 from './Tab1';
import Tab2 from './Tab2';

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
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

const index = () => {
  const theme = useTheme();
  const classes = useStyles(theme)
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" className={classes.faqContainer}>
    <DialogContent style={{ textAlign: "center" }}>
     <Typography variant="h5" className={classes.title}>
               Connexion à mon compte BeAdvize
    </Typography>
    <div className={classes.divider} style={{ width: "56px" }}></div>
  </DialogContent>
  <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom:2 , borderColor: 'gray' , width: '70%', margin: "0 auto", }} >
        <Tabs value={value} onChange={handleChange}   aria-label="basic tabs example">
          <Tab label="Freelances" {...a11yProps(0)} className={classes.tabs} />
          <Tab label="Entreprices" {...a11yProps(1)} className={classes.tabs} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Tab1/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Tab2/>
      </TabPanel>
    </Box>
   
    </Container>
  );
}

export default index;