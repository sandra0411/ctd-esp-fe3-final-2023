
import React from 'react'
import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout'
import { useRouter } from 'next/router'
import { Paper, Stack, Typography } from '@mui/material';
import PurchaseCard from 'dh-marvel/components/cards/PurchaseCard';
import useMediaQuery from '@mui/material/useMediaQuery';
import useConfirmation from '../../hooks/useConfirmation';
import { IConfirmationContext } from 'dh-marvel/components/context/ConfirmationDataProvider';


const ConfirmationPage = () => {

const matches700 = useMediaQuery('(min-width:700px)');
const matches900 = useMediaQuery('(min-width:900px)');


const router= useRouter();
const {confirmData}:IConfirmationContext = useConfirmation()
console.log(confirmData)
const info = confirmData;



if (info?.customer.name==='') {

    if (typeof window !== 'undefined') {
      router.push('/');
    }
    return (
  
      <Typography variant='h4' align='center' width={'90%'} color={'red'}>Error: You need to select a comic to buy it</Typography>
    
    );
}

const customer= info.customer
const order= info.order
const card= info.card

return (

    <Stack direction={'column'} sx={{justifyContent:'center', alignItems:'center', width:'100%'}}>

        <Paper elevation={3} sx={{alignSelf:'center', backgroundColor:'green', mt:3, minWidth:'20%' }}>
        <Typography variant='h5' align='center' sx={{
          color:'white',  margin: matches700? '16px 24px' : '10px 20px'/* mb:2, mt:2, mr:3, ml:3 */, fontSize: matches900? 24: matches700? 20: 15 }} >Enjoy your purchase!</Typography>
        </Paper>

        <PurchaseCard title={order.name} thumbnail={order.image}/>

        <Stack justifyContent={'center'} sx={{mb:2, width: matches700? '50%' : '80%', border: '2px solid green', borderRadius: '5px'}}>
            <Typography variant='h6' textAlign={'center'} sx={{fontWeight:'800', mb:1}}>{`${customer.name} ${customer.lastname}`}</Typography>
            <Typography variant='h6' textAlign={'center'} sx={{mb:1}}>We will send you this great comic to the next address:  <strong>{`${customer.address.address1}`}</strong> {`city of 
            ${customer.address.city} (${customer.address.state}).`}</Typography>
            <Typography textAlign={'center'}> You paid <strong>{`U$S ${order.price}`}</strong> </Typography>
            
        </Stack>
        
    </Stack>
  )
}


(ConfirmationPage as any).Layout = LayoutCheckout;
export default ConfirmationPage