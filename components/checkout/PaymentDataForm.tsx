
import { Stack } from '@mui/material'
import React, { FC } from 'react'
import ControlledTextInput from './ControlledTextInput'



const PaymentDataForm: FC = () => {
 

  return (
        <Stack>
            <h4>Step 3</h4>

                <ControlledTextInput name='cardNumber'  label='Card number'/>
                <ControlledTextInput name='ownerName'  label='Owner name'/>
                <ControlledTextInput name='expirationDate'  label='Expiration date'/>
                <ControlledTextInput name='securityCode'  label='Security Code' type='password'/>
                
        </Stack>
      )
}

export default PaymentDataForm