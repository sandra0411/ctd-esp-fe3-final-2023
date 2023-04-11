

import React, { FC } from 'react';
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
    thumbnail:{path:string, extension:string}
}


const ComicCard: FC<ComicCardProps>= ({id, title, description, thumbnail}) => {
  return (

    
    <Card sx={{ maxWidth: 345, height: "100%", margin: "0 auto" }}>
    
      <CardMedia
        sx={{ height: 200,  
        '& . MuiCardMedia-img': {
            objectFit:"cover",
          }, }}
        image={`${thumbnail.path}.${thumbnail.extension}`}
        title={title}

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description? description: 'Description coming soon'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=> Router.push(`/comics/${id}`)}>Ver detalle</Button>
        <Button size="small" onClick={()=>Router.push(`/checkout?comicId=${id}`)}>Comprar</Button>
      </CardActions>
    </Card>
    
  );
}

export default ComicCard;