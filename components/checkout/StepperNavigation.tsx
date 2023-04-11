import { Box, Button } from '@mui/material'
import React, { FC, useContext } from 'react'
import { FormContext } from './CheckOutStepper'


type StepperNavigationType={
    activeStep:number,
    handleBack: ()=> void,
    handleNext: ()=> void
    
}

const StepperNavigation = () => {
  
    const { activeStep, handleBack, handleNext} = useContext<StepperNavigationType>(FormContext);

  
    return (
    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              /* color="inherit" */
              variant='outlined'
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, fontWeight:'700', mb:2}}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            
          
            <Button  
            variant='outlined' 
            disabled={activeStep === 3}
            onClick={activeStep ===2 ? undefined : handleNext}
            type={activeStep ===2 ? 'submit' : 'button'}
            sx={{fontWeight:'700', mb:2}}>
              {activeStep === 2 ? 'Finish' : 'Next'}
            </Button>
          </Box>
  )
}

export default StepperNavigation