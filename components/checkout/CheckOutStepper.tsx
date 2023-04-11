import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Stack } from '@mui/material';
import PersonalDataForm from './PersonalDataForm';
import DeliveryDataForm from './DeliveryDataForm';
import StepperNavigation from './StepperNavigation';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { ComicDetail } from '../cards/ComicDetail.types';
import CheckOutCard from '../cards/CheckOutCard';
import PaymentDataForm from './PaymentDataForm';



const defaultValues={
  activeStep: 0,
  handleBack: () => console.log(''), 
  handleNext: (data=undefined) => console.log(''),
}

export const FormContext = React.createContext(defaultValues);

type CheckoutDataType = {
  name: string,
  lastname: string,
  email:string,
  adress: string,
  apartment?:string,
  floor?: number,
  city: string,
  province: string,
  zipCode: string,
  cardNumber: number,
  ownerName: string,
  expirationDate: string,
  securityCode: number
}

export const CheckoutDataSchema=yup.object({
  name: yup.string().required('Name is required').min(3, 'The name should have at least 3 chars'),
  lastname: yup.string().required('Last name is required').min(2, 'The last name should have at least 2 chars'),
  email: yup.string().email('Email must has this format: email@whatever.com').required('email is required'),
  adress: yup.string().required('Adress is required').min(3, 'The adress should have at least 3 chars'),
  apartment: yup.string().optional().max(1, 'The Apartment should have just 1 char'),
  floor: yup.number().positive('Floor must be a positive number').integer('Floor must be an integer number').optional().max(3, 'The name should have at least 3 chars'),
  city: yup.string().required('City is required').min(3, 'The city should have at least 3 chars'),
  province: yup.string().required('Province is required').min(3, 'The Province should have at least 3 chars'),
  zipCode: yup.string().required('Zip code is required').min(3, 'The zip code should have at least 4 chars'),
  cardNumber: yup.number().positive().integer().min(16, 'The Card number must exactly 16 digits').required('Card number is required'),
  ownerName: yup.string().required('Owner name is required').min(3,'Owner name must has at least 3 characters'),
  expirationDate: yup.string().required('Expiration date is required').min(10, 'The date must has this format 01-01-2025'),
  securityCode: yup.number().positive().integer().min(3, 'Security code mas has 3 digits')
}).required();


export type ComicCheckoutProps = {
  comic: ComicDetail
}

/* ############################### */
export default function CheckOutStepper({comic}:ComicCheckoutProps) {

  const {title, thumbnail, price} = comic
  const [activeStep, setActiveStep] = React.useState<number>(0);


  const methods = useForm<CheckoutDataType>({
    mode: 'onChange', 
    resolver: yupResolver(CheckoutDataSchema),
    defaultValues:{
        name:'Sandra',
        lastname:'Divan',
        email: 'sandrapaludivan@gmail.com',
        adress: 'Pepe 222' ,
        apartment: 'C',
        floor: undefined,
        city: 'Córdoba',
        province: 'Córdoba',
        zipCode: '6400',
        cardNumber: 2222333344445555,
        ownerName: 'Sandra',
        expirationDate: '22-08-2025',
        securityCode: 333
        
    }
})
  
  

  const handleNext = (data:CheckoutDataType | undefined) => {
    
    if(activeStep === 2){

      console.log('tengo que hacer el post de la data');
      console.log(data)
    }else{
      
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      console.log('desde <2: ' + activeStep );

    };
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <Stack sx={{ width: '80%', alignContent: 'center', margin:'0 auto', mt:6, flexDirection:'row'} }>
      
      <Stack sx={{ width: '70%'}}>

        <Stepper activeStep={activeStep} sx={{mb:4}}>

          <Step>
            <StepLabel>Personal data</StepLabel>
          </Step>
        
          <Step>
            <StepLabel>Delivery data</StepLabel>
          </Step>
        
          <Step>
            <StepLabel>Payment data</StepLabel>
          </Step>
        
        </Stepper>

        
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleNext)}>

            {activeStep === 0 && <PersonalDataForm/>}
            {activeStep === 1 && <DeliveryDataForm/>}
            {activeStep === 2 && <PaymentDataForm/>}

            <FormContext.Provider value={{activeStep, handleBack, handleNext}}>
            <StepperNavigation/>
          </FormContext.Provider> 

          </form>
        </FormProvider>

      </Stack>


      <CheckOutCard title={title} thumbnail={thumbnail} price={price}/>
      
      
      
      
    </Stack>
  )
}