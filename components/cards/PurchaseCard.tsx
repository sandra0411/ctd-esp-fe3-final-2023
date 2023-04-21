
import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Paper } from '@mui/material';
import styled from "@emotion/styled"
import useMediaQuery from '@mui/material/useMediaQuery';



type PurchaseCardProps = {
    title: string,
    thumbnail: string
}


const PurchaseCard: FC<PurchaseCardProps> = ({ title, thumbnail }) => {

    const matches400 = useMediaQuery('(min-width:400px)');
    const matches700 = useMediaQuery('(min-width:700px)');
    const matches900 = useMediaQuery('(min-width:900px)');
    const min400max700= useMediaQuery('(min-width:400px) and (max-width: 700px)');
    

    const Img = styled('img')({
        width: matches700? 200 : '90%',
        height: matches700? '95%': '75%',
        objectFit: matches700? 'contain' : 'fill',
        objectPosition: 'center',    
       
    })


    return (

        <Paper elevation={6}
            sx={{
                display: 'flex',
                flexDirection: matches700? 'row' : 'column',
                alignItems: 'center',
                gap: 2,
                overflow: 'hidden',
                mt: 5,
                mb: 7,
                maxWidth: matches700? '50%': '80%',
                width:matches900? '40%' : matches700? '50%': '80%',
                height:matches700? '50%' : '400px' ,
                pl: matches700? 1 : 0,
                pt: matches700? 0: 2
                
            }}>

            <Img src={thumbnail} alt={`Image of ${title} comic`} />

            <Box sx={{
                flexGrow: matches700? 1 : 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
                height: matches700? 'fit-content': '10%',
                pt:3,
                
            }}>
                <Typography variant='h5' textAlign={'center'} sx={{  fontSize: matches700? '24px' : min400max700? '18px' : '17px', mr: matches400? 2 : 0 }}>{title}</Typography>


            </Box>
        </Paper>
    )

}

export default PurchaseCard;