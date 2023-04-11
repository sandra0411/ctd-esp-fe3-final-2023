
import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


type CheckOutCardProps={
    title: string,
    price: number,
    thumbnail:{path:string, extension:string}
}


const CheckOutCard: FC<CheckOutCardProps>= ({title, price, thumbnail}) => {
  return (

    
    <Card sx={{ maxWidth: '20%', height: "80%", margin: "0 auto" }}>
    
      <CardMedia
        sx={{ height: 200,  
        '& . MuiCardMedia-img': {
            objectFit:"cover",
          }, mt:2 }}
        image={`${thumbnail.path}.${thumbnail.extension}`}
        title={title}

      />
      <CardContent sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant='h6' color={'red'} sx={{justifyContent:'center'}}>
            {`U$S ${price}`}
        </Typography>
      </CardContent>
    </Card>
    
  );
}

export default CheckOutCard;