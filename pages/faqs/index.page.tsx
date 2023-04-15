import { GetStaticProps, NextPage } from 'next'
import React from 'react'
//import {faqsData} from '../../components/faqs/faqsData'
import {faqsData} from 'dh-marvel/components/faqs/faqsData'
//import AccordionComp from '../../components/accordion/AccordionComp'
import AccordionComp from 'dh-marvel/components/accordion/AccordionComp'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'


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


  return (
    
    <Container sx={{marginTop:10}}>

      <Typography variant="h1" component="h2" sx={{fontSize:50, mb:5, color: 'Gray' 
      }}>
        Preguntas Frecuentes
      </Typography>

      {faq.map(q => <AccordionComp key={q.id} title={q.question} text={q.answer}/>)}

    </Container>
  )
}

export default Faqs