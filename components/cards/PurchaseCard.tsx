
import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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
            pl:2
        }}>

        <Img src={thumbnail} alt={`Image of ${title} comic`} />

        <Box sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            flexDirection:'column', 
            alignItems:'center',
            /* justifyContent:'flex-between',  */
            gap:5,                    
            height:'fit-content',
            }}>
        <Typography variant='h5' sx={{mr:2}}>{title}</Typography>
            
            
        </Box>
        </Paper>
    )
    
    {/* <Card sx={{ maxWidth: '20%', height: "50%", margin: "0 auto" }}>
    
      <CardMedia
        sx={{ height: 200,  
        '& . MuiCardMedia-img': {
            objectFit:"cover",
          }, mt:2 }}
        image={thumbnail}
        title={title}

      />
      <CardContent sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card> */}
    
  
}

export default PurchaseCard;