
import React from 'react'
import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout'
import { useRouter } from 'next/router'
import { Paper, Stack, Typography } from '@mui/material';
import PurchaseCard from 'dh-marvel/components/cards/PurchaseCard';

const ConfirmationPage = () => {

const router= useRouter();
const {purchaseInfo}=router?.query
const info = purchaseInfo ? JSON.parse(purchaseInfo as string) : null;


if (!info) {

    if (typeof window !== 'undefined') {
      router.push('/');
    }
    return (
  
      <Typography variant='h4' align='center' width={'90%'} color={'red'}>Error: You need to select a comic to buy it</Typography>
    
    );
}

const customer= info.data.customer
const order= info.data.order
const card= info.data.card
  
return (

    <Stack direction={'column'} sx={{justifyContent:'space-between', alignItems:'center', width:'100%'}}>

        <Paper elevation={3} sx={{alignSelf:'center', backgroundColor:'green'}}>
        <Typography variant='h5' align='center' sx={{color:'white', mb:2, mt:2, mr:3, ml:3 }} >Enjoy your purchase!</Typography>
        </Paper>

        <PurchaseCard title={order.name} thumbnail={order.image}/>

        <Stack sx={{mb:2}}>
            <Typography variant='h6' sx={{fontWeight:'800', mb:1}}>{`${customer.name} ${customer.lastname}`}</Typography>
            <Typography variant='h6' sx={{mb:1}}>We will send you this great comic to <strong>{`${customer.address.address1}`}</strong> {`city of 
            ${customer.address.city} (${customer.address.state}).`}</Typography>
            <Typography> You paid <strong>{`U$S${order.price}`}</strong> </Typography>
            
        </Stack>
        
    </Stack>
  )
}


(ConfirmationPage as any).Layout = LayoutCheckout;
export default ConfirmationPage