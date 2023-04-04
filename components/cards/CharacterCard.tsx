import React, { FC } from 'react'
import { Box, Button, Container, Paper, Typography } from '@mui/material'
import styled from "@emotion/styled"


import { Character } from './Character.types'

export type CharacterCardProps = {
    character: Character
}


const CharacterCard:FC<CharacterCardProps> = ({character}) => {

    const {
        id,
        name,
        description,
        thumbnail,
         } = character;


    const Img = styled('img')({
        width: 300,
        height: '100%',
        objectFit: 'contain',
        objectPosition: 'center',
        
        
    })

  return (
    <Container sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>

            <Paper
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    overflow: 'hidden',
                    mt: 5,
                    mb:1
                }}>

                <Img src={`${thumbnail.path}.${thumbnail.extension}`} alt={`Image of ${name} character`} />

                <Box sx={{ 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection:'column', 
                    alignItems:'center',
                    /* justifyContent:'flex-between',  */
                    gap:5,                    
                    height:'fit-content',
                    }}>
                    <Typography variant='h4'>{name}</Typography>
                    <Typography variant='body1' sx={{mr:2}}>{description? description: 'Description coming soon'}</Typography>
                    
                </Box>


            </Paper>
            

        </Container>
  )
}

export default CharacterCard