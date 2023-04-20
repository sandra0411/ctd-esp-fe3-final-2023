import React, { FC } from 'react'
import { Box, Button, Container, Paper, Typography } from '@mui/material'
import styled from "@emotion/styled"
import AsocCharacterList from 'dh-marvel/components/list/AsocCharacterList'
import {ComicDetail} from 'dh-marvel/components/cards/ComicDetail.types'
import  Router  from 'next/router'
import useMediaQuery from '@mui/material/useMediaQuery';




export type ComicDetailCardProps = {
    comic: ComicDetail
}


const ComicDetailCard:FC<ComicDetailCardProps> = ({comic}) => {
    
    
    const matches = useMediaQuery('(min-width:700px)');

    const {
        id,
        title,
        description,
        thumbnail,
        price,
        oldPrice,
        stock,
        characters } = comic;


    const Img = styled('img')({
        width: matches? 300: 250,
        height: '100%',
        objectFit: 'contain',
        objectPosition: 'center',
        
        
    })

    const goToProduct= ()=>{
        document.cookie = "Product="+title+';max-age='+60*1
        Router.push(`/checkout?comicId=${id}`)
    }

  return (
    <Container sx={{
                   display:'flex', 
                   flexDirection:'column', 
                   alignItems:'center', 
                   justifyContent:'center'
                }}>

            <Paper
                sx={{
                    display: 'flex',
                    flexDirection: matches? 'row' : 'column',
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
                    justifyContent:'space-around', 
                    gap:3,                    
                    height:'100%',
                    
                    }}>
                    <Typography variant='h5' textAlign={'center'} maxWidth={300} sx={{fontSize: matches? 24: 20, fontWeight: 600, mt:2}}>{title}</Typography>
                    <Typography variant='body1' textAlign={'justify'} maxWidth={300} sx={{ml: matches? 0: 2, mr: matches? 0: 2}}>{description? description: 'Description coming soon'}</Typography>
                    <Button variant='contained' 
                    sx={{width:'50%', alignSelf:'center', mb: 2}}
                    disabled={stock===0? true : false}
                    onClick={goToProduct}
                    > {stock===0? 'Sin Stock': 'Comprar' }</Button>
                </Box>

                <Box sx={{ mr: 2, minWidth:'15%', display:'flex', flexDirection: 'column' ,alignItems:'center' }}>
                    <Typography variant='body1'>Before</Typography>
                    <Typography variant='h6'><del> {`U$S ${oldPrice}`}</del> </Typography>
                    <Typography variant='body1'>Now!!</Typography>
                    <Typography variant='h6' color={'red'} sx={{mb:matches? '' : '2', fontWeight: 600}}>{`U$S ${price}`} </Typography>
                </Box>

            </Paper>
            
            {characters.items.length>0 && <AsocCharacterList characters={characters.items}/>}
            

        </Container>
  )
}

export default ComicDetailCard