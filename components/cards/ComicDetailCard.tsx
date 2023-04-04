import React, { FC } from 'react'
import { Box, Button, Container, Paper, Typography } from '@mui/material'
import styled from "@emotion/styled"
import AsocCharacterList from 'dh-marvel/components/list/AsocCharacterList'
import {ComicDetail} from 'dh-marvel/components/cards/ComicDetail.types'


export type ComicDetailCardProps = {
    comic: ComicDetail
}


const ComicDetailCard:FC<ComicDetailCardProps> = ({comic}) => {

    const {
        title,
        description,
        thumbnail,
        price,
        oldPrice,
        stock,
        characters } = comic;


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

                <Img src={`${thumbnail.path}.${thumbnail.extension}`} alt={`Image of ${title} comic`} />

                <Box sx={{ 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection:'column', 
                    alignItems:'center',
                    /* justifyContent:'flex-between',  */
                    gap:5,                    
                    height:'fit-content',
                    }}>
                    <Typography variant='h4'>{title}</Typography>
                    <Typography variant='body1'>{description}</Typography>
                    <Button variant='contained' 
                    sx={{width:'50%', alignSelf:'center'}}
                    disabled={stock===0? true : false}
                    > {stock===0? 'Sin Stock': 'Comprar' }</Button>
                </Box>

                <Box sx={{ mr: 2, minWidth:'15%', display:'flex', flexDirection: 'column' ,alignItems:'center' }}>
                    <Typography variant='body1'>Before</Typography>
                    <Typography variant='h6'><del> {`U$S ${oldPrice}`}</del> </Typography>
                    <Typography variant='body1'>Now!!</Typography>
                    <Typography variant='h6' color={'red'}>{`U$S ${price}`}</Typography>
                </Box>

            </Paper>
            
            {characters.items.length>0 && <AsocCharacterList characters={characters.items}/>}
            

        </Container>
  )
}

export default ComicDetailCard