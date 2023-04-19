
import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

type CheckOutCardProps={
    title: string,
    price: number,
    thumbnail:{path:string, extension:string}
}


const CheckOutCard: FC<CheckOutCardProps>= ({title, price, thumbnail}) => {

  const matches = useMediaQuery('(min-width:700px)');


  return (

    
    <Card sx={{ maxWidth: matches?'20%': '90%', width: matches? '20%': '90%', height: "80%", margin: matches? "0 auto":'', mb: matches? 0: 5 }}>
    
      <CardMedia
        sx={{ height: 200,  
        '& . MuiCardMedia-img': {
            objectFit:"cover",
          }, mt:2 }}
        image={`${thumbnail.path}.${thumbnail.extension}`}
        title={title}

      />
      <CardContent sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
        <Typography gutterBottom variant="h6" component="div" textAlign={'center'}>
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