import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Alert, Snackbar, Stack, Typography } from '@mui/material';
import PersonalDataForm from './PersonalDataForm';
import DeliveryDataForm from './DeliveryDataForm';
import StepperNavigation from './StepperNavigation';
import { FormProvider, useForm } from 'react-hook-form';
import { CheckoutDataSchema } from './Schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { ComicDetail } from '../cards/ComicDetail.types';
import CheckOutCard from '../cards/CheckOutCard';
import PaymentDataForm from './PaymentDataForm';
import {useRouter} from 'next/router';
import { CheckoutInput, CheckoutDataType } from 'dh-marvel/features/checkout/checkout.types';
import useMediaQuery from '@mui/material/useMediaQuery';
import useConfirmation from '../../hooks/useConfirmation';




const defaultValues={
  activeStep: 0,
  handleBack: () => console.log(''), 
  handleNext: () => console.log(''),
}

export const FormContext = React.createContext(defaultValues);

export type ComicCheckoutProps = {
  comic: ComicDetail
}

/* ############################### */
export default function CheckOutStepper({comic}:ComicCheckoutProps) {

  const matches = useMediaQuery('(min-width:700px)');

  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [open, setOpen] = React.useState(false)
  const [openMessage, setOpenMessage] = React.useState(false)
  const [errorState, setErrorState]= React.useState({type:'', message:''})
  const { setConfirmData } = useConfirmation();


  const router= useRouter();

  const methods = useForm<CheckoutDataType>({
    mode: 'onChange', 
    resolver: yupResolver(CheckoutDataSchema),
    defaultValues:{
        name:'Sandra',
        lastname:'Divan',
        email: 'sandra@gmail.com',
        adress: 'Av. Irigoyen 524' ,
        apartment: 'C',
        floor: undefined,
        city: 'Córdoba',
        province: 'Córdoba',
        zipCode: '6400',
        cardNumber: '4242424242424242',
        ownerName: 'Sandra',
        expirationDate: '22-08-2025',
        securityCode: '333'
        
    }
  })

  
  

if (!comic) {

  if (typeof window !== 'undefined') {
    router.push('/');
  }
  return (

    <Typography variant='h4' align='center' width={'90%'} color={'red'}>Error: You need to select a comic to buy it</Typography>
  
  );
}

const {title, thumbnail, price} = comic



const sendData = async(orderData:CheckoutInput)=>{


  const response= await fetch('/api/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(orderData)
  })

  if(!response.ok){
    
    let result = await response.json()
    setErrorState({...errorState, message: result.message, type: result.error})
    setOpen(true)
    
  }else{

    setErrorState({...errorState, message: '', type: ''})
    let result = await response.json()

    setTimeout(()=>{

      router.push('/confirmation')
      setConfirmData(result.data)
    }, 1000)
    
  }


} 

  const onSubmitData = (data:CheckoutDataType) => {

      const buyOrder: CheckoutInput= {
        customer: {
            name: data.name ,
            lastname: data.lastname ,
            email: data.email,
            address: {
                address1:data.adress ,
                address2: data.apartment,
                city: data.city ,
                state: data.province,
                zipCode:data.zipCode ,
            }
        },
        card: {
            number: data.cardNumber,
            cvc: data.securityCode,
            expDate: data.expirationDate,
            nameOnCard: data.ownerName ,
        },
        order: {
            name: title,
            image: thumbnail.path+'.'+thumbnail.extension,
            price: price,
        }
    }
    
    sendData(buyOrder)
    
    
  
  
  }
  
  const schemaValid= () => {

    return CheckoutDataSchema.isValidSync(methods.getValues())
  }

  const isValid= schemaValid()
    

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleClose =()=>{
    setOpen(false)
  }
  const handleCloseMessage =()=>{
    setOpen(false)
  }

 

  return (

    
    <Stack sx={{ width: '80%', alignContent: 'center', alignItems: 'center' , margin:'0 auto', mt:6, flexDirection: matches? 'row': 'column-reverse'} }>
      
      <Stack sx={{ width: matches? '70%' : '90%'}}>

        
        <Stepper activeStep={activeStep} sx={{mb:4}} orientation= {matches? 'horizontal' :'vertical'}>

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
          <form onSubmit={methods.handleSubmit(onSubmitData)}>

            {activeStep === 0 && <PersonalDataForm/>}
            {activeStep === 1 && <DeliveryDataForm/>}
            {activeStep === 2 && <PaymentDataForm/>}
            {activeStep === 3 && <Typography mb={2} color={errorState.type || !isValid ?'red':'green'} sx={{align:'center', fontSize: !isValid? 25: 20}}>
              
            {
            isValid?
            errorState.type? `Ups! An error of type ${errorState.type} has occurred, please check the uploaded data. Thanks!` : 'Processing Order...'
            : 'Please go back and complete all mandatory fields to continue!!!'
            }
            
            </Typography>}


          <FormContext.Provider value={{activeStep, handleBack, handleNext}}>
            <StepperNavigation/>
          </FormContext.Provider> 

          </form>
        </FormProvider>

      </Stack>


      <CheckOutCard title={title} thumbnail={thumbnail} price={price}/>

      <Snackbar anchorOrigin={{vertical:'bottom', horizontal: 'center'}} open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {errorState.message}
      </Alert>
      </Snackbar>

      <Snackbar anchorOrigin={{vertical:'bottom', horizontal: 'center'}} open={openMessage} autoHideDuration={6000} onClose={handleCloseMessage}>
      <Alert onClose={handleCloseMessage} severity="error" sx={{ width: '100%' }}>
        Please complete all the mandatory fields
      </Alert>
      </Snackbar>
      
      
    </Stack>
  )
}