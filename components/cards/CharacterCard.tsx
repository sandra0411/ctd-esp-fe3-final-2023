import React, { FC } from 'react'
import { Box, Button, Container, Paper, Typography } from '@mui/material'
import styled from "@emotion/styled"
import useMediaQuery from '@mui/material/useMediaQuery';


import { Character } from './Character.types'

export type CharacterCardProps = {
    character: Character
}


const CharacterCard:FC<CharacterCardProps> = ({character}) => {

    const matches500 = useMediaQuery('(min-width:500px)');

    const {
        id,
        name,
        description,
        thumbnail,
         } = character;


    const Img = styled('img')({
        width: matches500? 300 : 250,
        height: '100%',
        objectFit: 'contain',
        objectPosition: 'center',
        
        
    })

  return (
    <Container sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>

            <Paper
                sx={{
                    display: 'flex',
                    flexDirection: matches500? 'row' : 'column',
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
                    gap:5,                    
                    height:'fit-content',
                    }}>
                    <Typography variant='h4' textAlign={'center'} sx={{fontSize: matches500? '34px': '30px'}}>{name}</Typography>
                    <Typography variant='body1' textAlign={'center'} sx={{mr:2, mb: matches500? '' : 2}}>{description? description: 'Description coming soon'}</Typography>
                    
                </Box>


            </Paper>
            

        </Container>
  )
}

export default CharacterCard