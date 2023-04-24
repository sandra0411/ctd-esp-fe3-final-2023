import { GetStaticProps, NextPage } from 'next'
import React from 'react'
//import {faqsData} from '../../components/faqs/faqsData'
import {faqsData} from 'dh-marvel/components/faqs/faqsData'
//import AccordionComp from '../../components/accordion/AccordionComp'
import AccordionComp from 'dh-marvel/components/accordion/AccordionComp'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery';



type Faq = {
  id: number,
  question: string,
  answer: string
}

export const getStaticProps: GetStaticProps = ()=>{
  
const faq:Faq[] = faqsData

return{
  props:{
    faq
  }
}

}

type FaqProps = {
  faq: Faq[]
}

const Faqs:NextPage<FaqProps> = ({faq}) => {

  const matchesTablet = useMediaQuery('(min-width:600px)');

  return (
    
    <Container sx={{
                    marginTop:5, 
                    display: 'flex', 
                    flexDirection:'column', 
                    justifyContent:'start',
                    }}>

      <Typography 
      variant="h1" 
      component="h2" 
      textAlign={'center'}
      sx={{
        fontSize:{ xs: 25, sm: 45, md: 50 }, 
        mb:5, 
        color: 'Gray', 
        alignSelf:'center',
        fontWeight:{ xs: 600, sm: 400}
      }}>
        Frequently Asked Questions
      </Typography>

      {faq.map(q => <AccordionComp key={q.id} title={q.question} text={q.answer}/>)}
      


    </Container>
  )
}

export default Faqs