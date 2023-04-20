import React, { FC } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider } from '@mui/material';


type AccordionProps ={
  title: string,
  text: string
}

const AccordionCharacters:FC<AccordionProps> = ({title, text}) => {
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {text}
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
         <Divider sx={{mb:2}}/>
          <Typography>
            {text}
          </Typography>
        </AccordionDetails>
        <Divider/>
      </Accordion>
  )
}

export default AccordionCharacters