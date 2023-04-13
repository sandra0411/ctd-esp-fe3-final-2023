
import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Paper } from '@mui/material';
import styled from "@emotion/styled"


type PurchaseCardProps={
    title: string,
    thumbnail:string
}


const PurchaseCard: FC<PurchaseCardProps>= ({title, thumbnail}) => {

    const Img = styled('img')({
        width: 260,
        height: '95%',
        objectFit: 'contain',
        objectPosition: 'center',
        
        
        
    })


  return (

        <Paper elevation={6}
        sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            overflow: 'hidden',
            mt: 4,
            mb:3,
            maxWidth:'50%',
            pl:1
        }}>

        <Img src={thumbnail} alt={`Image of ${title} comic`} />

        <Box sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            flexDirection:'column', 
            alignItems:'center',
            gap:5,                    
            height:'fit-content',
            }}>
        <Typography variant='h5' sx={{mr:2}}>{title}</Typography>
            
            
        </Box>
        </Paper>
    )
  
}

export default PurchaseCard;