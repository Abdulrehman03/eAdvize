import * as React from 'react';
import{ Accordion, AccordionDetails, AccordionSummary, Typography, Container, DialogContent} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStyles } from "./faqStyle";
import { useTheme } from "@mui/styles";
 
const Tab2 = () => {
  const theme = useTheme();
  const classes = useStyles(theme)
  const [expanded, setExpanded] = React.useState(false);
  const [color, setColor] = React.useState(false);
  const arr = [
    {name:'Shehrooz', panel:'panel1'},
    {name:'Ahmed', panel:'panel2'},
    {name:'Imran', panel:'panel3'},
    {name:'Doger', panel:'panel4'},
]

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setColor(isExpanded ? panel : false);
  };
  return (<>
      {arr.map((item, index) =>{
          const{panel,name}=item;
          console.log(panel);
          return( <Accordion key={index} expanded={expanded === panel} onChange={handleChange(panel)}  className={classes.faqAccordion}>
        <AccordionSummary
          expandIcon={expanded ===panel ?<ExpandMoreIcon viewBox='0 0 18 17' style={{fill:"white"}} />:<ExpandMoreIcon viewBox='0 0 18 17'  />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={expanded === panel? classes.Theading :''}
         
        >
          <Typography className={expanded === panel? classes.color: classes.generalColor} sx={{fontSize:'20px',height:"40px" , width: '100%', flexShrink: 0}}>
           {name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion> )}
       )}
    </>
  );
}

export default Tab2;