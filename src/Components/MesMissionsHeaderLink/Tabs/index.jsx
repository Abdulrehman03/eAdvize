import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Tabs.scss";
import EnAttenteTabSec from "./EnAttenteTabSec";
import EnCoursTabSec from "./EnCoursTabSec";
import TermineTabSec from "./TermineTabSec";
import AnnuleTabSec from "./AnnuleTabSec";
import NonRemporteTabSec from "./NonRemporteTabSec";
import JeProposeUneMissionTab from "./JeProposeUneMission";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function MainSideTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        minHeight: "100%",
      }}
      className="TabsSection_mesMissions"
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          width:'22%'
        }}
      >
        <Tab
          style={{
            alignItems: "flex-start",
            paddingLeft: "30px",
          }}
          label="En attente"
          {...a11yProps(0)}
        />
        <Tab
          style={{
            alignItems: "flex-start",
            paddingLeft: "30px",
          }}
          label="En cours"
          {...a11yProps(1)}
        />
        <Tab
          style={{
            alignItems: "flex-start",
            paddingLeft: "30px",
          }}
          label="Terminé"
          {...a11yProps(2)}
        />
        <Tab
          style={{
            alignItems: "flex-start",
            paddingLeft: "30px",
          }}
          label="Annulé"
          {...a11yProps(3)}
        />
        <Tab
          style={{
            alignItems: "flex-start",
            paddingLeft: "30px",
          }}
          label="Non remporté"
          {...a11yProps(4)}
        />
        <div style={{
          background: 'transparent linear-gradient(90deg, #00FFBA 0%, #143D66 100%) 0% 0% no-repeat padding-box',
          width:'50%',
          height:'5px',
          margin:'1rem 0 1rem 30px'
        }}></div>
        <Tab
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            paddingLeft: "30px",
            paddingRight: "50px",
            textAlign:'left',
            color:'#04C38F'
          }}
          label="Je créé une mission"
          {...a11yProps(6)}
        /> 
      </Tabs>
      <TabPanel value={value} index={0} style={{ width: "100%" }}>
        <EnAttenteTabSec />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <EnCoursTabSec />
      </TabPanel>
      <TabPanel value={value} index={2}>
       <TermineTabSec />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AnnuleTabSec />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <NonRemporteTabSec />
      </TabPanel>
      <TabPanel value={value} index={6} style={{ width: "100%" }}>
        <JeProposeUneMissionTab />
      </TabPanel> 
    </Box>
  );
}
