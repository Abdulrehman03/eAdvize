import * as React from 'react';
import{ Accordion, AccordionDetails, AccordionSummary, Typography, Container, DialogContent} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStyles } from "./faqStyle";
import { useTheme } from "@mui/styles";
 
const Tab1 = () => {
    
  const theme = useTheme();
  const classes = useStyles(theme)
  const [expanded, setExpanded] = React.useState(false);
  const [color, setColor] = React.useState(false);
  const arr = [
    { name:'Quels commissions prend BeAdvize sur mes prestations ?', panel:'panel1' , content : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'},
    { name:'Comment maximiser mes chances d’obtenir des missions ?', panel:'panel2',content : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'},
    { name:'Quels commissions prend BeAdvize sur mes prestations ?', panel:'panel3',content : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'},
    { name:'Comment maximiser mes chances d’obtenir des missions ?', panel:'panel4',content : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'},
    { name: 'Quels commissions prend BeAdvize sur mes prestations ?', panel: 'panel5',content : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.' },
    { name: 'Comment maximiser mes chances d’obtenir des missions ?', panel: 'panel6' ,content : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'},
    { name: 'Quels commissions prend BeAdvize sur mes prestations ?', panel: 'panel7',content : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.' },


]

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setColor(isExpanded ? panel : false);
  };
  return (<>
      {arr.map((item, index) =>{
          const{panel,name, content}=item;
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
            {content}
          </Typography>
        </AccordionDetails>
      </Accordion> )}
       )}
    </>
  );
}

export default Tab1;