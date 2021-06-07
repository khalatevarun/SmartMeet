import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { faqs } from '../../data/data';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
  },
  heading: {
    fontFamily: 'Open Sans, sans-serif',
  },
}));

const Accordions = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const items = faqs.map((faq, i) => (
    <div className="Single-Item">
      <Accordion
        expanded={expanded === 'panel' + (i + 1)}
        onChange={handleChange('panel' + (i + 1))}
      >
        <AccordionSummary
          expandIcon={expanded === true ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel1bh-content"
          id={i}
        >
          <Typography className={classes.heading}>{faq.ques}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{faq.ans}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  ));

  return <div className={classes.root}>{items}</div>;
};

export default Accordions;
