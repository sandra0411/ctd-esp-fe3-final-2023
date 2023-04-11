import { Stack } from '@mui/material'
import React, { FC } from 'react'
import ControlledTextInput from './ControlledTextInput'



const PersonalDataForm: FC = () => {
 

  return (
        <Stack>
            <h4>Step 1</h4>

                <ControlledTextInput name='name'  label='Name'/>
                <ControlledTextInput name='lastname'  label='Lastname'/>
                <ControlledTextInput name='email'  label='Email'/>
                
        </Stack>
      )
}

export default PersonalDataForm