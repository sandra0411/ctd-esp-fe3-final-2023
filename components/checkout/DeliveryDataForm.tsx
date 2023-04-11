
import { Stack } from '@mui/material'
import React, { FC } from 'react'
import ControlledTextInput from './ControlledTextInput'


const DeliveryDataForm: FC = () => {
 
    

  return (
        <Stack>
            <h4>Step 2</h4>

                <ControlledTextInput name='adress'  label='Adress'/>
                <ControlledTextInput name='apartment'  label='Apartment'/>
                <ControlledTextInput name='floor'  label='Floor'/>
                <ControlledTextInput name='city'  label='City'/>
                <ControlledTextInput name='province'  label='Province'/>
                <ControlledTextInput name='zipCode'  label='Zip code'/>
                
        </Stack>
      )
}

export default DeliveryDataForm