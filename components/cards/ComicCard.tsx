

import React, { FC, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Router from 'next/router';



type ComicCardProps={
    id: number
    title: string,
    description: string,
    thumbnail:{path:string, extension:string},
}


const ComicCard: FC<ComicCardProps>= ({id, title, description, thumbnail}) => {
  
  const [hasStock, setHasStock] = React.useState<number>()

  React.useEffect(()=>{

    if (`${id}`.endsWith('0')) {
      setHasStock(0)
    } else {
      setHasStock(2)
    }

  }, [id])
    
  
  
  return (

    
    <Card sx={{ height: "100%", display:'flex', flexDirection: 'column', justifyContent:'space-between' }}>
    
      <CardMedia
        sx={{ height: 200,  
        '& . MuiCardMedia-img': {
            objectFit:"cover",
          }, }}
        image={`${thumbnail.path}.${thumbnail.extension}`}
        title={title}

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
          {title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {description? description: 'Description coming soon'}
        </Typography> */}
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
        <Button 
        size="small" 
        onClick={()=> Router.push(`/comics/${id}`)}
        sx={{fontWeight:600}}
        >
          Ver detalle
        </Button>
        <Button 
        size="small" 
        onClick={()=>Router.push(`/checkout?comicId=${id}`)}
        disabled={hasStock===0? true: false}
        sx={{fontWeight:600, color:hasStock===0? 'gray' : ''}}
        >
          Comprar
        </Button>
      </CardActions>
    </Card>
    
  );
}

export default ComicCard;